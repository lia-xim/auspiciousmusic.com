import { access, readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distRoot = path.join(projectRoot, 'dist');
const failures = [];
const indexableMode = process.env.SITE_INDEXABLE === 'true';
const routeRegistry = JSON.parse(await readFile(path.join(projectRoot, 'src', 'data', 'migrated-pages.json'), 'utf8'));
const vercelConfig = JSON.parse(await readFile(path.join(projectRoot, 'vercel.json'), 'utf8'));
const rewrittenRoutes = new Set((vercelConfig.rewrites ?? []).map((rewrite) => rewrite.source));
const permanentlyNoindex = new Set([
  '/404/',
  '/410/',
  ...routeRegistry
    .filter((record) => record.internal || record.indexable === false)
    .map((record) => record.route),
]);

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map((entry) => {
    const full = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  }));
  return nested.flat();
}

function targetFor(urlPath) {
  const pathname = decodeURIComponent(urlPath.split(/[?#]/, 1)[0]);
  if (pathname === '/') return path.join(distRoot, 'index.html');
  if (pathname === '/404/' || pathname === '/404') return path.join(distRoot, '404.html');
  if (/\.[a-z0-9]+$/i.test(pathname)) return path.join(distRoot, ...pathname.split('/').filter(Boolean));
  return path.join(distRoot, ...pathname.split('/').filter(Boolean), 'index.html');
}

async function exists(file) {
  try { await access(file); return true; } catch { return false; }
}

const files = await walk(distRoot);
const htmlFiles = files.filter((file) => file.endsWith('.html'));

for (const file of htmlFiles) {
  const relative = path.relative(distRoot, file).replaceAll('\\', '/');
  const html = await readFile(file, 'utf8');
  const canonicalHref = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i)?.[1] ?? '';
  const canonicalRoute = canonicalHref ? new URL(canonicalHref).pathname : '';
  const mustRemainNoindex = permanentlyNoindex.has(canonicalRoute) || canonicalRoute.startsWith('/internal/');
  const expectedRobots = indexableMode && !mustRemainNoindex
    ? 'index,follow,max-image-preview:large'
    : 'noindex,nofollow,noarchive';
  const isRedirect = /<meta[^>]+http-equiv=[\"']refresh[\"']/i.test(html);
  const h1Count = (html.match(/<h1\b/gi) ?? []).length;
  if (isRedirect) continue;
  if (!/<title>[^<]+<\/title>/i.test(html)) failures.push(`${relative}: missing title`);
  if (!/<meta\s+name="description"\s+content="[^"]+"/i.test(html)) failures.push(`${relative}: missing description`);
  if (!html.includes(`<meta name="robots" content="${expectedRobots}"`)) {
    failures.push(`${relative}: expected robots ${expectedRobots}`);
  }
  if (!/<main\b/i.test(html)) failures.push(`${relative}: missing main landmark`);
  if (h1Count !== 1) failures.push(`${relative}: expected one h1, found ${h1Count}`);
  if (/href="#"/i.test(html)) failures.push(`${relative}: dead # link`);
  if (/href="[^"#?]+\.html(?:[?#][^"]*)?"/i.test(html)) failures.push(`${relative}: legacy .html link remains`);

  const ids = [...html.matchAll(/\sid="([^"]+)"/gi)].map((match) => match[1]);
  const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
  if (duplicates.length) failures.push(`${relative}: duplicate ids ${[...new Set(duplicates)].join(', ')}`);

  const references = [...html.matchAll(/\s(?:href|src)="(\/[^"]+)"/gi)].map((match) => match[1]);
  for (const reference of references) {
    if (reference.startsWith('//')) continue;
    const target = targetFor(reference);
    const referencePath = reference.split(/[?#]/, 1)[0];
    if (!(await exists(target)) && !rewrittenRoutes.has(referencePath)) failures.push(relative + ': missing local target ' + reference);
  }
}

if (failures.length) {
  console.error(`Built-site validation failed with ${failures.length} issue(s):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log(`Built-site validation passed: ${htmlFiles.length} HTML pages and ${files.length} output files checked.`);
}

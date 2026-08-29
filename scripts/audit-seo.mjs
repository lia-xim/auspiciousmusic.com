import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const site = 'https://www.auspiciousmusic.com';
const indexableMode = process.env.SITE_INDEXABLE === 'true';
const failures = [];
const warnings = [];
const indexPolicy = JSON.parse(await readFile(path.join(root, 'src/data/index-policy.json'), 'utf8'));

const vercelConfig = JSON.parse(await readFile(path.join(root, 'vercel.json'), 'utf8'));
const highLevelRouting = ['rewrites', 'redirects', 'headers', 'cleanUrls', 'trailingSlash']
  .filter((property) => property in vercelConfig);
if (Array.isArray(vercelConfig.routes) && highLevelRouting.length) {
  failures.push(`vercel.json: legacy routes cannot be mixed with ${highLevelRouting.join(', ')}`);
}

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map((entry) => {
    const target = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(target) : [target];
  }));
  return nested.flat();
}

function decode(value = '') {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

function match(html, pattern) {
  return decode(html.match(pattern)?.[1]?.trim() ?? '');
}

function canonicalPath(html) {
  const canonical = match(html, /<link\s+rel="canonical"\s+href="([^"]+)"/i);
  if (!canonical) return '';
  try { return new URL(canonical).pathname; } catch { return ''; }
}

function normalizeInternalHref(value) {
  if (!value.startsWith('/') || value.startsWith('//')) return null;
  const pathname = value.split(/[?#]/, 1)[0];
  if (!pathname || pathname.startsWith('/assets/')) return null;
  if (/\.(?:xml|txt|json|js|css|svg|png|jpe?g|webp|woff2?)$/i.test(pathname)) return null;
  return pathname.endsWith('/') ? pathname : `${pathname}/`;
}

function schemaNodes(html, route) {
  const nodes = [];
  for (const script of html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      const parsed = JSON.parse(script[1]);
      nodes.push(parsed);
      if (Array.isArray(parsed?.['@graph'])) nodes.push(...parsed['@graph']);
    } catch (error) {
      failures.push(`${route}: invalid JSON-LD (${error.message})`);
    }
  }
  return nodes;
}

const files = await walk(dist);
const htmlFiles = files.filter((file) => file.endsWith('.html'));
const sitemap = await readFile(path.join(dist, 'sitemap.xml'), 'utf8');
const sitemapEntries = [...sitemap.matchAll(/<url><loc>([^<]+)<\/loc>(?:<lastmod>([^<]+)<\/lastmod>)?<\/url>/g)]
  .map((entry) => ({ url: decode(entry[1]), lastmod: entry[2] }));
const publicRoutes = new Set(sitemapEntries.map((entry) => new URL(entry.url).pathname));
const searchRecords = JSON.parse(await readFile(path.join(root, 'public', 'search-index.json'), 'utf8'));
const searchRoutes = new Set(searchRecords.map((entry) => entry.route));

if (searchRoutes.size !== searchRecords.length) failures.push('search-index.json: duplicate routes');
for (const route of publicRoutes) if (!searchRoutes.has(route)) failures.push(`search-index.json: missing public route ${route}`);
for (const route of searchRoutes) if (!publicRoutes.has(route)) failures.push(`search-index.json: non-public route ${route}`);

if (publicRoutes.size !== sitemapEntries.length) failures.push('sitemap.xml: duplicate URLs');
for (const entry of sitemapEntries) {
  if (new URL(entry.url).origin !== site) failures.push(`sitemap.xml: foreign origin ${entry.url}`);
  if (entry.lastmod && !/^\d{4}-\d{2}-\d{2}$/.test(entry.lastmod)) failures.push(`sitemap.xml: invalid lastmod for ${entry.url}`);
}

const pages = new Map();
const titleOwners = new Map();
const descriptionOwners = new Map();

for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  const route = canonicalPath(html) || `/${path.relative(dist, file).replaceAll('\\', '/')}`;
  const isRedirect = /<meta[^>]+http-equiv=[\"']refresh[\"']/i.test(html);
  if (isRedirect) continue;
  const isPublic = publicRoutes.has(route);
  const title = match(html, /<title>([\s\S]*?)<\/title>/i);
  const description = match(html, /<meta\s+name="description"\s+content="([^"]*)"/i);
  const robots = match(html, /<meta\s+name="robots"\s+content="([^"]*)"/i);
  const canonical = match(html, /<link\s+rel="canonical"\s+href="([^"]+)"/i);
  const lang = match(html, /<html\s+lang="([^"]+)"/i);
  const ogType = match(html, /<meta\s+property="og:type"\s+content="([^"]+)"/i);
  const h1Count = [...html.matchAll(/<h1\b/gi)].length;
  const links = new Set([...html.matchAll(/<a\b[^>]*\shref="([^"]+)"/gi)]
    .map((entry) => normalizeInternalHref(decode(entry[1])))
    .filter(Boolean));
  const schemas = schemaNodes(html, route);

  pages.set(route, { html, title, description, robots, canonical, lang, ogType, h1Count, links, schemas, isPublic });

  if (!title) failures.push(`${route}: missing title`);
  if (!description) failures.push(`${route}: missing meta description`);
  if (!canonical || !canonical.startsWith(`${site}/`)) failures.push(`${route}: missing or foreign canonical`);
  if (!lang) failures.push(`${route}: missing html lang`);
  if (h1Count !== 1) failures.push(`${route}: expected one h1, found ${h1Count}`);
  if (!match(html, /<meta\s+property="og:title"\s+content="([^"]+)"/i)) failures.push(`${route}: missing og:title`);
  if (!match(html, /<meta\s+property="og:description"\s+content="([^"]+)"/i)) failures.push(`${route}: missing og:description`);
  if (!match(html, /<meta\s+property="og:image"\s+content="([^"]+)"/i)) failures.push(`${route}: missing og:image`);
  if (!match(html, /<meta\s+name="twitter:card"\s+content="([^"]+)"/i)) failures.push(`${route}: missing twitter card`);
  const remoteAssets = [
    ...html.matchAll(/<(?:script|img)\b[^>]+src="https?:\/\/[^\"]+"[^>]*>/gi),
    ...html.matchAll(/<link\b[^>]+rel="stylesheet"[^>]+href="https?:\/\/[^\"]+"[^>]*>/gi),
  ].map((entry) => entry[0]);
  const unexpectedRemoteAssets = remoteAssets.filter((tag) => !/<script\b[^>]+src="https:\/\/analytics\.contextter\.com\/script\.js"/i.test(tag));
  if (unexpectedRemoteAssets.length) {
    failures.push(`${route}: remote executable, image or stylesheet asset detected`);
  }
  if (/\b(?:TODO|FIXME|lorem ipsum|your email|example\.com)\b/i.test(html)) failures.push(`${route}: unresolved placeholder marker`);

  for (const image of html.matchAll(/<img\b[^>]*>/gi)) {
    const tag = image[0];
    if (!/\salt="[^"]*"/i.test(tag)) failures.push(`${route}: image without alt attribute`);
    if (!/\swidth="\d+"/i.test(tag) || !/\sheight="\d+"/i.test(tag)) failures.push(`${route}: image without intrinsic dimensions`);
  }

  if (isPublic) {
    const expectedCanonical = new URL(route, site).href;
    if (canonical !== expectedCanonical) failures.push(`${route}: canonical ${canonical} does not match ${expectedCanonical}`);
    if (indexableMode && robots !== 'index,follow,max-image-preview:large') failures.push(`${route}: public page is not indexable in indexable mode`);
    if (!indexableMode && robots !== 'noindex,nofollow,noarchive') failures.push(`${route}: preview page is not noindex`);
    if (titleOwners.has(title)) failures.push(`${route}: duplicate title also used by ${titleOwners.get(title)}`);
    else titleOwners.set(title, route);
    if (descriptionOwners.has(description)) failures.push(`${route}: duplicate description also used by ${descriptionOwners.get(description)}`);
    else descriptionOwners.set(description, route);

    const types = new Set(schemas.flatMap((node) => Array.isArray(node?.['@type']) ? node['@type'] : [node?.['@type']]).filter(Boolean));
    if (!types.has('Person') || !types.has('WebSite')) failures.push(`${route}: missing Person or WebSite identity schema`);
    if (ogType === 'article') {
      if (!types.has('Article')) failures.push(`${route}: article page missing Article schema`);
      if (!types.has('BreadcrumbList')) failures.push(`${route}: article page missing BreadcrumbList schema`);
      const articleSchema = schemas.find((node) => node?.['@type'] === 'Article');
      if (articleSchema?.datePublished) {
        const sitemapEntry = sitemapEntries.find((entry) => new URL(entry.url).pathname === route);
        if (!sitemapEntry?.lastmod) failures.push(`${route}: dated article missing sitemap lastmod`);
      }
    }

    const visibleText = html
      .replace(/<script[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style[\s\S]*?<\/style>/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    const wordCount = visibleText.split(' ').filter(Boolean).length;
    if (wordCount < 120) warnings.push(`${route}: only ${wordCount} visible words; verify that the page role justifies a short page`);
    if (title.length > 70) warnings.push(`${route}: long title (${title.length} characters); inspect SERP readability`);
    if (description.length > 170) warnings.push(`${route}: long description (${description.length} characters); inspect snippet readability`);
  } else if (robots !== 'noindex,nofollow,noarchive') {
    failures.push(`${route}: non-sitemap page is not explicitly noindex`);
  }
}

for (const route of publicRoutes) {
  if (!pages.has(route)) failures.push(`${route}: sitemap URL has no built HTML page`);
}

const distances = new Map([['/', 0]]);
const queue = ['/'];
while (queue.length) {
  const from = queue.shift();
  const nextDistance = distances.get(from) + 1;
  for (const target of pages.get(from)?.links ?? []) {
    if (!publicRoutes.has(target) || distances.has(target)) continue;
    distances.set(target, nextDistance);
    queue.push(target);
  }
}

for (const route of publicRoutes) {
  if (!distances.has(route)) failures.push(`${route}: orphaned from the homepage link graph`);
  else if (distances.get(route) > 3) failures.push(`${route}: requires ${distances.get(route)} internal clicks from the homepage`);
}

const robotsText = await readFile(path.join(dist, 'robots.txt'), 'utf8');
if (indexableMode && !/^User-agent: \*\r?\nAllow: \/\r?\nSitemap: /m.test(robotsText)) failures.push('robots.txt: indexable mode is not crawlable with sitemap declaration');
if (!indexableMode && !/^User-agent: \*\r?\nDisallow: \/\r?\n?$/m.test(robotsText)) failures.push('robots.txt: preview mode does not disallow crawling');

const rss = await readFile(path.join(dist, 'rss.xml'), 'utf8');
if (!rss.includes('rel="self"') || !rss.includes('<language>de</language>')) {
  failures.push('rss.xml: missing self link or language');
}
for (const route of indexPolicy.noindexArchivePaths) {
  if (rss.includes(`<link>${new URL(route, site).href}</link>`)) failures.push(`rss.xml: noindex route included: ${route}`);
}
if (rss.includes('<pubDate>') && !rss.includes('<lastBuildDate>')) {
  failures.push('rss.xml: dated items require lastBuildDate');
}

if (warnings.length) {
  console.warn(`SEO audit warnings (${warnings.length}):`);
  for (const warning of warnings) console.warn(`- ${warning}`);
}

if (failures.length) {
  console.error(`SEO audit failed with ${failures.length} issue(s):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log(`SEO audit passed in ${indexableMode ? 'indexable' : 'preview'} mode: ${publicRoutes.size} public routes, ${htmlFiles.length} HTML files, maximum click depth ${Math.max(...distances.values())}.`);
}

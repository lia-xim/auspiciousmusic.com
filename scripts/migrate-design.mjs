import { copyFile, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

if (process.env.ALLOW_DESTRUCTIVE_DESIGN_MIGRATION !== 'true') {
  throw new Error('This one-time design migration overwrites hand-edited editorial pages. Set ALLOW_DESTRUCTIVE_DESIGN_MIGRATION=true only when intentionally rebuilding from design-source.');
}

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sourceRoot = process.env.DESIGN_SOURCE
  ? path.resolve(process.env.DESIGN_SOURCE)
  : path.join(projectRoot, 'design-source');

const pages = {
  'index.html': '/',
  'hub-production.html': '/music-production/',
  'hub-ableton.html': '/ableton/',
  'hub-sound-design.html': '/sound-design/',
  'hub-recording.html': '/recording/',
  'hub-music-for-media.html': '/music-for-media/',
  'resources.html': '/resources/',
  'tools.html': '/resources/tools/',
  'glossary.html': '/resources/glossary/',
  'download.html': '/download/',
  'legacy-spy-guitar.html': '/legacy/the-spy-guitar/',
  'legacy-bang-my-twister.html': '/legacy/bang-my-twister/',
  'article-midi-fighter-twister.html': '/ableton/midi-fighter-twister-review/',
  'article-sampled-instrument.html': '/sound-design/sampled-instruments/building-a-sampled-instrument/',
  'article-record-viola.html': '/recording/acoustic-instruments/recording-viola-at-home/',
  'about.html': '/about/',
  'history-relaunch.html': '/about/history-and-relaunch/',
  'editorial-policy.html': '/about/editorial-policy/',
  'authors.html': '/authors/',
  'kontakt.html': '/contact/',
  'impressum.html': '/legal/',
  'datenschutz.html': '/privacy/',
  'barrierefreiheit.html': '/accessibility/',
  'sitemap.html': '/sitemap/',
  'tool-delay-calculator.html': '/resources/tools/delay-and-reverb/',
  'tool-note-frequency.html': '/resources/tools/note-frequency/',
  'tool-sample-pitch.html': '/resources/tools/sample-pitch/',
  'error-404.html': '/404/',
  'error-410.html': '/410/',
};

const internalDesignScreens = {
  'concept.html': '/internal/design-concept/',
  'mobile.html': '/internal/mobile-matrix/',
};

const allRoutes = { ...pages, ...internalDesignScreens };

function getMatch(input, expression, label, filename) {
  const match = input.match(expression);
  if (!match) throw new Error(`Could not find ${label} in ${filename}`);
  return match[1].trim();
}

function decodeEntities(value) {
  return value
    .replaceAll('&amp;', '&')
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'")
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>');
}

function routeToFile(route) {
  if (route === '/') return path.join(projectRoot, 'src', 'pages', 'index.astro');
  if (route === '/404/') return path.join(projectRoot, 'src', 'pages', '404.astro');
  if (route === '/410/') return path.join(projectRoot, 'src', 'pages', '410.astro');
  const segments = route.split('/').filter(Boolean);
  return path.join(projectRoot, 'src', 'pages', ...segments, 'index.astro');
}

function rewriteLinks(value) {
  let output = value;
  for (const [filename, route] of Object.entries(allRoutes)) {
    output = output.replaceAll(`href="${filename}`, `href="${route}`);
    output = output.replaceAll(`src="${filename}`, `src="${route}`);
  }
  output = output
    .replaceAll('href="#"', 'href="/publishing-roadmap/"')
    .replaceAll('src="assets/', 'src="/assets/')
    .replaceAll('href="assets/', 'href="/assets/');
  return output;
}

function escapeTemplateLiteral(value) {
  return value.replaceAll('`', '\\`').replaceAll('${', '\\${');
}

async function migratePage(filename, route, internal = false) {
  const source = await readFile(path.join(sourceRoot, filename), 'utf8');
  const title = decodeEntities(getMatch(source, /<title>([\s\S]*?)<\/title>/i, 'title', filename));
  const descriptionMatch = source.match(/<meta\s+name="description"\s+content="([^"]*)"\s*\/?\s*>/i);
  const description = decodeEntities(descriptionMatch?.[1] ?? 'Independent music production and creative audio publication.');
  const main = rewriteLinks(getMatch(source, /(<main\b[\s\S]*?<\/main>)/i, 'main', filename));
  const styles = [...source.matchAll(/<style>([\s\S]*?)<\/style>/gi)].map((match) => match[1].trim()).join('\n\n');
  const inlineScripts = [...source.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi)]
    .map((match) => match[1].trim())
    .filter(Boolean);
  const hasStringField = source.includes('assets/string.js');
  const lang = /<html[^>]*\blang="([^"]+)"/i.exec(source)?.[1] ?? 'en';
  const outputFile = routeToFile(route);

  await mkdir(path.dirname(outputFile), { recursive: true });

  const body = `---
import BaseLayout from '${path.relative(path.dirname(outputFile), path.join(projectRoot, 'src', 'layouts', 'BaseLayout.astro')).replaceAll('\\', '/')}';
---

<BaseLayout
  title={${JSON.stringify(title)}}
  description={${JSON.stringify(description)}}
  canonicalPath={${JSON.stringify(route)}}
  lang={${JSON.stringify(lang)}}
  noindex={${internal || route === '/404/' || route === '/410/'}}
  loadStringField={${hasStringField}}
>
${styles ? `<Fragment slot="head">\n<style is:global>\n${styles}\n</style>\n</Fragment>\n` : ''}
${main}
${inlineScripts.length ? `<Fragment slot="scripts">\n${inlineScripts.map((script) => `<script is:inline>\n${escapeTemplateLiteral(script)}\n</script>`).join('\n')}\n</Fragment>\n` : ''}</BaseLayout>`;

  await writeFile(outputFile, body, 'utf8');

  const h1 = source.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1]
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim() ?? title;

  return { route, title, description, h1, internal };
}

async function copyAssets() {
  const assets = ['favicon.svg', 'brand-mark.svg', 'hero-portrait.png', 'story-viola-back.png', 'string.js', 'system.css', 'inter.css', 'inter-latin-opsz-normal.woff2', 'FONT-LICENSE-INTER.txt'];
  const target = path.join(projectRoot, 'public', 'assets');
  await mkdir(target, { recursive: true });
  await Promise.all(assets.map((asset) => copyFile(path.join(sourceRoot, 'assets', asset), path.join(target, asset))));

  const motionSource = await readFile(path.join(sourceRoot, 'assets', 'motion.js'), 'utf8');
  const hardenedMotion = motionSource
    .replace(
      '  if (sheet && openBtn && closeBtn) {\n    var setSheet',
      '  if (sheet && openBtn && closeBtn) {\n    sheet.inert = true;\n    var setSheet',
    )
    .replace(
      '      sheet.dataset.open = String(open);\n      openBtn.setAttribute("aria-expanded", String(open));',
      '      sheet.dataset.open = String(open);\n      sheet.setAttribute("aria-hidden", String(!open));\n      sheet.inert = !open;\n      openBtn.setAttribute("aria-expanded", String(open));',
    )
    .replace(
      '      (open ? closeBtn : openBtn).focus();',
      '      if (open) window.setTimeout(function () { closeBtn.focus({ preventScroll: true }); }, 50);\n      else openBtn.focus();',
    );
  await writeFile(path.join(target, 'motion.js'), hardenedMotion, 'utf8');
}

await mkdir(path.join(projectRoot, 'src', 'pages'), { recursive: true });
for (const route of Object.values(allRoutes)) {
  await rm(routeToFile(route), { force: true });
}
await copyAssets();

const records = [];
for (const [filename, route] of Object.entries(pages)) {
  records.push(await migratePage(filename, route, false));
}
for (const [filename, route] of Object.entries(internalDesignScreens)) {
  records.push(await migratePage(filename, route, true));
}

const searchable = records.filter(({ internal, route }) => !internal && !['/404/', '/410/'].includes(route));
await writeFile(path.join(projectRoot, 'public', 'search-index.json'), `${JSON.stringify(searchable, null, 2)}\n`, 'utf8');
await mkdir(path.join(projectRoot, 'src', 'data'), { recursive: true });
await writeFile(path.join(projectRoot, 'src', 'data', 'migrated-pages.json'), `${JSON.stringify(records, null, 2)}\n`, 'utf8');

console.log(`Migrated ${records.length} design screens from ${sourceRoot}`);

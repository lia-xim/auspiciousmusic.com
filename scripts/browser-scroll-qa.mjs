import { createRequire } from 'node:module';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const bundledNodeRoot = process.env.CODEX_BUNDLED_NODE_ROOT
  ?? 'C:\\Users\\matth\\.cache\\codex-runtimes\\codex-primary-runtime\\dependencies\\node';
const require = createRequire(path.join(bundledNodeRoot, 'package.json'));
const { chromium } = require('playwright');
const baseUrl = process.env.QA_BASE_URL ?? 'http://127.0.0.1:4321';
const outputDirectory = process.env.QA_OUTPUT_DIR
  ? path.resolve(process.env.QA_OUTPUT_DIR)
  : path.join(projectRoot, 'docs', 'qa');
await mkdir(outputDirectory, { recursive: true });

const browser = await chromium.launch({
  headless: true,
  executablePath: process.env.QA_BROWSER_PATH ?? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
});
const failures = [];
const observations = [];

async function scrollThrough(page) {
  await page.evaluate(async () => {
    const step = Math.max(320, Math.floor(window.innerHeight * 0.72));
    for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
      window.scrollTo({ top: y, behavior: 'instant' });
      await new Promise((resolve) => setTimeout(resolve, 90));
    }
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'instant' });
    await new Promise((resolve) => setTimeout(resolve, 250));
  });
}

for (const [label, viewport] of [
  ['desktop', { width: 1440, height: 900 }],
  ['mobile', { width: 390, height: 844 }],
]) {
  const page = await browser.newPage({ viewport, deviceScaleFactor: 1 });
  const errors = [];
  page.on('pageerror', (error) => errors.push(`pageerror: ${error.message}`));
  page.on('console', (message) => { if (message.type() === 'error') errors.push(`console: ${message.text()}`); });
  await page.goto(baseUrl, { waitUntil: 'networkidle' });
  await scrollThrough(page);
  const metrics = await page.evaluate(() => ({
    overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
    revealCount: document.querySelectorAll('[data-reveal]').length,
    hiddenRevealCount: document.querySelectorAll('[data-reveal].will-reveal').length,
    visiblePortalCount: [...document.querySelectorAll('.portal')].filter((element) => getComputedStyle(element).opacity !== '0').length,
    visibleArticleCount: [...document.querySelectorAll('.index li')].filter((element) => getComputedStyle(element).opacity !== '0').length,
  }));
  if (metrics.overflow > 1 || metrics.hiddenRevealCount > 0 || metrics.visiblePortalCount < 4 || metrics.visibleArticleCount < 4) {
    failures.push(`homepage ${label}: unexpected metrics ${JSON.stringify(metrics)}`);
  }
  for (const error of errors) failures.push(`homepage ${label}: ${error}`);
  await page.screenshot({ path: path.join(outputDirectory, `implementation-home-${label}-scrolled.png`), fullPage: true });
  observations.push({ page: 'homepage', viewport: label, ...metrics });
  await page.close();
}

const articlePage = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 });
const articleErrors = [];
articlePage.on('pageerror', (error) => articleErrors.push(`pageerror: ${error.message}`));
articlePage.on('console', (message) => { if (message.type() === 'error') articleErrors.push(`console: ${message.text()}`); });
await articlePage.goto(`${baseUrl}/music-production/ableton-project-handoff/`, { waitUntil: 'networkidle' });
await scrollThrough(articlePage);
const articleMetrics = await articlePage.evaluate(() => ({
  overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
  articleCount: document.querySelectorAll('article').length,
  headingCount: document.querySelectorAll('article h2').length,
  sourceLinkCount: document.querySelectorAll('article a[href^="http"]').length,
  bodyTextLength: document.querySelector('article')?.innerText.trim().length ?? 0,
}));
if (articleMetrics.overflow > 1 || articleMetrics.articleCount !== 1 || articleMetrics.headingCount < 2 || articleMetrics.sourceLinkCount < 1 || articleMetrics.bodyTextLength < 1500) {
  failures.push(`article mobile: unexpected metrics ${JSON.stringify(articleMetrics)}`);
}
for (const error of articleErrors) failures.push(`article mobile: ${error}`);
await articlePage.screenshot({ path: path.join(outputDirectory, 'implementation-article-mobile.png'), fullPage: true });
observations.push({ page: 'article', viewport: 'mobile', ...articleMetrics });
await articlePage.close();

await browser.close();
const report = { baseUrl, checkedAt: new Date().toISOString(), observations, failures };
await writeFile(path.join(outputDirectory, 'browser-scroll-qa.json'), `${JSON.stringify(report, null, 2)}\n`, 'utf8');

if (failures.length) {
  console.error(`Scroll QA failed with ${failures.length} issue(s):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exitCode = 1;
} else {
  console.log('Scroll QA passed: homepage reveals on desktop/mobile and the representative article remains readable on mobile.');
}

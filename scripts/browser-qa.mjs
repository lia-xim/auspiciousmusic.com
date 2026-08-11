import { createRequire } from 'node:module';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const bundledNodeRoot = process.env.CODEX_BUNDLED_NODE_ROOT
  ?? 'C:\\Users\\matth\\.cache\\codex-runtimes\\codex-primary-runtime\\dependencies\\node';
const require = createRequire(path.join(bundledNodeRoot, 'package.json'));
const { chromium } = require('playwright');

const implementation = process.env.QA_BASE_URL ?? 'http://127.0.0.1:4321';
const reference = process.env.QA_REFERENCE_URL;
const outputDirectory = process.env.QA_OUTPUT_DIR
  ? path.resolve(process.env.QA_OUTPUT_DIR)
  : path.join(projectRoot, 'docs', 'qa');
await mkdir(outputDirectory, { recursive: true });

const migrated = JSON.parse(await readFile(path.join(projectRoot, 'src', 'data', 'migrated-pages.json'), 'utf8'));
const routes = [
  ...migrated.map((record) => record.route === '/404/' ? '/definitely-not-a-real-page/' : record.route),
  '/search/',
  '/publishing-roadmap/',
];

const failures = [];
const observations = [];
const browser = await chromium.launch({
  headless: true,
  executablePath: process.env.QA_BROWSER_PATH ?? 'C:\\\\Program Files\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe',
});

async function checkRoute(route, viewport) {
  const page = await browser.newPage({ viewport: viewport, deviceScaleFactor: 1 });
  const runtimeErrors = [];
  const badResponses = [];
  page.on('response', (result) => {
    if (result.status() >= 400) badResponses.push(result.status() + ' ' + result.url());
  });
  page.on('pageerror', (error) => runtimeErrors.push(`pageerror: ${error.message}`));
  page.on('console', (message) => {
    if (message.type() === 'error') runtimeErrors.push(`console: ${message.text()}`);
  });

  const response = await page.goto(new URL(route, implementation).href, { waitUntil: 'networkidle' });
  const status = response?.status() ?? 0;
  const metrics = await page.evaluate(() => ({
    title: document.title,
    mainCount: document.querySelectorAll('main').length,
    h1Count: document.querySelectorAll('h1').length,
    bodyText: document.body.innerText.trim().length,
    overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
    overlay: Boolean(document.querySelector('vite-error-overlay, [data-vite-error-overlay]')),
    lang: document.documentElement.lang,
    duplicateIds: [...document.querySelectorAll('[id]')]
      .map((element) => element.id)
      .filter((id, index, ids) => id && ids.indexOf(id) !== index),
    unlabeledControls: [...document.querySelectorAll('input:not([type=\"hidden\"]), select, textarea')]
      .filter((element) => !element.closest('label')
        && !document.querySelector(`label[for=\"${CSS.escape(element.id)}\"]`)
        && !element.getAttribute('aria-label')
        && !element.getAttribute('aria-labelledby')
        && !element.getAttribute('title'))
      .length,
    namelessInteractive: [...document.querySelectorAll('a[href], button')]
      .filter((element) => !element.textContent?.trim()
        && !element.getAttribute('aria-label')
        && !element.getAttribute('aria-labelledby')
        && !element.getAttribute('title')
        && !element.querySelector('img[alt]'))
      .length,
    headingSkips: (() => {
      const levels = [...document.querySelectorAll('main h1, main h2, main h3, main h4, main h5, main h6')]
        .map((element) => Number(element.tagName.slice(1)));
      return levels.filter((level, index) => index > 0 && level > levels[index - 1] + 1).length;
    })(),
  }));

  if (route === '/definitely-not-a-real-page/' ? status !== 404 : status >= 400) failures.push(`${route}: HTTP ${status}`);
  if (!metrics.title) failures.push(`${route}: blank title`);
  if (metrics.mainCount !== 1) failures.push(`${route}: ${metrics.mainCount} main landmarks`);
  if (metrics.h1Count !== 1) failures.push(`${route}: ${metrics.h1Count} h1 elements`);
  if (metrics.bodyText < 80) failures.push(`${route}: unexpectedly little content`);
  if (metrics.overflow > 1) failures.push(`${route}: horizontal overflow ${metrics.overflow}px at ${viewport.width}px`);
  if (metrics.overlay) failures.push(`${route}: framework error overlay present`);
  if (!metrics.lang) failures.push(`${route}: html lang is missing`);
  if (metrics.duplicateIds.length) failures.push(`${route}: duplicate ids ${metrics.duplicateIds.join(', ')}`);
  if (metrics.unlabeledControls) failures.push(`${route}: ${metrics.unlabeledControls} unlabeled form controls`);
  if (metrics.namelessInteractive) failures.push(`${route}: ${metrics.namelessInteractive} unnamed links or buttons`);
  if (metrics.headingSkips) failures.push(`${route}: ${metrics.headingSkips} heading-level skips inside main`);
  for (const error of runtimeErrors) {
    if (route === '/definitely-not-a-real-page/' && /404/.test(error)) continue;
    failures.push(`${route}: ${error}`);
  }
  for (const badResponse of badResponses) {
    if (route === '/definitely-not-a-real-page/' && badResponse === '404 ' + new URL(route, implementation).href) continue;
    failures.push(`${route}: response ${badResponse}`);
  }
  observations.push({ route, status, title: metrics.title, viewport: `${viewport.width}x${viewport.height}` });
  await page.close();
}

for (const route of routes) await checkRoute(route, { width: 1440, height: 900 });
for (const route of routes) await checkRoute(route, { width: 390, height: 844 });
const reflowRoutes = [
  '/',
  '/music-production/ableton-project-handoff/',
  '/resources/tools/delay-and-reverb/',
  '/legal/',
];
for (const width of [640, 320]) {
  for (const route of reflowRoutes) await checkRoute(route, { width, height: 900 });
}

const interactionPage = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 });
const interactionErrors = [];
interactionPage.on('pageerror', (error) => interactionErrors.push(error.message));
interactionPage.on('console', (message) => { if (message.type() === 'error') interactionErrors.push(message.text()); });

await interactionPage.goto(implementation, { waitUntil: 'networkidle' });
await interactionPage.locator('[data-sheet-open]').click();
await interactionPage.waitForTimeout(100);
const openedMenu = await interactionPage.locator('[data-sheet]').evaluate((element) => ({
  open: element.getAttribute('data-open'),
  hidden: element.getAttribute('aria-hidden'),
  focus: document.activeElement === document.querySelector('[data-sheet-close]'),
  activeTag: document.activeElement?.tagName,
  activeLabel: document.activeElement?.getAttribute('aria-label'),
  sheetInert: element.inert,
  closeDisplay: getComputedStyle(document.querySelector('[data-sheet-close]')).display,
  closeVisibility: getComputedStyle(document.querySelector('[data-sheet-close]')).visibility,
}));
if (openedMenu.open !== 'true' || openedMenu.hidden !== 'false' || !openedMenu.focus) failures.push('mobile menu: open state or focus is incorrect ' + JSON.stringify(openedMenu));
await interactionPage.locator('[data-sheet-close]').click();
await interactionPage.waitForTimeout(500);
const closedMenu = await interactionPage.locator('[data-sheet]').evaluate((element) => ({
  open: element.getAttribute('data-open'),
  hidden: element.getAttribute('aria-hidden'),
}));
if (closedMenu.open !== 'false' || closedMenu.hidden !== 'true') failures.push('mobile menu: close state is incorrect');

const menuButton = interactionPage.locator('[data-sheet-open]');
await menuButton.focus();
await menuButton.press('Enter');
await interactionPage.waitForTimeout(100);
await interactionPage.keyboard.press('Escape');
await interactionPage.waitForTimeout(100);
const keyboardClosedMenu = await interactionPage.locator('[data-sheet]').evaluate((element) => ({
  open: element.getAttribute('data-open'),
  hidden: element.getAttribute('aria-hidden'),
  focusReturned: document.activeElement === document.querySelector('[data-sheet-open]'),
}));
if (keyboardClosedMenu.open !== 'false' || keyboardClosedMenu.hidden !== 'true' || !keyboardClosedMenu.focusReturned) {
  failures.push('mobile menu: keyboard open, Escape close or focus restoration is incorrect ' + JSON.stringify(keyboardClosedMenu));
}

const canvas = interactionPage.locator('[data-string]');
if (await canvas.count() !== 1) failures.push('homepage: interactive string canvas missing');
await interactionPage.locator('[data-string-pluck]').click();
await interactionPage.screenshot({ path: path.join(outputDirectory, 'implementation-home-mobile.png'), fullPage: true });
await interactionPage.close();

const searchPage = await browser.newPage({ viewport: { width: 1280, height: 800 } });
await searchPage.goto(`${implementation}/search/?q=viola`, { waitUntil: 'networkidle' });
await searchPage.waitForFunction(() => document.querySelectorAll('[data-search-results] li').length > 0);
const searchText = await searchPage.locator('[data-search-results]').innerText();
if (!/viola/i.test(searchText)) failures.push('search: viola query produced no relevant result');
await searchPage.close();

const calculatorPage = await browser.newPage({ viewport: { width: 1280, height: 800 } });
await calculatorPage.goto(`${implementation}/resources/tools/delay-and-reverb/`, { waitUntil: 'networkidle' });
await calculatorPage.locator('#bpm').fill('100');
await calculatorPage.locator('#bpm').dispatchEvent('input');
const calculator = await calculatorPage.evaluate(() => ({
  quarter: document.querySelector('#ro-quarter')?.textContent,
  rows: document.querySelectorAll('#rows tr').length,
}));
if (calculator.quarter !== '600.0' || calculator.rows !== 7) failures.push(`delay calculator: unexpected result ${JSON.stringify(calculator)}`);
await calculatorPage.close();

const mediaPage = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 });
const mediaErrors = [];
mediaPage.on('pageerror', (error) => mediaErrors.push(`pageerror: ${error.message}`));
mediaPage.on('console', (message) => { if (message.type() === 'error') mediaErrors.push(`console: ${message.text()}`); });
await mediaPage.emulateMedia({ forcedColors: 'active', reducedMotion: 'reduce' });
await mediaPage.goto(implementation, { waitUntil: 'networkidle' });
await mediaPage.locator('[data-sheet-open]').focus();
const mediaState = await mediaPage.evaluate(() => ({
  forcedColors: matchMedia('(forced-colors: active)').matches,
  reducedMotion: matchMedia('(prefers-reduced-motion: reduce)').matches,
  overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
  focusedControl: document.activeElement?.getAttribute('aria-label'),
  bodyText: document.body.innerText.trim().length,
}));
if (!mediaState.forcedColors || !mediaState.reducedMotion || mediaState.overflow > 1 || mediaState.focusedControl !== 'Open menu' || mediaState.bodyText < 80) {
  failures.push(`forced-colors/reduced-motion: unexpected state ${JSON.stringify(mediaState)}`);
}
for (const error of mediaErrors) failures.push(`forced-colors/reduced-motion: ${error}`);
await mediaPage.close();

const desktopPage = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
await desktopPage.goto(implementation, { waitUntil: 'networkidle' });
await desktopPage.screenshot({ path: path.join(outputDirectory, 'implementation-home-desktop.png'), fullPage: true });
await desktopPage.close();

if (reference) {
  const referencePage = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
  await referencePage.goto(reference, { waitUntil: 'networkidle' });
  await referencePage.screenshot({ path: path.join(outputDirectory, 'reference-home-desktop.png'), fullPage: true });
  await referencePage.close();
}

for (const error of interactionErrors) failures.push(`interaction runtime: ${error}`);
await browser.close();

const report = {
  implementation,
  reference,
  checkedAt: new Date().toISOString(),
  uniqueRoutesChecked: routes.length,
  routeViewportChecks: observations.length,
  observations,
  failures,
};
await writeFile(path.join(outputDirectory, 'browser-qa.json'), `${JSON.stringify(report, null, 2)}\n`, 'utf8');

if (failures.length) {
  console.error(`Browser QA failed with ${failures.length} issue(s):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exitCode = 1;
} else {
  console.log(`Browser QA passed: ${routes.length} routes across desktop/mobile plus 200%/400% reflow checks (${observations.length} route-viewport checks), keyboard/mobile navigation, forced-colors/reduced-motion, site search, canvas trigger, and delay calculator.`);
}

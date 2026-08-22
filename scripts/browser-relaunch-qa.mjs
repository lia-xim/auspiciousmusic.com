import { createRequire } from 'node:module';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const bundledNodeRoot = process.env.CODEX_BUNDLED_NODE_ROOT
  ?? 'C:\\Users\\matth\\.cache\\codex-runtimes\\codex-primary-runtime\\dependencies\\node';
const require = createRequire(path.join(bundledNodeRoot, 'package.json'));
const { chromium } = require('playwright');
const baseUrl = process.env.QA_BASE_URL ?? 'http://localhost:4321';
const output = path.join(root, 'docs', 'qa');
await mkdir(output, { recursive: true });

const browser = await chromium.launch({
  headless: true,
  executablePath: process.env.QA_BROWSER_PATH ?? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
});
const failures = [];
const observations = [];
const routes = ['/', '/viola/', '/viola/viola-oder-violine/', '/eventmusik/', '/eventmusik/live-streicher-draussen/', '/eventmusik/hochzeit/', '/eventmusik/trauerfeier/', '/eventmusik/firmenevent/', '/repertoire/', '/recording/', '/tools/eventmusik-planer/', '/tools/wunschstueck-check/', '/tools/streicheraufnahme-briefing/', '/resources/', '/download/', '/services/'];

async function inspect(route, viewport) {
  const page = await browser.newPage({ viewport, deviceScaleFactor: 1 });
  const errors = [];
  page.on('pageerror', (error) => errors.push(`pageerror: ${error.message}`));
  page.on('console', (message) => { if (message.type() === 'error') errors.push(`console: ${message.text()}`); });
  const response = await page.goto(new URL(route, baseUrl).href, { waitUntil: 'networkidle' });
  const metrics = await page.evaluate(() => ({
    title: document.title,
    h1: document.querySelectorAll('h1').length,
    main: document.querySelectorAll('main').length,
    overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
    bodyLength: document.body.innerText.trim().length,
    emptyLinks: [...document.querySelectorAll('a[href], button')].filter((node) => !node.textContent?.trim() && !node.getAttribute('aria-label') && !node.getAttribute('aria-labelledby')).length,
    unlabeledFields: [...document.querySelectorAll('input:not([type="hidden"]), select, textarea')].filter((node) => !node.closest('label') && !document.querySelector(`label[for="${CSS.escape(node.id)}"]`) && !node.getAttribute('aria-label')).length,
  }));
  if ((response?.status() ?? 500) >= 400) failures.push(`${route} at ${viewport.width}px: HTTP ${response?.status()}`);
  if (!metrics.title || metrics.h1 !== 1 || metrics.main !== 1 || metrics.bodyLength < 120) failures.push(`${route} at ${viewport.width}px: structural metrics ${JSON.stringify(metrics)}`);
  if (metrics.overflow > 1) failures.push(`${route} at ${viewport.width}px: horizontal overflow ${metrics.overflow}px`);
  if (metrics.emptyLinks || metrics.unlabeledFields) failures.push(`${route} at ${viewport.width}px: accessibility metrics ${JSON.stringify(metrics)}`);
  for (const error of errors) failures.push(`${route} at ${viewport.width}px: ${error}`);
  observations.push({ route, viewport: `${viewport.width}x${viewport.height}`, ...metrics });
  await page.close();
}

for (const viewport of [{ width: 1440, height: 900 }, { width: 390, height: 844 }, { width: 320, height: 900 }]) {
  for (const route of routes) await inspect(route, viewport);
}

const planner = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 });
const plannerErrors = [];
planner.on('pageerror', (error) => plannerErrors.push(error.message));
planner.on('console', (message) => { if (message.type() === 'error') plannerErrors.push(message.text()); });
await planner.goto(`${baseUrl}/tools/eventmusik-planer/`, { waitUntil: 'networkidle' });
await planner.locator('[data-planner] button[type="submit"]').click();
const requiredError = await planner.locator('[data-planner-error]').innerText();
if (!/anlass|setting|spielmoment|occasion|moment/i.test(requiredError)) failures.push(`planner validation: unexpected required error "${requiredError}"`);
await planner.locator('#occasion').selectOption('hochzeit');
await planner.locator('#setting').selectOption('indoor');
await planner.locator('#place').fill('Cologne');
await planner.locator('input[name="moments"]').nth(1).check();
await planner.locator('#references').fill('Warm, lyrical references; final titles still open.');
await planner.locator('#cue').fill('Ceremony coordinator');
await planner.locator('[data-planner] button[type="submit"]').click();
const generated = await planner.locator('[data-brief-output]').innerText();
const buttons = await planner.evaluate(() => ({
  copyDisabled: document.querySelector('[data-copy]')?.disabled,
  emailDisabled: document.querySelector('[data-email]')?.disabled,
  downloadDisabled: document.querySelector('[data-download]')?.disabled,
  state: document.querySelector('[data-brief-state]')?.textContent,
  overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
}));
for (const expected of ['Hochzeit / Trauung', 'Innenraum', 'Ceremony coordinator', 'Einzug', 'Auszug', 'A Thousand Years']) {
  if (!generated.includes(expected)) failures.push(`planner generation: missing ${expected} in output: ${generated}`);
}
if (buttons.copyDisabled || buttons.downloadDisabled || buttons.emailDisabled || buttons.overflow > 1 || !/bereit|ready/i.test(buttons.state ?? '')) failures.push(`planner generation: unexpected state ${JSON.stringify(buttons)}`);
await planner.screenshot({ path: path.join(output, 'relaunch-planner-mobile.png'), fullPage: true });
await planner.locator('[data-reset]').click();
if (await planner.locator('#occasion').inputValue()) failures.push('planner reset: occasion was not cleared');
await planner.locator('[data-language="en"]').click();
if ((await planner.locator('#occasion option[value="hochzeit"]').innerText()) !== 'Wedding ceremony') failures.push('planner language toggle: English occasion label missing');
for (const error of plannerErrors) failures.push(`planner runtime: ${error}`);
await planner.close();
const songCheck = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 });
const songErrors = [];
songCheck.on('pageerror', (error) => songErrors.push(error.message));
songCheck.on('console', (message) => { if (message.type() === 'error') songErrors.push(message.text()); });
await songCheck.goto(baseUrl + '/tools/wunschstueck-check/', { waitUntil: 'networkidle' });
await songCheck.locator('[data-song-form] button[type="submit"]').click();
if (!/pflichtfelder/i.test(await songCheck.locator('[data-song-error]').innerText())) failures.push('requested-song validation: required-field message missing');
await songCheck.locator('#song-name').fill('Perfect');
await songCheck.locator('#song-version').fill('Ed Sheeran, studio version');
await songCheck.locator('#song-occasion').selectOption('hochzeit');
await songCheck.locator('#song-moment').selectOption({ index: 1 });
await songCheck.locator('#song-recognition').selectOption('melody');
await songCheck.locator('#song-melody').selectOption('yes');
await songCheck.locator('#song-length').selectOption('flexible');
await songCheck.locator('#song-lead').selectOption('long');
await songCheck.locator('#song-meaning').fill('Die Melodie verbindet das Paar mit einem gemeinsamen Moment.');
await songCheck.locator('[data-song-form] button[type="submit"]').click();
const songOutput = await songCheck.locator('[data-song-result]').innerText();
for (const expected of ['Bereit für die musikalische Prüfung', 'Perfect', 'Ed Sheeran', 'Start- und Endsignal']) {
  if (!songOutput.includes(expected)) failures.push('requested-song generation: missing ' + expected);
}
const songState = await songCheck.evaluate(() => ({
  copyDisabled: document.querySelector('[data-copy]')?.disabled,
  emailDisabled: document.querySelector('[data-email]')?.disabled,
  plannerHref: document.querySelector('[data-planner-link]')?.getAttribute('href'),
  overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
}));
if (songState.copyDisabled || songState.emailDisabled || songState.plannerHref !== '/tools/eventmusik-planer/?anlass=hochzeit' || songState.overflow > 1) failures.push('requested-song state: ' + JSON.stringify(songState));
await songCheck.locator('[data-reset]').click();
if (await songCheck.locator('#song-name').inputValue()) failures.push('requested-song reset: title was not cleared');
for (const error of songErrors) failures.push('requested-song runtime: ' + error);
await songCheck.close();

const recordingBrief = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 });
const recordingErrors = [];
recordingBrief.on('pageerror', (error) => recordingErrors.push(error.message));
recordingBrief.on('console', (message) => { if (message.type() === 'error') recordingErrors.push(message.text()); });
await recordingBrief.goto(baseUrl + '/tools/streicheraufnahme-briefing/', { waitUntil: 'networkidle' });
await recordingBrief.locator('[data-record-form] button[type="submit"]').click();
if (!/pflichtfelder/i.test(await recordingBrief.locator('[data-record-error]').innerText())) failures.push('recording brief validation: required-field message missing');
await recordingBrief.locator('#record-project').fill('Dokumentarfilm Cue 04');
await recordingBrief.locator('#record-role').selectOption('Solistische Melodie');
await recordingBrief.locator('#record-purpose').fill('Eine warme Mittellage soll den Übergang tragen, ohne die Sprache zu verdecken.');
await recordingBrief.locator('#record-entry').fill('00:42 nach Sprecherpause');
await recordingBrief.locator('#record-tempo').selectOption('Referenzmix, aber kein Click');
await recordingBrief.locator('#record-articulation').fill('Gebunden, ruhiger Bogen, wenig Vibrato.');
await recordingBrief.locator('#record-variation').fill('Hauptfassung plus freieres Ende.');
await recordingBrief.locator('#record-takes').selectOption('Vollständige Takes plus markierte Favoriten');
await recordingBrief.locator('#record-format').selectOption('48 kHz / 24 Bit');
await recordingBrief.locator('#record-deadline').fill('Review am 24. August durch Schnitt.');
await recordingBrief.locator('#record-technical').fill('Trockene Hauptspur plus Referenzbearbeitung.');
await recordingBrief.locator('[data-record-form] button[type="submit"]').click();
const recordingOutput = await recordingBrief.locator('[data-record-result]').innerText();
for (const expected of ['Dokumentarfilm Cue 04', 'Solistische Melodie', '00:42 nach Sprecherpause', '48 kHz / 24 Bit', 'Rechte']) {
  if (!recordingOutput.includes(expected)) failures.push('recording brief generation: missing ' + expected);
}
const recordingState = await recordingBrief.evaluate(() => ({
  copyDisabled: document.querySelector('[data-record-copy]')?.disabled,
  downloadDisabled: document.querySelector('[data-record-download]')?.disabled,
  overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
}));
if (recordingState.copyDisabled || recordingState.downloadDisabled || recordingState.overflow > 1) failures.push('recording brief state: ' + JSON.stringify(recordingState));
await recordingBrief.locator('[data-record-reset]').click();
if (await recordingBrief.locator('#record-project').inputValue()) failures.push('recording brief reset: project was not cleared');
for (const error of recordingErrors) failures.push('recording brief runtime: ' + error);
await recordingBrief.close();

for (const [name, route, viewport] of [
  ['relaunch-home-desktop.png', '/', { width: 1440, height: 900 }],
  ['relaunch-home-mobile.png', '/', { width: 390, height: 844 }],
]) {
  const page = await browser.newPage({ viewport, deviceScaleFactor: 1 });
  await page.goto(new URL(route, baseUrl).href, { waitUntil: 'networkidle' });
  await page.screenshot({ path: path.join(output, name), fullPage: true });
  await page.close();
}

await browser.close();
const report = { baseUrl, checkedAt: new Date().toISOString(), routes, observations, plannerOutput: generated, requestedSongOutput: songOutput, recordingBriefOutput: recordingOutput, failures };
await writeFile(path.join(output, 'browser-relaunch-qa.json'), `${JSON.stringify(report, null, 2)}\n`, 'utf8');

if (failures.length) {
  console.error(`Relaunch browser QA failed with ${failures.length} issue(s):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log(`Relaunch browser QA passed: ${routes.length} routes at 1440px, 390px and 320px, plus planner, requested-song and recording-brief validation, generation and reset.`);
}

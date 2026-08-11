import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const environment = { ...process.env, SITE_INDEXABLE: 'true' };
const jobs = [
  ['Astro type check', path.join(root, 'node_modules', 'astro', 'bin', 'astro.mjs'), ['check']],
  ['indexable Astro build', path.join(root, 'node_modules', 'astro', 'bin', 'astro.mjs'), ['build']],
  ['built-site validation', path.join(root, 'scripts', 'validate-built-site.mjs'), []],
  ['SEO audit', path.join(root, 'scripts', 'audit-seo.mjs'), []],
];

for (const [label, script, argumentsList] of jobs) {
  console.log(`\n## ${label}`);
  const result = spawnSync(process.execPath, [script, ...argumentsList], {
    cwd: root,
    env: environment,
    stdio: 'inherit',
  });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status ?? 1);
}

console.log('\nIndexable production build passed all local gates.');

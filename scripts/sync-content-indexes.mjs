import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const registryPath = path.join(root, 'src', 'data', 'migrated-pages.json');
const policyPath = path.join(root, 'src', 'data', 'index-policy.json');
const searchPath = path.join(root, 'public', 'search-index.json');
const excludedRoutes = new Set(['/404/', '/410/', '/publishing-roadmap/']);

const records = JSON.parse(await readFile(registryPath, 'utf8'));
const policy = JSON.parse(await readFile(policyPath, 'utf8'));
for (const route of policy.noindexArchivePaths) excludedRoutes.add(route);
const searchable = records.filter((record) => !record.internal && record.indexable !== false && !excludedRoutes.has(record.route));
await writeFile(searchPath, `${JSON.stringify(searchable, null, 2)}\n`, 'utf8');
console.log(`Synced ${searchable.length} searchable routes from ${records.length} registry records.`);

import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const registryPath = path.join(projectRoot, 'src', 'data', 'migrated-pages.json');
const searchPath = path.join(projectRoot, 'public', 'search-index.json');

const editorialRecords = [
  ['/', 'Auspicious Music — Practical guides for music production and creative audio', 'Independent, source-labelled guides for music production, recording, sound design, Ableton and music for media.', 'Make sound with intent.'],
  ['/music-production/', 'Music Production — Auspicious Music', 'Session architecture, collaboration and delivery for projects that need to remain understandable.', 'Music Production'],
  ['/ableton/', 'Ableton Live — Auspicious Music', 'File management, Sampler and controller workflows grounded in official behavior.', 'Ableton Live'],
  ['/sound-design/', 'Sound Design — Auspicious Music', 'Sampling and playable-instrument workflows that document the source and transformation.', 'Sound Design'],
  ['/recording/', 'Recording — Auspicious Music', 'Room-aware, repeatable recording plans for acoustic instruments.', 'Recording'],
  ['/music-for-media/', 'Music for Media & Events — Auspicious Music', 'Briefing, rights and live-performance planning for films and ceremonies.', 'Music for Media & Events'],
  ['/journal/', 'Journal — Auspicious Music', 'All published guides with topic, method and reading time.', 'Journal'],
  ['/music-production/ableton-project-handoff/', 'An Ableton Project Handoff That Another Computer Can Open — Auspicious Music', 'Collect media, expose plug-in dependencies, print safety stems and make the next decision obvious.', 'An Ableton project handoff that another computer can actually open'],
  ['/recording/acoustic-instruments/viola-microphone-placement/', 'Viola Microphone Placement — Auspicious Music', 'Compare three microphone positions without pretending one distance works everywhere.', 'Viola microphone placement: three useful starting positions'],
  ['/recording/acoustic-instruments/recording-viola-at-home/', 'A Repeatable Plan for Recording Viola at Home — Auspicious Music', 'Prepare the room, compare fair takes and archive material you can judge tomorrow.', 'A repeatable plan for recording viola at home'],
  ['/sound-design/sampled-instruments/building-a-sampled-instrument/', 'Build a Small Sampled Instrument in Ableton Live — Auspicious Music', 'A conservative Sampler workflow for roots, dynamics, edits, zones and round robins.', 'Build a small sampled instrument in Ableton Live without losing the source'],
  ['/sound-design/when-to-record-strings-instead-of-using-a-library/', 'When to Record Strings Instead of Using a Library — Auspicious Music', 'Decide by phrasing, transition, revision risk and the musical role of the layer.', 'When to record a string part instead of using a library'],
  ['/ableton/midi-fighter-twister-review/', 'MIDI Fighter Twister Mapping Design for Ableton — Auspicious Music', 'A controller-mapping method that does not pretend an unfinished hardware review exists.', 'MIDI Fighter Twister in Ableton: design the mapping before the knobs'],
  ['/music-for-media/planning-live-viola-for-a-wedding-ceremony/', 'Planning Live Viola for a Wedding Ceremony — Auspicious Music', 'Define musical moments, flexible timings, cues and practical conditions.', 'Planning live viola for a wedding ceremony'],
  ['/music-for-media/music-clearance-for-small-film-projects/', 'Music Clearance for a Small Film — Auspicious Music', 'Identify the work, recording, media, territory, term and evidence before delivery.', 'Music clearance for a small film before edit lock'],
].map(([route, title, description, h1]) => ({ route, title, description, h1, internal: false }));

const current = JSON.parse(await readFile(registryPath, 'utf8'));
const replacements = new Map(editorialRecords.map((record) => [record.route, record]));
const merged = current
  .filter((record) => record.route !== '/publishing-roadmap/')
  .map((record) => replacements.get(record.route) ?? record);
for (const record of editorialRecords) if (!merged.some((item) => item.route === record.route)) merged.push(record);

await writeFile(registryPath, `${JSON.stringify(merged, null, 2)}\n`, 'utf8');
await writeFile(searchPath, `${JSON.stringify(merged.filter((record) => !record.internal), null, 2)}\n`, 'utf8');
console.log(`Synced ${merged.length} route records and ${merged.filter((record) => !record.internal).length} search records.`);

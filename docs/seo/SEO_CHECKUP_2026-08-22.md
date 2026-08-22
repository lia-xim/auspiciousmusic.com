# SEO check-up: Auspicious Music

Status: implementation audit, 22 August 2026
Scope: repository, production host, all sitemap URLs, legacy rules, content roles and the first supported expansion
Primary project: Kim-Marie Borger
Boundary: Auspicious Music is a modern successor and does not continue the former operator, catalogue, clients or rights.

## Decision summary

The production baseline is technically healthy. The strongest current gap is not another occasion or city page. It is the step between a personal song request and a musician's actual feasibility review. The first expansion therefore adds `/tools/wunschstueck-check/` as a browser-local preparation tool and strengthens the existing repertoire-to-planner path.

The human-readable `/sitemap/` remains available for navigation but becomes `noindex` and leaves the XML sitemap because it is a utility page. `/download/`, `/services/`, legacy status pages, errors and internal routes keep their existing noindex or error treatment.

## Evidence register

### Verified

| ID | Evidence | Result | Decision use |
| --- | --- | --- | --- |
| V1 | `SITE_INDEXABLE=true pnpm check` and `pnpm check:indexable`, 2026-08-22 before changes | Astro check: 0 errors, warnings or hints; 52 HTML pages; 42 public routes; maximum click depth 2 | Technical baseline |
| V2 | Direct HTTPS audit of the production sitemap and rendered HTML, 2026-08-22T20:14Z | 42/42 sitemap URLs returned 200 with self-canonical, index/follow, unique title and description, one H1 and parseable JSON-LD | No technical rescue page is needed |
| V3 | Production Chrome QA through existing Playwright/Axe contracts | 53 routes and 114 desktop, mobile and reflow states passed; planner, keyboard, navigation, search and calculators passed with no critical Axe or console failure | Existing interaction and accessibility baseline |
| V4 | Current Kim-Marie guide `https://kim-marie-borger.com/ratgeber/wunschmusik-hochzeit/`, HTTP 200 on 2026-08-22 | The visible guide explicitly frames melody without vocals, exact version, occasion, length and arrangement as review criteria | Basis for the requested-song preparation job |
| V5 | Current GEMA event guidance `https://www.gema.de/de/musiknutzer/veranstaltungen`, checked 2026-08-22 | Public-event licensing and live setlist questions are separate from musical feasibility | Rights question stays separate and links to the primary source |
| V6 | Existing paid DataForSEO evidence in the recovery report; no new paid call in this check-up | `/download/` carries a dominant unrelated or automated spam cluster | Keep status/noindex; never funnel it to current expert pages |
| V7 | Repository and rights manifest | No approved current performance photo, audio or video is available; only the two documented editorial images may remain | No media claim or photography/video cluster |

### Supported

| ID | Claim | Support | Limit |
| --- | --- | --- | --- |
| S1 | A requested-song preparation tool is a distinct user job | Kim's current guide, the accepted project profile and the existing planner's free-text request field all describe this decision | Search demand and conversion volume are not yet measured |
| S2 | Seven occasion pages have separate planning jobs | Each has a different flow, cue pattern, questions and maintained repertoire slice | Their organic performance is unknown without authenticated GSC data |
| S3 | Production and recording content can remain | Current pages have distinct English-language procedures, sources and internal paths; historic topic continuity is documented | They are secondary to the German Viola and event-planning focus |

### Hypothesis

| ID | Hypothesis | Missing evidence |
| --- | --- | --- |
| H1 | `/tools/wunschstueck-check/` can attract qualified searches around Wunschlied, Solo-Viola and arrangement preparation | Query-level GSC impressions and clicks after launch |
| H2 | A tool link before the external booking step can improve the quality of enquiries | Privacy-friendly start, completion and mail-draft events |
| H3 | Occasion pages may need different expansion depths | Page-query pairs, indexed-canonical status and reader questions over a stable window |

### Experiment

| ID | Test | Baseline and window | Success or stop rule |
| --- | --- | --- | --- |
| E1 | Launch the requested-song tool and contextual links without changing the occasion-page templates otherwise | Record launch date; review after 30 and 60 days | Continue when the page earns relevant impressions or completed briefs; revise wording when impressions exist without engagement; do not fan out into song-title pages |
| E2 | Compare planner entries from repertoire and occasion paths | Establish privacy-safe event counts after implementation | Keep only events that do not capture song titles, places, dates or free text |

### Rejected

| ID | Proposal | Reason |
| --- | --- | --- |
| R1 | Photography or videography cluster | No current offer, rights-cleared assets or distinct maintained user job |
| R2 | One page per song, question or city | Doorway and scaled-content risk; insufficient proof and maintenance value |
| R3 | Automatic `spielbar` or `nicht spielbar` score | Tonumfang, exact version, arrangement and performer review cannot be truthfully inferred from these fields |
| R4 | Catch-all or `/download/` redirect to home, planner or Kim | Intent mismatch and documented spam contamination |
| R5 | Former catalogue, authors, customers or media as current proof | Rights and continuity are not established |
| R6 | Portfolio footer or exact-match reciprocal links | Shared ownership is not an editorial reason or independent recommendation |

## Page-action matrix

Every indexable URL has one primary user job. `V1/V2` means the technical role was reproduced locally and live; content evidence is named where it differs.

| URL | Role | One primary user job | Evidence / overlap | Action and KPI |
| --- | --- | --- | --- | --- |
| `/` | Topic hub | Choose between Viola, event planning, repertoire and recording | V1, V2 | Keep; watch qualified paths to core hubs |
| `/viola/` | Expert hub | Understand what a viola can do in an event or recording role | V1, V2, project profile | Keep; add proof only when rights-cleared |
| `/eventmusik/` | Decision hub | Choose an occasion workflow before choosing titles | V1, V2, S2 | Keep; monitor hub-to-occasion and planner paths |
| `/eventmusik/hochzeit/` | Occasion detail | Plan ceremony moments, cues and wedding repertoire | V1, V2, S2 | Strengthen with requested-song path; page-query pairs |
| `/eventmusik/sektempfang/` | Occasion detail | Plan flexible reception sets around conversation | V1, V2, S2 | Strengthen with requested-song path; page-query pairs |
| `/eventmusik/trauerfeier/` | Occasion detail | Prepare sensitive music moments across farewell locations | V1, V2, S2 | Strengthen with requested-song path; qualified use only |
| `/eventmusik/dinner/` | Occasion detail | Fit music blocks around service, speeches and transitions | V1, V2, S2 | Strengthen with requested-song path; page-query pairs |
| `/eventmusik/firmenevent/` | Occasion detail | Define background versus featured music and event cues | V1, V2, S2 | Strengthen with requested-song path; page-query pairs |
| `/eventmusik/geburtstag/` | Occasion detail | Plan surprise, reception or gift music safely | V1, V2, S2 | Strengthen with requested-song path; page-query pairs |
| `/eventmusik/unterricht/` | Occasion detail | Turn learning goal and work choice into a first lesson brief | V1, V2, S2 | Keep; review whether planner use proves this role |
| `/repertoire/` | Maintained reference | Start from occasion and identify title/version questions | V1, V2, V4 | Strengthen now with requested-song tool as primary next step |
| `/tools/eventmusik-planer/` | Interactive utility | Generate an event flow, shortlist and enquiry draft | V1, V2, V3 | Strengthen now with contextual requested-song link |
| `/tools/wunschstueck-check/` | Interactive utility | Prepare one personal song for a musician's review | V4, V5, S1 | Build and index; measure starts, completions and draft clicks |
| `/recording/` | Topic hub | Choose a repeatable acoustic-string recording workflow | V1, V2, S3 | Keep; original comparison recording remains the proof gap |
| `/recording/acoustic-instruments/recording-viola-at-home/` | Support guide | Run a fair, repeatable home viola recording session | V1, V2, cited manufacturer sources | Keep; add a rights-cleared session log later |
| `/recording/acoustic-instruments/viola-microphone-placement/` | Support guide | Compare three microphone starting positions | V1, V2, cited manufacturer sources | Keep; add original level-matched clips only after rights clearance |
| `/sound-design/when-to-record-strings-instead-of-using-a-library/` | Decision guide | Choose live, sampled or hybrid strings by musical function | V1, V2, S3 | Keep; avoids overlap with event booking intent |
| `/sound-design/` | Topic hub | Choose a documented sampling or string-production procedure | V1, V2, S3 | Keep as secondary English cluster |
| `/sound-design/sampled-instruments/building-a-sampled-instrument/` | Support guide | Build a traceable small sampled instrument | V1, V2, official Ableton sources | Keep; no former assets reused |
| `/music-production/` | Topic hub | Choose a maintainable production workflow | V1, V2, S3 | Keep as secondary English cluster |
| `/music-production/ableton-project-handoff/` | Support guide | Hand an Ableton project to another computer safely | V1, V2, official Ableton sources | Keep; monitor separately from Viola cluster |
| `/ableton/` | Topic hub | Find current Ableton workflow guides | V1, V2, S3 | Keep; no historic product continuity claim |
| `/ableton/midi-fighter-twister-review/` | Method guide | Design a controller mapping without a fabricated review | V1, V2, rights boundary | Keep; title makes the non-review intent explicit |
| `/music-for-media/` | Topic hub | Choose between ceremony and small-film music planning | V1, V2 | Keep; English scope differs from German event hub |
| `/music-for-media/planning-live-viola-for-a-wedding-ceremony/` | English support guide | Prepare wedding cues and flexible timings in English | V1, V2, Kim sources | Keep; link to current German tools, no translation claim |
| `/music-for-media/music-clearance-for-small-film-projects/` | Support guide | Identify clearance questions before edit lock | V1, V2, copyright source | Keep; not legal advice |
| `/resources/` | Resource hub | Choose tools, glossary, guides or transparent archive records | V1, V2 | Keep; add no complete mesh beyond curated groups |
| `/resources/tools/` | Tool hub | Choose the smallest tool for the current decision | V1, V2 | Strengthen now with requested-song tool |
| `/resources/tools/delay-and-reverb/` | Calculator | Convert tempo into delay and reverb starting values | V1, V2, V3 | Keep; calculator behavior is testable |
| `/resources/tools/note-frequency/` | Calculator | Convert note, MIDI and frequency values | V1, V2, V3 | Keep; calculator behavior is testable |
| `/resources/tools/sample-pitch/` | Calculator | Calculate pitch, playback-rate and duration changes | V1, V2, V3 | Keep; calculator behavior is testable |
| `/resources/glossary/` | Reference | Resolve terms used by the publication's guides and tools | V1, V2 | Keep; review search use before expanding terms |
| `/journal/` | Editorial index | Browse the current source-backed guides | V1, V2 | Keep; no publication-volume claim |
| `/about/` | Publication profile | Understand current purpose, responsibility and limits | V1, V2 | Keep |
| `/about/history-and-relaunch/` | Disclosure/history | Distinguish the former domain from current ownership and work | V1, V2, V6 | Keep; update only from new historic evidence |
| `/about/editorial-policy/` | Method policy | Understand sourcing, testing, corrections and AI boundaries | V1, V2 | Keep |
| `/authors/` | Identity record | Distinguish Kim's expert role from Matthias's publisher role | V1, V2, rights manifest | Keep; no additional authors without evidence |
| `/contribute/` | Contribution policy | Decide whether and how to pitch a guide | V1, V2 | Keep; one contextual inbound link is sufficient for now |
| `/contact/` | Correction route | Report editorial, rights or factual issues | V1, V2 | Keep |
| `/legal/` | Legal identity | Identify the responsible provider and publisher | V1, V2 | Keep; verify after operator changes |
| `/privacy/` | Privacy disclosure | Understand actual hosting, local tools and mailto data flow | V1, V2 | Strengthen now for requested-song fields and email draft |
| `/accessibility/` | Accessibility disclosure | Understand current accessibility scope and report a barrier | V1, V2, V3 | Keep |

### Non-index and error inventory

| URL or group | Treatment | Reason |
| --- | --- | --- |
| `/sitemap/` | 200, noindex, excluded from XML sitemap | Human navigation utility, not a search landing page |
| `/download/` | 200, permanent noindex | Honest status for the documented spam-heavy legacy target |
| `/services/` | 200, permanent noindex | Thin contextual bridge; Kim's site owns booking intent |
| `/legacy/the-spy-guitar/`, `/legacy/bang-my-twister/` | 200, noindex | Rights-aware status records, not restored works |
| `/search/`, `/internal/*`, `/publishing-roadmap/` | 200, noindex | Utility, design or retired project routes |
| `/404/` and unknown paths | 404, noindex | No equivalent destination |
| `/410/` | 410, HTTP noindex | Explicit retired-path endpoint |
| `/tools/ceremony-planner/` | permanent redirect | Exact supersession by `/tools/eventmusik-planer/` |

## Hub and cluster map

```text
Home
|- Viola hub
|  |- Event music hub -> seven occasion pages -> planner
|  |- Repertoire reference -> requested-song check -> planner or email draft
|  `- Recording hub -> home-session guide -> microphone guide
|- Resources hub
|  |- Tool hub -> planner, requested-song check, three calculators
|  |- Glossary
|  `- Journal -> current procedure guides
|- Production reference
|  |- Sound Design -> sampled instrument, live-vs-library
|  |- Ableton -> project handoff, controller mapping
|  `- Music for Media -> English wedding guide, film-clearance guide
`- Publication and history
   |- About, authors, editorial policy, contact
   `- History and rights-aware legacy status
```

Required link flow:

- Occasion pages link up to `/eventmusik/`, sideways only to the relevant repertoire/tool decision, and forward to the planner.
- `/repertoire/` links to the requested-song check before any external expert path.
- The requested-song check links to the planner using only the non-sensitive occasion slug; song title and free text are never put in the URL.
- Kim's official site is linked only where current performer review or booking helps the reader, with shared-project disclosure where a source could appear independent.

## Risk and measurement register

| Risk | Current control | Next proof |
| --- | --- | --- |
| New tool mistaken for a feasibility verdict | Visible limits, no score, status language describes preparation only | Review real reader questions and correction reports |
| Popular-song rights overclaimed | Titles only; no notation, lyrics, audio or arrangement; GEMA link for organizer context | Per-asset rights ledger before any media |
| Cannibalization with Kim's wedding guide | This tool covers cross-occasion preparation; Kim's page remains current service/expert source | Compare page-query pairs, not raw page count |
| Thin or scaled occasion expansion | Seven accepted workflows only; no city/song fan-out | Expand only from GSC and first-hand questions |
| Historic spam passed into current pages | `/download/` remains noindex status; no catch-all | Monitor new legacy paths and referring domains |
| Measurement captures personal inputs | No analytics currently; future events must contain only action names and route, never field values | Privacy review before instrumentation |

## 30/60/90-day sequence

### Days 1-30

- Submit or verify the canonical XML sitemap in authenticated Search Console.
- Establish indexed-canonical status and page-query baselines for German core pages and the new tool.
- Define privacy-safe events for tool start, completion, copy and mail-draft click without capturing title, version, place, date or free text.
- Collect real correction and reader questions; do not publish another page batch.

### Days 31-60

- Review page-query pairs for `/repertoire/`, `/tools/wunschstueck-check/`, the planner and seven occasion pages.
- Improve the strongest existing page when impressions show an unmet subtask; merge wording when two pages compete for the same query and job.
- Produce one rights-cleared, level-matched Viola recording comparison only if performer, composition, arrangement, master and publication rights are complete.

### Days 61-90

- Decide whether the requested-song tool has earned continued maintenance from relevant impressions, completed briefs or qualified enquiries.
- Publish at most one further decision asset from measured reader need, such as an outdoor setup checklist or a documented room-test worksheet.
- Keep photo/video, city and song-title expansions rejected until a distinct user job, proof asset and maintenance owner exist.

## Implementation proof

- Central content sync: 42 searchable routes from 53 registry records.
- Final indexable build: 78 Astro files with 0 errors, warnings or hints; 53 HTML pages; 42 XML-sitemap URLs; maximum public click depth 3.
- Full local browser QA: 55 routes and 118 desktop, mobile and reflow states; zero final Axe, console, keyboard, interaction or overflow failures.
- Focused release QA: 13 core routes at 1440, 390 and 320 pixels plus planner and requested-song validation, generation and reset.
- Requested-song screenshots rendered at 1440 x 3585 and 390 x 6643 with nonblank sampled-color checks.
- No DataForSEO or other paid API was called during this check-up.

No ranking, crawl, indexing or conversion outcome is asserted by this document. It records technical eligibility, current evidence, implemented roles and bounded experiments.

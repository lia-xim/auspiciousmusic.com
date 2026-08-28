# Language, usability and positioning audit

Date: 28 August 2026

## Decision

Auspicious Music remains a German-first, neutral decision and planning layer for viola, event music, repertoire and acoustic-string recording. Kim-Marie Borger is the named current musical expert. Her own site remains authoritative for current offers, availability and enquiries. Matthias Ramahi is the publisher.

The site does not become a second commercial Kim-Marie website and does not expand into photography or videography. English is a deliberate secondary entry, not a partially translated global shell.

## Evidence register

| Class | Evidence | Consequence |
| --- | --- | --- |
| Verified | Live sitemap audit before this change found 46 indexable URLs: 21 German-dominant, 24 English-dominant and a mixed-language homepage. | Language was technically declared per page but the German journey was incoherent. |
| Verified | German header and footer linked directly to English resources, journal, about pages and three English core guides. | German navigation now contains German routes only. |
| Verified | The planner has a real German and English implementation with separate canonical URLs. | Reciprocal `hreflang` remains correct for the planner pair. |
| Verified | Kim-Marie's own site is the documented destination for current biography, services and availability. | Auspicious Music prepares decisions and enquiries; it does not duplicate booking claims. |
| Supported | Existing English technical routes have distinct useful content and established URLs. | They remain available through `/en/` instead of being mass-moved or auto-translated. |
| Hypothesis | A coherent German event-planning journey will improve planner completion and qualified outbound enquiries. | Measure planner starts, completions and email actions after release. |
| Experiment | Expand English editorial counterparts beyond the planner. | Only after query or usage evidence justifies maintaining genuine translations. |
| Rejected | Translate only navigation chrome while leaving English body content underneath. | Google treats body language as decisive; this also fails the reader. |
| Rejected | Duplicate all editorial routes automatically under `/en/`. | Creates maintenance and quality risk without proven demand. |
| Rejected | Present Kim-Marie as the owner, author or commercial provider of every page. | Unsupported and strategically less credible than a transparent expert relationship. |

## Page action matrix

| Route group | Primary user job | Action |
| --- | --- | --- |
| `/` | Choose between event planning, repertoire, viola and recording | Keep German; remove English blocks; pair with `/en/`. |
| `/en/` | Find the English planner or technical library | New curated English entry; pair with `/`. |
| `/tools/eventmusik-planer/` and `/en/tools/event-music-planner/` | Build and review a practical music brief | Keep localized pair; no dropdown controls; show only the result after completion. |
| `/viola/`, `/eventmusik/`, `/repertoire/`, `/recording/` | Resolve one German planning decision | Keep in German navigation; link contextually by task. |
| Three core recording/live-vs-sample guides | Deepen a decision reached from the German hubs | Translate fully into German and declare `lang=de`. |
| English production, Ableton, sound-design and media routes | Solve a technical English task | Retain URLs; expose from `/en/`, not German primary navigation. |
| About, authors, editorial policy, search, sitemap and 404 | Explain responsibility or recover navigation | Germanize for the primary audience. |
| `/download/`, `/services/`, legacy and unknown spam paths | State status without borrowing authority | Preserve noindex/404 rules; no catch-all redirects. |

## Hub and cluster map

```text
German home
├── Eventmusik -> occasion pages -> DE planner -> reviewed email draft
├── Repertoire -> requested-piece check -> DE planner
├── Viola -> viola/violin comparison -> recording decision
├── Aufnahme -> microphone guide -> home-session guide -> recording brief
└── About -> roles, editorial policy, history and legal pages

English home
├── EN planner
└── English technical library -> production / Ableton / sound design / media / tools
```

## QA evidence

- `pnpm check`: Astro diagnostics, production build, built-site validation and SEO audit pass.
- 47 public routes in the generated index; maximum internal click depth: 3.
- Mobile 390 x 844 and desktop 1440 x 900: no horizontal overflow.
- German and English home have the correct `html lang`, reciprocal language links and distinct H1s.
- Planner completion tested on mobile: no select/dropdown controls, visible result, hidden workbench, clear Ablauf/Repertoire/Noch-zu-klären sections.
- Critical and serious Axe findings: none on home and completed planner result.
- Browser console errors: none in tested flows.

## Measurement sequence

30 days: compare planner starts, step-two progression, completions and email actions; inspect GSC by page and country/language.

60 days: interview or collect real questions from event enquiries; improve existing occasion and repertoire pages before adding routes.

90 days: decide whether one or two English counterparts have proven demand. Do not broaden translation or local-page coverage without evidence and maintenance ownership.

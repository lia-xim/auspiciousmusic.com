# Focused positioning and product action matrix

Status: implemented locally, 28 August 2026
Primary project: Kim-Marie Borger
Scope: home, English parity, event-music planner, current index policy and core landing jobs

## Decision

Auspicious Music is not a broad music-production magazine. Its primary search and user job is to help a person turn a ceremony or event into a small, reviewable music plan. Kim-Marie's own site owns availability, offer and booking intent. Location is an input to the planner, not a reason for city-page fan-out on this domain.

## Evidence register

### Verified

- The previous planner preselected three repertoire checkboxes and printed the same three selections in the result. It did not calculate recommendations.
- The German and English home routes used different layouts and different content architectures.
- The live Kim-Marie site exposes its current contact section at `https://kim-marie-borger.com/#kontakt`; `/kontakt/` returns 404.
- Current German search results for wedding-music planning consistently organise the task around moments such as entrance, ceremony, reception and exit. A current wedding-planner example explicitly promises suggestions after moments and desired character: `https://talkwedding.me/tools/music-planner`.
- Existing paid recovery evidence remains unchanged. No DataForSEO or other paid API was called for this decision.

### Supported

- `/tools/eventmusik-planer/` has one distinct product job: recommend a small repertoire shortlist and connect it to a running order.
- `/eventmusik/hochzeit/` and `/eventmusik/trauerfeier/` have distinct emotional and operational jobs and remain the strongest event landing pages.
- `/viola/`, `/repertoire/` and `/recording/` support the named expert and instrument without duplicating booking pages.

### Hypothesis

- The planner may earn non-local informational visibility around event music, wedding music planning and ceremony-song selection. Query demand and rankings are not proven without authenticated Search Console data.
- Clear recommendations before the outbound contact step may improve enquiry quality. Conversion impact is not yet measured.

### Experiment

- Measure privacy-safe planner starts, completed results, copied plans and outbound contact actions. Never capture dates, places, titles or free text.
- Review page-query pairs for the planner, wedding page and funeral page after 30 and 60 days before adding another landing page.

### Rejected

- City landing-page fan-out on Auspicious Music. Kim-Marie's official site already owns local commercial intent; duplicated local pages would create overlap without new proof.
- Song-title pages, generic PAA pages or one page per planner combination.
- Keeping Ableton, generic production, calculators and film-clearance pages in primary navigation and the XML sitemap merely because they already exist.
- Treating a user's three selected songs as three recommendations.

## Page-action matrix

| URL | Primary user job | Action |
| --- | --- | --- |
| `/` | Understand the planner and start with an occasion | Rebuilt as a focused product home |
| `/en/` | Complete the same job in English | Rebuilt from the same component and hierarchy |
| `/tools/eventmusik-planer/` | Receive three reasoned ideas tied to chosen moments | Reworked; no song selection step |
| `/en/tools/event-music-planner/` | Same planner job in English | Same component, data and result logic |
| `/eventmusik/hochzeit/` | Plan ceremony moments and open the wedding planner | Keep and strengthen from real query evidence |
| `/eventmusik/trauerfeier/` | Plan a sensitive farewell running order | Keep and strengthen from real reader questions |
| `/eventmusik/{sektempfang,dinner,firmenevent,geburtstag}/` | Start a distinct event workflow | Keep; do not expand without query evidence |
| `/eventmusik/unterricht/` | Prepare a lesson enquiry | Remove from event planner and search index; accessible only |
| `/repertoire/` | Browse the maintained source list by occasion | Keep; explain that planner suggestions are not availability promises |
| `/viola/`, `/recording/` | Understand instrument and recording decisions | Keep as supporting clusters |
| Older production/tool magazine routes | Serve direct or historic readers | Noindex; exclude from sitemap, search and primary navigation |

## Hub and cluster map

```text
Home
|- Event-music planner (DE/EN)
|- Wedding / ceremony
|- Funeral / memorial
|- Other maintained event occasions
|- Repertoire
`- Viola
   `- Recording strings

Kim-Marie official site
`- availability, offer, price, contract and booking
```

No ranking or indexing outcome is claimed. The implemented change establishes a clearer product, narrower index surface and measurable next step.

# Umami measurement plan

## Purpose

Use page and interaction data to find unclear pages, weak entry points, planner drop-offs and successful handoffs. Do not use the data to identify visitors or reconstruct private events.

## Core reports

| Question | Report | Signal |
| --- | --- | --- |
| Which landing pages attract useful traffic? | Pages plus referrers | Pageviews, visitors, bounce rate and onward `internal-link` or `planner-entry` events |
| Where does the planner lose people? | Funnel | `planner-entry` -> `planner-step-complete` 1/2 -> `planner-plan-created` -> `planner-contact-open` |
| Do occasion pages help decisions? | Event data by page | `quick-planner-adjusted`, `quick-recommendation-listen`, `quick-planner-open-full` |
| Which recommendations earn attention? | Event data | `planner-recommendation-listen` and `quick-recommendation-listen` by public repertoire title |
| Do supporting tools produce useful outcomes? | Goals | Brief created -> copied, downloaded, emailed or continued in planner |
| Which pages need performance work? | Performance | LCP, INP and CLS by canonical page path and device class |
| Does the editorial handoff work? | Funnel | Relevant landing page -> tool action -> `expert-referral` or `planner-contact-open` |

## Event groups

- Navigation: `internal-link`, `language-switch`, `outbound-link`, `email-open`.
- Planner acquisition: `planner-entry`, `quick-planner-open-full`.
- Planner progress: `planner-step-complete`, `planner-step-back`, `planner-step-validation`, `planner-location-selected`.
- Planner outcome: `planner-plan-created`, `planner-result-edit`, `planner-plan-copied`, `planner-contact-open`.
- Repertoire: `repertoire-listen`, `quick-recommendation-listen`, `planner-recommendation-listen`.
- Requested song: `requested-song-brief-created`, `requested-song-brief-copied`, `requested-song-email-open`, `requested-song-reset`.
- Recording: `recording-brief-created`, `recording-brief-copied`, `recording-brief-downloaded`, `recording-brief-reset`.
- Search: `site-search-submit`. The search term is never included.

## Privacy boundary

Never send dates, exact locations, query strings, URL fragments, free text, contact details, project names, cue names or user-entered song titles. Exact location selection is reduced to `directory` or `custom`. Public repertoire titles and fixed option categories are allowed. Do not call `umami.identify()`.

## Review cadence

Review after enough traffic exists to avoid reacting to single visits. Compare page intent with its next action, then improve one bottleneck at a time. Rankings and conversions must not be inferred from pageviews alone.

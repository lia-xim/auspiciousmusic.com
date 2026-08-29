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

## Saved Umami reports

The Auspicious Music website record has three event goals: `planner-entry`, `planner-plan-created` and `planner-contact-open`. It also has three 60-minute funnels:

- homepage `/` -> `planner-entry` -> `planner-plan-created` -> `planner-contact-open`;
- occasion page `/eventmusik/*` -> `planner-entry` -> `planner-plan-created` -> `planner-contact-open`;
- `planner-entry` -> `planner-plan-created` -> `planner-contact-open` for all planner starts.

The outgoing planner handoff uses `utm_source=auspiciousmusic`, `utm_medium=referral`, `utm_campaign=eventmusik-planer` and `utm_content=planner-result`. Kim-Marie's existing attribution layer can therefore distinguish this source through to a contact-form success without sharing the plan or building a cross-domain person profile.

## Event groups

- Navigation: `internal-link`, `language-switch`, `outbound-link`, `email-open`.
- Planner acquisition: `planner-entry`, `quick-planner-open-full`.
- Planner progress: `planner-step-complete`, `planner-step-back`, `planner-step-validation`, `planner-location-selected`.
- Planner outcome: `planner-plan-created`, `planner-result-edit`, `planner-plan-copied`, `planner-contact-open`.
- Repertoire: `repertoire-listen`, `quick-recommendation-listen`, `planner-recommendation-listen`, `audio-sample-play`, `audio-sample-progress`, `audio-sample-complete`.
- Requested song: `requested-song-brief-created`, `requested-song-brief-copied`, `requested-song-email-open`, `requested-song-reset`.
- Recording: `recording-brief-created`, `recording-brief-copied`, `recording-brief-downloaded`, `recording-brief-reset`.
- Search: `site-search-submit`. The search term is never included.

## Privacy boundary

Never send dates, exact locations, query strings, URL fragments, free text, contact details, project names, cue names or user-entered song titles. Exact location selection is reduced to `directory` or `custom`. Public repertoire titles and fixed option categories are allowed. Do not call `umami.identify()`.

## Retention

Analytics rows for this website ID are retained for 14 months. A daily server-side job deletes older event, event-data, session-data, replay, revenue and session rows for this website only. Saved report definitions are configuration and remain in place. Other Umami websites are outside this job.

## Review cadence

Review after enough traffic exists to avoid reacting to single visits. Compare page intent with its next action, then improve one bottleneck at a time. Rankings and conversions must not be inferred from pageviews alone.

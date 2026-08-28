# Site purpose and page actions

Date: 28 August 2026

## Product decision

Auspicious Music is a German-first, tool-first planning product for ceremony and event music. It is not only a planner: the useful supporting layers are occasion-specific preparation, repertoire and requested-piece decisions, viola context and a deliberately smaller string-recording branch. Kim-Marie Borger remains the current musical expert and the destination for personal review and booking. The site does not duplicate her commercial service pages.

Primary journey: occasion -> three recommendations -> visible running order and open questions -> copied plan -> Kim-Marie's contact section.

Non-goals: a broad music magazine, generic event-law or GEMA advice, photography or videography services, city-page fan-out, restored Ableton/download content, or pages created only to hold keywords.

## Evidence register

| Label | Evidence | Decision impact |
| --- | --- | --- |
| Verified | The production sitemap contains 30 canonical indexable URLs; 17 broad legacy or weak-fit routes are already noindex and excluded. | Work within the focused core instead of rebuilding the old magazine. |
| Verified | The planner can generate three moment-linked repertoire suggestions and a running order without a known date. | Date is optional and defaults to "Noch offen". |
| Verified | The user found the compact result useful when the running order and open questions were visible. | Supporting result details remain visible instead of hiding behind disclosure UI. |
| Verified | The maintained repertoire and occasion profiles support six event occasions plus separate lesson material. | Six occasion pages feed one shared planner; lessons remain outside the event journey. |
| Supported | A requested-piece preparation tool solves a distinct question before personal review. | Keep it as a contextual secondary tool, not a competing primary funnel. |
| Supported | Music-specific recording guidance has a distinct musician/producer audience and topical continuity. | Keep a small secondary branch, clearly separated from event planning. |
| Hypothesis | Occasion pages can attract qualified planning queries and improve planner starts. | Measure page-to-planner starts before expanding the cluster. |
| Experiment | Run the expanded homepage and lower-friction planner for 30 days. | Compare planner starts, completions and contact handoffs with the prior baseline when authenticated data exists. |
| Rejected | Generic GEMA prompts in the requested-piece workflow help the typical private-event visitor. | Remove them from the tool; special recording, livestream or publication questions are separate. |
| Rejected | More generic tools or explanatory pages automatically make the site stronger. | Add a URL only for a distinct maintained user job and proof requirement. |

## Page-action matrix

| URL | Primary user job | Role | Action |
| --- | --- | --- | --- |
| `/` | Understand the product and choose the next planning step | Product hub | Strengthen with outcomes, occasion routes, tool choice and concise answers |
| `/en/` | Enter the same product in English | Localized product hub | Keep structurally aligned with German home |
| `/tools/eventmusik-planer/` | Create three suggestions and a usable running order | Primary tool | Strengthen; optional date, visible full result |
| `/en/tools/event-music-planner/` | Complete the same planner in English | Localized primary tool | Mirror the German behavior |
| `/eventmusik/` | Choose an occasion and understand the planning method | Topic hub | Keep and route to planner |
| `/eventmusik/hochzeit/` | Plan ceremony moments and music choices | Occasion guide | Keep |
| `/eventmusik/sektempfang/` | Plan flexible reception music | Occasion guide | Keep |
| `/eventmusik/trauerfeier/` | Prepare music for a farewell with care | Occasion guide | Keep |
| `/eventmusik/dinner/` | Place music around service and speeches | Occasion guide | Keep |
| `/eventmusik/firmenevent/` | Separate reception, background and featured music | Occasion guide | Keep |
| `/eventmusik/geburtstag/` | Prepare surprise, gift or closing music | Occasion guide | Keep |
| `/eventmusik/live-streicher-draussen/` | Decide shelter, placement and Plan B | Practical guide | Keep |
| `/repertoire/` | Explore maintained titles by function and occasion | Reference hub | Keep |
| `/tools/wunschstueck-check/` | Turn one personal title into a musical review brief | Secondary tool | Keep; remove generic legal/GEMA workflow |
| `/viola/` | Understand where viola fits in event and recording contexts | Expert hub | Keep; replace abstract motif with useful summary |
| `/viola/viola-oder-violine/` | Compare instruments for a real musical role | Decision guide | Keep |
| `/recording/` | Enter the smaller string-recording branch | Secondary hub | Keep, secondary on homepage |
| `/recording/acoustic-instruments/recording-viola-at-home/` | Prepare a repeatable home recording | Recording guide | Keep |
| `/recording/acoustic-instruments/viola-microphone-placement/` | Choose a microphone starting position | Recording guide | Keep |
| `/sound-design/when-to-record-strings-instead-of-using-a-library/` | Choose live, sampled or hybrid strings | Recording decision guide | Keep |
| `/tools/streicheraufnahme-briefing/` | Create a handoff brief for a string session | Recording tool | Keep |
| `/music-for-media/planning-live-viola-for-a-wedding-ceremony/` | Plan a wedding ceremony in English | English support guide | Keep; do not fan out more translations without demand |
| `/about/` | Understand purpose, roles and boundaries | Trust page | Keep |
| `/about/history-and-relaunch/` | Understand domain history and new ownership | History and disclosure | Keep |
| `/about/editorial-policy/` | Understand sourcing and correction rules | Trust page | Keep |
| `/authors/` | Identify current expert and publisher | Entity page | Keep |
| `/contact/` | Reach editorial, rights or accessibility contact | Utility page | Keep |
| `/legal/` | Identify the legal operator | Legal page | Keep |
| `/privacy/` | Understand actual data flows | Legal page | Keep and synchronize with tool behavior |
| `/accessibility/` | Find accessibility status and contact | Utility/legal page | Keep |

## Noindex and excluded routes

Keep the existing noindex policy for Ableton, general production, generic sound-design, music-for-media hub, calculators, glossary, journal, contribute, lessons, download, services, search, internal QA and error/status routes. They may serve a direct visitor or historical reference, but they are not part of the current search or navigation strategy. No catch-all redirect.

## Hub and cluster map

```text
Home
├── Event-music planner -> copied plan -> Kim-Marie contact
├── Event music hub -> six occasion guides -> planner preset
├── Repertoire -> requested-piece check -> personal review
├── Viola -> instrument comparison -> event or recording decision
├── Recording (secondary) -> two guides + live/sample + briefing tool
└── About -> roles, editorial rules, history, contact and legal
```

## Measurement gate

For 30 days, measure planner starts, step-two reach, completed plans and contact handoffs separately. Review page-to-planner starts for the six occasion pages. Do not publish another occasion, city, legal or generic music page until query or user evidence identifies a distinct job. Search Console submission and conversion baselines remain NOT PROVEN unless an authenticated session is checked.

# Auspicious Music SEO strategy

Status: 22 August 2026
Owner: Matthias Ramahi
Primary expert: Kim-Marie Borger
Project role: modern successor, not a continuation of the former operator or catalogue

## Objective

Build Auspicious Music as a German-first planning layer for ceremony and event music, supported by focused viola, repertoire and acoustic-string recording guidance. Kim-Marie Borger is the named current expert; her own site remains the authoritative destination for current availability, offers and performance enquiries. The planner supports German and English through the same product structure without turning every editorial route into an automatically translated duplicate.

The site must earn visibility through useful decisions, tools and first-hand evidence. It must not borrow the former operator's identity, downloads, media, clients or authorship.

## Core audiences

1. Couples, coordinators and venues preparing music for a ceremony or event.
2. Producers and editors deciding whether a viola or string part should be live, sampled or hybrid.
3. Musicians planning repertoire by function, feasibility, arrangement effort and rights.
4. Recordists comparing room and microphone choices for viola and acoustic strings.
5. Visitors following a legitimate old Auspicious Music reference who need an honest status answer.

## Information architecture

```text
Home (German-first, reciprocal language alternate with `/en/`)
├── Viola
├── Event music
│   ├── Wedding / ceremony
│   ├── Drinks reception
│   ├── Funeral / memorial
│   ├── Dinner
│   ├── Corporate event
│   ├── Birthday
│   └── Lessons
├── Repertoire by occasion
├── Event-music planner (DE)
├── Recording
└── Publication
    ├── About, authors and editorial policy
    ├── History and relaunch
    └── Contact and legal pages

English entry (`/en/`)
├── Event-music planner (EN, reciprocal alternate with DE planner)
├── Wedding-ceremony guide
└── Selected strings and recording guidance
```

German navigation does not send readers into English editorial pages without an explicit language cue. Older technical routes keep their established URLs but are no longer treated as search landing pages or primary navigation because they dilute the event-music job. `hreflang` is emitted only for true localized counterparts: `/` ↔ `/en/` and the two planner routes. Other language buttons lead to the relevant language home without falsely declaring page equivalence.

Photography and videography are not standalone clusters. They may be mentioned only when they are a real adjacent production need, never as an implied current service or as a reconstruction of old `/photo.html` and `/video.html` pages.

## Index policy

| Route group | Treatment | Reason |
| --- | --- | --- |
| `/`, `/viola/`, `/eventmusik/`, `/repertoire/`, `/recording/` | Index after production gate | Current expert-reference core |
| `/eventmusik/{hochzeit,sektempfang,trauerfeier,dinner,firmenevent,geburtstag,unterricht}/` | Index after production gate | Distinct informational planning entry points leading into one shared tool |
| `/tools/eventmusik-planer/` | Index after production gate | Distinct bilingual planning utility, local-only |
| `/en/`, `/en/tools/event-music-planner/` | Index after production gate | Defined English entry and genuine localized planner counterpart |
| Current articles and relevant calculators | Index after production gate | Useful supporting tasks |
| Older Ableton, production, generic sound-design, film-clearance, calculator and journal routes | Accessible, noindex, excluded from sitemap and search | Retained for direct readers without presenting an unfocused magazine as the current strategy |
| `/eventmusik/unterricht/` | Accessible, noindex, excluded from planner, sitemap and core navigation | Unterricht is not an event-music planning job |
| `/download/` | Permanent noindex | Status page receives the dominant spam backlink cluster |
| `/services/` | Permanent noindex | Thin bridge to Kim-Marie's authoritative current site |
| Verified `/legacy/` records | Index cautiously | Exact historic references with explicit rights boundary |
| `/search/`, `/internal/*`, `/404/`, `/410/` | Permanent noindex | Utility, QA or error handling |
| Unknown historic and spam paths | 404 by default | No intent-equivalent destination |

Preview builds remain `noindex,nofollow,noarchive`. Production indexing requires the explicit `SITE_INDEXABLE=true` build gate plus live verification.

## Content and evidence rules

- Name Kim-Marie only where the page truthfully reflects her current expertise or points to her official site.
- Repertoire title names may be published from the 2026-08-22 user-provided inventory. Never turn a title reference into a claim about exact version, notation, arrangement, date availability or performance rights.
- Keep planner output framed as a preparation brief, not a quote, availability promise or legal clearance.
- Record source, rights holder, permission, scope and expiry before publishing original audio, video or photography.
- Use ordinary crawlable links and keep each core route reachable within two clicks.
- Publish a new cluster page only when it has a distinct decision to solve and evidence the current expert can stand behind.

## Backlink recovery rule

The 22 August DataForSEO run cost 0.075924 USD. It identified `/download/` as the dominant target with 688 referring domains and 90,831 backlinks, but the representative sample was overwhelmingly unrelated or automated. This volume is treated as contamination, not authority. Exact legitimate old paths may redirect to transparent records; the rest stays 404. There is no catch-all homepage redirect.

## Next measurement gate

After launch, submit the canonical sitemap in Search Console, inspect the German core routes, all seven occasion pages and the planner, and monitor newly discovered legacy paths. Measure planner starts, completed plans and qualified outbound enquiry actions separately from bookings. Expand the event-music, repertoire or recording cluster only from real query evidence, reader questions and publishable first-hand material.

## Query and page ownership (28 August 2026)

Search Console performance data for `kim-marie-borger.com` is currently **NOT PROVEN**: the authenticated account available during the review had no access to that property. The terms below therefore come from the published Kim-Marie site taxonomy and metadata, not from reported clicks, impressions or positions.

| Topic family | Kim-Marie Borger owns | Auspicious Music owns | Auspicious landing page title |
| --- | --- | --- | --- |
| Wedding | performer, Live-Viola, booking and local service intent | running order, repertoire choice and preparation | `Hochzeitsmusik planen: Einzug, Trauung & Auszug` |
| Funeral | performer, availability, booking and local service intent | selecting pieces and placing them in the farewell sequence | `Trauermusik auswählen: Beerdigung & Trauerfeier` |
| Drinks reception | current live-music offer and performance enquiry | reception phases, conversation-friendly role and repertoire choice | `Musik zum Sektempfang planen: Ablauf & Stücke` |
| Dinner | current performance offer | music blocks around courses, speeches and transitions | `Dinnermusik planen: Hochzeit, Reden & Ausklang` |
| Corporate event | performer, live-music service and local intent | programme role, cues, reception and dinner planning | `Musik fürs Firmenevent planen: Empfang & Dinner` |
| Birthday | performer and private-event enquiry | surprise, reception, gift and closing sequence | `Geburtstagsmusik planen: Überraschung & Empfang` |

This is deliberate overlap at the topic level, not duplicate page intent. Auspicious Music must not create `buchen`, `Musikerin`, `Live-Viola + Stadt` or other commercial/local fan-out pages that compete with Kim-Marie's current offer. Each occasion page may link to its matching Kim-Marie service page when that is the reader's next step, but the shared publisher relationship must be disclosed in the same context.

When authenticated Search Console page-query data becomes available, validate the table at page × query level over a comparable period. Change a title only when impressions and the intended page job support the change; do not infer cannibalization merely because both domains appear for the same broad topic.

## Location selection without city-page fan-out (29 August 2026)

The six occasion landing pages expose the 49 enabled `areaServed` cities and regions from Kim-Marie Borger's published location inventory as planner inputs. They are described as possible enquiry locations, never as offices, confirmed performances or guaranteed availability. Selecting one carries the occasion and location into the existing event-music planner; visitors may still enter any other place for individual review.

No location-specific Auspicious URL is created. The location names remain a shared product input rather than duplicated local landing pages, repeated local claims or a second commercial city-page network competing with Kim-Marie's service site.

# Auspicious Music SEO strategy

Status: 22 August 2026
Owner: Matthias Ramahi
Primary expert: Kim-Marie Borger
Project role: modern successor, not a continuation of the former operator or catalogue

## Objective

Build Auspicious Music as a German-first expert reference and planning layer around viola, event music, repertoire decisions and acoustic-string recording. Kim-Marie Borger is the named current expert; her own site remains the authoritative destination for current availability, offers and performance enquiries. The planner supports German and English without turning every editorial route into an automatically translated duplicate.

The site must earn visibility through useful decisions, tools and first-hand evidence. It must not borrow the former operator's identity, downloads, media, clients or authorship.

## Core audiences

1. Couples, coordinators and venues preparing music for a ceremony or event.
2. Producers and editors deciding whether a viola or string part should be live, sampled or hybrid.
3. Musicians planning repertoire by function, feasibility, arrangement effort and rights.
4. Recordists comparing room and microphone choices for viola and acoustic strings.
5. Visitors following a legitimate old Auspicious Music reference who need an honest status answer.

## Information architecture

```text
Home (German-first)
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
├── Event-music planner (DE / EN)
├── Recording
├── Resources
│   ├── Planner and calculators
│   ├── Glossary
│   └── Rights-aware legacy records
└── Publication
    ├── About, authors and editorial policy
    ├── History and relaunch
    └── Contact and legal pages
```

Photography and videography are not standalone clusters. They may be mentioned only when they are a real adjacent production need, never as an implied current service or as a reconstruction of old `/photo.html` and `/video.html` pages.

## Index policy

| Route group | Treatment | Reason |
| --- | --- | --- |
| `/`, `/viola/`, `/eventmusik/`, `/repertoire/`, `/recording/` | Index after production gate | Current expert-reference core |
| `/eventmusik/{hochzeit,sektempfang,trauerfeier,dinner,firmenevent,geburtstag,unterricht}/` | Index after production gate | Distinct informational planning entry points leading into one shared tool |
| `/tools/eventmusik-planer/` | Index after production gate | Distinct bilingual planning utility, local-only |
| Current articles and relevant calculators | Index after production gate | Useful supporting tasks |
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

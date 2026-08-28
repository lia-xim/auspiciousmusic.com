# Auspicious Music project brief

## Positioning

Auspicious Music is a new German-first planning publication for ceremony and event music, supported by focused viola, repertoire and acoustic-string recording guidance. Kim-Marie Borger is the named current expert. Matthias Ramahi is the current publisher.

It is a modern successor on a historic domain, not a continuation of the former operator, catalogue, downloads, authorship or clients.

## Product priorities

1. Help visitors turn an occasion into three reasoned repertoire suggestions, a usable running order and the questions needed for personal review.
2. Maintain one source-backed repertoire inventory by occasion rather than duplicating title lists across pages.
3. Keep every German-first user journey consistently German. `/en/` and the English planner use the same product structure as their German counterparts; do not create automatic translation fan-out.
4. After the visitor reviews the plan, offer Kim-Marie's verified contact section and a prefilled email draft. The site never sends or stores the enquiry itself.
5. Explain viola and string decisions through musical function and practical constraints.
6. Connect relevant visitors to Kim-Marie Borger's current official contact section without duplicating her commercial booking pages or unsupported service claims.
7. Preserve only exact, legitimate historic references with transparent rights and availability notes.

## Product shape

Auspicious Music is a tool-first planning product, not a single-tool microsite and not a general music magazine.

The primary journey is:

1. Start with an occasion or open the planner directly.
2. Receive three reasoned repertoire suggestions, a visible running order and the questions still worth discussing.
3. Explore repertoire or prepare one requested piece only when that solves the visitor's next decision.
4. Copy the reviewed plan and continue to Kim-Marie Borger's official contact section for the personal check.

The six occasion pages each own one natural German search and planning intent. They place a preconfigured, occasion-only quick selector near the top, then explain only what materially changes between wedding, reception, funeral, dinner, corporate event and birthday. Do not create exact-match "planner" URLs without query evidence; strengthen the existing occasion URL first.

The viola pages explain instrument-specific choices. Recording remains a smaller specialist branch for musicians and producers; it stays available through navigation and contextual links but does not compete with the event-planning journey on the homepage.

The planner is deliberately low-friction. A date is optional and defaults to "not decided". Supporting running-order details remain visible in the result. Generic event-law, GEMA, photography, videography, Ableton and broad production topics do not belong in the primary journey.

## Core routes

- `/viola/`
- `/eventmusik/`
- `/eventmusik/hochzeit/`
- `/eventmusik/sektempfang/`
- `/eventmusik/trauerfeier/`
- `/eventmusik/dinner/`
- `/eventmusik/firmenevent/`
- `/eventmusik/geburtstag/`
- `/eventmusik/unterricht/`
- `/repertoire/`
- `/recording/`
- `/tools/eventmusik-planer/`
- `/en/`
- `/en/tools/event-music-planner/`
- `/about/history-and-relaunch/`

`/tools/ceremony-planner/` permanently redirects to `/tools/eventmusik-planer/`.

Photography and videography are not independent clusters unless future evidence supports a real current offer and publishable assets.

`/eventmusik/unterricht/` and the former production/tool magazine routes remain accessible for readers following an old or direct link, but are no longer search landing pages or part of the core navigation. Unterricht is not an event-planner job.

## Booking boundary

- Auspicious Music creates a preparation plan, not a quote or booking.
- A named title is a planning suggestion, not confirmation of an exact version, notation, arrangement, date or performance right.
- Availability, ensemble, preparation effort, rights, price and contract are confirmed directly with Kim-Marie.
- The contact action copies the reviewed plan and opens `https://kim-marie-borger.com/#kontakt`. The email action uses `mailto:` as an alternative. Neither submits data to this site.

## Release gates

- Preview stays noindex.
- `/download/` and `/services/` remain permanently noindex.
- Unknown and spam legacy paths stay 404; no catch-all redirect.
- Original media requires a completed entry in `docs/relaunch/RIGHTS_AND_SOURCE_MANIFEST.md`.
- Run `pnpm check`, verify responsive UI and exercise the planner before deployment.

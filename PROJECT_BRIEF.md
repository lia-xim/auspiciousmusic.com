# Auspicious Music project brief

## Positioning

Auspicious Music is a new German-first Viola & Strings Lab: an expert reference and planning site for live viola, event-music workflows, repertoire decisions and acoustic-string recording. Kim-Marie Borger is the named current expert. Matthias Ramahi is the current publisher.

It is a modern successor on a historic domain, not a continuation of the former operator, catalogue, downloads, authorship or clients.

## Product priorities

1. Help visitors turn an occasion into a usable event-music plan with moments, cues, practical limits and repertoire ideas.
2. Maintain one source-backed repertoire inventory by occasion rather than duplicating title lists across pages.
3. Support German and English inside the planner while keeping German as the primary editorial language.
4. Open a prefilled email draft to Kim-Marie only after the visitor has reviewed the plan. The site never sends or stores the enquiry itself.
5. Explain viola and string decisions through musical function and practical constraints.
6. Connect relevant visitors to Kim-Marie Borger's current official site without duplicating her commercial booking pages or unsupported service claims.
7. Preserve only exact, legitimate historic references with transparent rights and availability notes.

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
- `/about/history-and-relaunch/`

`/tools/ceremony-planner/` permanently redirects to `/tools/eventmusik-planer/`.

Photography and videography are not independent clusters unless future evidence supports a real current offer and publishable assets.

## Booking boundary

- Auspicious Music creates a preparation plan, not a quote or booking.
- A named title is a planning suggestion, not confirmation of an exact version, notation, arrangement, date or performance right.
- Availability, ensemble, preparation effort, rights, price and contract are confirmed directly with Kim-Marie.
- The email action uses `mailto:` and opens a draft in the visitor's own email application. It does not submit data to this site.

## Release gates

- Preview stays noindex.
- `/download/` and `/services/` remain permanently noindex.
- Unknown and spam legacy paths stay 404; no catch-all redirect.
- Original media requires a completed entry in `docs/relaunch/RIGHTS_AND_SOURCE_MANIFEST.md`.
- Run `pnpm check`, verify responsive UI and exercise the planner before deployment.

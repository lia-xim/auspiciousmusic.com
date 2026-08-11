# auspiciousmusic.com

Static Astro relaunch of Auspicious Music as an independent publication for music production, Ableton, sound design, recording, and music for media.

The repository preserves the accepted HTML design in `design-source/`, then turns it into clean, directory-based Astro routes through `scripts/migrate-design.mjs`. Shared chrome, metadata, search, feeds, routing rules, and deployment hardening live in normal Astro source files rather than in the generated HTML screens.

## Stack

- Astro 7, strict TypeScript, static output
- Plain CSS and dependency-free browser JavaScript
- Vercel static deployment; no SSR adapter is required
- Local client-side search generated from page metadata
- Custom XML sitemap, RSS feed, robots endpoint, 404 page, and Vercel redirects/410 rules

## Commands

```bash
pnpm install --frozen-lockfile
pnpm migrate:design
pnpm astro check
pnpm build
pnpm validate:dist
pnpm dev --host 127.0.0.1 --port 4321
```

`pnpm migrate:design` is repeatable. It regenerates the migrated screens but preserves hand-written routes such as `/search/` and `/publishing-roadmap/`.

## Indexing safety

The default build is intentionally non-indexable:

- every HTML page receives `noindex,nofollow,noarchive`;
- `robots.txt` disallows the whole site;
- internal design screens, search, publishing roadmap, 404, and 410 remain noindex even after launch.

Only set `SITE_INDEXABLE=true` after the pre-launch gates below are complete. Vercel Preview deployments should keep the variable unset or false.

## Pre-launch gates

Do not attach the production domain or enable indexing until all of these are resolved:

1. Fill the real operator, postal address, responsible editor, and contact email in `/legal/` and `/privacy/`.
2. Replace placeholder author identity, software versions, test dates, generated concept photography, and any unverified factual claims.
3. Confirm rights for every historical download, image, audio example, quotation, and legacy resource. Never publish an old binary merely because its URL existed.
4. Connect the contact form to a named recipient and update the privacy notice before enabling submission.
5. Complete the backlink target export, add only semantically equivalent redirects, and promote confirmed hacked/spam paths to explicit Vercel `410` routes.
6. Run browser, accessibility, performance, and live-header checks against the final deployment.

The detailed editorial and URL plan is in `docs/relaunch/`.

## URL architecture

Core routes use stable, descriptive directories, including:

- `/music-production/`
- `/ableton/`
- `/sound-design/`
- `/recording/`
- `/music-for-media/`
- `/resources/` and `/resources/tools/`
- `/legacy/the-spy-guitar/` and `/legacy/bang-my-twister/`
- `/about/history-and-relaunch/`

Known equivalent historic paths are defined in `vercel.json`. The confirmed injected Envato support URL returns 410 at Vercel's routing layer. Unknown paths use the custom Astro 404; there is no catch-all homepage redirect.

## Repository map

- `design-source/` — immutable accepted design reference
- `src/components/` — shared header and footer
- `src/layouts/` — document, canonical, social metadata, and indexing gate
- `src/pages/` — clean public routes and static endpoints
- `public/assets/` — visual system and interaction scripts
- `scripts/migrate-design.mjs` — repeatable design-to-Astro migration
- `scripts/validate-built-site.mjs` — structural, link, asset, and noindex validation
- `docs/relaunch/` — strategy, content backlog, URL registry, and launch checklist
- `vercel.json` — legacy redirects, 410 response, caching, and security headers

## Deployment

A Vercel preview can be created with:

```bash
vercel --yes
```

The production domain must not be attached until ownership transfer, legal data, content verification, and indexing approval are complete.

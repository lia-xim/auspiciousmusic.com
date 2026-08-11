# auspiciousmusic.com

Static Astro relaunch of Auspicious Music as an independent publication for music production, Ableton, sound design, recording, and music for media.

The repository preserves the accepted HTML design in `design-source/`, while the maintained site lives in normal Astro layouts, components, data, and route files. The current publisher does not claim the former operator's identity, files, tests, or authorship. Historical URLs are retained only where their purpose can be documented honestly.

## Stack

- Astro 7, strict TypeScript, static output
- Plain CSS and dependency-free browser JavaScript
- Vercel static deployment; no SSR adapter is required
- Local client-side search generated from the route registry
- Custom XML sitemap, RSS feed, robots endpoint, 404 page, and Vercel redirects/410 rules

## Commands

```bash
pnpm install --frozen-lockfile
pnpm sync:content
pnpm check
pnpm dev --host 127.0.0.1 --port 4321
pnpm preview --host 127.0.0.1 --port 4321
node scripts/browser-qa.mjs
node scripts/browser-scroll-qa.mjs
```

`pnpm check` runs Astro diagnostics, creates the production build, and validates the generated site. `pnpm sync:content` keeps the route registry and client-side search index aligned.

`pnpm migrate:design` is an intentionally destructive bootstrap command. It is blocked unless `ALLOW_DESTRUCTIVE_DESIGN_MIGRATION=true` is set because it can overwrite edited pages. Do not run it during ordinary editorial work.

## Indexing safety

The default build is intentionally non-indexable:

- every public HTML page receives `noindex,nofollow,noarchive` unless launch indexing is explicitly enabled;
- `robots.txt` disallows the whole site while the launch gate is closed;
- internal design screens, search, the retired publishing-roadmap route, 404, and 410 remain noindex after launch.

Only set `SITE_INDEXABLE=true` after the production-domain and final launch checks are complete. Vercel Preview deployments should keep the variable unset or false.

## Pre-launch gates

Do not enable indexing until all of these are complete:

1. Attach the confirmed production domain and verify DNS, canonical URLs, HTTPS, and redirects on the live hostname.
2. Recheck every retained historical URL against the final backlink export. Redirect only genuinely equivalent paths; return injected, hacked, and unrelated paths as 410 or 404.
3. Confirm rights before publishing any historical binary, image, audio example, quotation, or former download. A URL history does not transfer copyright.
4. Recheck the German legal and privacy pages immediately before launch, especially if analytics, embeds, forms, a CDN, or additional processors are introduced.
5. Run browser, accessibility, performance, structured-data, and live-header checks against the final deployment.

The editorial and URL plan is in `docs/relaunch/`.

## URL architecture

Core routes include:

- `/music-production/`
- `/ableton/`
- `/sound-design/`
- `/recording/`
- `/music-for-media/`
- `/journal/`
- `/resources/` and `/resources/tools/`
- `/legacy/the-spy-guitar/` and `/legacy/bang-my-twister/`
- `/about/history-and-relaunch/`

Known equivalent historic paths are defined in `vercel.json`. The confirmed injected Envato support URL returns 410 at Vercel's routing layer. Unknown paths use the custom Astro 404; there is no catch-all homepage redirect.

## Repository map

- `design-source/` — immutable accepted design reference
- `src/components/` — shared header and footer
- `src/layouts/` — base, article, hub, and information layouts
- `src/data/articles.ts` — published article registry used by journal and feed surfaces
- `src/pages/` — public routes and static endpoints
- `public/assets/` — visual system and interaction scripts
- `scripts/sync-content-indexes.mjs` — route/search metadata synchronization
- `scripts/validate-built-site.mjs` — structural, link, asset, and indexing validation
- `scripts/browser-qa.mjs` — route and interaction browser QA
- `scripts/browser-scroll-qa.mjs` — scroll-reveal and representative mobile article QA
- `docs/relaunch/` — strategy, URL registry, and launch checklist
- `vercel.json` — legacy redirects, 410 response, caching, and security headers

## Deployment

A non-indexable Vercel preview can be created with:

```bash
vercel --yes
```

The production domain should remain detached until transfer, canonical-host, redirect, legal, and indexing approval are complete.

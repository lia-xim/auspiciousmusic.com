# Technical SEO and content audit - 2026-08-22

## Scope and launch status

This audit covers the live, indexable `https://www.auspiciousmusic.com/` property and the local Astro repository. The accepted project assignment remains a German-first music-planning publication with Kim-Marie Borger as the named current viola expert and Matthias Ramahi as operator and publisher. The site is a transparent successor project, not a continuation of the former operator or catalogue.

No DNS change, paid data-provider call, copied archive content, historic media publication, or blanket legacy redirect is part of this change.

## Evidence register

| Status | Evidence | Decision |
| --- | --- | --- |
| Verified | Pre-change live sitemap contained 42 canonical indexable URLs; all returned `200`, one H1, self-canonical, index/follow and parseable JSON-LD. | Preserve the working crawl and canonical system. |
| Verified | `/download/`, `/services/`, `/sitemap/` and `/search/` returned `200` with noindex; `/404/` returned `404`; `/410/` returned `410` with meta and header noindex. | Keep utility, spam-risk and status paths out of the public sitemap. |
| Verified | HTTPS, apex/www and path/query redirects were coherent; the old ceremony-planner URL permanently preserved its query on the event-planner destination. | No host, DNS or redirect change needed. |
| Verified | Live homepage Lighthouse: mobile 98 performance / 100 accessibility / 100 best practices / 100 SEO; desktop 100 in all four categories. Mobile LCP was 1.9 s, CLS 0.013 and TBT 150 ms in the synthetic run. | Do not churn the already efficient homepage asset path. |
| Verified | Enforced CSP, HSTS, MIME sniffing protection, referrer policy, permissions policy, frame protection, COOP and CORP were present live. | Preserve header configuration. |
| Supported | Philharmonia and Yamaha describe the viola as a lower-ranged member of the violin family, with construction and range differences relevant to arrangement choices. | Add a bounded viola-versus-violin decision guide; avoid universal sound claims. |
| Supported | Yamaha care guidance and current DWD warning information support dry, shaded, stable outdoor conditions and an explicit weather fallback. | Add a practical outdoor-strings planning guide without invented temperature or humidity limits. |
| Supported | Existing recording articles explain capture decisions, but the hub did not turn them into a reusable pre-session handoff. | Add a local recording-brief tool and make the recording hub's next step concrete. |
| Hypothesis | The three new user jobs can attract qualified discovery and help readers reach the planner or a source-led next step. | Measure impressions, engagement and tool completion after launch; do not promise rankings. |
| Rejected | More occasion, city, repertoire-title or keyword-variant pages. | No thin or programmatic fan-out. Strengthen existing occasion and repertoire pages instead. |
| Rejected | Rebuilding old photo/video sections or redirecting spam/legacy clusters to Kim-Marie or the homepage. | Rights and topical continuity are not established. Existing status and noindex decisions remain. |

## Page-action matrix

| URL | Primary user job | Action |
| --- | --- | --- |
| `/viola/viola-oder-violine/` | Decide which string voice or combination fits a live-music plan. | New, German, source-led guide with contextual links to viola and event planning. |
| `/eventmusik/live-streicher-draussen/` | Prepare site, cues and weather fallback for outdoor strings. | New, German, source-led checklist with DWD and instrument-care references. |
| `/tools/streicheraufnahme-briefing/` | Turn a recording idea into a structured, shareable brief. | New browser-local tool with copy, TXT download, reset and explicit open questions. |
| `/recording/` | Choose a recording method and next practical step. | Rewritten in German; unsupported session-service CTA removed; briefing tool added. |
| `/repertoire/` | Explore current repertoire and test a desired piece. | Keep and link contextually; already differentiated by repertoire data and Wunschstueck tool. |
| `/about/history-and-relaunch/` | Understand the former domain and current ownership/editorial boundary. | Keep; already extensive, source-transparent and useful without invented continuity. |
| `/download/`, `/services/` | Explain unavailable legacy/spam-risk paths. | Keep noindex and excluded from sitemap; no homepage redirect. |

## Hub and cluster map

- `/viola/` -> viola-versus-violin decision -> recording and event contexts.
- `/eventmusik/` -> occasion pages -> outdoor planning -> event planner -> repertoire / Wunschstueck check.
- `/recording/` -> home-recording and microphone guides -> recording brief tool.
- `/about/history-and-relaunch/` -> editorial policy, sources, authorship and current project boundary.

Each new indexable URL has one primary job, a self-canonical, unique title/description/H1, visible source context, matching structured data and at least one natural hub link.

## Implementation and local gates

- Added two distinct German guides and one browser-local tool; strengthened one existing hub.
- Localized shared article/hub chrome by page language.
- Added the new routes to navigation, tool discovery, search data and the central migration/content registries.
- The automatic sitemap now merges canonical routes from the registries and emits article `lastmod` from article metadata.
- Tightened built-site validation so external `.html` evidence URLs remain allowed while internal or same-host `.html` links still fail.
- Updated privacy disclosure for the new locally processed form fields and generated TXT file.
- `SITE_INDEXABLE=true pnpm check`: PASS. 81 Astro files, zero diagnostics; 55 pages built; 56 HTML files and 101 output files validated.
- SEO audit: PASS. 45 public routes, maximum click depth 3.
- `pnpm check:indexable`: PASS. Indexable production build passed every local gate.

## External gates

- Google Search Console authentication and sitemap submission: **NOT PROVEN** in this task. No authenticated GSC session was available, so no submission or property claim was made.
- Search demand, rankings and indexation response: hypotheses to measure after crawl and GSC data accumulate.
- Production deployment and final live regression results are recorded in the Portfolio material-change entry after deployment.
## Production verification - 2026-08-23

- Commit `fa402b4` was pushed to `origin/main` and deployed as Vercel production deployment `dpl_A28s59h11xkAPrNNVbBni5zVGyZh` (`READY`). Apex and `www` aliases resolve to this build.
- The live sitemap contains 45 URLs. All 45 returned `200`, a matching self-canonical, one H1, index/follow and valid JSON-LD. The crawl found 63 internal targets and no broken internal target.
- Live browser QA passed 16 core routes at 1440, 390 and 320 pixels plus planner, Wunschstueck and recording-brief interactions. Full QA passed 57 production routes, 122 route/viewport checks, Axe, keyboard/mobile navigation, 200%/400% reflow, forced colors, reduced motion, search, canvas and calculator checks. Scroll/reveal QA passed.
- `/download/` and `/services/` remain `200`/noindex. Unknown URLs return `404`; `/410/` returns `410` with `X-Robots-Tag: noindex, nofollow, noarchive`. `robots.txt` allows crawling and references the sitemap.
- The ceremony-planner legacy route returns permanent `308` to `/tools/eventmusik-planer/` while preserving its query. Apex-to-`www` and HTTP-to-HTTPS redirects are permanent and preserve path/query.
- Enforced CSP and HSTS remain present.
- Final Lighthouse 13.4.1 on the live homepage: mobile 99 performance / 100 accessibility / 100 best practices / 100 SEO, LCP 1.8 s, CLS 0 and TBT 100 ms; desktop 100/100/100/100, LCP 0.5 s, CLS 0.001 and TBT 20 ms. The desktop CLI emitted a Windows temp-directory `EPERM` only during cleanup after writing the complete JSON report.
- Google Search Console authentication and sitemap submission remain **NOT PROVEN**. No authenticated session was available and no submission was attempted.

## Positioning and crawl-consistency update - 2026-08-28

- Unified the visible product name as `Musikplanung & Viola`; removed the obsolete `Strings Lab` wording from current navigation, schema inputs, the about page and the legacy download-status boundary.
- Reordered the German navigation around occasions first and removed the duplicate planner menu item because the planner remains the primary header action. English navigation now marks links to German-only pages explicitly.
- Rewrote `/about/` around the actual user journey: occasion page, three suggestions, running order, open questions and personal review. Recording is documented as a smaller specialist branch.
- Corrected `rss.xml` to German and restricted it to the same indexable article policy used by the sitemap. A regression test now fails if a noindex archive route enters the feed.
- `SITE_INDEXABLE=true pnpm check` and `pnpm check:indexable`: PASS. 88 Astro files, zero diagnostics; 58 HTML pages and 104 output files validated; 30 public sitemap URLs; maximum click depth 2.
- Focused browser QA: PASS on 17 central routes at 1440, 390 and 320 pixels, including occasion suggestions, planner, requested-song and recording-brief interactions. Full QA: PASS on 60 routes and 128 route/viewport checks, including Axe, keyboard navigation, 200%/400% reflow, forced colors, reduced motion, site search and console errors.
- Local Chromium timing sample after warm dev-server startup: observed LCP ranged from 172 to 376 ms on the homepage, wedding page and planner at 390 and 1440 pixels. The transfer total from this development run is not a production payload measurement because Astro's development toolbar and modules dominate it.
- Search Console access for `sc-domain:auspiciousmusic.com`: **NOT PROVEN**. The available signed-in account reported no access to the property, so no sitemap submission or property change was attempted.

# Production readiness checklist

Status: LOCAL RELEASE CANDIDATE  
Last updated: 12 August 2026

Legend:

- **PASS** — reproduced in the current worktree.
- **NOT PROVEN** — requires a deployed domain, a different runtime or manual assistive-technology/human review.
- **BLOCKED** — a known problem prevents release.

## Current release verdict

| Area | State | Evidence |
| --- | --- | --- |
| Astro diagnostics | PASS | 63 files; 0 errors, warnings or hints |
| Preview build | PASS | 39 HTML pages; all pages noindex and robots-disallowed |
| Indexable build | PASS | 33 public sitemap/search routes; public pages indexable; permanent exclusions remain noindex |
| Generated-site integrity | PASS | 39 HTML pages and 59 output files; local links/assets resolved |
| Crawl graph | PASS | No sitemap orphan; maximum two clicks from homepage |
| Titles/descriptions/canonicals | PASS | Unique across public routes; explicit canonical host; no current length warnings |
| Structured data | PASS | Valid JSON parsing; Person/WebSite on public routes; Article/Breadcrumb on articles |
| Search index parity | PASS | Searchable route set equals XML sitemap route set |
| Human-voice/evidence pass | PASS | Public copy reviewed; unsupported archive counts, psychoacoustic thresholds and roadmap copy corrected |
| External references | PASS WITH NOTE | 18 checked; 17 direct 200 responses; Ableton bot-only 403 independently confirmed live |
| Node 22 local parity | NOT PROVEN | Machine and bundled runtime currently expose Node 24; Vercel must build with package engine `22.x` |
| Browser interaction and responsive QA | PASS | 39 routes across desktop/mobile plus 200%/400% reflow (86 route-viewport checks), keyboard navigation, search, calculator and scroll flows |
| Manual screenreader matrix | NOT PROVEN | Keyboard/reduced-motion/semantic checks exist; multi-screenreader manual pass remains |
| Synthetic lab performance | PASS | Slow-4G LCP 0.97–1.09 s, CLS 0–0.026 and 94–100 KB transfer on representative pages; not field CWV |
| Vercel file configuration | PASS | Uses supported high-level redirects, headers and trailing-slash rules; mixed legacy `routes` removed and audited |
| Live Vercel build and headers | NOT PROVEN | Worktree is not linked to a Vercel project |
| Canonical domain, DNS and HTTPS | NOT PROVEN | Requires final domain attachment |
| Live redirect and known-spam 404 behaviour | NOT PROVEN | Requires deployment on the canonical host |
| Search Console ownership/indexing | NOT PROVEN | Must happen after production-domain approval |

## Reproducible local gates

```bash
pnpm install --frozen-lockfile
pnpm sync:content
pnpm check
pnpm check:indexable
```

`pnpm check` builds the safe preview state. `pnpm check:indexable` builds with `SITE_INDEXABLE=true` and proves that public routes become indexable while search, internal screens, retired routes and error pages remain excluded.

Before committing, `git diff --check` must also pass and the worktree must contain no temporary helper or generated QA debris.

## Content and editorial gate

- [x] Eight published guides have a defined task, method, source list and limitations.
- [x] Relationship disclosures appear where the publisher's related project is linked.
- [x] No testimonial, customer, product test, session photograph or audio example is fabricated.
- [x] Archive pages do not claim the former operator's identity, copyright or files.
- [x] Only two legacy resources are described as verified records.
- [x] Empty planned-template and planned-tool sections are removed from indexable pages.
- [x] Legal, privacy, contact, author, editorial and history pages name the responsible publisher.
- [ ] Final human read on the deployed typography and line breaks.
- [ ] Recheck all dated/changeable external-source claims immediately before indexing.

## SEO and indexation gate

- [x] Preferred host is `https://www.auspiciousmusic.com` in Astro config, canonicals, sitemap and RSS.
- [x] XML sitemap contains only public index candidates.
- [x] Local search contains exactly the sitemap route set.
- [x] RSS contains all eight articles with real publication dates and stable GUID URLs.
- [x] Page titles and meta descriptions are unique.
- [x] H1 and SERP title can differ without changing the article headline schema.
- [x] All public routes are reachable from the homepage within two clicks.
- [x] Preview builds use page-level noindex plus robots disallow.
- [x] Indexable build keeps `/search/`, `/internal/*`, `/publishing-roadmap/`, 404 and 410 noindex.
- [ ] Verify the live HTML response after Vercel environment variables are applied.
- [ ] Submit the final sitemap and inspect representative URLs in Search Console.
- [ ] Monitor for indexed spam/legacy paths and add 410 only when the unwanted path is positively identified.

## Domain and Vercel gate

- [ ] Obtain explicit approval to publish the site and its legal/contact data externally.
- [ ] Link or create the correct Vercel project without overwriting another project.
- [ ] Confirm project root, Astro framework detection, `pnpm` lockfile and `dist` output.
- [ ] Confirm Vercel uses Node 22 from `package.json`.
- [ ] Keep `SITE_INDEXABLE` unset/false on Preview.
- [ ] Set `SITE_INDEXABLE=true` only for Production after all live checks pass.
- [ ] Attach both apex and `www`; redirect the non-canonical host to `www` in one hop.
- [ ] Confirm automatic TLS, no certificate warning and no mixed content.
- [ ] Verify Vercel headers, asset caching, redirects and the identified injected path returning 404.
- [ ] Confirm no unintended analytics, Speed Insights, third-party embed or form processor is enabled without updating privacy text.

## Security and privacy gate

- [x] `X-Content-Type-Options: nosniff` configured.
- [x] `Referrer-Policy: strict-origin-when-cross-origin` configured.
- [x] Camera, microphone and geolocation disabled by Permissions Policy.
- [x] Framing denied with `X-Frame-Options: DENY`.
- [x] Fonts, styles, scripts and editorial images are served locally.
- [x] Search queries are processed in the browser and not sent to a search service.
- [ ] Decide on HSTS only after apex/`www` HTTPS and subdomain policy are final.
- [ ] Add a CSP only after inline calculator/JSON-LD requirements are deliberately handled; do not ship a cosmetic policy with broad unreviewed exceptions.
- [ ] Confirm Vercel log/data-processing settings against the privacy page.

## Accessibility and UX gate

- [x] One main landmark and one H1 per generated page.
- [x] Skip link, semantic navigation, visible focus styles and labelled controls exist.
- [x] Images have alt attributes and intrinsic dimensions.
- [x] Motion has a reduced-motion path; the string interaction is optional, not content-bearing.
- [x] Tool results use status regions and remain keyboard-operable in source.
- [x] Run final desktop/mobile browser QA across every generated route plus navigation, search and calculator interactions.
- [x] Test representative 200%/400% reflow, keyboard menu/Escape/focus restoration, forced-colours and reduced motion in Chrome automation.
- [ ] Run at least NVDA + current Chrome/Firefox on navigation, one article, search and one calculator.
- [ ] Correct the accessibility statement if the manual test reveals additional limitations.

## Performance gate

- [x] Static Astro output; no UI framework runtime.
- [x] Local fonts and dependency-free browser scripts.
- [x] Non-critical editorial images use lazy loading and intrinsic dimensions.
- [x] Long-lived immutable cache configured for `/assets/*`.
- [x] Record dependency-free Chrome lab metrics on the final static build: representative pages stay below 100 KB transfer with sub-1.1 s synthetic Slow-4G LCP and CLS below 0.03.
- [ ] Run Lighthouse mobile performance/accessibility/best-practices/SEO on the deployed preview.
- [ ] Inspect LCP, CLS and INP on the deployed canonical host.
- [ ] Confirm the hero canvas pauses or remains inexpensive off-screen and under reduced motion.
- [x] Record actual transfer sizes and script payloads; no representative page exceeded 101 KB or 7.4 KB of transferred JavaScript.

## Launch sequence

1. Run `pnpm sync:content`, `pnpm check`, `pnpm check:indexable` and browser QA.
2. Commit the clean release candidate.
3. Obtain explicit external-publication approval for the legal/contact data.
4. Create a noindex Vercel Preview and verify routes, design, interactions and headers.
5. Attach the production domain with indexing still disabled.
6. Verify apex/`www`, TLS, canonicals, redirects, known spam-path 404s, sitemap, RSS, robots and privacy assumptions live.
7. Set `SITE_INDEXABLE=true` for Production and redeploy.
8. Recheck rendered robots and `robots.txt`; then submit sitemap in Search Console.
9. Watch indexing, coverage, crawl errors and unexpected legacy URLs for the first 30 days.

## Hard stop conditions

Do not enable indexing if any of these is true:

- legal/contact data is not approved for publication;
- canonical host or HTTPS is inconsistent;
- preview/noindex variables are leaking into Production or vice versa;
- a sitemap route is noindex, orphaned or missing;
- archive wording claims rights, files or tests that cannot be proved;
- Vercel introduces a processor or embed not covered by the privacy page;
- the final browser/mobile QA has a blocking navigation or calculator defect.

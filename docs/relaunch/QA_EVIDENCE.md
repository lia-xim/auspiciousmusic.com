# Release-candidate QA evidence

Status: LOCAL RELEASE CANDIDATE  
Checked: 12 August 2026

This document records reproducible evidence for the current static Astro build. It distinguishes local proof from facts that can only be established after a Vercel project and the canonical domain exist.

## Environment

- Astro 7.2.1, static output
- pnpm 10.33.2
- Local test runtime: Node 24.15.0
- Declared deployment runtime: Node 22.x in `package.json`
- Browser automation: installed Google Chrome through Playwright
- Canonical target: `https://www.auspiciousmusic.com`

The Node 24/22 difference is an explicit residual risk. A green local build does not prove the Vercel Node 22 build until that build has run.

## Automated gates

| Gate | Result | Reproduced evidence |
| --- | --- | --- |
| Preview safety build | PASS | `pnpm check`: diagnostics, safe noindex build, built-site validation and SEO audit |
| Indexable production build | PASS | `pnpm check:indexable`: 63 Astro files with 0 errors/warnings/hints; 39 pages; 59 output files |
| Public crawl/index set | PASS | 33 sitemap/search routes; route sets identical; maximum click depth 2 |
| Metadata and structured data | PASS | Unique titles/descriptions/canonicals; parseable JSON-LD; Person/WebSite and Article/Breadcrumb coverage |
| Browser route matrix | PASS | 39 routes at 1440×900 and 390×844 plus representative 640px/320px reflow checks: 86 route-viewport checks |
| Interactive flows | PASS | Mobile menu by pointer and keyboard, Escape close, focus restoration, search, homepage canvas trigger and delay calculator |
| Motion and contrast modes | PASS | Reduced-motion and forced-colours media emulation active without overflow or runtime error |
| Long-page rendering | PASS | Homepage reveal states on desktop/mobile and a representative long article on mobile |
| External references | PASS WITH NOTE | 18 links checked: 17 direct 200 responses; one Ableton help URL returned bot-only 403 and was independently confirmed live |
| Vercel file configuration | PASS | Supported high-level redirects/headers/trailing slash only; mixed legacy `routes` is prohibited by the SEO audit |
| Diff hygiene | PASS | `git diff --check` passed; the worktree contains no temporary QA/helper artifacts |

## Browser findings resolved during this pass

1. The HTML sitemap jumped from H1 to H3. Sitemap entries now use H2.
2. `vercel.json` mixed legacy `routes` with `redirects`, `headers` and `trailingSlash`. The conflicting route was removed; the known injected URL intentionally falls through to 404.
3. A long code/link value forced one article 47px beyond a 320px viewport. Article grid children now shrink correctly and wrap only where necessary.

## Synthetic performance

Measurements used the final static preview. Slow-4G scenarios use 150ms latency, 1.6Mbps down, 0.75Mbps up and 4× CPU throttling. They are lab measurements, not field Core Web Vitals.

| Scenario | LCP | CLS | Transfer | JavaScript |
| --- | ---: | ---: | ---: | ---: |
| Homepage, desktop local | 448ms | 0.026 | 100,397 bytes | 7,357 bytes |
| Homepage, mobile Slow-4G | 1,092ms | 0.026 | 100,397 bytes | 7,357 bytes |
| Article, mobile Slow-4G | 972ms | 0 | 94,538 bytes | 3,149 bytes |
| Calculator, mobile Slow-4G | 968ms | 0.001 | 94,285 bytes | 3,149 bytes |

No representative page exceeded 101KB transferred or 7.4KB transferred JavaScript.

## Evidence storage

Browser JSON reports and screenshots are intentionally stored outside Git. They are build evidence, not website assets. The repository contains only reusable QA runners and this summarized release record.

## Not proven locally

- Vercel's actual Node 22 install and build
- Vercel response headers, redirects, injected-path 404 and preview/production environment separation
- apex/`www` DNS, canonical redirect, TLS and mixed-content behaviour
- deployed Lighthouse scores and real-user Core Web Vitals/INP
- NVDA/VoiceOver behaviour and a full manual assistive-technology matrix
- Search Console ownership, sitemap processing and post-launch indexing
- legal correctness beyond faithfully publishing the operator data and privacy assumptions supplied for this site

## Release boundary

The source is a local release candidate. Do not deploy it publicly until the owner explicitly approves publication of the site together with the Impressum and contact data, and the correct Vercel project has been identified without ambiguity.

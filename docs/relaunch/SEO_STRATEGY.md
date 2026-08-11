# Auspicious Music SEO strategy

Status: 12 August 2026  
Owner: Matthias Ramahi  
Scope: the new independent publication at `https://www.auspiciousmusic.com`

## Objective

Build a small, credible music-technology publication whose pages earn discovery by solving a specific task. The old domain history is context, not borrowed authorship. Search visibility is expected to come from useful guides, calculators, clear internal relationships and genuinely relevant surviving links rather than from preserving backlink volume at any cost.

The first release deliberately favours eight substantial guides, three working calculators and two rights-aware archive records over a large inventory of thin pages.

## Evidence register

| Statement or asset | Evidence state | Release treatment |
| --- | --- | --- |
| Matthias Ramahi is the current publisher and contact | Verified from the publisher's public legal page and repository configuration | May appear in legal, contact, byline and Person structured data |
| The former domain covered Ableton, Max for Live, controller and sampled-instrument topics | Supported by surviving external references and archive records | Describe conservatively; do not claim complete former inventory |
| The Spy Guitar and Bang My Twister were associated with the former site | Supported by archive/backlink records; ownership was not transferred | Archive record only; no mirrored binary or former authorship claim |
| Current technical guides have been tested on every named product/setup | Rejected | Each article states whether it is source-based, tested or archival |
| The current publisher owns former downloads, text, images or software | Rejected | Do not republish unless provenance, integrity and rights are established |
| High backlink counts automatically confer authority | Rejected | Retain only semantically equivalent historic URLs; spam paths receive 404/410 |
| Preview deployments may be indexed | Rejected | Preview builds are `noindex` and robots-disallowed by default |
| Production pages may be indexed after launch gates pass | Supported by explicit `SITE_INDEXABLE=true` release control | Verify rendered robots, sitemap, canonical and live headers before enabling |

## Audience and search tasks

1. Music producers who need an Ableton Project to survive another computer.
2. Ableton users designing controller mappings or small sampled instruments.
3. Musicians and engineers comparing viola recording positions in a domestic room.
4. Editors and producers deciding between live strings, a library or a hybrid.
5. Small film teams organising music-clearance evidence before delivery.
6. Couples, coordinators and performers planning flexible live ceremony music.
7. Working musicians who need a quick, local tempo, pitch or frequency calculation.
8. People following an old Auspicious Music reference who need an honest status page.

## Information architecture

```text
Home
├── Journal
├── Music Production
│   └── Ableton project handoff
├── Ableton Live
│   ├── MIDI Fighter Twister mapping method
│   ├── Ableton project handoff
│   └── Sampled instrument workflow
├── Sound Design
│   ├── Sampled instrument workflow
│   ├── Record strings or use a library
│   └── Viola microphone placement
├── Recording
│   ├── Viola microphone placement
│   ├── Recording viola at home
│   └── Record strings or use a library
├── Music for Media & Events
│   ├── Live viola for a wedding ceremony
│   ├── Music clearance for a small film
│   └── Ableton project handoff
├── Resources
│   ├── Tools
│   │   ├── Delay and reverb time
│   │   ├── Note and frequency
│   │   └── Sample pitch and rate
│   ├── Glossary
│   └── Legacy resource status
└── Publication
    ├── About, author and editorial policy
    ├── History and relaunch
    ├── Contact and legal/privacy/accessibility
    └── HTML sitemap and RSS
```

Every public sitemap route is reachable from the homepage in no more than two internal clicks. Related-article links connect adjacent tasks rather than repeating the primary navigation.

## Page-action matrix

| Route group | Role | Primary intent | Index treatment | Action |
| --- | --- | --- | --- | --- |
| `/` | Editorial home | Understand the publication and choose a task | Index on approved production build | Keep concise; point to hubs, tools, journal and archive boundary |
| `/journal/` | Article index | Browse all published guides | Index | List only published articles with real dates |
| Five topic hubs | Cluster navigation | Explore a discipline and its decision guides | Index | Keep unique intro, principles and cross-cluster links |
| Eight article routes | Task guide | Complete or frame one concrete decision | Index | Preserve method, sources, limits, Article and Breadcrumb schema |
| `/resources/` | Resource hub | Find calculators, glossary and verified archive records | Index | Do not show unfinished templates as live content |
| Three calculator routes | Interactive utility | Calculate tempo, pitch, rate or frequency values | Index | Keep formulas visible and conventions labelled as starting points |
| `/resources/glossary/` | Supporting reference | Resolve a term used by the guides | Index | Avoid universal psychoacoustic or platform claims |
| `/download/` | Legacy status hub | Check whether a former resource is available | Index | Describe only verified records; never imply a complete old inventory |
| Two `/legacy/` routes | Archive record | Resolve a surviving historic reference | Index | No mirrored file, borrowed identity or unsupported compatibility claim |
| About/author/policy/history | Trust and provenance | Verify publisher, method and domain transition | Index | Keep ownership, AI-assistance and correction policy explicit |
| Contact/legal/privacy/accessibility | Operational trust | Reach the publisher and understand legal/data/accessibility state | Index | Revalidate when infrastructure or provider use changes |
| `/sitemap/` | Human navigation | See all public pages | Index | Match public XML sitemap route set |
| `/search/` | Internal utility | Search local route metadata | Permanent noindex | Exclude from XML sitemap; local browser processing only |
| `/internal/*` | Design documentation | Internal QA | Permanent noindex | Never expose as search content |
| `/publishing-roadmap/` | Retired draft | Explain an old internal route | Permanent noindex | Do not link as editorial content |
| `/404/`, `/410/` | Error handling | Resolve missing or intentionally removed paths | Permanent noindex | Never include in sitemap or client search index |

## On-page standards

- One descriptive H1 per page; the document title may be shorter for SERP readability.
- One absolute canonical on the preferred `www` HTTPS host.
- Unique descriptions written as page summaries, not keyword lists.
- Article pages expose real publication/modified dates, author, section, sources and relationship disclosures.
- Structured data must match visible content. Current graph: Person + WebSite globally; Article + BreadcrumbList on article pages.
- Images need real dimensions and useful alt text, or an empty alt when decorative.
- Internal links use ordinary crawlable `<a href>` elements and meaningful anchor text.
- No page exists only to catch a keyword or an inherited backlink.

## Historical URL policy

Redirect only when the new destination fulfils substantially the same user intent. A former download page may point to a transparent archive record, but an injected gambling, adult, hacked, doorway or unrelated support path must not inherit a homepage redirect. Unknown paths remain 404; positively identified unwanted paths may return 410.

The versioned redirect decisions live in `URL_MIGRATION_REGISTRY.md` and `vercel.json`.

## Measurement plan

### First 30 days after indexing

- Verify domain property, canonical host and sitemap in Google Search Console.
- Inspect indexing for the homepage, five hubs, eight guides, three calculators and two archive records.
- Record crawl errors and unexpected indexed parameters/legacy paths.
- Measure impressions by page and query without changing copy from a handful of early observations.

### Days 31–60

- Compare hub-to-article discovery and identify pages with impressions but unclear intent alignment.
- Improve titles or intros only where query evidence and page purpose agree.
- Add firsthand evidence to guides when a real session, product test or original asset exists.
- Review surviving editorial backlinks and update archive records if provenance improves.

### Days 61–90

- Decide which cluster has earned expansion based on impressions, engaged visits, corrections and reader questions.
- Publish the next page only when it adds a distinct task; consolidate overlapping drafts.
- Recheck internal click depth, sitemap health, Core Web Vitals and accessibility issues.

## Primary technical references

- Google Search: creating helpful, reliable, people-first content — https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Google Search: structured data introduction — https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
- Google Search: crawlable links — https://developers.google.com/search/docs/crawling-indexing/links-crawlable
- Google Search: build and submit a sitemap — https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- Astro: deploy a static Astro site to Vercel — https://docs.astro.build/en/guides/deploy/vercel/

## Decision log

- 12 Aug 2026: Removed empty template and planned-tool sections from public resource pages.
- 12 Aug 2026: Replaced claims of a complete six-item legacy archive with two verified records.
- 12 Aug 2026: Added dual preview/indexable build gates, schema/crawl audit and search-index/sitemap parity.
- 12 Aug 2026: Separated long on-page article headings from shorter SERP titles where needed.
- 12 Aug 2026: Rewrote unstable pre-launch copy into release-state-independent language.

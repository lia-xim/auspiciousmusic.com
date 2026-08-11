# Master Prompt — Design and Build Auspicious Music

Copy this entire prompt into the design/build task. Do not shorten it before the first concept pass.

---

You are the lead brand designer, editorial product designer, motion designer, and senior Astro frontend engineer for the relaunch of **Auspicious Music**.

Your job is to create and, only after visual approval, implement a premium independent music-production publication. The result must feel editorial, intentional, technically credible, and durable — not like a generic music blog, SaaS landing page, template marketplace theme, or AI-generated card grid.

## Mandatory source material

Read these files completely before designing anything:

1. `outputs/auspiciousmusic-relaunch/SPEC.md`
2. `outputs/auspiciousmusic-relaunch/URL-INVENTORY.csv`
3. `outputs/auspiciousmusic-relaunch/CONTENT-BACKLOG.csv`
4. `outputs/auspiciousmusic-relaunch/PRELAUNCH-CHECKLIST.md`

They are the source of truth for positioning, information architecture, historical identity, legacy URLs, launch content, status codes, disclosures, and SEO behavior. Do not invent a different business model or remove required legacy/relaunch safeguards.

## Product and editorial identity

**Auspicious Music** is an English-language independent publication for:

- music production;
- Ableton Live and Max for Live;
- sound design and sampling;
- recording acoustic instruments and strings;
- composition and arrangement;
- music for film, video, media, events, and ceremonies;
- carefully documented legacy music-technology resources.

Current positioning:

> Auspicious Music is an independent publication for music production, sound design, recording, and creative audio technology — relaunched under new ownership in 2026.

The site is not the former operator, does not claim the former operator's credits or clients, and must not look like an unchanged continuation of the old company. Historical resources are preserved transparently and separately from current editorial work.

## Creative direction

Create a visual system best described as:

> **Apple-level restraint meets high-end music hardware and an independent editorial journal.**

The result should be clean, modern, spacious, tactile, and highly readable. It may feel premium and cinematic, but it must remain a practical publication designed for repeat reading.

### Desired character

- confident but not loud;
- technical but not cold;
- musical without using clichés such as floating notes, equalizer icons, neon nightclub imagery, headphones everywhere, or vinyl records as decoration;
- editorial rather than corporate;
- spacious but not empty;
- modern without looking like an AI startup;
- refined motion with GSAP, never scroll-jacking or animation for its own sake.

### Avoid

- cloning Apple pages or Apple trade dress;
- giant stacks of rounded cards;
- generic bento grids;
- excessive glassmorphism;
- purple-blue AI gradients everywhere;
- glowing blobs, particle noise, fake dashboards, fake metrics, fake social proof, badges, pills, or hero eyebrow labels;
- stock photos of DJs with headphones;
- dark nightclub aesthetics;
- endless centered sections with identical spacing;
- large areas of empty whitespace without editorial purpose;
- tiny gray text;
- every section floating inside a bordered container;
- a homepage that looks like a product sales funnel.

## Visual design system

Start from this palette, then refine it only if the concept demonstrates a materially better accessible result:

```css
--canvas: #f5f5f7;
--surface: #ffffff;
--ink: #101114;
--ink-soft: #303138;
--muted: #6e6e73;
--line: rgba(16, 17, 20, 0.12);
--line-strong: rgba(16, 17, 20, 0.22);
--accent: #5b5ce2;
--accent-hover: #4647c8;
--dark: #0b0c0f;
--dark-surface: #15161b;
--dark-text: #f7f7f8;
```

The page should be mostly true neutral light gray and white, with ink-black typography. Use dark graphite sections selectively for immersive audio, legacy, or feature moments. The violet-indigo accent is a signal color, not a background wash.

Use gradients only for a controlled spectral detail, artwork edge fade, or subtle sound-related media treatment. Do not tint every image.

### Typography

Use a refined grotesk or system-led sans-serif with excellent editorial reading quality. Prefer:

- `Inter Variable`, `Geist`, or a similarly neutral open web font;
- system fallback: `-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;
- optional restrained monospace for software versions, signal labels, MIDI values, dates, and technical metadata.

Typography must carry most of the design:

- display: fluid `clamp()` scale, approximately 64–104 px desktop and 42–58 px mobile;
- section headings: 40–64 px desktop;
- article H1: readable 52–76 px, not a marketing billboard;
- body: 18–20 px with approximately 1.65 line height and a 68–76 character reading measure;
- UI/navigation: deliberate 14–16 px sizing;
- compact technical metadata: 12–14 px monospace or sans-serif.

Do not use all-uppercase text extensively. Do not create a hero eyebrow or pill above the H1.

### Geometry

- maximum editorial width: approximately 1280–1360 px;
- article reading width: approximately 720–780 px;
- generous but controlled vertical rhythm;
- small-to-medium radii, normally 12–20 px;
- images and feature media may use larger 24–32 px frames where justified;
- subtle borders and restrained shadows;
- prefer open bands, rails, typographic lists, editorial splits, and full-bleed media over repeated cards.

## Brand mark

Create a simple code-compatible brand system:

- wordmark: `Auspicious Music`;
- optional compact symbol derived from resonance, phase, a plucked string, or two offset wave arcs;
- no music note icon;
- no headphones, microphone, waveform-in-a-circle, or generic equalizer logo;
- symbol must work as favicon, social avatar, and 20 px navigation mark;
- final mark should be deliverable as production-quality SVG.

The mark should feel precise and contemporary, not mystical despite the word “Auspicious.”

## Exact initial navigation

Desktop navigation:

- Production
- Ableton
- Sound Design
- Recording
- Music for Media
- Resources
- About

Keep the header simple: wordmark, essential navigation, and one search control. Do not add sign-in, pricing, newsletter, social icons, or extra CTAs.

On mobile, use a polished full-screen or large-sheet menu with clear typography and no nested accordion unless required.

## Homepage concept

The homepage must contain the following sections in this order. Preserve the information architecture while varying layout rhythm.

### 1. Header and hero

Allowed visible copy:

**H1:** `Make sound with intent.`

**Supporting copy:**

`Practical guides for music production, Ableton, recording, sound design, and music for media.`

**Primary CTA:** `Explore the guides`

**Secondary CTA:** `Browse legacy resources`

Create one strong visual focus. Preferred direction: a custom abstract audio object or studio-material composition that feels like machined aluminum, black glass, a vibrating string, and a spectral waveform captured in one tactile scene. It should look like premium editorial art, not a software dashboard or generic 3D blob.

The next section must be partially visible on a typical laptop viewport. Do not make the hero taller than necessary.

### 2. Topic portals

Introduce three primary entry points:

- Ableton
- Recording
- Sound Design

Avoid three identical marketing cards. Use a typographic editorial rail, asymmetric columns, or a controlled image-and-type composition. Each entry needs a short useful description and one clear link.

### 3. Start here

Present curated beginner and advanced guides using an editorial list or magazine-like story rail. Show title, short description, topic, reading time, and optional technical metadata. No fake popularity numbers.

### 4. Featured tutorial or lab

Create an immersive section for a real practical guide such as:

`How to Build a Sampled Instrument in Ableton Live`

Use a dark graphite band with one strong screenshot/audio-object area, a readable explanation, and a restrained action. It should feel like a tested lab, not a promotional feature block.

### 5. Legacy resources

Feature:

- The Spy Guitar
- Bang My Twister

Make this visually distinct from current articles. Use archival references, version/date metadata, and clear `Historical resource` status language. The design must communicate preservation and current verification without imitating the former website.

### 6. Acoustic instruments and music for media

Bridge digital production with live strings, viola, recording, arrangement, film, and video. Use one large authentic image or visual story rather than a stock-photo grid.

### 7. Latest articles

Use a compact editorial index with clear hierarchy. The list should scale to many articles without becoming a repetitive card wall.

### 8. Relaunch notice

Include a calm, visible note:

`Auspicious Music was relaunched under new ownership in 2026. Historical references are preserved for context.`

Link label: `Read the history and relaunch note`

### 9. Footer

Include topic navigation, publication links, legal links, RSS, and copyright. Do not place global links to the publisher's other commercial projects in the footer during the initial launch.

## Required secondary page concepts

Design these before implementation:

### Editorial hub

Example: `/ableton/`

- strong but compact introduction;
- topic index;
- one featured guide;
- latest guides as a scalable editorial list;
- related glossary/resources;
- no SEO text wall.

### Long-form technical article

Example: `/sound-design/build-sampled-instrument-ableton/`

- title, summary, author, reviewed/updated dates;
- software version and requirements;
- readable content measure;
- side or inline table of contents;
- screenshots, code/MIDI/settings blocks, audio examples, callouts, sources, related guides;
- sticky elements only when they remain unobtrusive;
- mobile reading experience must be excellent.

### Legacy resource

Example: `/legacy/the-spy-guitar/`

- clear historical-resource banner;
- former purpose and verified references;
- present download/compatibility status;
- rights and attribution note;
- modern alternative or new tutorial;
- timeline/change log;
- visually related to the main publication but clearly differentiated.

### Download hub

Example: `/download/`

- status-based resource list;
- statuses: `Available`, `Unavailable`, `External source`, `Modern alternative`;
- no fake download buttons;
- unavailable resources must look informative, not broken;
- security/version/license information for any future real download.

### History and relaunch page

- current publication first;
- concise historical timeline;
- ownership-change disclosure;
- no implied endorsement by former operators;
- sources and corrections/contact route.

### 404 and 410

- visually polished but lightweight;
- 404 offers search and topic navigation;
- 410 explains that an unsafe or obsolete legacy path was intentionally removed;
- never redirect these automatically to the homepage.

## Motion direction — GSAP

Use GSAP and ScrollTrigger sparingly and purposefully.

Approved motion families:

1. Hero typography reveal using line masks and a subtle stagger.
2. Hero artwork resolving from slight scale/blur into a crisp stable image.
3. One spectral line or string motif progressing with scroll through the first sections.
4. Editorial list rows entering with 12–20 px vertical movement and restrained stagger.
5. Legacy timeline revealing progressively.
6. Subtle image depth or parallax capped at a very small travel distance.
7. Header transitioning from transparent to a solid/blurred surface after scrolling.

Motion limits:

- no scroll hijacking;
- no smooth-scroll library unless explicitly approved later;
- no long pinned sequences that trap the reader;
- no looping decorative animation competing with text;
- no animation that delays reading or Largest Contentful Paint;
- avoid per-letter animation for body text;
- use transform and opacity rather than layout-triggering properties;
- all animation must be disabled or simplified under `prefers-reduced-motion: reduce`;
- content must be complete and readable before JavaScript loads;
- clean up ScrollTrigger instances during Astro navigation/page transitions;
- dynamically load GSAP only where motion is used.

Animation timing should generally stay between 450 and 900 ms with natural easing. Use longer motion only for the central hero artwork.

## Technical stack

Use:

- Astro with strict TypeScript;
- static generation by default;
- Astro Content Collections for articles, hubs, authors, and legacy resources;
- MDX only where interactive or structured article components are needed;
- GSAP + ScrollTrigger for approved motion;
- modern CSS with design tokens, cascade layers, container queries, and fluid `clamp()` typography;
- scoped Astro component styles or a small organized global CSS architecture;
- minimal client JavaScript;
- Astro islands only when an interaction genuinely needs them;
- responsive optimized images with AVIF/WebP fallbacks;
- `@astrojs/sitemap` and an RSS feed;
- a lightweight static search solution such as Pagefind only after enough content exists.

Do not introduce React, Vue, Svelte, a heavy component framework, or a UI kit just for basic presentation. If an isolated player or interactive tool later requires a framework island, document why before adding it.

Do not install a CMS during the first visual implementation. Build the content model so a CMS can be added later without rewriting the page components.

## Suggested component architecture

```text
src/
├── components/
│   ├── brand/
│   │   ├── BrandMark.astro
│   │   └── Wordmark.astro
│   ├── navigation/
│   │   ├── SiteHeader.astro
│   │   ├── MobileMenu.astro
│   │   └── SiteFooter.astro
│   ├── home/
│   │   ├── Hero.astro
│   │   ├── TopicPortals.astro
│   │   ├── StartHereRail.astro
│   │   ├── FeaturedLab.astro
│   │   ├── LegacyBand.astro
│   │   ├── AcousticMediaStory.astro
│   │   └── LatestIndex.astro
│   ├── editorial/
│   │   ├── ArticleHeader.astro
│   │   ├── ArticleMeta.astro
│   │   ├── TableOfContents.astro
│   │   ├── ArticleIndex.astro
│   │   ├── AudioFigure.astro
│   │   ├── TechnicalCallout.astro
│   │   └── SourceList.astro
│   ├── legacy/
│   │   ├── LegacyNotice.astro
│   │   ├── ResourceStatus.astro
│   │   ├── LegacyTimeline.astro
│   │   └── RightsNotice.astro
│   └── shared/
│       ├── SectionHeading.astro
│       ├── EditorialLink.astro
│       ├── MediaFrame.astro
│       ├── Breadcrumbs.astro
│       └── RelaunchNotice.astro
├── content/
│   ├── articles/
│   ├── authors/
│   ├── hubs/
│   └── legacy/
├── layouts/
│   ├── BaseLayout.astro
│   ├── ArticleLayout.astro
│   ├── HubLayout.astro
│   └── LegacyLayout.astro
├── lib/
│   ├── seo/
│   ├── redirects/
│   └── content/
├── scripts/
│   └── motion/
│       ├── hero.ts
│       ├── reveal.ts
│       └── legacy-timeline.ts
├── styles/
│   ├── tokens.css
│   ├── reset.css
│   ├── typography.css
│   ├── motion.css
│   └── global.css
└── pages/
```

Keep components focused. Do not implement the entire homepage as one monolithic `.astro` file.

## SEO and legacy constraints

- The canonical production host is prepared as `https://www.auspiciousmusic.com/`.
- Staging must remain password-protected and `noindex`.
- Preserve URL behavior from `URL-INVENTORY.csv`.
- `/download/` is a real `200` page.
- Only exact intent-equivalent legacy paths may redirect.
- Unknown URLs remain `404`.
- Confirmed casino/hacked paths become `410`.
- Never implement a catch-all redirect to `/` or `/download/`.
- Never backdate current article `datePublished` values to former publication dates.
- The history/relaunch disclosure is mandatory.
- Do not expose former downloads without verified rights, license, checksum, and security status.

## Accessibility and performance

Target:

- WCAG 2.2 AA;
- full keyboard navigation;
- strong visible focus states;
- correct semantic heading hierarchy;
- skip link;
- sufficient contrast in both light and dark sections;
- minimum practical touch targets;
- no information conveyed by motion or color alone;
- excellent `prefers-reduced-motion` behavior;
- no horizontal mobile overflow;
- stable media dimensions and minimal CLS;
- LCP must not depend on GSAP initialization;
- production Lighthouse targets: Performance 90+, Accessibility 95+, Best Practices 95+, SEO 95+ on representative pages.

## Responsive behavior

Design explicitly for:

- 1440 px desktop;
- 1024 px small laptop/tablet landscape;
- 768 px tablet;
- 390 px mobile.

Do not simply stack desktop cards on mobile. Re-compose typography, navigation, media, tables of contents, technical metadata, and article figures for narrow screens.

The first mobile viewport must show the brand, usable navigation, H1, supporting copy, primary CTA, and a meaningful portion of the visual without clipping.

## Required workflow

### Phase 1 — visual concepts only

Before writing application code:

1. Create one coherent design direction, not five unrelated style options.
2. Generate fresh, readable concept images for each major surface:
   - header and hero;
   - topic portals and start-here section;
   - featured lab;
   - legacy resources;
   - acoustic/music-for-media story;
   - latest index, relaunch notice, and footer;
   - editorial hub;
   - long-form article;
   - legacy resource page;
   - download hub;
   - mobile homepage and mobile article.
3. Show the concepts for approval.
4. Do not scaffold or implement the Astro site until the design direction is approved.

Concept images must be large enough to inspect typography, spacing, media treatment, navigation, and component anatomy. Do not rely on one compressed full-page mockup.

### Phase 2 — design system extraction

After visual approval, document:

- exact colors;
- typography and font files;
- spacing scale;
- container widths;
- radii, borders, and shadows;
- icon and brand-mark treatment;
- image aspect ratios and crops;
- allowed components and variants;
- motion timings and triggers;
- desktop/tablet/mobile behavior;
- exact above-the-fold copy.

### Phase 3 — Astro implementation

Implement in this order:

1. project shell, tokens, typography, layout, header, and footer;
2. homepage first viewport;
3. homepage section by section with visual comparison after each section;
4. hub template;
5. article template;
6. legacy-resource template;
7. download hub;
8. history/relaunch, 404, and 410;
9. content collections and representative seed content;
10. motion and reduced-motion behavior;
11. sitemap, metadata, schema, and URL-registry behavior.

### Phase 4 — verification

Run the site and inspect it in a real browser at desktop and mobile sizes. Compare every implemented section directly with the approved concepts. Validate:

- exact copy and section order;
- typography and line breaks;
- palette and image treatment;
- spacing and container model;
- navigation and responsive behavior;
- GSAP motion and reduced-motion mode;
- article readability;
- URL status behavior;
- Astro type check and production build.

Do not declare completion while visible mismatches, placeholder assets, clipped text, broken mobile composition, inert controls, or generic substitute components remain.

## First deliverable

Your first response/task output must contain:

1. a concise restatement of the chosen visual idea;
2. the concept-image plan;
3. the complete coordinated design concepts listed in Phase 1;
4. a short design rationale covering typography, palette, layout rhythm, imagery, and motion;
5. unresolved decisions requiring approval.

Do not output implementation code in the first deliverable. Wait for explicit design approval before starting Phase 2 and Phase 3.

---

End of prompt.

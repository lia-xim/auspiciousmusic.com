# Claude Code brief: redesign only the Auspicious Music homepage hero

You are working in the Astro repository for **Auspicious Music**. Redesign and implement the homepage Hero only. The rest of the page has already been rewritten and must remain functionally and editorially unchanged.

## Working scope

- Primary file: `src/pages/index.astro`
- Supporting files may be changed only when the Hero genuinely requires it:
  - `public/assets/string.js`
  - `public/assets/motion.js`
  - Hero-specific assets under `public/assets/`
- Do not rewrite article copy, topic hubs, navigation, footer, legal pages, content data, RSS, sitemap or search index.
- Do not add a framework on top of Astro. Keep the site statically generated.
- Preserve `SITE_INDEXABLE` behavior and the current noindex preview state.

## Desired impression

Create a clean, quiet and premium opening that feels closer to Apple editorial/product storytelling than to a generic magazine template. It should be unmistakably about sound, physical resonance and intentional craft — not a SaaS landing page, nightclub poster or stock-photo music blog.

The current interactive string idea is worth preserving if it can be made more refined. It should feel like a physical response in a restrained editorial layout, not a canvas demo. Motion must have a reason, settle naturally and never block reading.

## Content that must remain true

Use this exact headline unless a typographic line break changes:

> Make sound with intent.

Supporting meaning:

> Practical guides for music production, Ableton, recording, sound design and music for media. Every guide states whether it is tested, source-based or archival.

Primary actions:

- `Explore the journal` → `/journal/`
- `How the relaunch works` → `/about/history-and-relaunch/`

You may refine microcopy such as the interaction hint, but do not introduce claims about tests, readers, customers, years of experience or the former operator.

## Visual direction

- Warm paper-neutral canvas from the existing design system.
- Large, highly controlled typography with excellent line breaks at 390, 768, 1024 and 1440 px.
- One focal interaction: a taut string, wave field, resonance trace or similarly minimal sound behavior.
- Use the existing indigo action color and ember material accent sparingly. Do not add a rainbow palette.
- Let negative space do real work. Avoid stacks of badges, glass cards, dashboard mockups and decorative gradients.
- The transition into the first content section must feel intentional; no empty full-screen block that hides the publication below.
- Any image must be an original abstract/editorial asset and labelled appropriately. Do not fake studio photography or product testing.

## Motion and GSAP

GSAP may be used if it is already available or can be added without turning the Hero into a client-heavy application. If adding it, explain why it is materially better than the current lightweight script.

Motion rules:

- entrance: one composed sequence, roughly 450–1100 ms
- pointer/string response: direct, damped and physically plausible
- no infinite decorative loops
- no scroll hijacking
- no cursor replacement
- no animation required to discover links or understand text
- fully honor `prefers-reduced-motion`
- pause expensive work when the Hero is outside the viewport or the document is hidden
- keyboard users must be able to trigger any meaningful interaction; decorative canvas remains `aria-hidden`

## Engineering requirements

- Astro static output must remain intact.
- No hydration library for a Hero that can be expressed with HTML/CSS and a small script.
- Prevent layout shift: reserve every visual region.
- Keep text selectable and links as real anchors.
- Maintain strong contrast and visible focus styles.
- Target good behavior on iOS Safari, Chrome, Firefox and Edge.
- Do not introduce remote fonts, trackers, cookies or third-party embeds.
- Keep the critical CSS and JavaScript small; report any bundle increase.

## Acceptance checks

1. Only the Hero and directly required Hero assets changed.
2. `pnpm check` passes.
3. `pnpm build` passes.
4. At 390 px there is no clipped headline, horizontal scroll or action overlap.
5. At 1440 × 900 the Hero feels composed without pushing all publication context below an empty screen.
6. Tab order reaches both CTAs and any interactive string control.
7. Reduced-motion mode removes entrance and physical animation without losing content.
8. The canvas/interaction stops work outside the viewport.
9. No unsupported editorial claim was added.
10. Provide a short summary of files changed, behavior added and remaining visual risks.

## Execution order

1. Read the current Hero CSS, markup and `string.js` before editing.
2. State the visual concept in three sentences.
3. Implement the smallest coherent version.
4. Run the checks above.
5. If browser tooling is available, capture desktop and mobile screenshots and fix obvious layout issues before stopping.

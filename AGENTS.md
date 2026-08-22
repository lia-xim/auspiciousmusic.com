## Project direction

Read `PROJECT_BRIEF.md` and `docs/relaunch/SEO_STRATEGY.md` before changing public positioning, navigation, indexability or legacy redirects. The current site is the Auspicious Music Strings Lab with Kim-Marie Borger as the named current viola expert. It is not a continuation of the former operator or catalogue.

The authoritative redirect decisions live in `docs/relaunch/URL_MIGRATION_REGISTRY.md` and `vercel.json`. Do not add a catch-all legacy redirect. Keep `/download/` and `/services/` permanently noindex.

Original or historic media may be published only after its entry in `docs/relaunch/RIGHTS_AND_SOURCE_MANIFEST.md` is complete.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

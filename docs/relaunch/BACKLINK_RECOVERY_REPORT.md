# Backlink recovery report

Run date: 22 August 2026
Provider: DataForSEO Backlinks API
Paid cost: 0.075924 USD
Scope: backlink targets and representative referring-domain evidence for `auspiciousmusic.com`

## Target findings

| Target | Referring domains | Backlinks | Decision |
| --- | ---: | ---: | --- |
| `https://www.auspiciousmusic.com/download/` | 688 | 90,831 | Keep a human-readable permanent noindex status page; do not redirect elsewhere |
| `https://www.auspiciousmusic.com/download` | 95 | 109 | Permanent canonical redirect to `/download/` |
| `https://www.auspiciousmusic.com/` | 39 | 49 | Keep the current homepage; no claim that old identity or authority transferred |
| Old HTTP and non-www root variants | Small residual counts | Small residual counts | Normalize through platform host and HTTPS behavior |

## Sample assessment

The representative 100-referring-domain sample for `/download/` was almost entirely unrelated, hacked or automated. It included incoherent anchors, unrelated domains and gambling language such as `megahoki88`. This is not a clean editorial link set and should not be consolidated into a current expert or commercial page.

The current DataForSEO index did not establish another valuable historic deep target that justifies creating an additional page. Wayback evidence still supports exact records for The Spy Guitar and Bang My Twister; those are preserved separately with rights boundaries.

## Recovery decisions

- Preserve exact legitimate paths only where a current page fulfils substantially the same intent.
- Keep `/download/` out of XML sitemap, human sitemap and client search index.
- Keep `/services/` as a noindex bridge to Kim-Marie Borger's official current site.
- Return 404 for `/photo.html`, `/video.html`, unknown spam paths and unsupported legacy URLs.
- Do not add a catch-all redirect to the homepage.
- Do not host former binaries, text, images or audio without a completed rights record.

## Limitations

This is a provider snapshot, not a complete historic web census. DataForSEO totals and samples can change as its index changes. New high-quality deep targets should be reviewed against Wayback history, current intent and rights before any redirect is added.

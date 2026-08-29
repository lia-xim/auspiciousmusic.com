# URL migration registry

Status: 22 August 2026
Authority: this file and `vercel.json` define the implemented migration behavior.

Redirects are created only when a historic path and the new destination satisfy substantially the same intent. Backlink volume alone is not a reason to redirect a URL.

## DataForSEO decision

The paid DataForSEO run on 22 August 2026 found 688 referring domains and 90,831 backlinks to `https://www.auspiciousmusic.com/download/`. A representative 100-domain sample was overwhelmingly unrelated, hacked or automated and included gambling anchors. The non-slash `/download` variant had 95 referring domains and 109 backlinks; the HTTPS homepage had 39 referring domains and 49 backlinks.

No additional valuable historic deep target was established by the current index. The `/download/` mass must therefore not be redirected to `/`, a Kim-Marie page or another current commercial route.

## Implemented decisions

| Historic path | Current response | Destination or reason | Evidence state |
| --- | --- | --- | --- |
| `/index.html` | Permanent redirect | `/` | Exact homepage equivalent |
| `/tools/ceremony-planner/` | Permanent redirect | `/tools/eventmusik-planer/` | The generic planner supersedes the earlier ceremony-only tool |
| `/download` | Permanent redirect | `/download/` canonical form | Exact path normalization |
| `/download.html` | Permanent redirect | `/download/` legacy status | Historic path intent |
| `/download/` | 200, permanent noindex | Human-readable legacy status; no link-equity funnel | DataForSEO spam concentration plus Wayback history |
| `/download/licenses/*` | 410, permanent noindex | Unrelated license-path spam with no current or historic intent-equivalent replacement | Search Console example plus established `/download/` spam profile |
| `/download/hc/*` | 410, permanent noindex | Unrelated help-center/Envato-path spam with no current or historic intent-equivalent replacement | Search Console example plus established `/download/` spam profile |
| `/about.html` | Permanent redirect | `/about/history-and-relaunch/` | Former about/history intent |
| `/history` | Permanent redirect | `/about/history-and-relaunch/` | Exact current history route |
| `/connect.html` | Permanent redirect | `/contact/` | Contact intent |
| `/2/post/2014/03/the-spy-guitar.html` | Permanent redirect | `/legacy/the-spy-guitar/` | Historic title and path |
| `/download/the-spy-guitar` and trailing-slash form | Permanent redirect | `/legacy/the-spy-guitar/` | Historic download intent; no binary served |
| `/news/introducing-the-spy-guitar` | Permanent redirect | `/legacy/the-spy-guitar/` | Historic title and path |
| `/download/bang-my-twister-new-m4l-device-for-changing-banks-on-midi-fighter-twister` and trailing-slash form | Permanent redirect | `/legacy/bang-my-twister/` | Surviving project reference |
| `/news/midi-fighter-twister-product-review` | Permanent redirect | `/ableton/midi-fighter-twister-review/` | Closest honest current intent |
| `/news/category/ableton` | Permanent redirect | `/ableton/` | Equivalent topic hub |
| `/news/category/spy-guitar` | Permanent redirect | `/legacy/the-spy-guitar/` | Equivalent archive topic |
| `/photo.html` | 404 by default | No current photography cluster | No backlink or rights evidence supporting a rebuild |
| `/video.html` | 404 by default | No current videography cluster | No backlink or rights evidence supporting a rebuild |
| Known injected support/casino path | 404 by default | Intentionally not recreated | Rejected as site content |
| Any unknown or unrelated path | 404 by default | No catch-all redirect | Intent not established |

## Release verification

1. Test every explicit redirect on the deployed canonical host.
2. Confirm one hop and the expected permanent status.
3. Confirm each destination canonical points to itself.
4. Confirm `/download/` and `/services/` remain noindex and absent from XML sitemap and search index.
5. Confirm spam and unknown paths never land on the homepage, Kim-Marie pages or commercial routes.
6. Confirm known unrelated `/download/licenses/*` and `/download/hc/*` paths return `410` with an HTTP `X-Robots-Tag: noindex` after any canonical trailing-slash hop.

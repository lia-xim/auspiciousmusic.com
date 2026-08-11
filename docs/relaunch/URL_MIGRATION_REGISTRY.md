# URL migration registry

Status: 12 August 2026

This registry records intentional legacy handling. It is not evidence that every former URL has been discovered. Add a redirect only after the old path and the new destination have been checked for equivalent intent.

| Historic path | Current response | Destination or reason | Evidence state |
| --- | --- | --- | --- |
| `/download` | 308 permanent redirect | `/download/` canonical trailing-slash form | Verified internal canonicalisation |
| `/download.html` | Permanent redirect | `/download/` legacy download hub | Supported by historic path intent |
| `/about.html` | Permanent redirect | `/about/history-and-relaunch/` | Supported by former about/history intent |
| `/connect.html` | Permanent redirect | `/contact/` | Supported by contact intent |
| `/2/post/2014/03/the-spy-guitar.html` | Permanent redirect | `/legacy/the-spy-guitar/` | Supported by historic title/path |
| `/download/the-spy-guitar` | Permanent redirect | `/legacy/the-spy-guitar/` | Supported by historic download intent; no binary served |
| `/news/introducing-the-spy-guitar` | Permanent redirect | `/legacy/the-spy-guitar/` | Supported by historic title/path |
| `/download/bang-my-twister-new-m4l-device-for-changing-banks-on-midi-fighter-twister` | Permanent redirect | `/legacy/bang-my-twister/` | Supported by surviving project reference |
| `/news/midi-fighter-twister-product-review` | Permanent redirect | `/ableton/midi-fighter-twister-review/` | New page explicitly reframes unfinished review intent as a mapping guide |
| `/news/category/ableton` | Permanent redirect | `/ableton/` | Equivalent topic hub |
| `/news/category/spy-guitar` | Permanent redirect | `/legacy/the-spy-guitar/` | Equivalent archive topic |
| `/download/hc/en-us/articles/41383541904281-Envato-Market-Terms/` | 404 Not Found | Identified unrelated/injected path; intentionally not recreated | Rejected as site content |
| Unknown unrelated or spam path | 404 by default | No catch-all redirect | Intent not established |

## Release verification

For every explicit redirect or 404/410 decision:

1. Test the exact path on the deployed canonical host.
2. Confirm one hop only and the expected status.
3. Confirm the destination canonical points to itself.
4. Confirm injected/spam paths never land on the homepage or a commercial project.
5. Reconcile new high-value historic URLs from final backlink exports before enabling indexing.

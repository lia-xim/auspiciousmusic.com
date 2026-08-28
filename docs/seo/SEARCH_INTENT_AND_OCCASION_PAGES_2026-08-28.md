# Search intent and occasion pages

Date: 28 August 2026

## Decision

The six existing occasion URLs are the German search landing pages. Each page answers one planning question, contains an occasion-only quick selector near the top and passes a more detailed plan to the shared event-music planner. No new `/hochzeitsmusikplaner/`, `/trauermusikplaner/` or location fan-out is justified by the current evidence.

## Evidence register

| State | Evidence | Consequence |
| --- | --- | --- |
| Verified | A current German Google autocomplete review returned established wording around `Hochzeitsmusik`, `Musik Trauung`, `Hochzeitslieder Trauung`, `Trauermusik`, `Musik Beerdigung`, `Musik Trauerfeier`, `Musik Sektempfang` and `Musik Firmenevent`. | Titles and H1s use these natural subject names where they match the page. |
| Verified | The same review did not return suggestions for `Hochzeitsmusik planen` or `Eventmusik Planer`. This is language evidence, not proof of zero demand. | Do not invent standalone exact-match planner pages. |
| Verified | The maintained repertoire already separates wedding, reception, funeral, dinner, corporate event and birthday pieces and moments. | The quick selector on each page uses only that occasion's data. |
| Supported | Current wedding planning results commonly organize music around entrance, signing or vows and exit. Current funeral guidance commonly organizes a small number of personal pieces around moments in the service. | Occasion pages lead with the running order instead of a generic benefits introduction. |
| Hypothesis | A useful selector above the explanatory copy will create more qualified starts than a generic page that only links to a separate tool. | Measure page-to-full-planner clicks after launch. |
| Experiment | Use the current six pages for at least 30 days before adding another search landing page. | New pages need GSC query evidence or a clearly different maintained user job. |
| Rejected | Add thin pages for every wording variation such as `Hochzeitsmusikplaner`, `Trauermusikplaner`, `Liedplaner` or every city. | These variants would fragment one intent and repeat the same tool. |

Autocomplete was checked without a paid keyword endpoint and does not provide search volume. Authenticated Search Console query data remains NOT PROVEN in this pass.

## Page map

| URL | Search language used on page | Primary job |
| --- | --- | --- |
| `/eventmusik/hochzeit/` | Hochzeitsmusik; Musik zur Trauung; Einzug; Auszug | Choose three pieces and place them in a ceremony running order. |
| `/eventmusik/sektempfang/` | Musik zum Sektempfang; Live-Musik Sektempfang | Choose light music for arrival, congratulations and conversation. |
| `/eventmusik/trauerfeier/` | Trauermusik; Musik zur Beerdigung; Musik zur Trauerfeier | Place a small number of personal pieces around the farewell. |
| `/eventmusik/dinner/` | Dinnermusik; Musik zum Dinner | Fit music around arrival, courses, speeches and the closing. |
| `/eventmusik/firmenevent/` | Live-Musik Firmenevent; Musik zum Empfang | Separate background music from a featured programme cue. |
| `/eventmusik/geburtstag/` | Live-Musik Geburtstag; Musik zum Geburtstag | Prepare a surprise, musical gift or reception. |

## Content contract

Every occasion page must:

1. answer the occasion-specific choice in the H1 and first paragraph;
2. show only repertoire and moments for that occasion;
3. make three audible suggestions visible without requesting a date;
4. explain the few operational details that actually change the choice;
5. state that title, arrangement, date, line-up and price still need personal confirmation;
6. avoid generic event-law, GEMA, photography, videography and broad music-history copy.

## Current supporting sources

- [Hochzeitscello: Ablaufplan Musik für eine freie Trauung](https://hochzeitscello.de/ablaufplan-musik-freie-trauung/)
- [Planning.wedding: Hochzeitslieder-Checkliste](https://planning.wedding/de/checklist/song)
- [Memovida: Trauermusik](https://www.memovida.de/ratgeber/trauermusik)

These sources support the broad moment-based information architecture. They do not prove keyword volume, Kim-Marie's availability or the playability of a specific arrangement.

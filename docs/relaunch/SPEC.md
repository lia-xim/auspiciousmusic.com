# Auspicious Music — Relaunch-Spezifikation

Status: Planungsgrundlage vor Domain-Übergabe  
Zieldomain: `https://www.auspiciousmusic.com/`  
Primärsprache: Englisch  
Relaunch-Modell: unabhängige Fachpublikation mit transparenter Legacy-Schicht  

## 1. Entscheidung und Positionierung

`auspiciousmusic.com` wird als eigenständige, englischsprachige Fachpublikation für Musikproduktion, Sounddesign und kreative Audiotechnologie neu aufgebaut. Die Seite ist weder eine Wiederaufnahme der früheren Firma noch ein Redirect-Asset und auch kein allgemeines Multi-Themen-Blog.

Empfohlene Positionierung:

> Auspicious Music is an independent publication for music production, sound design, recording, and creative audio technology — relaunched under new ownership in 2026.

Das historische Themenfeld bleibt erhalten: Ableton Live, Max for Live, Sampling, MIDI-Controller, Production Music, Workflows und praktische Downloads. Neue Inhalte erweitern es sinnvoll um Recording, akustische Instrumente, Streicher und Musik für Medien.

### Ziele

- Die stärksten alten Linkziele mit inhaltlich gleichwertigen, neuen oder lizenzierten Ressourcen bedienen.
- Eine dauerhaft nützliche Fachpublikation schaffen, die auch ohne alte Backlinks bestehen kann.
- Klare fachliche Brücken zu echten Musik-, Viola-, Hochzeitsmusik- und Videoprojekten ermöglichen.
- Casino-, Hack- und Redirect-Erbe technisch und redaktionell abtrennen.
- Innerhalb von 90 bis 120 Tagen anhand von Search-Console- und Referral-Daten entscheiden, ob der Ausbau gerechtfertigt ist.

### Nicht-Ziele

- Keine pauschale 301-Weiterleitung auf eine andere Domain.
- Kein PBN, kein Linkverkauf und keine dünne „Authority-Booster“-Seite.
- Keine Behauptung, Antonio Sage, seine Firma, Kunden, Veröffentlichungen oder Partnerschaften übernommen zu haben.
- Keine ungeklärte Wiederveröffentlichung alter Texte, Musik, Bilder, Presets oder Max-for-Live-Dateien.
- Keine erfundenen Autoren, Kunden, Rezensionen, Downloads oder Erfahrungsberichte.

## 2. Nachweisbare Ausgangslage

### Historischer Kern

Der Wayback-URL-Index zeigt zwischen 2013 und 2017 eine substantive Website mit Seiten für News, Musik, Video, Fotos, Downloads und „The Workflow“. Die wichtigsten Themen und Ressourcen waren:

- Ableton Live und Ableton Push
- Max for Live
- The Spy Guitar
- Fender VI Ableton Sampler Live Pack
- MIDI Fighter Twister und „Bang My Twister“
- NoisR und Chicago Hous Mod
- Sylenth-Skins
- DAW Guidelines for Music Production
- Production Music und Warner Chappell
- Produktreviews, Workflows und Musikproduktion

Ein aktuelles Ableton-Trainerprofil nennt `auspiciousmusic.com` weiterhin als Website von Antonio Sage. Die aktuelle Seite muss deshalb sichtbar zwischen ehemaligem Betreiber und neuer Redaktion unterscheiden. DJ TechTools dokumentiert weiterhin das historische „Bang My Twister“-Projekt und dessen Zusammenhang mit dem Spy-Guitar-Visualizer.

Quellen:

- [Ableton — Antonio Sage](https://www.ableton.com/en/certified-training/antonio-sage/)
- [DJ TechTools — Bang My Twister](https://maps.djtechtools.com/mappings/2929)
- [Google — Spam policies](https://developers.google.com/search/docs/essentials/spam-policies)
- [Google — Site moves and migrations](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes)

### Backlink-Risiko

Der kostenlose Ahrefs-Ausschnitt zeigt einen kleinen echten Musikkern, aber auch massiven Casino-/Hack-Spam. Besonders `/download/` wurde als Ziel automatisierter Glücksspiel-Links und fremder Redirect-Ketten missbraucht. Die Seite muss daher mit explizitem URL-Routing, einer echten 404-Seite und ohne Catch-all-Redirect neu aufgebaut werden.

Die vollständige Linkziel-Priorisierung bleibt vorläufig, bis ein Export aus Ahrefs „Best by links“ oder ein vergleichbarer vollständiger Target-URL-Export vorliegt. Das mitgelieferte `URL-INVENTORY.csv` ist deshalb die verbindliche Registry, die nach Domain-Übergabe ergänzt wird.

## 3. Zielgruppe und redaktionelles Versprechen

### Primäre Zielgruppen

1. Musikproduzenten und elektronische Musiker
2. Ableton- und Max-for-Live-Nutzer
3. Komponisten und Produzenten für Film, Video, Werbung und digitale Medien
4. Instrumentalisten, die akustische Instrumente in digitale Workflows integrieren
5. Creator und kleine Studios mit praxisnahen Recording- und Workflow-Fragen

### Redaktionelles Versprechen

Jede publizierte Seite liefert mindestens eines dieser Elemente:

- einen reproduzierbaren Workflow;
- einen nachvollziehbaren Test;
- eigene Screenshots, Audio- oder MIDI-Beispiele;
- eine konkrete Problemlösung;
- eine sauber recherchierte historische Einordnung;
- eine getestete und aktuell datierte Ressourcenliste.

Die Seite veröffentlicht keine generischen KI-Zusammenfassungen ohne eigene Prüfung. Softwareversion, Testdatum, Betriebssystem und Einschränkungen werden bei technischen Artikeln genannt.

## 4. Informationsarchitektur

```text
/
├── music-production/
│   ├── workflow/
│   ├── daw-project-guidelines/
│   ├── arrangement/
│   └── production-music/
├── ableton/
│   ├── ableton-live/
│   ├── max-for-live/
│   ├── midi-controllers/
│   └── midi-fighter-twister-review/
├── sound-design/
│   ├── sampling/
│   ├── sampled-instruments/
│   └── synthesis/
├── recording/
│   ├── home-studio/
│   ├── acoustic-instruments/
│   └── strings/
├── music-for-media/
│   ├── licensing/
│   ├── film-and-video/
│   └── event-and-ceremony-music/
├── resources/
│   ├── tools/
│   ├── templates/
│   └── glossary/
├── download/
├── legacy/
│   ├── the-spy-guitar/
│   ├── bang-my-twister/
│   ├── noisr-max-for-live/
│   ├── chicago-hous-mod/
│   ├── sylenth-skins/
│   └── archive/
├── about/
│   ├── history-and-relaunch/
│   └── editorial-policy/
├── authors/
├── contact/
├── privacy/
└── legal/
```

### Hauptnavigation

1. Production
2. Ableton
3. Sound Design
4. Recording
5. Music for Media
6. Resources
7. About

`Legacy` steht nicht als dominante Hauptnavigation im Vordergrund, ist aber über Resources, About und relevante Artikel erreichbar. Das verhindert, dass die neue Publikation wie eine Kopie oder Übernahme der alten Identität wirkt.

## 5. Seitenspezifikationen

### Homepage `/`

Die Homepage beantwortet in den ersten Bildschirmhöhen drei Fragen: Was ist Auspicious Music heute, für wen ist es gedacht und welche praktische Ressource kann sofort geöffnet werden?

Module in Reihenfolge:

1. Hero mit Positionierung und CTA „Explore practical guides“
2. Drei Einstiegskarten: Ableton, Recording, Sound Design
3. „Start here“-Guides für Einsteiger und Fortgeschrittene
4. Aktuelles getestetes Tutorial oder Lab
5. Legacy-Resource-Modul mit The Spy Guitar und Bang My Twister
6. Musik für Medien und akustische Instrumente
7. Neueste Artikel
8. Kurzer Relaunch-Hinweis mit Link zur History-Seite
9. Newsletter erst später, wenn ein echtes Veröffentlichungsintervall besteht

Die Homepage nennt keine alten Kunden oder Credits. Sie verlinkt nicht sitewide auf eigene externe Projekte.

### Hubseiten

Jede Hubseite enthält:

- eine klare Einführung und Zielgruppe;
- einen „Start here“-Artikel;
- Unterthemen mit kurzen Erklärungen;
- zwei bis vier handverlesene Kernressourcen;
- aktuelle Artikel;
- ein Glossar oder Begriffsmodul;
- verwandte Hubs;
- keine automatisch erzeugten dünnen Tag-Seiten.

### `/download/`

Diese historisch und durch Spam stark belastete URL bleibt eine echte `200`-Seite. Sie wird nicht auf die Homepage oder ein externes Projekt weitergeleitet.

Seitentitel:

> Legacy Downloads & Current Music Production Resources

Inhalte:

1. deutlicher Hinweis auf den Relaunch unter neuer Eigentümerschaft;
2. Erklärung, dass frühere Downloads nicht automatisch mit der Domain übertragen wurden;
3. Statuskarten für Spy Guitar, Fender VI Pack, Bang My Twister, NoisR und Sylenth-Skins;
4. Kennzeichnung `Available`, `Unavailable`, `External source` oder `Modern alternative`;
5. ausschließlich eigene, lizenzierte oder offiziell extern verlinkte Dateien;
6. Link zu aktuellen Tools und Tutorials;
7. keine automatische Auslieferung unbekannter Dateien und kein offenes Redirect- oder Proxy-Verhalten.

### Legacy-Ressourcenseite

Jede Seite unter `/legacy/` nutzt dieselbe Struktur:

1. Banner `Historical resource — independent relaunch under new ownership`
2. Was das ursprüngliche Projekt war
3. Warum externe Quellen darauf verwiesen haben
4. Was heute noch überprüfbar ist
5. Download-/Kompatibilitätsstatus
6. Rechte- und Zuschreibungshinweis
7. aktuelle, getestete Alternative oder neuer eigener Workflow
8. Quellen und externe Originalreferenzen
9. Änderungsprotokoll

Wenn Rechte oder Funktion nicht geklärt sind, wird niemals ein angeblich ursprünglicher Download angeboten.

### Fachartikel

Pflichtfelder und Module:

- Titel und eindeutige Such-/Leserintention
- Autor mit echter Profilseite
- echtes Veröffentlichungs- und Aktualisierungsdatum
- getestete Software-/Hardwareversion
- Kurzantwort oder Ergebnis
- Voraussetzungen
- Schritt-für-Schritt-Anleitung
- eigene Screenshots, Audio- oder MIDI-Beispiele, sofern relevant
- Grenzen, Fehlerfälle und Alternativen
- Quellen
- zwei bis vier interne Links
- optional ein kontextuell passender externer Projektlink mit Offenlegung

### Review

Ein Review benötigt Testkriterien, Testzeitraum, Preisstand, Zielgruppe, Stärken, Schwächen und Alternativen. Keine Sternebewertungen oder Review-Schema ohne reale, nachvollziehbare Bewertung.

### About und Vertrauen

`/about/` beschreibt die heutige Publikation und den aktuellen Betreiber.  
`/about/history-and-relaunch/` trennt die frühere Website und den Relaunch zeitlich und rechtlich.  
`/about/editorial-policy/` erklärt Tests, KI-Unterstützung, Korrekturen, Affiliate-Links und Beziehungen zu anderen Projekten.  
`/authors/` enthält ausschließlich reale Autoren.  
`/contact/`, `/privacy/` und `/legal/` müssen zum Betreiber und Hosting passen.

Empfohlener Relaunch-Text:

> Auspicious Music was relaunched under new ownership in 2026 as an independent publication. Historical references are preserved for context. The current publication does not represent Antonio Sage or the former operator unless explicitly stated with permission.

## 6. Historisches URL-Mapping

Die vollständige maschinenlesbare Liste steht in `URL-INVENTORY.csv`. Die Regeln sind:

### Direkte `200`-Seiten

- `/`
- `/download/`
- alle modernen Hub- und Fachseiten
- wertvolle Legacy-Ressourcen mit eigenständigem Nutzen

### Exakte `301`-Weiterleitungen

Nur semantisch gleichwertige Pfade werden zusammengeführt:

- `/download` und `/download.html` → `/download/`
- `/about.html` → `/about/history-and-relaunch/`
- `/connect.html` → `/contact/`
- `/the-workflow` und `/the-workflow.html` → `/music-production/workflow/`
- alte Spy-Guitar-Pfade → `/legacy/the-spy-guitar/`
- alte Bang-My-Twister-Pfade → `/legacy/bang-my-twister/`
- alte DAW-Guideline-Pfade → `/music-production/daw-project-guidelines/`
- alte Produktreview-Pfade → jeweilige neue Review- oder Legacy-Seite

### `404` oder `410`

- Casino-, Toto-, Slot-, Pharma- oder gefälschte Supportpfade erhalten `410`, sobald sie eindeutig identifiziert sind.
- Unbekannte URLs erhalten die normale `404`-Seite.
- Es gibt keinen Catch-all, der unbekannte URLs auf `/` oder `/download/` umleitet.
- Alte Monatsarchive und Kategorien werden nur dann weitergeleitet, wenn sie echte Backlinks oder Nutzerwert besitzen; ansonsten `410`.

## 7. Launch-Content

### P0 — vor Indexfreigabe

Diese Seiten müssen fertig und substanziell sein:

1. Homepage
2. About
3. History & Relaunch
4. Editorial Policy
5. Production Hub
6. Ableton Hub
7. Sound Design Hub
8. Recording Hub
9. Music for Media Hub
10. Resources Hub
11. Download Hub
12. The Spy Guitar Legacy Resource
13. Bang My Twister Legacy Resource
14. DAW Project Guidelines
15. MIDI Fighter Twister Review
16. What Is Max for Live?
17. Building a Sampled Instrument in Ableton Live
18. Live Strings vs Sample Libraries
19. Recording Viola at Home
20. Production Music Licensing: A Practical Introduction

### P1 — erste 30 bis 60 Tage

- A practical Ableton Live project template
- How to organize samples without breaking projects
- Designing noise risers without a dedicated plugin
- MIDI Fighter Twister workflows in modern Ableton Live
- Sampling electric guitar for playable instruments
- Microphone placement for viola and small string ensembles
- Layering live strings with virtual instruments
- Loudness and delivery for online video music
- Composing music for wedding films
- Arranging modern ceremony music for strings
- Rights checklist for production music and stock libraries
- Building a repeatable music-production workflow

### P2 — 60 bis 120 Tage

- eigene kleine Tools, Templates oder Checklisten;
- Audio-A/B-Vergleiche;
- aktualisierte Softwaretests;
- dokumentierte Fallstudien aus eigenen Musik- und Videoprojekten;
- Interviews nur mit realen Gesprächspartnern;
- mögliche neue, vollständig eigene Downloads.

Der priorisierte Content-Backlog steht in `CONTENT-BACKLOG.csv`.

## 8. Verbindung zu den eigenen Projekten

Die Website darf auf reale Projekte verweisen, wenn der Link für den Artikel notwendig oder hilfreich ist.

Geeignete Beispiele:

- Ein Artikel über Viola-Aufnahme verlinkt auf ein echtes Audio- oder Video-Beispiel.
- Ein Beitrag über moderne Streicherarrangements verwendet ein eigenes Hochzeitsmusik-Projekt als Fallstudie.
- Ein Beitrag über Musik für Hochzeitsfilme verlinkt auf die passende Musik- oder Videografie-Seite.
- Ein Artikel über Content-Workflows für Musiker kann Contextter als tatsächlich verwendetes Werkzeug erwähnen, wenn die Beziehung offengelegt wird.

Regeln:

- keine externen Projektlinks in Navigation oder globalem Footer während der ersten 90 Tage;
- maximal ein primärer kommerzieller Projektlink je Artikel, sofern sachlich nötig;
- natürliche Marken- oder Beschreibungsanker statt wiederholter Keyword-Anker;
- Hinweis `A project by the same publisher` oder gleichwertige Offenlegung;
- kein Artikel, dessen einziger Zweck der externe Link ist.

## 9. Technische Spezifikation

### Canonical Host

Empfehlung: `https://www.auspiciousmusic.com/`, weil der stärkste verifizierte Ableton-Link und viele historische URLs auf `www` zeigen.

- `http://auspiciousmusic.com/*` → `https://www.auspiciousmusic.com/*`
- `http://www.auspiciousmusic.com/*` → `https://www.auspiciousmusic.com/*`
- `https://auspiciousmusic.com/*` → `https://www.auspiciousmusic.com/*`
- Pfad und Querystring bleiben bei Host-/Protokollnormalisierung erhalten.

### Indexierung

- Staging ist passwortgeschützt und `noindex`.
- Produktionsseiten besitzen Self-Canonicals.
- Nur veröffentlichte, substantive Seiten stehen in der XML-Sitemap.
- Tag-, Such-, Filter- und leere Archivseiten bleiben `noindex` oder werden gar nicht erzeugt.
- `robots.txt` blockiert keine Seiten, deren `noindex` Google sehen muss.
- Eine HTML-Sitemap unterstützt Nutzer und QA.

### Statuscodes

- `200` nur für echte Inhalte;
- `301` nur für dauerhaft äquivalente Ziele;
- `404` für unbekannte URLs;
- `410` für bestätigte Spam-/Hackpfade und bewusst aufgegebene Altseiten;
- keine Soft-404-Seiten mit Status `200`;
- keine mehrstufigen Redirect-Ketten.

### Strukturierte Daten

- `WebSite` für die Website;
- `Organization` für den heutigen Betreiber, ohne historische Credits;
- `Person` nur für reale Autoren;
- `Article` oder `BlogPosting` für Fachartikel;
- `BreadcrumbList` für Hub- und Artikelseiten;
- `SoftwareApplication` nur für tatsächlich bereitgestellte und funktionsfähige eigene Tools;
- keine erfundenen Ratings, Reviews oder FAQs.

### Sicherheit und Missbrauchsschutz

- kein Wildcard-DNS;
- keine offenen Redirect-Parameter;
- keine ungeprüften Datei-Uploads;
- Download-Dateien mit Versionsnummer, Lizenz, Prüfsumme und Malware-Scan;
- Sicherheitsheader, HTTPS und minimale Plugins/Dependencies;
- unerwartete Requests an alte Subdomains und Downloadpfade protokollieren;
- Mail-Domain nur mit SPF, DKIM und DMARC aktivieren.

## 10. CMS- und Datenmodell

### Content-Typen

`Article`

- title, slug, summary, body
- primaryTopic, secondaryTopics
- author, reviewer
- publishedAt, updatedAt
- softwareVersions, hardware
- evidenceAssets
- sources
- relatedArticles
- commercialRelationshipDisclosure
- legacySourceUrl optional

`LegacyResource`

- currentTitle
- legacyUrls
- formerTitle
- formerOperator
- historicalPeriod
- originalPurpose
- currentStatus
- rightsStatus
- downloadStatus
- verifiedExternalReferences
- modernAlternative
- ownershipDisclosure
- changeLog

`ToolOrDownload`

- version, compatibility, platform
- owner, license, checksum
- downloadUrl
- securityScanDate
- supportStatus

`RedirectRule`

- sourcePath
- destinationPath
- statusCode
- rationale
- backlinkEvidence
- lastVerifiedAt

### Pflichtvalidierungen

- Eine Legacy-Seite kann ohne Ownership-Disclosure nicht veröffentlicht werden.
- Ein Download kann ohne Rechte-/Lizenzstatus und Prüfsumme nicht live gehen.
- Eine Weiterleitung kann ohne dokumentierte Intent-Äquivalenz nicht aktiviert werden.
- `datePublished` darf nicht auf das Datum des früheren Inhalts zurückdatiert werden.
- Historische Daten stehen als sichtbare Kontextangabe, nicht als heutiges Veröffentlichungsdatum.

## 11. Interne Verlinkung

- Jeder Fachartikel verlinkt auf genau einen primären Hub.
- Jeder Fachartikel erhält zwei bis vier relevante Links auf benachbarte Ressourcen.
- Hubseiten verlinken auf alle strategischen Unterseiten und zurück auf ihre übergeordnete Ebene.
- Legacy-Seiten verlinken auf eine aktuelle Alternative und eine thematisch passende Hubseite.
- Wichtige Seiten sind innerhalb von höchstens drei sinnvollen Klicks von der Homepage erreichbar.
- Archive, Kategorien und Tags werden nicht als automatisches SEO-Flächenprogramm verwendet.

## 12. Zehn-Tage-Vorbauplan

### Tag 1–2: Fundament

- Designsystem, Layout, Navigation und Footer
- Routing und Content-Modelle
- Staging-Schutz
- URL-Registry als einzige Quelle für Redirects und Legacy-Status

### Tag 3–4: Kernseiten

- Homepage
- fünf Fach-Hubs
- About, History & Relaunch, Editorial Policy
- 404- und 410-Seiten

### Tag 5–7: Legacy

- Download Hub
- Spy Guitar
- Bang My Twister
- DAW Guidelines
- MIDI Fighter Twister Review
- NoisR/Chicago Hous Mod nur als Entwurf, falls Rechte und Quellen noch offen sind

### Tag 8–9: Neue Redaktion

- mindestens fünf eigenständige Fachartikel
- eigene Bilder, Screenshots und Audio-Proben vorbereiten
- interne Links und Breadcrumbs
- Metadaten, Open Graph und strukturierte Daten

### Tag 10: Pre-Launch-QA

- alle Registry-Pfade automatisiert gegen erwartete Statuscodes testen;
- keine Staging- oder Platzhaltertexte;
- kein alter Marken-/Personenanspruch;
- keine nicht lizenzierten Downloads;
- Sitemap, Canonicals, robots und Schema lokal prüfen;
- Produktionsfreigabe bleibt gesperrt, bis Domain und Search Console verfügbar sind.

## 13. Go-live nach Domain-Übergabe

1. Registrar-, DNS- und Account-Sicherheit abschließen.
2. Domain- und URL-Präfix-Properties in Search Console verifizieren.
3. Manuelle Maßnahmen und Sicherheitsprobleme prüfen.
4. aktuelle Index- und Spam-URLs exportieren.
5. vollständigen Backlink-Target-Export in `URL-INVENTORY.csv` einarbeiten.
6. Canonical Host und exakte Redirects aktivieren.
7. zunächst P0-Seiten veröffentlichen; unbekannte Pfade bleiben 404.
8. XML-Sitemap einreichen.
9. zentrale URLs einzeln mit URL Inspection prüfen.
10. erst nach sauberer technischer Prüfung die Indexsperre entfernen.

## 14. Erfolgsmessung und Stop-Regel

### 30 Tage

- keine Sicherheitsprobleme oder manuellen Maßnahmen;
- P0-Seiten crawlbar und indexierbar;
- keine neuen indexierten Casino-Seiten;
- korrekte Statuscodes für alle priorisierten Legacy-Pfade.

### 60 bis 90 Tage

- Impressionen und Queries für Musikproduktions- und Legacy-Themen;
- echte Referral-Besuche von relevanten Musik-/Softwarequellen;
- indexierte neue Fachartikel;
- Nutzung der Legacy- und Download-Seiten;
- Backlinkverluste und neue natürliche Erwähnungen beobachten.

### Stop-/Reduktionsregel

Wenn nach 90 bis 120 Tagen keine sauberen Impressionen, keine qualifizierten Referrals und kein unabhängiger Nutzerwert entstehen oder Sicherheits-/Manual-Action-Probleme bestehen bleiben, wird das Projekt nicht durch massenhaft erzeugten Content künstlich verlängert. Dann bleiben nur die nützlichen Kern- und Legacy-Seiten bestehen oder die Domain wird nach der bezahlten Laufzeit nicht weiter ausgebaut.

## 15. Noch benötigte Daten

Vor dem endgültigen Produktions-Routing fehlen:

- vollständiger Ahrefs-Export „Best by links“ beziehungsweise alle Target URLs;
- Search-Console-Berichte nach Eigentumsübernahme;
- Entscheidung, ob Antonio Sage kontaktiert wird;
- Rechte-/Lizenzstatus früherer Downloads und Medien;
- endgültige Betreiberangaben für Impressum/Legal;
- konkrete Ziel-URLs der eigenen Musik-, Hochzeitsmusik- und Videoprojekte;
- verwendeter Tech-Stack und Hostinganbieter.

Diese Lücken verhindern den Vorbau nicht. Sie verhindern lediglich, dass Redirects, Downloads oder Aussagen zur historischen Identität vorzeitig live geschaltet werden.

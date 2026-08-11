# Auspicious Music — Pre-Launch- und Go-live-Checkliste

## Vor der Domain-Übergabe

- [ ] Staging ist passwortgeschützt und `noindex`.
- [ ] Canonical Host ist in der Konfiguration auf `https://www.auspiciousmusic.com/` vorbereitet.
- [ ] Navigation und Informationsarchitektur entsprechen `SPEC.md`.
- [ ] P0-Hubs und Vertrauensseiten besitzen substantiven, originalen Inhalt.
- [ ] History & Relaunch trennt frühere und heutige Eigentümerschaft klar.
- [ ] Es werden keine früheren Kunden, Credits, Partnerschaften oder Testimonials übernommen.
- [ ] Kein alter Download wird ohne Rechte-/Lizenzprüfung angeboten.
- [ ] `URL-INVENTORY.csv` ist die einzige Quelle für Redirect- und Statuscode-Regeln.
- [ ] Unbekannte URLs landen auf einer echten 404-Seite.
- [ ] Eine eigene 410-Seite existiert für bestätigte Hack-/Spam-URLs.
- [ ] Es gibt keinen Catch-all-Redirect auf Homepage oder `/download/`.
- [ ] Sitemap, Canonicals, Breadcrumbs und strukturierte Daten sind lokal getestet.
- [ ] Mindestens fünf neue Fachartikel und drei Legacy-Ressourcen sind vollständig.
- [ ] Alle externen Projektlinks sind redaktionell begründet und offengelegt.

## Direkt nach der Domain-Übergabe

- [ ] Registrar-Account mit 2FA absichern.
- [ ] Transfer-/Kontakt-/Renewal-Status prüfen.
- [ ] DNS und TLS konfigurieren.
- [ ] Nicht benötigte DNS-Einträge und Subdomains entfernen.
- [ ] Catch-all-E-Mail deaktivieren.
- [ ] Bei aktiver Mail SPF, DKIM und DMARC konfigurieren.
- [ ] Search Console Domain-Property verifizieren.
- [ ] Search Console URL-Präfix-Property für `https://www.auspiciousmusic.com/` verifizieren.
- [ ] Manuelle Maßnahmen prüfen und dokumentieren.
- [ ] Sicherheitsprobleme prüfen und dokumentieren.
- [ ] aktuelle indexierte URLs und Spam-Pfade exportieren.
- [ ] vollständige Backlink-Target-Liste exportieren und Registry ergänzen.
- [ ] die 20 stärksten echten Referring Domains manuell klassifizieren.
- [ ] die 20 häufigsten Spam-Target-URLs identifizieren.

## Vor Entfernen von `noindex`

- [ ] HTTP, HTTPS, apex und `www` normalisieren in höchstens einem Redirect.
- [ ] Jeder P0-Legacy-Pfad liefert den in der Registry erwarteten Statuscode.
- [ ] Keine interne URL erzeugt eine Redirect-Kette.
- [ ] Keine indexierbare Seite ist leer, dupliziert oder ein Platzhalter.
- [ ] `robots.txt` ist erreichbar.
- [ ] XML-Sitemap enthält ausschließlich kanonische `200`-Seiten.
- [ ] Open Graph und Favicons sind korrekt.
- [ ] Article-, Organization-, WebSite- und Breadcrumb-Daten sind valide und wahr.
- [ ] Downloads besitzen Lizenz, Versionsangabe, Prüfsumme und Scan-Datum.
- [ ] Mobile Navigation, Kontrast, Tastaturbedienung und Performance sind geprüft.
- [ ] Analytics erfasst keine unnötigen personenbezogenen Daten.

## Nach Go-live

- [ ] Sitemap in Search Console einreichen.
- [ ] Homepage, `/download/` und die fünf wichtigsten Legacy-/Fachseiten prüfen.
- [ ] Indexierung nicht massenhaft erzwingen.
- [ ] 404/410-, Redirect- und ungewöhnliche Subdomain-Requests überwachen.
- [ ] wöchentlich neue Casino-/Hack-URLs prüfen.
- [ ] nach 30, 60 und 90 Tagen Search-Console- und Referral-Baseline sichern.
- [ ] Disavow nur bei dokumentierter Manual-Action-/Manipulationslage erwägen.
- [ ] nach 90 bis 120 Tagen Ausbau, Erhalt oder Reduktion anhand der KPIs entscheiden.

export const siteStrategy = {
  name: 'Auspicious Music',
  subtitle: 'Musikplanung & Viola',
  purpose: 'Musik für Hochzeit, Trauerfeier und Event auswählen, anhören und für die persönliche Abstimmung vorbereiten.',
  expert: {
    name: 'Kim-Marie Borger',
    role: 'Viola-Expertin und ausübende Musikerin',
    url: 'https://kim-marie-borger.com/',
  },
  publisher: {
    name: 'Matthias Ramahi',
    url: 'https://matthiasramahi.de/',
  },
  navigation: [
    {
      href: '/eventmusik/',
      label: 'Anlässe',
      children: [
        { href: '/eventmusik/', label: 'Alle Anlässe', note: 'Ablauf, Ort und Repertoire' },
        { href: '/eventmusik/hochzeit/', label: 'Hochzeit / Trauung', note: 'Einzug bis Auszug' },
        { href: '/eventmusik/sektempfang/', label: 'Sektempfang', note: 'Ankommen und Gratulationen' },
        { href: '/eventmusik/trauerfeier/', label: 'Trauerfeier', note: 'Abschied behutsam planen' },
        { href: '/eventmusik/dinner/', label: 'Dinner', note: 'Zwischen Gängen und Reden' },
        { href: '/eventmusik/firmenevent/', label: 'Firmenevent', note: 'Empfang, Dinner, Highlight' },
        { href: '/eventmusik/geburtstag/', label: 'Geburtstag', note: 'Überraschung oder Empfang' },
        { href: '/eventmusik/live-streicher-draussen/', label: 'Live-Streicher draußen', note: 'Schutz, Akustik und Plan B' },
      ],
    },
    {
      href: '/viola/',
      label: 'Viola',
      children: [
        { href: '/viola/', label: 'Viola im Einsatz', note: 'Klang, Rolle und Praxis' },
        { href: '/viola/viola-oder-violine/', label: 'Viola oder Violine?', note: 'Register und Wirkung entscheiden' },
        { href: '/recording/acoustic-instruments/viola-microphone-placement/', label: 'Mikrofonposition', note: 'Leitfaden · 9 Min.' },
        { href: '/sound-design/when-to-record-strings-instead-of-using-a-library/', label: 'Live oder Sample-Bibliothek?', note: 'Entscheidungshilfe · 8 Min.' },
      ],
    },
    {
      href: '/repertoire/',
      label: 'Repertoire',
      children: [
        { href: '/repertoire/', label: 'Repertoire nach Anlass', note: 'Titel und offene Fassungen' },
        { href: '/tools/wunschstueck-check/', label: 'Wunschstück prüfen', note: 'Fassung und offene Fragen' },
      ],
    },
    {
      href: '/recording/',
      label: 'Aufnahme',
      children: [
        { href: '/recording/', label: 'Aufnahme-Wissen', note: 'Viola, Raum und Mikrofon' },
        { href: '/tools/streicheraufnahme-briefing/', label: 'Aufnahmebrief erstellen', note: 'Browserlokales Werkzeug · DE' },
        { href: '/recording/acoustic-instruments/recording-viola-at-home/', label: 'Viola zuhause aufnehmen', note: 'Leitfaden · 9 Min.' },
        { href: '/recording/acoustic-instruments/viola-microphone-placement/', label: 'Viola-Mikrofonposition', note: 'Leitfaden · 9 Min.' },
      ],
    },
    { href: '/about/', label: 'Über das Projekt' },
  ],
  englishNavigation: [
    { href: '/music-for-media/planning-live-viola-for-a-wedding-ceremony/', label: 'Wedding ceremony' },
    { href: '/recording/', label: 'Recording strings · DE' },
    { href: '/viola/', label: 'Viola · DE' },
    { href: '/about/', label: 'About · DE' },
  ],
} as const;

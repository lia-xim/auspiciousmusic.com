export const siteStrategy = {
  name: 'Auspicious Music',
  subtitle: 'Viola & Strings Lab',
  purpose: 'Eine praktische Fachseite für Viola, Eventmusik, Repertoireentscheidungen und Aufnahme.',
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
      href: '/viola/',
      label: 'Viola',
      children: [
        { href: '/viola/', label: 'Viola im Einsatz', note: 'Klang, Rolle und Praxis' },
        { href: '/viola/viola-oder-violine/', label: 'Viola oder Violine?', note: 'Register und Wirkung entscheiden' },
        { href: '/recording/acoustic-instruments/viola-microphone-placement/', label: 'Mikrofonposition', note: 'Guide · 9 min · EN' },
        { href: '/sound-design/when-to-record-strings-instead-of-using-a-library/', label: 'Live-Streicher oder Library?', note: 'Entscheidungshilfe · EN' },
      ],
    },
    {
      href: '/eventmusik/',
      label: 'Anlässe',
      children: [
        { href: '/eventmusik/', label: 'Alle Anlässe', note: 'Ablauf, Ort und Repertoire' },
        { href: '/eventmusik/live-streicher-draussen/', label: 'Live-Streicher draußen', note: 'Schutz, Akustik und Plan B' },
        { href: '/eventmusik/hochzeit/', label: 'Hochzeit / Trauung', note: 'Einzug bis Auszug' },
        { href: '/eventmusik/trauerfeier/', label: 'Trauerfeier', note: 'Abschied behutsam planen' },
        { href: '/eventmusik/firmenevent/', label: 'Firmenevent', note: 'Empfang, Dinner, Highlight' },
        { href: '/eventmusik/geburtstag/', label: 'Geburtstag', note: 'Überraschung oder Empfang' },
      ],
    },
    {
      href: '/repertoire/',
      label: 'Repertoire',
      children: [
        { href: '/repertoire/', label: 'Repertoire nach Anlass', note: 'Titel und offene Fassungen' },
        { href: '/tools/wunschstueck-check/', label: 'Wunschstück prüfen', note: 'Fassung und offene Fragen' },
        { href: '/eventmusik/sektempfang/', label: 'Sektempfang', note: 'Leicht und gesprächsfreundlich' },
        { href: '/eventmusik/dinner/', label: 'Dinner', note: 'Zwischen Gängen und Reden' },
        { href: '/eventmusik/unterricht/', label: 'Unterricht', note: 'Ziel, Werk und Übeplan' },
      ],
    },
    {
      href: '/recording/',
      label: 'Aufnahme',
      children: [
        { href: '/recording/', label: 'Recording-Hub', note: 'Viola, Raum und Mikrofon' },
        { href: '/tools/streicheraufnahme-briefing/', label: 'Aufnahmebrief erstellen', note: 'Browserlokales Werkzeug · DE' },
        { href: '/recording/acoustic-instruments/recording-viola-at-home/', label: 'Viola zuhause aufnehmen', note: 'Guide · 9 min · EN' },
        { href: '/recording/acoustic-instruments/viola-microphone-placement/', label: 'Viola-Mikrofonposition', note: 'Guide · 9 min · EN' },
      ],
    },
    { href: '/tools/eventmusik-planer/', label: 'Planer' },
    {
      href: '/resources/',
      label: 'Wissen',
      children: [
        { href: '/resources/', label: 'Wissensbereich', note: 'Tools, Guides und Archiv' },
        { href: '/resources/tools/', label: 'Musik-Tools', note: 'Laufen lokal im Browser' },
        { href: '/journal/', label: 'Journal', note: 'Quellenbasierte Guides' },
        { href: '/about/', label: 'Über diese Seite', note: 'Expertise und Verantwortliche' },
        { href: '/about/history-and-relaunch/', label: 'Geschichte & Neustart', note: 'Transparente neue Eigentümerschaft' },
      ],
    },
  ],
} as const;

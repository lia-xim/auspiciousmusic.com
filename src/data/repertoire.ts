export interface RepertoirePiece {
  title: string;
  clarificationDe?: string;
  clarificationEn?: string;
}

export interface OccasionMoment {
  de: string;
  en: string;
  guidanceDe: string;
  guidanceEn: string;
}

export interface OccasionProfile {
  slug: string;
  labelDe: string;
  labelEn: string;
  shortDe: string;
  shortEn: string;
  introDe: string;
  planningDe: string;
  planningEn: string;
  moments: OccasionMoment[];
  questionsDe: string[];
  questionsEn: string[];
  pieces: RepertoirePiece[];
}

export const occasionProfiles: OccasionProfile[] = [
  {
    slug: 'hochzeit',
    labelDe: 'Hochzeit / Trauung',
    labelEn: 'Wedding ceremony',
    shortDe: 'Musik für Einzug, Trauung und Auszug',
    shortEn: 'Music for entrance, ceremony and exit',
    introDe: 'Plant die musikalischen Momente einer standesamtlichen, kirchlichen oder freien Trauung, bevor einzelne Stücke fest zugesagt werden.',
    planningDe: 'Bei einer Trauung brauchen Einzug und Auszug klare Startsignale. Für Ringtausch, Ja-Wort oder Unterschrift sind flexible Endpunkte wichtiger als sekundengenaue Längen.',
    planningEn: 'Entrances and exits need clear live cues. Ring exchange, vows or signing need flexible endings rather than second-perfect durations.',
    moments: [
      { de: 'Ankunft der Gäste', en: 'Guest arrival', guidanceDe: 'Ruhige Musik, die auch bei verspäteter Ankunft flexibel weiterlaufen kann.', guidanceEn: 'Calm music that can continue flexibly while guests arrive.' },
      { de: 'Einzug', en: 'Entrance', guidanceDe: 'Startsignal und Endpunkt mit Trauzeug:innen oder Zeremonieleitung abstimmen.', guidanceEn: 'Agree the start cue and landing point with the coordinator or celebrant.' },
      { de: 'Ringtausch, Ja-Wort oder Unterschrift', en: 'Rings, vows or signing', guidanceDe: 'Eine kürzbare oder wiederholbare Fassung einplanen.', guidanceEn: 'Plan a version that can be shortened or repeated gracefully.' },
      { de: 'Auszug', en: 'Exit', guidanceDe: 'Ein deutliches, tragfähiges Ende für Bewegung und Applaus wählen.', guidanceEn: 'Choose a clear, buoyant ending that supports movement and applause.' },
    ],
    questionsDe: ['Wer gibt Einzug und Auszug live frei?', 'Gibt es für draußen einen trockenen, schattigen Platz und einen belastbaren Plan B?', 'Welche Wunschstücke sind unverzichtbar und welche nur Inspiration?'],
    questionsEn: ['Who gives the live cue for entrance and exit?', 'For an outdoor setting, is there a dry shaded place and a reliable Plan B?', 'Which requested pieces are essential and which are references only?'],
    pieces: [
      { title: 'A Thousand Years' }, { title: 'Perfect' }, { title: 'All of Me' },
      { title: 'Can\u2019t Help Falling in Love' }, { title: 'Canon in D' },
      { title: 'Ordinary', clarificationDe: 'Interpretation oder Version bei der Anfrage angeben.', clarificationEn: 'Name the intended artist or version in the enquiry.' },
      { title: 'Wildest Dreams' },
    ],
  },
  {
    slug: 'sektempfang',
    labelDe: 'Sektempfang',
    labelEn: 'Drinks reception',
    shortDe: 'Leichte Live-Musik für Ankommen und Gespräche',
    shortEn: 'Light live music for arrivals and conversation',
    introDe: 'Ein Empfang braucht Musik, die Atmosphäre schafft, ohne Gespräche oder Gratulationen zu überdecken.',
    planningDe: 'Für einen Sektempfang funktionieren mehrere flexible Blöcke besser als ein starres Konzertprogramm. Lautstärke, Pausen und ein wettergeschützter Platz werden vorab geklärt.',
    planningEn: 'Several flexible sets usually work better than a fixed concert programme. Volume, breaks and weather protection should be agreed in advance.',
    moments: [
      { de: 'Begrüßung', en: 'Welcome', guidanceDe: 'Der erste Block darf aufmerksam machen, ohne die Begrüßung zu übernehmen.', guidanceEn: 'The first set may attract attention without taking over the welcome.' },
      { de: 'Gratulationen und Fotos', en: 'Congratulations and photos', guidanceDe: 'Leichte Titel mit flexiblen Übergängen einplanen.', guidanceEn: 'Use light pieces with flexible transitions.' },
      { de: 'Gespräche und Getränke', en: 'Conversation and drinks', guidanceDe: 'Lautstärke und Position so wählen, dass Gespräche möglich bleiben.', guidanceEn: 'Set volume and position so conversation remains easy.' },
      { de: 'Übergang zum nächsten Programmpunkt', en: 'Transition to the next programme item', guidanceDe: 'Ein klares Schlussstück mit der Koordination abstimmen.', guidanceEn: 'Agree one clear closing piece with the coordinator.' },
    ],
    questionsDe: ['Wie lange dauert der Empfang realistisch?', 'Soll die Musik durchgehend oder in Blöcken spielen?', 'Wo stehen Gäste, Service und Musikerin zueinander?'],
    questionsEn: ['How long will the reception realistically last?', 'Should the music run continuously or in sets?', 'Where will guests, service staff and performer stand?'],
    pieces: [{ title: 'Viva La Vida' }, { title: 'Marry You' }, { title: 'Despacito' }, { title: 'Dancing Queen' }, { title: 'Shut Up and Dance' }, { title: 'La Vie en Rose' }],
  },
  {
    slug: 'trauerfeier',
    labelDe: 'Beerdigung / Trauerfeier',
    labelEn: 'Funeral / memorial',
    shortDe: 'Behutsame Musik für Abschied und Erinnerung',
    shortEn: 'Considered music for farewell and remembrance',
    introDe: 'Bei einem Abschied sind klare Absprachen und ein sensibler Umgang mit persönlichen Bezügen wichtiger als eine lange Repertoireliste.',
    planningDe: 'Trauerhalle, Kirche, Grab und freie Abschiedsfeier haben unterschiedliche Wege und Signale. Die Musik wird mit Bestattungshaus, Trauerrede oder Gemeinde in den Ablauf eingefügt.',
    planningEn: 'A chapel, church, graveside or independent memorial each has different routes and cues. Music should be coordinated with the funeral home, speaker or parish.',
    moments: [
      { de: 'Sammlung vor Beginn', en: 'Gathering before the service', guidanceDe: 'Zurückhaltend beginnen und genug Ruhe im Raum lassen.', guidanceEn: 'Begin quietly and leave enough space in the room.' },
      { de: 'Eröffnung oder Eingang', en: 'Opening or entrance', guidanceDe: 'Das Startsignal eindeutig mit der verantwortlichen Person klären.', guidanceEn: 'Confirm the start cue with the person responsible.' },
      { de: 'Persönliches Gedenken', en: 'Personal remembrance', guidanceDe: 'Bedeutung und gewünschte Fassung des Stücks vorher besprechen.', guidanceEn: 'Discuss the piece\u2019s meaning and intended version beforehand.' },
      { de: 'Ausgang oder Gang zum Grab', en: 'Exit or procession to the grave', guidanceDe: 'Weg, Wetter und mögliche Wartezeiten in die Länge einrechnen.', guidanceEn: 'Account for route, weather and possible waiting time.' },
    ],
    questionsDe: ['Wer koordiniert den Ablauf vor Ort?', 'Welche persönliche Bedeutung hat das Wunschstück?', 'Wird an einem oder mehreren Orten gespielt?'],
    questionsEn: ['Who coordinates the service on site?', 'What personal meaning does the requested piece carry?', 'Will the performance take place in one or several locations?'],
    pieces: [
      { title: 'Hallelujah' },
      { title: 'Ave Maria', clarificationDe: 'Komponist oder Fassung bei der Anfrage abstimmen.', clarificationEn: 'Confirm the composer or version in the enquiry.' },
      { title: 'Der Schwan' }, { title: 'You Raise Me Up' }, { title: 'Somewhere Over the Rainbow' }, { title: 'Tears in Heaven' },
    ],
  },
  {
    slug: 'dinner',
    labelDe: 'Dinner',
    labelEn: 'Dinner',
    shortDe: 'Dezente Musik zwischen Gängen und Gesprächen',
    shortEn: 'Subtle music between courses and conversation',
    introDe: 'Dinnermusik begleitet den Raum. Sie setzt Akzente, ohne Service, Reden oder Gespräche zu stören.',
    planningDe: 'Kürzere Musikblöcke zwischen Gängen oder Reden lassen sich besser mit Service und Moderation verzahnen als ein durchgehendes Konzert.',
    planningEn: 'Shorter sets between courses or speeches integrate more naturally with service and moderation than a continuous concert.',
    moments: [
      { de: 'Ankommen am Tisch', en: 'Taking seats', guidanceDe: 'Warm und leicht beginnen, während der Raum sich setzt.', guidanceEn: 'Begin warmly and lightly while the room settles.' },
      { de: 'Zwischen den Gängen', en: 'Between courses', guidanceDe: 'Spielblöcke mit Service und Küche abstimmen.', guidanceEn: 'Coordinate sets with service and kitchen timing.' },
      { de: 'Vor oder nach einer Rede', en: 'Before or after a speech', guidanceDe: 'Ein kurzes musikalisches Signal statt Hintergrund unter der Rede nutzen.', guidanceEn: 'Use a short musical cue rather than playing under the speech.' },
      { de: 'Ausklang', en: 'Closing', guidanceDe: 'Das Ende an den Übergang zu Bar, Tanz oder Verabschiedung anpassen.', guidanceEn: 'Match the ending to the transition into drinks, dancing or departure.' },
    ],
    questionsDe: ['Wie viele Gänge und Reden sind geplant?', 'Soll die Musik rein begleitend oder einmal bewusst im Mittelpunkt sein?', 'Ist Verstärkung im Raum notwendig oder unerwünscht?'],
    questionsEn: ['How many courses and speeches are planned?', 'Should the music remain background or take focus once?', 'Is amplification necessary or unwanted in the room?'],
    pieces: [{ title: 'La Vie en Rose' }, { title: 'Sar\u00e0 perch\u00e9 ti amo' }, { title: 'Fly Me to the Moon' }, { title: 'Moon River' }, { title: 'Salut d\u2019Amour' }],
  },
  {
    slug: 'firmenevent',
    labelDe: 'Firmenevent',
    labelEn: 'Corporate event',
    shortDe: 'Live-Viola für Empfang, Dinner und Programmpunkt',
    shortEn: 'Live viola for reception, dinner and featured moments',
    introDe: 'Bei Firmenevents muss die Musik zum Zeitplan, zur Raumakustik und zur Rolle im Programm passen: dezent begleiten oder bewusst einen Akzent setzen.',
    planningDe: 'Ein belastbarer Ablauf nennt Aufbauzeit, Ansprechpartner:in, Lautstärkerahmen, Reden, Servicefenster und das genaue Startsignal für hervorgehobene Momente.',
    planningEn: 'A reliable plan names setup time, on-site contact, volume limits, speeches, service windows and the exact cue for featured moments.',
    moments: [
      { de: 'Gästeankunft', en: 'Guest arrival', guidanceDe: 'Präsent, aber gesprächsfreundlich starten.', guidanceEn: 'Start with presence while keeping conversation easy.' },
      { de: 'Eröffnung', en: 'Opening', guidanceDe: 'Moderation und musikalischen Auftakt sekundengenau koordinieren.', guidanceEn: 'Coordinate moderation and musical opening precisely.' },
      { de: 'Networking oder Dinner', en: 'Networking or dinner', guidanceDe: 'Blöcke und Lautstärke an Raum und Gesprächsdichte anpassen.', guidanceEn: 'Adapt sets and volume to the room and conversation density.' },
      { de: 'Ehrung, Reveal oder Highlight', en: 'Award, reveal or highlight', guidanceDe: 'Ein eindeutiges Cue und eine belastbare Ersatzlösung festlegen.', guidanceEn: 'Set one unambiguous cue and a reliable fallback.' },
    ],
    questionsDe: ['Wer ist am Veranstaltungstag entscheidungsbefugt?', 'Welche Technik und Aufbauzeit sind vor Ort verfügbar?', 'Ist die Musik Hintergrund, Programmpunkt oder beides?'],
    questionsEn: ['Who can make decisions on the event day?', 'Which technical setup and setup time are available?', 'Is the music background, a featured item, or both?'],
    pieces: [{ title: 'Viva La Vida' }, { title: 'Skyfall' }, { title: 'Titanium' }, { title: 'Shape of You' }, { title: 'Wake Me Up' }, { title: 'Experience' }, { title: 'Game of Thrones Theme' }],
  },
  {
    slug: 'geburtstag',
    labelDe: 'Geburtstag',
    labelEn: 'Birthday',
    shortDe: 'Vom Überraschungsständchen bis zum Empfang',
    shortEn: 'From a surprise performance to reception music',
    introDe: 'Geburtstagsmusik kann Überraschung, Geschenk, Empfang oder längerer Musikblock sein. Der Planer trennt diese Rollen voneinander.',
    planningDe: 'Bei einer Überraschung braucht die Musikerin eine unauffällige Ankunft, eine eingeweihte Kontaktperson und ein klares Startsignal. Für längere Feiern werden Blöcke und Pausen geplant.',
    planningEn: 'A surprise needs discreet arrival, one trusted contact and a clear cue. Longer celebrations need planned sets and breaks.',
    moments: [
      { de: 'Überraschungsauftakt', en: 'Surprise opening', guidanceDe: 'Ankunft und Startsignal diskret mit einer Vertrauensperson abstimmen.', guidanceEn: 'Coordinate arrival and cue discreetly with one trusted person.' },
      { de: 'Empfang', en: 'Reception', guidanceDe: 'Leichte Titel für Ankunft, Gratulation und Gespräche wählen.', guidanceEn: 'Choose light music for arrival, congratulations and conversation.' },
      { de: 'Rede oder Geschenk', en: 'Speech or gift', guidanceDe: 'Musik als klaren Rahmen vor oder nach der Rede setzen.', guidanceEn: 'Use music as a clear frame before or after the speech.' },
      { de: 'Gemeinsamer Abschluss', en: 'Shared ending', guidanceDe: 'Ein bekanntes Schlussstück mit der moderierenden Person koordinieren.', guidanceEn: 'Coordinate a familiar closing piece with the host.' },
    ],
    questionsDe: ['Ist der Auftritt eine Überraschung?', 'Wer kann Ankunft und Startsignal diskret koordinieren?', 'Welche Musik verbindet die gefeierte Person mit den Gästen?'],
    questionsEn: ['Is the performance a surprise?', 'Who can coordinate arrival and cue discreetly?', 'Which music connects the guest of honour with the guests?'],
    pieces: [{ title: 'Happy Birthday' }, { title: 'Schön, dass du geboren bist' }, { title: 'Dancing Queen' }, { title: 'Mamma Mia' }, { title: 'Lieblingsmensch' }, { title: 'Applaus, Applaus' }, { title: 'Birthday \u2013 The Lumineers' }, { title: 'Happy Birthday \u2013 Stevie Wonder' }, { title: 'Tage wie diese' }],
  },
  {
    slug: 'unterricht',
    labelDe: 'Unterricht',
    labelEn: 'Lessons',
    shortDe: 'Ziele, Repertoire und Übeweg gemeinsam strukturieren',
    shortEn: 'Structure goals, repertoire and practice together',
    introDe: 'Für Unterrichtsanfragen sammelt der Planer Instrument, Erfahrungsstand, Ziel und Repertoirewunsch, ohne eine Probestunde oder einen Platz zu bestätigen.',
    planningDe: 'Ein gutes Erstgespräch trennt langfristige Ziele, aktuellen Stand und ein realistisches Übefenster. Das konkrete Werk wird erst nach Schwierigkeits- und Passungsprüfung festgelegt.',
    planningEn: 'A useful first conversation separates long-term goals, current level and a realistic practice window. The exact work follows after checking level and fit.',
    moments: [
      { de: 'Aktuellen Stand klären', en: 'Clarify current level', guidanceDe: 'Instrument, Vorerfahrung und bisheriges Repertoire knapp beschreiben.', guidanceEn: 'Briefly describe instrument, prior experience and current repertoire.' },
      { de: 'Ziel festlegen', en: 'Set the goal', guidanceDe: 'Einstieg, Wiedereinstieg, Technik, Vorspiel oder gemeinsames Musizieren unterscheiden.', guidanceEn: 'Distinguish first steps, returning, technique, performance or ensemble goals.' },
      { de: 'Passendes Werk wählen', en: 'Choose a suitable work', guidanceDe: 'Schwierigkeitsgrad, Tonumfang und Lernziel gemeinsam prüfen.', guidanceEn: 'Check level, range and learning goal together.' },
      { de: 'Übeplan vereinbaren', en: 'Agree a practice plan', guidanceDe: 'Ein realistisches Zeitfenster und eine klare nächste Aufgabe festhalten.', guidanceEn: 'Set a realistic time window and one clear next task.' },
    ],
    questionsDe: ['Geht es um Violine oder Viola/Bratsche?', 'Welche Vorerfahrung und welches Instrument sind vorhanden?', 'Wie viel regelmäßige Übezeit ist realistisch?'],
    questionsEn: ['Is this for violin or viola?', 'What experience and instrument are available?', 'How much regular practice time is realistic?'],
    pieces: [
      { title: 'Toad in the Hole' },
      { title: 'Rieding Concerto / Concertino', clarificationDe: 'Genaues Werk und Satz im Erstgespräch klären.', clarificationEn: 'Confirm the exact work and movement in the first conversation.' },
    ],
  },
];

export const occasionBySlug = Object.fromEntries(occasionProfiles.map((profile) => [profile.slug, profile])) as Record<string, OccasionProfile>;

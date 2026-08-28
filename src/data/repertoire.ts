export interface RepertoirePiece {
  title: string;
  clarificationDe?: string;
  clarificationEn?: string;
  characters?: Array<'warm' | 'calm' | 'bright' | 'formal' | 'modern'>;
  moments?: number[];
}

export const youtubeSearchUrl = (title: string) =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(`${title} Viola`)}`;

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
  seoTitleDe: string;
  seoDescriptionDe: string;
  h1De: string;
  plannerTitleDe: string;
  plannerIntroDe: string;
  defaultCharacter: 'warm' | 'calm' | 'bright' | 'formal' | 'modern';
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
    seoTitleDe: 'Hochzeitsmusik für Trauung, Einzug & Auszug | Auspicious Music',
    seoDescriptionDe: 'Hochzeitsmusik für freie, kirchliche oder standesamtliche Trauungen auswählen: Spielmomente ordnen, drei Stücke anhören und den Ablauf vorbereiten.',
    h1De: 'Hochzeitsmusik für Trauung, Einzug und Auszug',
    plannerTitleDe: 'Hochzeitsmusik in wenigen Minuten eingrenzen',
    plannerIntroDe: 'Wählt die Momente, für die ihr Musik braucht, und eine gewünschte Wirkung. Die Auswahl zeigt drei Stücke aus dem Hochzeitsrepertoire und ordnet sie direkt dem Ablauf zu.',
    defaultCharacter: 'warm',
    shortDe: 'Musik für Einzug, Trauung und Auszug',
    shortEn: 'Music for entrance, ceremony and exit',
    introDe: 'Für eine Trauung braucht nicht jeder Programmpunkt Musik. Entscheidend sind die Momente, in denen alle warten, gehen oder bewusst zuhören: Einzug, Ringtausch, Unterschrift und Auszug.',
    planningDe: 'Beim Einzug muss klar sein, wer das Zeichen gibt und wann das Stück enden soll. Bei Unterschrift oder Ringtausch braucht die Fassung Spielraum, weil die Dauer erst im Moment entsteht. Für den Auszug darf der Wechsel hörbar sein.',
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
      { title: 'A Thousand Years', characters: ['warm', 'modern'], moments: [1, 2] },
      { title: 'Perfect', characters: ['warm', 'modern'], moments: [1, 3] },
      { title: 'All of Me', characters: ['warm', 'calm'], moments: [1, 2] },
      { title: 'Can\u2019t Help Falling in Love', characters: ['warm', 'calm'], moments: [0, 2] },
      { title: 'Canon in D', characters: ['formal', 'bright'], moments: [0, 1, 3] },
      { title: 'Ordinary', clarificationDe: 'Interpretation oder Version bei der Anfrage angeben.', clarificationEn: 'Name the intended artist or version in the enquiry.', characters: ['modern', 'warm'], moments: [1, 2] },
      { title: 'Wildest Dreams', characters: ['modern', 'bright'], moments: [2, 3] },
    ],
  },
  {
    slug: 'sektempfang',
    labelDe: 'Sektempfang',
    labelEn: 'Drinks reception',
    seoTitleDe: 'Musik zum Sektempfang: Live-Musik planen | Auspicious Music',
    seoDescriptionDe: 'Musik zum Sektempfang auswählen: leichte Stücke für Begrüßung, Gratulationen und Gespräche finden und flexible Musikblöcke vorbereiten.',
    h1De: 'Musik zum Sektempfang auswählen',
    plannerTitleDe: 'Drei Stücke für euren Sektempfang finden',
    plannerIntroDe: 'Wählt die Phasen des Empfangs und die gewünschte Stimmung. Die Auswahl bleibt bewusst bei Titeln, die für Ankommen, Gratulationen und Gespräche gedacht sind.',
    defaultCharacter: 'bright',
    shortDe: 'Leichte Live-Musik für Ankommen und Gespräche',
    shortEn: 'Light live music for arrivals and conversation',
    introDe: 'Beim Sektempfang kommen Menschen an, gratulieren, suchen ihren Platz und unterhalten sich. Die Musik begleitet diese Bewegung. Sie sollte hörbar sein, ohne aus dem Empfang ein Konzert zu machen.',
    planningDe: 'Zwei oder drei flexible Musikblöcke lassen sich leichter an Fotos, Service und verspätete Gäste anpassen als eine feste Titelfolge. Vorab reichen drei Absprachen: ungefähre Dauer, Standort der Musikerin und ein geschützter Platz bei unsicherem Wetter.',
    planningEn: 'Several flexible sets usually work better than a fixed concert programme. Volume, breaks and weather protection should be agreed in advance.',
    moments: [
      { de: 'Begrüßung', en: 'Welcome', guidanceDe: 'Der erste Block darf aufmerksam machen, ohne die Begrüßung zu übernehmen.', guidanceEn: 'The first set may attract attention without taking over the welcome.' },
      { de: 'Gratulationen und Fotos', en: 'Congratulations and photos', guidanceDe: 'Leichte Titel mit flexiblen Übergängen einplanen.', guidanceEn: 'Use light pieces with flexible transitions.' },
      { de: 'Gespräche und Getränke', en: 'Conversation and drinks', guidanceDe: 'Lautstärke und Position so wählen, dass Gespräche möglich bleiben.', guidanceEn: 'Set volume and position so conversation remains easy.' },
      { de: 'Übergang zum nächsten Programmpunkt', en: 'Transition to the next programme item', guidanceDe: 'Ein klares Schlussstück mit der Koordination abstimmen.', guidanceEn: 'Agree one clear closing piece with the coordinator.' },
    ],
    questionsDe: ['Wie lange dauert der Empfang realistisch?', 'Soll die Musik durchgehend oder in Blöcken spielen?', 'Wo stehen Gäste, Service und Musikerin zueinander?'],
    questionsEn: ['How long will the reception realistically last?', 'Should the music run continuously or in sets?', 'Where will guests, service staff and performer stand?'],
    pieces: [
      { title: 'Viva La Vida', characters: ['bright', 'modern'], moments: [0, 3] },
      { title: 'Marry You', characters: ['bright', 'modern'], moments: [0, 1] },
      { title: 'Despacito', characters: ['bright', 'modern'], moments: [1, 2] },
      { title: 'Dancing Queen', characters: ['bright'], moments: [1, 3] },
      { title: 'Shut Up and Dance', characters: ['bright', 'modern'], moments: [2, 3] },
      { title: 'La Vie en Rose', characters: ['warm', 'calm'], moments: [0, 2] },
    ],
  },
  {
    slug: 'trauerfeier',
    labelDe: 'Beerdigung / Trauerfeier',
    labelEn: 'Funeral / memorial',
    seoTitleDe: 'Trauermusik für Beerdigung & Trauerfeier | Auspicious Music',
    seoDescriptionDe: 'Trauermusik für Beerdigung oder Trauerfeier auswählen: persönliche Stücke, Spielmomente und Übergänge behutsam zu einem Ablauf ordnen.',
    h1De: 'Trauermusik für Beerdigung und Trauerfeier',
    plannerTitleDe: 'Trauermusik behutsam auswählen',
    plannerIntroDe: 'Wählt die Stellen, an denen Musik Raum bekommen soll. Danach erscheinen drei Stücke aus dem Trauerrepertoire, jeweils einem Moment des Abschieds zugeordnet.',
    defaultCharacter: 'calm',
    shortDe: 'Behutsame Musik für Abschied und Erinnerung',
    shortEn: 'Considered music for farewell and remembrance',
    introDe: 'Bei einer Trauerfeier werden meist nur wenige Stücke gebraucht. Sie rahmen den Beginn, eine persönliche Erinnerung oder den Weg zum Grab. Die Bedeutung eines Titels ist dabei oft wichtiger als seine Bekanntheit.',
    planningDe: 'Zuerst wird geklärt, wo gespielt wird: in der Trauerhalle, in einer Kirche, am Grab oder an mehreren Orten. Danach lassen sich Startzeichen, Wege und mögliche Wartezeiten mit Bestattungshaus, Trauerredner:in oder Gemeinde abstimmen.',
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
      { title: 'Hallelujah', characters: ['calm', 'warm'], moments: [0, 2, 3] },
      { title: 'Ave Maria', clarificationDe: 'Komponist oder Fassung bei der Anfrage abstimmen.', clarificationEn: 'Confirm the composer or version in the enquiry.', characters: ['formal', 'calm'], moments: [0, 1, 2] },
      { title: 'Der Schwan', characters: ['formal', 'calm'], moments: [0, 2] },
      { title: 'You Raise Me Up', characters: ['warm', 'formal'], moments: [1, 3] },
      { title: 'Somewhere Over the Rainbow', characters: ['warm', 'bright'], moments: [2, 3] },
      { title: 'Tears in Heaven', characters: ['calm', 'warm'], moments: [1, 2] },
    ],
  },
  {
    slug: 'dinner',
    labelDe: 'Dinner',
    labelEn: 'Dinner',
    seoTitleDe: 'Dinnermusik für Hochzeit & Event planen | Auspicious Music',
    seoDescriptionDe: 'Dinnermusik für Hochzeit oder Event auswählen: Live-Musik zwischen Ankommen, Gängen, Reden und Ausklang sinnvoll im Ablauf platzieren.',
    h1De: 'Dinnermusik für Hochzeit und Event planen',
    plannerTitleDe: 'Drei Stücke für den Dinner-Ablauf auswählen',
    plannerIntroDe: 'Wählt die Stellen, an denen Live-Musik tatsächlich Platz hat. Die Vorschläge berücksichtigen nur das Dinner-Repertoire und ordnen jeden Titel einem konkreten Übergang zu.',
    defaultCharacter: 'calm',
    shortDe: 'Dezente Musik zwischen Gängen und Gesprächen',
    shortEn: 'Subtle music between courses and conversation',
    introDe: 'Dinnermusik soll Gespräche nicht überdecken. Am besten sitzt sie dort im Ablauf, wo ohnehin ein Übergang entsteht: beim Ankommen, zwischen zwei Gängen oder nach einer Rede.',
    planningDe: 'Kurze Musikblöcke lassen sich mit Service und Moderation besser abstimmen als ein durchgehendes Konzert. Während einer Rede bleibt die Musik aus; davor oder danach kann ein einzelnes Stück den Übergang markieren.',
    planningEn: 'Shorter sets between courses or speeches integrate more naturally with service and moderation than a continuous concert.',
    moments: [
      { de: 'Ankommen am Tisch', en: 'Taking seats', guidanceDe: 'Warm und leicht beginnen, während der Raum sich setzt.', guidanceEn: 'Begin warmly and lightly while the room settles.' },
      { de: 'Zwischen den Gängen', en: 'Between courses', guidanceDe: 'Spielblöcke mit Service und Küche abstimmen.', guidanceEn: 'Coordinate sets with service and kitchen timing.' },
      { de: 'Vor oder nach einer Rede', en: 'Before or after a speech', guidanceDe: 'Ein kurzes musikalisches Signal statt Hintergrund unter der Rede nutzen.', guidanceEn: 'Use a short musical cue rather than playing under the speech.' },
      { de: 'Ausklang', en: 'Closing', guidanceDe: 'Das Ende an den Übergang zu Bar, Tanz oder Verabschiedung anpassen.', guidanceEn: 'Match the ending to the transition into drinks, dancing or departure.' },
    ],
    questionsDe: ['Wie viele Gänge und Reden sind geplant?', 'Soll die Musik rein begleitend oder einmal bewusst im Mittelpunkt sein?', 'Ist Verstärkung im Raum notwendig oder unerwünscht?'],
    questionsEn: ['How many courses and speeches are planned?', 'Should the music remain background or take focus once?', 'Is amplification necessary or unwanted in the room?'],
    pieces: [
      { title: 'La Vie en Rose', characters: ['warm', 'calm'], moments: [0, 1] },
      { title: 'Sar\u00e0 perch\u00e9 ti amo', characters: ['bright', 'modern'], moments: [1, 3] },
      { title: 'Fly Me to the Moon', characters: ['bright', 'warm'], moments: [0, 2] },
      { title: 'Moon River', characters: ['calm', 'warm'], moments: [0, 1, 3] },
      { title: 'Salut d\u2019Amour', characters: ['formal', 'warm'], moments: [0, 2] },
    ],
  },
  {
    slug: 'firmenevent',
    labelDe: 'Firmenevent',
    labelEn: 'Corporate event',
    seoTitleDe: 'Live-Musik für Firmenevent & Empfang | Auspicious Music',
    seoDescriptionDe: 'Live-Musik für Firmenevent, Empfang oder Dinner planen: Rolle im Programm festlegen, passende Stücke auswählen und Cues vorbereiten.',
    h1De: 'Live-Musik für Firmenevent, Empfang und Dinner',
    plannerTitleDe: 'Musik für den konkreten Programmpunkt auswählen',
    plannerIntroDe: 'Legt fest, ob die Musik Gäste empfängt, Gespräche begleitet oder einen Programmpunkt eröffnet. Die Vorschläge stammen nur aus dem Repertoire für Firmenevents.',
    defaultCharacter: 'modern',
    shortDe: 'Live-Viola für Empfang, Dinner und Programmpunkt',
    shortEn: 'Live viola for reception, dinner and featured moments',
    introDe: 'Bei einem Firmenevent kann Live-Musik drei verschiedene Aufgaben haben: Gäste empfangen, Gespräche begleiten oder einen Programmpunkt eröffnen. Diese Rolle sollte vor der Titelauswahl feststehen.',
    planningDe: 'Für die Abstimmung werden eine Kontaktperson vor Ort, Aufbauzeit, verfügbare Technik und das Startzeichen für hervorgehobene Momente gebraucht. Bei Empfang oder Dinner kommen Lautstärke, Pausen und Servicezeiten hinzu.',
    planningEn: 'A reliable plan names setup time, on-site contact, volume limits, speeches, service windows and the exact cue for featured moments.',
    moments: [
      { de: 'Gästeankunft', en: 'Guest arrival', guidanceDe: 'Präsent, aber gesprächsfreundlich starten.', guidanceEn: 'Start with presence while keeping conversation easy.' },
      { de: 'Eröffnung', en: 'Opening', guidanceDe: 'Moderation und musikalischen Auftakt sekundengenau koordinieren.', guidanceEn: 'Coordinate moderation and musical opening precisely.' },
      { de: 'Networking oder Dinner', en: 'Networking or dinner', guidanceDe: 'Blöcke und Lautstärke an Raum und Gesprächsdichte anpassen.', guidanceEn: 'Adapt sets and volume to the room and conversation density.' },
      { de: 'Ehrung, Reveal oder Highlight', en: 'Award, reveal or highlight', guidanceDe: 'Ein eindeutiges Cue und eine belastbare Ersatzlösung festlegen.', guidanceEn: 'Set one unambiguous cue and a reliable fallback.' },
    ],
    questionsDe: ['Wer ist am Veranstaltungstag entscheidungsbefugt?', 'Welche Technik und Aufbauzeit sind vor Ort verfügbar?', 'Ist die Musik Hintergrund, Programmpunkt oder beides?'],
    questionsEn: ['Who can make decisions on the event day?', 'Which technical setup and setup time are available?', 'Is the music background, a featured item, or both?'],
    pieces: [
      { title: 'Viva La Vida', characters: ['bright', 'modern'], moments: [0, 1] },
      { title: 'Skyfall', characters: ['formal', 'modern'], moments: [1, 3] },
      { title: 'Titanium', characters: ['modern', 'bright'], moments: [1, 3] },
      { title: 'Shape of You', characters: ['modern', 'bright'], moments: [0, 2] },
      { title: 'Wake Me Up', characters: ['bright', 'modern'], moments: [0, 3] },
      { title: 'Experience', characters: ['formal', 'modern'], moments: [1, 3] },
      { title: 'Game of Thrones Theme', characters: ['formal', 'modern'], moments: [1, 3] },
    ],
  },
  {
    slug: 'geburtstag',
    labelDe: 'Geburtstag',
    labelEn: 'Birthday',
    seoTitleDe: 'Live-Musik zum Geburtstag planen | Auspicious Music',
    seoDescriptionDe: 'Live-Musik zum Geburtstag auswählen: Überraschung, Empfang, musikalisches Geschenk oder Abschluss planen und drei passende Stücke anhören.',
    h1De: 'Live-Musik zum Geburtstag auswählen',
    plannerTitleDe: 'Drei Stücke für die Geburtstagsfeier finden',
    plannerIntroDe: 'Wählt zuerst die Rolle der Musik: Überraschung, Empfang, Geschenk oder Abschluss. Danach zeigt die Auswahl drei Titel aus dem Geburtstagsrepertoire.',
    defaultCharacter: 'bright',
    shortDe: 'Vom Überraschungsständchen bis zum Empfang',
    shortEn: 'From a surprise performance to reception music',
    introDe: 'Geburtstagsmusik kann eine kurze Überraschung, ein persönliches Geschenk oder Begleitung beim Empfang sein. Diese drei Varianten brauchen unterschiedliche Abläufe und sollten nicht in einer allgemeinen Anfrage vermischt werden.',
    planningDe: 'Für eine Überraschung braucht die Musikerin eine unauffällige Ankunft, eine eingeweihte Kontaktperson und ein klares Startzeichen. Bei einem längeren Empfang werden stattdessen ungefähre Spielblöcke und Pausen abgestimmt.',
    planningEn: 'A surprise needs discreet arrival, one trusted contact and a clear cue. Longer celebrations need planned sets and breaks.',
    moments: [
      { de: 'Überraschungsauftakt', en: 'Surprise opening', guidanceDe: 'Ankunft und Startsignal diskret mit einer Vertrauensperson abstimmen.', guidanceEn: 'Coordinate arrival and cue discreetly with one trusted person.' },
      { de: 'Empfang', en: 'Reception', guidanceDe: 'Leichte Titel für Ankunft, Gratulation und Gespräche wählen.', guidanceEn: 'Choose light music for arrival, congratulations and conversation.' },
      { de: 'Rede oder Geschenk', en: 'Speech or gift', guidanceDe: 'Musik als klaren Rahmen vor oder nach der Rede setzen.', guidanceEn: 'Use music as a clear frame before or after the speech.' },
      { de: 'Gemeinsamer Abschluss', en: 'Shared ending', guidanceDe: 'Ein bekanntes Schlussstück mit der moderierenden Person koordinieren.', guidanceEn: 'Coordinate a familiar closing piece with the host.' },
    ],
    questionsDe: ['Ist der Auftritt eine Überraschung?', 'Wer kann Ankunft und Startsignal diskret koordinieren?', 'Welche Musik verbindet die gefeierte Person mit den Gästen?'],
    questionsEn: ['Is the performance a surprise?', 'Who can coordinate arrival and cue discreetly?', 'Which music connects the guest of honour with the guests?'],
    pieces: [
      { title: 'Happy Birthday', characters: ['bright'], moments: [0, 2, 3] },
      { title: 'Schön, dass du geboren bist', characters: ['bright', 'warm'], moments: [0, 2] },
      { title: 'Dancing Queen', characters: ['bright'], moments: [1, 3] },
      { title: 'Mamma Mia', characters: ['bright', 'modern'], moments: [1, 3] },
      { title: 'Lieblingsmensch', characters: ['warm', 'modern'], moments: [0, 2] },
      { title: 'Applaus, Applaus', characters: ['warm', 'bright'], moments: [2, 3] },
      { title: 'Birthday \u2013 The Lumineers', characters: ['modern', 'warm'], moments: [1, 2] },
      { title: 'Happy Birthday \u2013 Stevie Wonder', characters: ['bright', 'modern'], moments: [0, 3] },
      { title: 'Tage wie diese', characters: ['bright', 'modern'], moments: [1, 3] },
    ],
  },
  {
    slug: 'unterricht',
    labelDe: 'Unterricht',
    labelEn: 'Lessons',
    seoTitleDe: 'Viola-Unterricht vorbereiten | Auspicious Music',
    seoDescriptionDe: 'Ziele, Vorerfahrung und Repertoirewünsche für ein erstes Gespräch über Viola-Unterricht ordnen.',
    h1De: 'Viola-Unterricht vorbereiten',
    plannerTitleDe: 'Ziele für das Erstgespräch ordnen',
    plannerIntroDe: 'Diese Seite sammelt Ziele und Repertoirewünsche. Sie ersetzt keine persönliche Einschätzung des Spielstands.',
    defaultCharacter: 'formal',
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

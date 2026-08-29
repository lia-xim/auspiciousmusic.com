export interface AudioSample {
  title: string;
  composer: string;
  category: string;
  duration: string;
  src: string;
}

export const audioSamples: AudioSample[] = [
  {
    title: 'Griechischer Wein',
    composer: 'Udo Jürgens',
    category: 'Klassiker',
    duration: '1:06',
    src: '/assets/audio/kim-marie/griechischer-wein.mp3',
  },
  {
    title: 'Love in the Dark',
    composer: 'Adele',
    category: 'Pop',
    duration: '1:40',
    src: '/assets/audio/kim-marie/love-in-the-dark.mp3',
  },
  {
    title: 'Sarà perché ti amo',
    composer: 'Ricchi e Poveri',
    category: 'Italo-Pop',
    duration: '1:16',
    src: '/assets/audio/kim-marie/sara-perche-ti-amo.mp3',
  },
  {
    title: 'Somewhere Over the Rainbow',
    composer: 'Harold Arlen · E. Y. Harburg',
    category: 'Filmmusik',
    duration: '1:12',
    src: '/assets/audio/kim-marie/somewhere-over-the-rainbow.mp3',
  },
  {
    title: 'Video Games',
    composer: 'Lana Del Rey',
    category: 'Pop',
    duration: '1:08',
    src: '/assets/audio/kim-marie/video-games.mp3',
  },
];

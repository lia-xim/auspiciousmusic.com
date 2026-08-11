import type { APIRoute } from 'astro';

const entries = [
  {
    title: 'How to Build a Sampled Instrument in Ableton Live',
    description: 'Recording, trimming, looping and mapping a viola into Sampler — with the round-robin problems left in.',
    link: '/sound-design/sampled-instruments/building-a-sampled-instrument/',
    date: '2026-08-04T00:00:00.000Z',
  },
  {
    title: 'How to Record Viola at Home',
    description: 'Placement, practical room treatment, and the three microphone positions worth trying first.',
    link: '/recording/acoustic-instruments/recording-viola-at-home/',
    date: '2026-07-11T00:00:00.000Z',
  },
  {
    title: 'MIDI Fighter Twister Review and Ableton Workflow',
    description: 'A long-lived controller tested against a current Ableton Live workflow.',
    link: '/ableton/midi-fighter-twister-review/',
    date: '2026-07-02T00:00:00.000Z',
  },
];

const site = 'https://www.auspiciousmusic.com';
const xml = (value: string) => value.replace(/[<>&'\"]/g, (character) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[character] ?? character);

export const GET: APIRoute = () => {
  const items = entries.map((entry) => {
    const url = new URL(entry.link, site).href;
    return `<item><title>${xml(entry.title)}</title><link>${xml(url)}</link><guid>${xml(url)}</guid><pubDate>${new Date(entry.date).toUTCString()}</pubDate><description>${xml(entry.description)}</description></item>`;
  }).join('');
  const body = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Auspicious Music</title><link>${site}/</link><description>Practical guides for music production and creative audio.</description>${items}</channel></rss>`;
  return new Response(body, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};

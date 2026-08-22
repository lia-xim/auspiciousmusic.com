import type { APIRoute } from 'astro';
import { articles } from '../data/articles';

const site = 'https://www.auspiciousmusic.com';
const xml = (value: string) => value.replace(/[<>&'"]/g, (character) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[character] ?? character);

export const GET: APIRoute = () => {
  const items = articles.map((entry) => {
    const url = new URL(entry.href, site).href;
    return `<item><title>${xml(entry.title)}</title><link>${xml(url)}</link><guid>${xml(url)}</guid><description>${xml(entry.description)}</description></item>`;
  }).join('');
  const body = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>Auspicious Music</title><link>${site}/</link><atom:link href="${site}/rss.xml" rel="self" type="application/rss+xml"/><description>Practical, source-labelled guides for music production and creative audio.</description><language>en</language><generator>Astro</generator>${items}</channel></rss>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};

import type { APIRoute } from 'astro';
import records from '../data/migrated-pages.json';

const site = 'https://www.auspiciousmusic.com';

function escapeXml(value: string) {
  return value.replace(/[<>&'\"]/g, (character) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[character] ?? character);
}

export const GET: APIRoute = () => {
  const urls = records
    .filter((record) => !record.internal && !['/404/', '/410/'].includes(record.route))
    .map((record) => `  <url><loc>${escapeXml(new URL(record.route, site).href)}</loc></url>`)
    .join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};

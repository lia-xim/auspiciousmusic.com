import type { APIRoute } from 'astro';
import records from '../data/migrated-pages.json';
import { articles } from '../data/articles';

const site = 'https://www.auspiciousmusic.com';
const extraRoutes = ['/journal/'];
function escapeXml(value: string) { return value.replace(/[<>&'\"]/g, (character) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[character] ?? character); }

export const GET: APIRoute = () => {
  const publicRecords = records.filter((record) => !record.internal && !['/404/', '/410/', '/publishing-roadmap/'].includes(record.route)).map((record) => record.route);
  const routes = [...new Set([...publicRecords, ...articles.map((article) => article.href), ...extraRoutes])];
  const urls = routes.map((route) => `  <url><loc>${escapeXml(new URL(route, site).href)}</loc></url>`).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};

import type { APIRoute } from 'astro';
import records from '../data/migrated-pages.json';
import { articles } from '../data/articles';

const site = 'https://www.auspiciousmusic.com';
const extraRoutes = ['/journal/', '/contribute/'];
function escapeXml(value: string) { return value.replace(/[<>&'"]/g, (character) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[character] ?? character); }

export const GET: APIRoute = () => {
  const publicRoutes = records
    .filter((record) => !record.internal && record.indexable !== false && !['/404/', '/410/', '/publishing-roadmap/'].includes(record.route))
    .map((record) => ({ route: record.route }));
  const articleRoutes = articles.map((article) => ({
    route: article.href,
    lastmod: 'updated' in article ? article.updated : 'published' in article ? article.published : undefined,
  }));
  const routes = new Map<string, { route: string; lastmod?: string }>();
  const candidates: Array<{ route: string; lastmod?: string }> = [
    ...publicRoutes,
    ...articleRoutes,
    ...extraRoutes.map((route) => ({ route })),
  ];

  for (const item of candidates) {
    const previous = routes.get(item.route);
    routes.set(item.route, { route: item.route, lastmod: item.lastmod ?? previous?.lastmod });
  }

  const urls = [...routes.values()]
    .map(({ route, lastmod }) => `  <url><loc>${escapeXml(new URL(route, site).href)}</loc>${lastmod ? `<lastmod>${escapeXml(lastmod)}</lastmod>` : ''}</url>`)
    .join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
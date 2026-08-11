import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const indexable = import.meta.env.SITE_INDEXABLE === 'true';
  const body = indexable
    ? 'User-agent: *\nAllow: /\nSitemap: https://www.auspiciousmusic.com/sitemap.xml\n'
    : 'User-agent: *\nDisallow: /\n';

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};

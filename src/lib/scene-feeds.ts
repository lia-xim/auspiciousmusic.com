/* Scene reading — build-time aggregation of a few curated RSS feeds.
 *
 * Runs once per build, on the server. Nothing is fetched in the reader's
 * browser, no script ships to the client, and a feed that is down simply
 * drops out of the list instead of failing the build. Only titles, links
 * and dates are used — never article bodies, so nothing is republished.
 *
 * The parser is deliberately tiny: RSS 2.0 <item> and Atom <entry>, title,
 * link and date. If a feed drifts outside that shape it is skipped. A real
 * XML parser would be a dependency this site does not otherwise need.
 */

export interface SceneItem {
  title: string;
  link: string;
  source: string;
  published: Date;
}

interface FeedSource {
  name: string;
  url: string;
}

/* Curated by hand. A source earns its place by being an established,
   editorially run publication in the production scene — not by asking. */
const SOURCES: FeedSource[] = [
  { name: 'CDM', url: 'https://cdm.link/feed/' },
  { name: 'Bedroom Producers Blog', url: 'https://bedroomproducersblog.com/feed/' },
  { name: 'Attack Magazine', url: 'https://www.attackmagazine.com/feed/' },
  { name: 'Sound On Sound', url: 'https://www.soundonsound.com/news/rss' },
];

const PER_SOURCE = 3;
const TOTAL = 9;
const TIMEOUT_MS = 10_000;

const decodeEntities = (value: string): string =>
  value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)))
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .trim();

const firstTag = (xml: string, tag: string): string | undefined => {
  const match = xml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, 'i'));
  return match ? decodeEntities(match[1]) : undefined;
};

function parseItems(xml: string, source: string): SceneItem[] {
  const blocks = xml.match(/<(?:item|entry)[\s>][\s\S]*?<\/(?:item|entry)>/gi) ?? [];
  const items: SceneItem[] = [];
  for (const block of blocks) {
    const title = firstTag(block, 'title');
    /* RSS puts the URL in <link>text</link>; Atom in <link href="…"/>. */
    const link =
      firstTag(block, 'link') ||
      decodeEntities(block.match(/<link[^>]*href="([^"]+)"[^>]*\/?>(?:<\/link>)?/i)?.[1] ?? '');
    const dateText =
      firstTag(block, 'pubDate') ?? firstTag(block, 'published') ?? firstTag(block, 'updated');
    const published = dateText ? new Date(dateText) : undefined;
    if (!title || !link || !link.startsWith('http') || !published || Number.isNaN(+published)) continue;
    items.push({ title, link, source, published });
    if (items.length >= PER_SOURCE) break;
  }
  return items;
}

export async function fetchSceneItems(): Promise<SceneItem[]> {
  const results = await Promise.allSettled(
    SOURCES.map(async ({ name, url }) => {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
      try {
        const response = await fetch(url, {
          signal: controller.signal,
          headers: { 'user-agent': 'auspiciousmusic.com build (scene reading section)' },
        });
        if (!response.ok) return [];
        return parseItems(await response.text(), name);
      } finally {
        clearTimeout(timer);
      }
    }),
  );

  const items = results
    .flatMap((result) => (result.status === 'fulfilled' ? result.value : []))
    .sort((a, b) => +b.published - +a.published)
    .slice(0, TOTAL);

  for (const result of results) {
    if (result.status === 'rejected') {
      console.warn('[scene-feeds] source skipped:', result.reason?.message ?? result.reason);
    }
  }
  return items;
}

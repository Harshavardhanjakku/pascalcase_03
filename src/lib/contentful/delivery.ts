import {
  createClient,
  type Entry,
  type Asset,
  type EntryCollection,
  type EntrySkeletonType,
  type ChainModifiers,
  type LocaleCode,
} from 'contentful';
import type { Document } from '@contentful/rich-text-types';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

export type ContentfulBlog = {
  slug: string;
  title: string;
  excerpt?: string;
  category?: string;
  author?: string;
  readTime?: string;
  coverImage?: string;
  contentHtml?: string;
  publishedAt?: string;
  tags?: string[];
};

let singleton: ReturnType<typeof createClient> | null = null;

export function getCdaClient() {
  if (singleton) return singleton;
  const space = process.env.CONTENTFUL_SPACE_ID;
  const token = process.env.CONTENTFUL_DELIVERY_TOKEN;
  const env = process.env.CONTENTFUL_ENVIRONMENT_ID || 'master';
  if (!space) throw new Error('Missing CONTENTFUL_SPACE_ID');
  if (!token) throw new Error('Missing CONTENTFUL_DELIVERY_TOKEN');
  singleton = createClient({ space, accessToken: token, environment: env });
  return singleton;
}

function getAssetUrl(entry: Asset | undefined): string | undefined {
  const fileField = (entry as Asset | undefined)?.fields?.file as
    | { url?: string; [k: string]: unknown }
    | Record<string, unknown>
    | undefined;
  const url =
    (fileField as { url?: string } | undefined)?.url ||
    (fileField as { en?: { url?: string } } | undefined)?.en?.url;
  if (!url) return undefined;
  return url.startsWith('http') ? url : `https:${url}`;
}

function richTextToHtml(doc: Document | undefined): string | undefined {
  if (!doc) return undefined;
  return documentToHtmlString(doc as Document);
}

function getBlogContentTypeId(override?: string) {
  return override || process.env.CONTENTFUL_BLOG_CONTENT_TYPE_ID || 'blog';
}

type GenericEntry = Entry<EntrySkeletonType, ChainModifiers, LocaleCode>;
type BlogEntry = GenericEntry;
type LinkMaps = {
  entriesById: Record<string, GenericEntry>;
  assetsById: Record<string, Asset>;
};

function buildLinkMaps<T extends EntrySkeletonType>(res: EntryCollection<T>): LinkMaps {
  const entries = (res.includes?.Entry || []) as GenericEntry[];
  const assets = (res.includes?.Asset || []) as Asset[];
  return {
    entriesById: Object.fromEntries(entries.map((e) => [e.sys.id, e])),
    assetsById: Object.fromEntries(assets.map((a) => [a.sys.id, a])),
  };
}

function resolveLink(value: unknown, maps: LinkMaps): GenericEntry | Asset | unknown {
  if (!value) return undefined;
  const v = value as { sys?: { id?: string; linkType?: string } };
  const id = v?.sys?.id;
  const linkType = v?.sys?.linkType;
  if (!id || !linkType) return value;
  if (linkType === 'Entry') return maps.entriesById[id] || value;
  if (linkType === 'Asset') return maps.assetsById[id] || value;
  return value;
}

export async function fetchAllBlogs(contentType?: string): Promise<ContentfulBlog[]> {
  const client = getCdaClient();
  const ct = getBlogContentTypeId(contentType);
  try {
    const res = await client.getEntries({
      content_type: ct,
      order: ['-fields.date', '-sys.createdAt'],
      include: 2,
    });
    const maps = buildLinkMaps(res);
    return res.items.map((item: BlogEntry) => mapEntryToBlog(item, maps));
  } catch {
    // Retry without date ordering (field may not exist)
    const res = await client.getEntries({
      content_type: ct,
      order: ['-sys.createdAt'],
      include: 2,
    });
    const maps = buildLinkMaps(res);
    return res.items.map((item: BlogEntry) => mapEntryToBlog(item, maps));
  }
}

export async function fetchBlogBySlug(
  slug: string,
  contentType?: string,
): Promise<ContentfulBlog | undefined> {
  const client = getCdaClient();
  const ct = getBlogContentTypeId(contentType);
  const res = await client.getEntries({
    content_type: ct,
    'fields.slug': slug,
    limit: 1,
    include: 2,
  });
  const entry = res.items[0] as BlogEntry | undefined;
  if (!entry) return undefined;
  const maps = buildLinkMaps(res);
  return mapEntryToBlog(entry, maps);
}

export async function fetchAllSlugs(contentType?: string): Promise<string[]> {
  const client = getCdaClient();
  const ct = getBlogContentTypeId(contentType);
  const res = await client.getEntries({ content_type: ct, select: ['fields.slug'], limit: 1000 });
  return res.items
    .map((i) => (i.fields as unknown as { slug?: string }).slug as string)
    .filter((s): s is string => Boolean(s));
}

function mapEntryToBlog(entry: BlogEntry, maps?: LinkMaps): ContentfulBlog {
  const f = entry.fields as Record<string, unknown>;
  const authorLink = (f as Record<string, unknown>)['author'] as unknown;
  const resolvedAuthor = maps ? resolveLink(authorLink, maps) : authorLink;
  const imageLink =
    (f as Record<string, unknown>)['heroImage'] ||
    (f as Record<string, unknown>)['image'] ||
    (f as Record<string, unknown>)['coverImage'];
  const resolvedImage = maps
    ? (resolveLink(imageLink, maps) as Asset | undefined)
    : (imageLink as Asset | undefined);
  const authorFields = (resolvedAuthor as GenericEntry | undefined)?.fields as
    | { name?: unknown; title?: unknown }
    | undefined;
  return {
    slug: f.slug as string,
    title: f.title as string,
    excerpt: f.excerpt as string | undefined,
    category: f.category as string | undefined,
    author:
      (authorFields?.name as string | undefined) ||
      (authorFields?.title as string | undefined) ||
      (f.author as string | undefined),
    readTime: f.readTime as string | undefined,
    coverImage: getAssetUrl(resolvedImage),
    contentHtml: richTextToHtml(
      (f.body as Document | undefined) || (f.content as Document | undefined),
    ),
    publishedAt:
      (f.publishDate as string | undefined) ||
      (f.date as string | undefined) ||
      (f.publishedAt as string | undefined) ||
      entry.sys.createdAt,
    tags: (f.tags as string[] | undefined) || undefined,
  };
}

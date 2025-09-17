import { NextRequest } from 'next/server';
import { getCdaClient } from '@/lib/contentful/delivery';
import { fetchAllBlogs, fetchBlogBySlug } from '@/lib/contentful/delivery';

export const revalidate = 0;

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get('slug') || undefined;
    const ct = process.env.CONTENTFUL_BLOG_CONTENT_TYPE_ID || 'blog';
    const client = getCdaClient();

    if (slug) {
      // Mapped
      const mapped = await fetchBlogBySlug(slug, ct);
      // Raw (single entry)
      const raw = await client.getEntries({
        content_type: ct,
        'fields.slug': slug,
        limit: 1,
        include: 2,
      });
      return new Response(
        JSON.stringify({ params: { slug, contentType: ct }, mapped, raw }, null, 2),
        { status: 200, headers: { 'content-type': 'application/json' } },
      );
    }

    // List all (mapped) + raw (summary)
    const mapped = await fetchAllBlogs(ct);
    const raw = await client.getEntries({
      content_type: ct,
      include: 1,
      select: ['fields.slug', 'fields.title'],
    });
    return new Response(
      JSON.stringify(
        {
          params: { contentType: ct },
          mappedCount: mapped.length,
          slugs: mapped.map((m) => m.slug),
          raw,
        },
        null,
        2,
      ),
      { status: 200, headers: { 'content-type': 'application/json' } },
    );
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Failed to fetch blog content';
    return new Response(JSON.stringify({ error: message }, null, 2), {
      status: 500,
      headers: { 'content-type': 'application/json' },
    });
  }
}

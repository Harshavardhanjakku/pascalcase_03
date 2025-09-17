import { NextRequest } from 'next/server';
import { getEnvironment } from '@/lib/contentful/management';
import type { ContentTypeProps } from 'contentful-management';

export const revalidate = 0;

export async function GET(_req: NextRequest) {
  try {
    const env = await getEnvironment();
    const list = await env.getContentTypes();
    const types = list.items.map((ct: ContentTypeProps) => ({
      id: ct.sys.id,
      name: ct.name,
      apiId: ct.sys.id,
      description: ct.description,
      fields: ct.fields.map((f) => ({ id: f.id, name: f.name, type: f.type })),
    }));
    return new Response(JSON.stringify({ types }), {
      status: 200,
      headers: { 'content-type': 'application/json' },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Failed to load content types';
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { 'content-type': 'application/json' },
    });
  }
}

import { NextRequest } from 'next/server';
import { getContentTypeFields } from '@/lib/contentful/management';

export const revalidate = 0;

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const contentType = searchParams.get('contentType') || 'blog';
    const fields = await getContentTypeFields(contentType);
    return new Response(JSON.stringify({ contentType, fields }), {
      status: 200,
      headers: { 'content-type': 'application/json' },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Failed to fetch fields';
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { 'content-type': 'application/json' },
    });
  }
}

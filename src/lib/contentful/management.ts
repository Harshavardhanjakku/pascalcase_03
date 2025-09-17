import { createClient, type ClientAPI } from 'contentful-management';

let cachedClient: ClientAPI | null = null;

export function getContentfulManagementClient(): ClientAPI {
  if (cachedClient) return cachedClient;

  const accessToken = process.env.CONTENTFUL_MANAGEMENT_TOKEN;
  if (!accessToken) {
    throw new Error('Missing CONTENTFUL_MANAGEMENT_TOKEN');
  }

  cachedClient = createClient({ accessToken }) as unknown as ClientAPI;
  return cachedClient;
}

export async function getEnvironment() {
  const spaceId = process.env.CONTENTFUL_SPACE_ID;
  const environmentId = process.env.CONTENTFUL_ENVIRONMENT_ID || 'master';

  if (!spaceId) throw new Error('Missing CONTENTFUL_SPACE_ID');

  const client = getContentfulManagementClient();
  const space = await client.getSpace(spaceId);
  const env = await space.getEnvironment(environmentId);
  return env;
}

export type SimplifiedField = {
  id: string;
  name: string;
  type: string;
  required: boolean;
  localized: boolean;
  disabled: boolean;
  omitted: boolean;
  linkType?: string;
  itemsType?: string;
  itemsLinkType?: string;
};

export async function getContentTypeFields(contentTypeId: string): Promise<SimplifiedField[]> {
  const env = await getEnvironment();
  const ct = await env.getContentType(contentTypeId);
  return ct.fields.map((f) => ({
    id: f.id,
    name: f.name,
    type: f.type,
    required: Boolean(f.required),
    localized: Boolean(f.localized),
    disabled: Boolean((f as unknown as { disabled?: boolean }).disabled),
    omitted: Boolean((f as unknown as { omitted?: boolean }).omitted),
    linkType: (f as unknown as { linkType?: string }).linkType,
    itemsType: (f as unknown as { items?: { type?: string } }).items?.type,
    itemsLinkType: (f as unknown as { items?: { linkType?: string } }).items?.linkType,
  }));
}

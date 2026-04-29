import { createClient, type QueryParams } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Keep a simple `sanity` export for page usage.
export const sanity = createClient({
  projectId: '87ejco9o',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true
});

export const sanityClient = createClient({
  projectId: '87ejco9o',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: unknown) {
  return builder.image(source as any);
}

export async function sanityFetch<T>(
  query: string,
  params: QueryParams = {},
  options: { perspective?: 'published' | 'previewDrafts' } = {}
) {
  return sanityClient.fetch<T>(query, params, {
    perspective: options.perspective ?? 'published'
  });
}


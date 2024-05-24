import 'server-only';
import { createClient, type QueryParams } from '@sanity/client';

export const client = createClient({
  projectId: 'lyam3oa7',
  dataset: 'blog',
  apiVersion: '2022-03-25',
  useCdn: false
});

console.log('Sanity client created', client);

export async function sanityFetch<QueryResponse>({query, params = {}, tags}: {
  query: string,
  params?: QueryParams,
  tags?: string[]
}) {
  return client.fetch<QueryResponse>(query, params,{
    next: {
      revalidate: process.env.NODE_ENV === 'production' ? 60 : 3660, 
      tags,
    }
  });
};
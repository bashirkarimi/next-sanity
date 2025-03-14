'server-only';
import { createClient, type QueryParams } from '@sanity/client';
import { EnvHttpProxyAgent, setGlobalDispatcher } from "undici";
import { env } from "~/env";

export const client = createClient({
  projectId: 'lyam3oa7',
  dataset: 'production',
  apiVersion: '2022-03-25',
  useCdn: false
});

if (env.HTTP_PROXY || env.HTTPS_PROXY) {
  const envHttpProxyAgent = new EnvHttpProxyAgent();
  setGlobalDispatcher(envHttpProxyAgent);
}

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
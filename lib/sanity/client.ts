// Client Sanity — désactivé si NEXT_PUBLIC_SANITY_PROJECT_ID non défini
const SANITY_CONFIGURED = !!(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== 'placeholder'
);

export { SANITY_CONFIGURED };

// Lazy init pour éviter l'erreur au build sans projectId
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let _client: any = null;

export function getSanityClient() {
  if (!SANITY_CONFIGURED) return null;
  if (_client) return _client;
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { createClient } = require('next-sanity');
  _client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
    apiVersion: '2024-01-01',
    useCdn: true,
  });
  return _client;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  if (!SANITY_CONFIGURED) return { url: () => '' };
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const imageUrlBuilder = require('@sanity/image-url');
  return imageUrlBuilder(getSanityClient()).image(source);
}

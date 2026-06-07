import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityImageSource = any;

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? 'uhc1m2kc';
const dataset   = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production';

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// ── Types ─────────────────────────────────────────────────────────────────────

export interface SanityPost {
  _id: string;
  _createdAt: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  publishedAt?: string;
  readingTime?: number;
  category?: string;
  coverImage?: SanityImageSource & { alt?: string };
  body?: unknown[];
}

export interface SanityResource {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  category?: string;
  icon?: string;
  downloadUrl?: string;
  publishedAt?: string;
  featured?: boolean;
  body?: unknown[];
}

import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: '2026-06-07',
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

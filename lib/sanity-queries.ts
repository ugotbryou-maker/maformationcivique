import { sanityClient, type SanityPost, type SanityResource } from './sanity';

// ── Articles ──────────────────────────────────────────────────────────────────

export async function getAllPosts(): Promise<SanityPost[]> {
  return sanityClient.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      _id, _createdAt, title, slug, excerpt, publishedAt, readingTime, category, coverImage
    }`
  );
}

export async function getPostBySlug(slug: string): Promise<SanityPost | null> {
  return sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id, _createdAt, title, slug, excerpt, publishedAt, readingTime, category, coverImage, body
    }`,
    { slug }
  );
}

export async function getPostsByCategory(category: string): Promise<SanityPost[]> {
  return sanityClient.fetch(
    `*[_type == "post" && category == $category] | order(publishedAt desc) {
      _id, title, slug, excerpt, publishedAt, readingTime, category, coverImage
    }`,
    { category }
  );
}

// ── Ressources ────────────────────────────────────────────────────────────────

export async function getAllResources(): Promise<SanityResource[]> {
  return sanityClient.fetch(
    `*[_type == "resource"] | order(publishedAt desc) {
      _id, title, slug, excerpt, category, icon, downloadUrl, publishedAt, featured
    }`
  );
}

export async function getResourceBySlug(slug: string): Promise<SanityResource | null> {
  return sanityClient.fetch(
    `*[_type == "resource" && slug.current == $slug][0] {
      _id, title, slug, excerpt, category, icon, downloadUrl, publishedAt, featured, body
    }`,
    { slug }
  );
}

export async function getFeaturedResources(): Promise<SanityResource[]> {
  return sanityClient.fetch(
    `*[_type == "resource" && featured == true] | order(publishedAt desc)[0...6] {
      _id, title, slug, excerpt, category, icon, downloadUrl
    }`
  );
}

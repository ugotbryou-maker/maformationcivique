/**
 * GET /api/debug-sanity
 * Endpoint de diagnostic temporaire pour vérifier la config Sanity en prod
 * (NEXT_PUBLIC_SANITY_PROJECT_ID / DATASET sont des variables "build-time" :
 * il faut un redeploy après les avoir modifiées sur Vercel pour qu'elles
 * soient prises en compte).
 *
 * Ne révèle aucune info sensible (pas de token) — à supprimer une fois
 * le diagnostic terminé.
 */

export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { SANITY_CONFIGURED, getSanityClient } from '@/lib/sanity/client';
import { getAllPosts, getAllPostSlugs } from '@/lib/sanity/queries';

export async function GET() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

  let directFetchCount: number | string = 'n/a';
  let directFetchError: string | null = null;
  try {
    const client = getSanityClient();
    const raw = await client?.fetch('count(*[_type == "post"])');
    directFetchCount = typeof raw === 'number' ? raw : 'null/undefined';
  } catch (e) {
    directFetchError = e instanceof Error ? e.message : String(e);
  }

  const posts = await getAllPosts();
  const slugs = await getAllPostSlugs();

  return NextResponse.json({
    SANITY_CONFIGURED,
    env: {
      NEXT_PUBLIC_SANITY_PROJECT_ID: projectId ?? '(non défini)',
      NEXT_PUBLIC_SANITY_DATASET: dataset ?? '(non défini, défaut: production)',
    },
    directFetchCount,
    directFetchError,
    getAllPostsCount: posts.length,
    getAllPostSlugs: slugs,
    isDemoData: posts.length > 0 && posts[0]._id.startsWith('demo-'),
  });
}

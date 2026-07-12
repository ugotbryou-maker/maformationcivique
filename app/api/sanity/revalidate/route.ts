export const dynamic = 'force-dynamic';

import { revalidatePath, revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

// Sanity webhook → déclenche la revalidation ISR des pages blog
// Configurer dans Sanity : POST https://maformationcivique.fr/api/sanity/revalidate
// Header : Authorization: Bearer <SANITY_REVALIDATE_SECRET>
export async function POST(req: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;

  if (secret) {
    const auth = req.headers.get('authorization') ?? '';
    if (auth !== `Bearer ${secret}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
  }

  try {
    // Revalide la liste et toutes les pages d'articles
    revalidatePath('/ressources', 'page');
    revalidatePath('/ressources/[slug]', 'page');
    revalidateTag('sanity');

    return NextResponse.json({ revalidated: true, at: new Date().toISOString() });
  } catch (err) {
    console.error('[sanity/revalidate]', err);
    return NextResponse.json({ error: 'Revalidation failed' }, { status: 500 });
  }
}

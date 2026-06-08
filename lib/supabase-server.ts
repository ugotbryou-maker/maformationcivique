import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? 'https://placeholder.supabase.co';
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? 'placeholder';

/**
 * Client Supabase pour les Server Components (lecture seule).
 * setAll est intentionnellement vide : les Server Components n'ont pas le droit
 * d'écrire des cookies (Next.js 14 — "Cookies can only be modified in a Server
 * Action or Route Handler"). Si on laissait cookieStore.set(), Supabase lèverait
 * une exception non catchée lors d'un refresh de token.
 */
export async function createServerSupabaseClient() {
  const cookieStore = await cookies();

  return createServerClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        // Écriture intentionnellement désactivée — lecture seule en Server Component
        setAll() {},
      },
    }
  );
}

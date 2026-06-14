import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? 'https://placeholder.supabase.co';
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? 'placeholder';
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY ?? '';

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

/**
 * Client Supabase "service role" — bypass RLS, à utiliser UNIQUEMENT dans
 * des Route Handlers (API routes) pour des opérations serveur-à-serveur
 * (création de cabinets, invitations, rédemption, etc.).
 * Ne jamais exposer ce client ou la clé au navigateur.
 */
export function createServiceRoleClient() {
  if (!SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error('SUPABASE_SERVICE_ROLE_KEY is not set');
  }
  return createServerClient(
    SUPABASE_URL,
    SUPABASE_SERVICE_ROLE_KEY,
    { cookies: { getAll: () => [], setAll: () => {} } }
  );
}

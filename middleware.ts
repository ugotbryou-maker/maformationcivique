import { createServerClient } from '@supabase/ssr';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PROTECTED_PATHS = ['/dashboard', '/progression', '/profil'];
const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? 'tamburriniugo@gmail.com';

export async function middleware(request: NextRequest) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const pathname = request.nextUrl.pathname;

  // ── Si Supabase non configuré : laisser passer sans vérification auth ──────
  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.next({ request });
  }

  let response = NextResponse.next({ request });
  let user = null;

  // ── Tout le bloc Supabase est protégé par try/catch ───────────────────────
  // createServerClient ET getUser() peuvent lever des exceptions :
  // JWT invalide, réseau instable, credentials incorrects…
  try {
    const supabase = createServerClient(supabaseUrl, supabaseKey, {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          response = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    });

    const { data } = await supabase.auth.getUser();
    user = data.user;
  } catch {
    // Supabase indisponible ou credentials invalides — on continue sans session
    // Les pages publiques restent accessibles, les pages protégées redirigent
  }

  // ── Protection des pages connectées ───────────────────────────────────────
  const isProtected = PROTECTED_PATHS.some((p) => pathname.startsWith(p));
  if (isProtected && !user) {
    const url = request.nextUrl.clone();
    url.pathname = '/connexion';
    url.searchParams.set('redirect', pathname);
    return NextResponse.redirect(url);
  }

  // ── Studio Sanity — réservé à l'admin ────────────────────────────────────
  if (pathname.startsWith('/studio')) {
    if (!user || user.email !== ADMIN_EMAIL) {
      return NextResponse.redirect(new URL('/connexion', request.url));
    }
  }

  // ── Redirection si déjà connecté sur les pages auth ───────────────────────
  if ((pathname === '/connexion' || pathname === '/inscription') && user) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|images|fonts|api).*)'],
};

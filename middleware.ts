import { createServerClient } from '@supabase/ssr';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { ADMIN_EMAILS } from '@/lib/admin';
import { getTenantConfig } from '@/lib/tenants';

const TENANT_ALLOWED_PREFIXES = [
  '/modulesciviques', '/moduleslinguistiques', '/examen',
  '/dashboard', '/profil', '/progression',
  '/connexion', '/inscription', '/onboarding', '/auth',
  '/mentions-legales', '/cgu', '/confidentialite',
  '/api', '/_next',
];

function isTenantAllowed(pathname: string): boolean {
  return TENANT_ALLOWED_PREFIXES.some(
    (p) => pathname === p || pathname.startsWith(p + '/')
  );
}

function detectTenantSlug(request: NextRequest): string | null {
  // Dev / démo : ?tenant=papiers-francais dans l'URL
  const param = request.nextUrl.searchParams.get('tenant');
  if (param) return param;
  // Production : sous-domaine papiers-francais.maformationcivique.fr
  const host = request.headers.get('host') ?? '';
  const sub = host.split('.')[0];
  if (sub && sub !== 'www' && sub !== 'maformationcivique' && sub !== 'localhost') return sub;
  return null;
}

const PROTECTED_PATHS = ['/dashboard', '/progression', '/profil', '/cabinet'];

export async function middleware(request: NextRequest) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const pathname = request.nextUrl.pathname;

  // ── Injection du tenant dans les headers de la request ───────────────────
  const tenantSlug = detectTenantSlug(request);
  const requestHeaders = new Headers(request.headers);
  if (tenantSlug && getTenantConfig(tenantSlug)) {
    requestHeaders.set('x-tenant', tenantSlug);
  }

  // ── Si Supabase non configuré : laisser passer sans vérification auth ──────
  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.next({ request: { headers: requestHeaders } });
  }

  let response = NextResponse.next({ request: { headers: requestHeaders } });
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
          response = NextResponse.next({ request: { headers: requestHeaders } });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    });

    const { data } = await supabase.auth.getSession();
    const session = data.session;
    const isValidSession = session && session.expires_at && session.expires_at * 1000 > Date.now();
    user = isValidSession ? session.user : null;
  } catch {
    // Supabase indisponible ou credentials invalides — on continue sans session
    // Les pages publiques restent accessibles, les pages protégées redirigent
  }

  // ── Tenant : circuit fermé ───────────────────────────────────────────────
  if (tenantSlug && getTenantConfig(tenantSlug)) {
    if (!isTenantAllowed(pathname)) {
      const dest = new URL('/modulesciviques', request.url);
      if (request.nextUrl.searchParams.has('tenant')) {
        dest.searchParams.set('tenant', tenantSlug);
      }
      return NextResponse.redirect(dest);
    }
  }

  // ── Protection des pages connectées ───────────────────────────────────────
  const isProtected = PROTECTED_PATHS.some((p) => pathname.startsWith(p));
  if (isProtected && !user) {
    const url = request.nextUrl.clone();
    url.pathname = '/connexion';
    url.searchParams.set('redirect', pathname);
    return NextResponse.redirect(url);
  }

  // ── Studio Sanity + back-office admin — réservés à l'admin ───────────────
  if (pathname.startsWith('/studio') || pathname.startsWith('/admin')) {
    if (!user || !ADMIN_EMAILS.includes(user.email?.toLowerCase() ?? '')) {
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

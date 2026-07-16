import { NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');

  if (code) {
    const cookieStore = await cookies();
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() { return cookieStore.getAll(); },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          },
        },
      }
    );

    const { data, error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      // Si intent=reset → rediriger vers la page de nouveau mot de passe
      const intent = searchParams.get('intent');
      if (intent === 'reset') {
        return NextResponse.redirect(`${origin}/reset-password`);
      }

      // Sinon : router selon l'état d'onboarding.
      // Un nouveau compte (ex. Google OAuth) passe par l'onboarding pour
      // compléter démarche + téléphone ; un cabinet-admin va sur /cabinet.
      let redirectTo = '/dashboard';
      const userId = data.user?.id;
      if (userId) {
        const { data: profile } = await supabase
          .from('users')
          .select('onboarding_done, cabinet_role')
          .eq('id', userId)
          .single();

        if (profile?.cabinet_role === 'admin') {
          redirectTo = '/cabinet';
        } else if (!profile?.onboarding_done) {
          redirectTo = '/onboarding';
        }
      }
      return NextResponse.redirect(`${origin}${redirectTo}`);
    }
  }

  return NextResponse.redirect(`${origin}/connexion?error=invalid_link`);
}

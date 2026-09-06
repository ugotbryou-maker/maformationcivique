'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase';

function GoogleG() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

/**
 * Bouton "Continuer avec Google" (OAuth Supabase).
 * Réservé au B2C : ne pas afficher sur un flux d'invitation cabinet
 * (le token ne survivrait pas au round-trip OAuth).
 */
export function GoogleAuthButton({
  label = 'Continuer avec Google',
  plan,
}: {
  label?: string;
  /** Offre choisie en amont (campagne, page tarifs). Transmise à travers le
   *  round-trip OAuth pour que l'utilisateur parte au paiement après connexion —
   *  sans cela, il crée un compte et la vente est perdue en silence. */
  plan?: string | null;
}) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    const supabase = createClient();
    const callback = new URL('/auth/callback', window.location.origin);
    if (plan) callback.searchParams.set('plan', plan);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: callback.toString() },
    });
    if (error) setLoading(false);
    // Sinon : redirection vers Google en cours.
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '20px 0' }}>
        <div style={{ flex: 1, height: 1, background: 'var(--color-border)' }} />
        <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>ou</span>
        <div style={{ flex: 1, height: 1, background: 'var(--color-border)' }} />
      </div>

      <button
        type="button"
        onClick={handleClick}
        disabled={loading}
        style={{
          width: '100%',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
          padding: '13px 24px',
          borderRadius: 'var(--radius-pill)',
          background: 'var(--color-surface)',
          border: '1.5px solid var(--color-border)',
          color: 'var(--color-text-primary)',
          fontSize: 'var(--font-size-base)',
          fontWeight: 600,
          cursor: loading ? 'not-allowed' : 'pointer',
          minHeight: '48px',
          fontFamily: 'var(--font-sans)',
        }}
      >
        <GoogleG />
        {loading ? 'Redirection…' : label}
      </button>
    </div>
  );
}

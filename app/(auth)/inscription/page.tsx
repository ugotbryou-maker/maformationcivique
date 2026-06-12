'use client';

import { Suspense } from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { createClient } from '@/lib/supabase';
import { Eye, EyeOff, Mail, Lock, User, CheckCircle } from 'lucide-react';

function InscriptionForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const plan = searchParams.get('plan');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length < 8) {
      setError('Le mot de passe doit contenir au moins 8 caractères.');
      return;
    }
    setLoading(true);
    setError(null);

    const supabase = createClient();
    const { data: signUpData, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name },
        emailRedirectTo: `${typeof window !== 'undefined' ? window.location.origin : process.env.NEXT_PUBLIC_APP_URL ?? 'https://maformationcivique.fr'}/auth/callback`,
      },
    });

    // Créer la ligne dans la table users (plan=free, xp=0...)
    if (!error && signUpData.user) {
      // Parrainage : si l'inscription vient d'un lien "Parrainer un proche"
      // (?ref=<uuid-du-parrain>), on l'enregistre.
      const ref = searchParams.get('ref');
      const isUuid = ref ? /^[0-9a-f-]{36}$/i.test(ref) : false;

      await supabase.from('users').upsert({
        id: signUpData.user.id,
        name,
        email,
        plan: 'free',
        xp: 0,
        streak_days: 0,
        last_active: new Date().toISOString().slice(0, 10),
        ...(isUuid && ref !== signUpData.user.id ? { referred_by: ref } : {}),
      }, { onConflict: 'id' });

      // Email de bienvenue via Brevo (non bloquant)
      fetch('/api/auth/welcome', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name }),
      }).catch(() => { /* fail silently */ });

      // Redirection vers l'onboarding
      router.push('/onboarding');
      return;
    }

    if (error) {
      const msg = error.message.toLowerCase();
      if (msg.includes('already registered') || msg.includes('already been registered') || msg.includes('email') && msg.includes('exist')) {
        setError('Cet email est déjà utilisé → connectez-vous à la place.');
      } else if (msg.includes('password')) {
        setError('Mot de passe trop faible (8 caractères minimum).');
      } else if (msg.includes('rate limit') || msg.includes('too many')) {
        setError('Trop de tentatives. Attendez quelques minutes.');
      } else {
        setError(`Erreur : ${error.message}`);
      }
      setLoading(false);
    } else {
      setSuccess(true);
    }
  };

  if (success) {
    // Le router.push('/onboarding') est déclenché juste avant setSuccess(true)
    // Ce spinner s'affiche pendant la redirection (quelques ms)
    return (
      <div style={{ width: '100%', maxWidth: '400px', textAlign: 'center', padding: '48px 32px' }}>
        <div style={{ width: 32, height: 32, border: '3px solid var(--color-blue-light)', borderTopColor: 'var(--color-blue-france)', borderRadius: '50%', animation: 'spin 0.7s linear infinite', margin: '0 auto 16px' }} />
        <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-sm)' }}>Préparation de votre espace…</p>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  return (
    <div style={{ width: '100%', maxWidth: '420px' }}>
      <div style={{ marginBottom: '32px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-text-primary)', marginBottom: '8px' }}>
          Créer un compte gratuit
        </h1>
        <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
          Module 1 + 20 questions offertes, sans carte bancaire.
        </p>
      </div>

      {plan === 'premium' && (
        <div
          style={{
            padding: '12px 16px',
            borderRadius: 'var(--radius-md)',
            background: 'var(--color-blue-light)',
            border: 'var(--border-default)',
            fontSize: 'var(--font-size-sm)',
            color: 'var(--color-text-secondary)',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          Créez votre compte, puis choisissez l'offre Premium dans votre tableau de bord.
        </div>
      )}

      {searchParams.get('ref') && /^[0-9a-f-]{36}$/i.test(searchParams.get('ref') ?? '') && (
        <div
          style={{
            padding: '12px 16px',
            borderRadius: 'var(--radius-md)',
            background: '#FEF2F2',
            border: '1px solid #FECACA',
            fontSize: 'var(--font-size-sm)',
            color: '#B91C1C',
            marginBottom: '20px',
            textAlign: 'center',
            fontWeight: 500,
          }}
        >
          🎁 Vous avez été invité(e) par un proche — profitez de <strong>-20% sur le premier mois</strong> de l'offre Premium !
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        style={{
          background: 'var(--color-surface)',
          borderRadius: 'var(--radius-xl)',
          border: 'var(--border-default)',
          boxShadow: 'var(--shadow-card)',
          padding: '32px',
        }}
      >
        {error && (
          <div
            style={{
              padding: '12px 16px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--color-red-light)',
              border: '1px solid rgba(204,26,26,0.2)',
              fontSize: 'var(--font-size-sm)',
              color: 'var(--color-red-france)',
              marginBottom: '20px',
            }}
          >
            {error}
          </div>
        )}

        {/* Name */}
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', fontSize: 'var(--font-size-sm)', fontWeight: 500, color: 'var(--color-text-primary)', marginBottom: '8px' }}>
            Prénom
          </label>
          <div style={{ position: 'relative' }}>
            <User size={16} color="var(--color-text-muted)" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoComplete="given-name"
              placeholder="Votre prénom"
              style={{
                width: '100%',
                padding: '12px 14px 12px 40px',
                borderRadius: 'var(--radius-md)',
                border: 'var(--border-default)',
                fontSize: 'var(--font-size-base)',
                color: 'var(--color-text-primary)',
                background: 'var(--color-off-white)',
                fontFamily: 'var(--font-sans)',
                outline: 'none',
                minHeight: '48px',
                boxSizing: 'border-box',
              }}
              onFocus={(e) => { e.target.style.borderColor = 'var(--color-blue-france)'; }}
              onBlur={(e) => { e.target.style.borderColor = 'var(--color-border)'; }}
            />
          </div>
        </div>

        {/* Email */}
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', fontSize: 'var(--font-size-sm)', fontWeight: 500, color: 'var(--color-text-primary)', marginBottom: '8px' }}>
            Adresse email
          </label>
          <div style={{ position: 'relative' }}>
            <Mail size={16} color="var(--color-text-muted)" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              placeholder="votre@email.com"
              style={{
                width: '100%',
                padding: '12px 14px 12px 40px',
                borderRadius: 'var(--radius-md)',
                border: 'var(--border-default)',
                fontSize: 'var(--font-size-base)',
                color: 'var(--color-text-primary)',
                background: 'var(--color-off-white)',
                fontFamily: 'var(--font-sans)',
                outline: 'none',
                minHeight: '48px',
                boxSizing: 'border-box',
              }}
              onFocus={(e) => { e.target.style.borderColor = 'var(--color-blue-france)'; }}
              onBlur={(e) => { e.target.style.borderColor = 'var(--color-border)'; }}
            />
          </div>
        </div>

        {/* Password */}
        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', fontSize: 'var(--font-size-sm)', fontWeight: 500, color: 'var(--color-text-primary)', marginBottom: '8px' }}>
            Mot de passe <span style={{ color: 'var(--color-text-muted)', fontWeight: 400 }}>(8 caractères min.)</span>
          </label>
          <div style={{ position: 'relative' }}>
            <Lock size={16} color="var(--color-text-muted)" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="new-password"
              placeholder="••••••••"
              style={{
                width: '100%',
                padding: '12px 44px 12px 40px',
                borderRadius: 'var(--radius-md)',
                border: 'var(--border-default)',
                fontSize: 'var(--font-size-base)',
                color: 'var(--color-text-primary)',
                background: 'var(--color-off-white)',
                fontFamily: 'var(--font-sans)',
                outline: 'none',
                minHeight: '48px',
                boxSizing: 'border-box',
              }}
              onFocus={(e) => { e.target.style.borderColor = 'var(--color-blue-france)'; }}
              onBlur={(e) => { e.target.style.borderColor = 'var(--color-border)'; }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: 'absolute',
                right: '14px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--color-text-muted)',
                display: 'flex',
                padding: '4px',
                minHeight: '44px',
                minWidth: '44px',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label={showPassword ? 'Cacher' : 'Afficher'}
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            width: '100%',
            padding: '13px 24px',
            borderRadius: 'var(--radius-pill)',
            background: loading ? 'var(--color-text-muted)' : 'var(--gradient-primary)',
            color: '#FFFFFF',
            border: 'none',
            fontSize: 'var(--font-size-base)',
            fontWeight: 500,
            cursor: loading ? 'not-allowed' : 'pointer',
            minHeight: '48px',
            fontFamily: 'var(--font-sans)',
          }}
        >
          {loading ? 'Création du compte…' : 'Créer mon compte gratuit'}
        </button>

        <p style={{ textAlign: 'center', marginTop: '20px', fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
          En créant un compte, vous acceptez nos{' '}
          <Link href="/cgu" style={{ color: 'var(--color-blue-france)' }}>CGU</Link>
          {' '}et notre{' '}
          <Link href="/confidentialite" style={{ color: 'var(--color-blue-france)' }}>politique de confidentialité</Link>.
        </p>

        <p style={{ textAlign: 'center', marginTop: '12px', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
          Déjà un compte ?{' '}
          <Link href="/connexion" style={{ color: 'var(--color-blue-france)', fontWeight: 500 }}>
            Se connecter →
          </Link>
        </p>
      </form>
    </div>
  );
}

export default function InscriptionPage() {
  return (
    <Suspense fallback={<div style={{ textAlign: 'center', padding: '40px' }}>Chargement…</div>}>
      <InscriptionForm />
    </Suspense>
  );
}

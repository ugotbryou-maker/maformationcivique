'use client';

import { Suspense } from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { createClient } from '@/lib/supabase';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';

function ConnexionForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect') || '/dashboard';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError('Email ou mot de passe incorrect.');
      setLoading(false);
    } else {
      router.push(redirect);
      router.refresh();
    }
  };

  return (
    <div style={{ width: '100%', maxWidth: '400px' }}>
      <div style={{ marginBottom: '32px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-text-primary)', marginBottom: '8px' }}>
          Connexion
        </h1>
        <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
          Bienvenue ! Continuez votre préparation.
        </p>
      </div>

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
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <label style={{ fontSize: 'var(--font-size-sm)', fontWeight: 500, color: 'var(--color-text-primary)' }}>
              Mot de passe
            </label>
            <Link href="/mot-de-passe-oublie" style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-blue-france)' }}>
              Oublié ?
            </Link>
          </div>
          <div style={{ position: 'relative' }}>
            <Lock size={16} color="var(--color-text-muted)" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
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
              aria-label={showPassword ? 'Cacher le mot de passe' : 'Afficher le mot de passe'}
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        {/* Se souvenir de moi */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', marginTop: '-8px' }}>
          <input
            type="checkbox"
            id="remember"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
            style={{ width: 16, height: 16, accentColor: 'var(--color-blue-france)', cursor: 'pointer', flexShrink: 0 }}
          />
          <label htmlFor="remember" style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', cursor: 'pointer', userSelect: 'none' }}>
            Se souvenir de moi
          </label>
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
            transition: 'all 200ms ease-out',
          }}
        >
          {loading ? 'Connexion…' : 'Se connecter'}
        </button>

        <p style={{ textAlign: 'center', marginTop: '20px', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
          Pas encore de compte ?{' '}
          <Link href="/inscription" style={{ color: 'var(--color-blue-france)', fontWeight: 500 }}>
            S'inscrire gratuitement →
          </Link>
        </p>
      </form>
    </div>
  );
}

export default function ConnexionPage() {
  return (
    <Suspense fallback={<div style={{ textAlign: 'center', padding: '40px' }}>Chargement…</div>}>
      <ConnexionForm />
    </Suspense>
  );
}

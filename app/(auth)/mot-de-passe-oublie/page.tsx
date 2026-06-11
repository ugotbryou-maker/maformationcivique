'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';

export default function MotDePasseOubliePage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/auth/send-reset', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error ?? 'Erreur réseau');
      }

      setSent(true);
    } catch (err) {
      setError(
        err instanceof Error && err.message !== 'Erreur réseau'
          ? err.message
          : 'Une erreur est survenue. Réessayez dans quelques instants.'
      );
      setLoading(false);
    }
  };

  return (
    <div style={{ width: '100%', maxWidth: '400px' }}>

      <Link
        href="/connexion"
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)',
          marginBottom: '32px', textDecoration: 'none',
        }}
      >
        <ArrowLeft size={14} /> Retour à la connexion
      </Link>

      <div style={{ marginBottom: '32px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-text-primary)', marginBottom: '8px' }}>
          Mot de passe oublié
        </h1>
        <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
          Entrez votre email pour recevoir un lien de réinitialisation.
        </p>
      </div>

      <div style={{
        background: 'var(--color-surface)',
        borderRadius: 'var(--radius-xl)',
        border: 'var(--border-default)',
        boxShadow: 'var(--shadow-card)',
        padding: '32px',
      }}>
        {sent ? (
          /* ── Succès ── */
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: 64, height: 64, borderRadius: '50%',
              background: '#F0FDF4',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 20px',
            }}>
              <CheckCircle size={32} color="#16A34A" />
            </div>
            <h2 style={{ fontSize: 'var(--font-size-md)', color: 'var(--color-text-primary)', marginBottom: '12px' }}>
              Email envoyé !
            </h2>
            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.65, marginBottom: '24px' }}>
              Un lien de réinitialisation a été envoyé à <strong>{email}</strong>.
              Vérifiez votre boîte de réception (et vos spams).
            </p>
            <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
              Le lien expire dans <strong>1 heure</strong>.
            </p>
          </div>
        ) : (
          /* ── Formulaire ── */
          <form onSubmit={handleSubmit}>
            {error && (
              <div style={{
                padding: '12px 16px', borderRadius: 'var(--radius-md)',
                background: 'var(--color-red-light)',
                border: '1px solid rgba(204,26,26,0.2)',
                fontSize: 'var(--font-size-sm)', color: 'var(--color-red-france)',
                marginBottom: '20px',
              }}>
                {error}
              </div>
            )}

            <div style={{ marginBottom: '24px' }}>
              <label style={{
                display: 'block', fontSize: 'var(--font-size-sm)',
                fontWeight: 500, color: 'var(--color-text-primary)', marginBottom: '8px',
              }}>
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
              {loading ? 'Envoi en cours…' : 'Envoyer le lien'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

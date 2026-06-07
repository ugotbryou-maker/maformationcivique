'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase';
import { Lock, Eye, EyeOff, CheckCircle } from 'lucide-react';

export default function ResetPasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  // Supabase gère le token via le hash de l'URL automatiquement
  useEffect(() => {
    const supabase = createClient();
    // Écouter l'événement PASSWORD_RECOVERY
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'PASSWORD_RECOVERY') {
        setReady(true);
      }
    });
    // Si déjà en session (token valide), afficher le formulaire
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) setReady(true);
    });
    return () => subscription.unsubscribe();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password.length < 8) {
      setError('Le mot de passe doit contenir au moins 8 caractères.');
      return;
    }
    if (password !== confirm) {
      setError('Les mots de passe ne correspondent pas.');
      return;
    }

    setLoading(true);
    const supabase = createClient();
    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
      setError('Erreur : ' + error.message);
      setLoading(false);
    } else {
      setDone(true);
      setTimeout(() => router.push('/dashboard'), 3000);
    }
  };

  // Lien expiré ou invalide
  if (!ready) {
    return (
      <div style={{ width: '100%', maxWidth: '400px', textAlign: 'center' }}>
        <div style={{
          background: 'var(--color-surface)', borderRadius: 'var(--radius-xl)',
          border: 'var(--border-default)', padding: '40px',
        }}>
          <div style={{ width: 40, height: 40, border: '3px solid var(--color-blue-light)', borderTopColor: 'var(--color-blue-france)', borderRadius: '50%', animation: 'spin 0.7s linear infinite', margin: '0 auto 20px' }} />
          <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-sm)' }}>
            Vérification du lien…
          </p>
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
      </div>
    );
  }

  return (
    <div style={{ width: '100%', maxWidth: '400px' }}>
      <div style={{ marginBottom: '32px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-text-primary)', marginBottom: '8px' }}>
          Nouveau mot de passe
        </h1>
        <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
          Choisissez un nouveau mot de passe sécurisé.
        </p>
      </div>

      <div style={{
        background: 'var(--color-surface)', borderRadius: 'var(--radius-xl)',
        border: 'var(--border-default)', boxShadow: 'var(--shadow-card)', padding: '32px',
      }}>
        {done ? (
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: 64, height: 64, borderRadius: '50%', background: '#F0FDF4',
              display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px',
            }}>
              <CheckCircle size={32} color="#16A34A" />
            </div>
            <h2 style={{ fontSize: 'var(--font-size-md)', color: 'var(--color-text-primary)', marginBottom: '8px' }}>
              Mot de passe mis à jour !
            </h2>
            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
              Redirection vers votre tableau de bord…
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {error && (
              <div style={{
                padding: '12px 16px', borderRadius: 'var(--radius-md)',
                background: 'var(--color-red-light)', border: '1px solid rgba(204,26,26,0.2)',
                fontSize: 'var(--font-size-sm)', color: 'var(--color-red-france)', marginBottom: '20px',
              }}>
                {error}
              </div>
            )}

            {/* Nouveau mot de passe */}
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: 'var(--font-size-sm)', fontWeight: 500, color: 'var(--color-text-primary)', marginBottom: '8px' }}>
                Nouveau mot de passe <span style={{ color: 'var(--color-text-muted)', fontWeight: 400 }}>(8 min.)</span>
              </label>
              <div style={{ position: 'relative' }}>
                <Lock size={16} color="var(--color-text-muted)" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type={showPwd ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required minLength={8}
                  placeholder="••••••••"
                  style={{
                    width: '100%', padding: '12px 44px 12px 40px',
                    borderRadius: 'var(--radius-md)', border: 'var(--border-default)',
                    fontSize: 'var(--font-size-base)', color: 'var(--color-text-primary)',
                    background: 'var(--color-off-white)', fontFamily: 'var(--font-sans)',
                    outline: 'none', minHeight: '48px', boxSizing: 'border-box',
                  }}
                  onFocus={(e) => { e.target.style.borderColor = 'var(--color-blue-france)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'var(--color-border)'; }}
                />
                <button type="button" onClick={() => setShowPwd(!showPwd)}
                  style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-muted)', padding: '4px', minHeight: '44px', minWidth: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {showPwd ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Confirmation */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: 'var(--font-size-sm)', fontWeight: 500, color: 'var(--color-text-primary)', marginBottom: '8px' }}>
                Confirmer le mot de passe
              </label>
              <div style={{ position: 'relative' }}>
                <Lock size={16} color="var(--color-text-muted)" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type={showPwd ? 'text' : 'password'}
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  required
                  placeholder="••••••••"
                  style={{
                    width: '100%', padding: '12px 14px 12px 40px',
                    borderRadius: 'var(--radius-md)', border: 'var(--border-default)',
                    fontSize: 'var(--font-size-base)', color: 'var(--color-text-primary)',
                    background: 'var(--color-off-white)', fontFamily: 'var(--font-sans)',
                    outline: 'none', minHeight: '48px', boxSizing: 'border-box',
                  }}
                  onFocus={(e) => { e.target.style.borderColor = confirm && confirm !== password ? 'var(--color-red-france)' : 'var(--color-blue-france)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'var(--color-border)'; }}
                />
              </div>
              {confirm && confirm !== password && (
                <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-red-france)', marginTop: '4px' }}>
                  Les mots de passe ne correspondent pas
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%', padding: '13px 24px',
                borderRadius: 'var(--radius-pill)',
                background: loading ? 'var(--color-text-muted)' : 'var(--gradient-primary)',
                color: '#FFFFFF', border: 'none',
                fontSize: 'var(--font-size-base)', fontWeight: 500,
                cursor: loading ? 'not-allowed' : 'pointer',
                minHeight: '48px', fontFamily: 'var(--font-sans)',
              }}
            >
              {loading ? 'Mise à jour…' : 'Enregistrer le mot de passe'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

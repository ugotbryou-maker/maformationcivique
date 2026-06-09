'use client';

export const dynamic = 'force-dynamic';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { User, CreditCard, LogOut, Lock, Eye, EyeOff, CheckCircle } from 'lucide-react';

export default function ProfilPage() {
  const router = useRouter();
  const [profile, setProfile] = useState<{ name?: string; email?: string; plan?: string; lang?: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [portalLoading, setPortalLoading] = useState(false);
  const [adminToggling, setAdminToggling] = useState(false);

  // Password change
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [pwdLoading, setPwdLoading] = useState(false);
  const [pwdError, setPwdError] = useState<string | null>(null);
  const [pwdSuccess, setPwdSuccess] = useState(false);

  useEffect(() => {
    const supabase = createClient();
    async function load() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { router.push('/connexion'); return; }
      const { data } = await supabase.from('users').select('*').eq('id', user.id).single();
      setProfile({ ...data, email: user.email });
      setLoading(false);
    }
    load();
  }, [router]);

  const handleSignOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push('/');
    router.refresh();
  };

  const handleManageBilling = async () => {
    setPortalLoading(true);
    try {
      const res = await fetch('/api/stripe/portal', { method: 'POST' });
      const { url } = await res.json();
      if (url) window.location.href = url;
    } finally {
      setPortalLoading(false);
    }
  };

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setPwdError(null);
    if (newPassword.length < 8) { setPwdError('8 caractères minimum.'); return; }
    if (newPassword !== confirmPassword) { setPwdError('Les mots de passe ne correspondent pas.'); return; }
    setPwdLoading(true);
    const supabase = createClient();
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    setPwdLoading(false);
    if (error) {
      setPwdError('Erreur : ' + error.message);
    } else {
      setPwdSuccess(true);
      setNewPassword('');
      setConfirmPassword('');
      setTimeout(() => setPwdSuccess(false), 4000);
    }
  };

  const handleAdminToggle = async () => {
    setAdminToggling(true);
    const res = await fetch('/api/admin/toggle-plan', { method: 'POST' });
    const data = await res.json();
    if (data.plan) {
      setProfile((p) => p ? { ...p, plan: data.plan } : p);
    }
    setAdminToggling(false);
  };

  const handleUpgrade = async () => {
    const res = await fetch('/api/stripe/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ planKey: 'premium_monthly' }),
    });
    const { url } = await res.json();
    if (url) window.location.href = url;
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '40vh' }}>
        <div style={{ width: 32, height: 32, border: '3px solid var(--color-blue-light)', borderTopColor: 'var(--color-blue-france)', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  const isPremium = profile?.plan === 'premium';

  return (
    <div style={{ maxWidth: '560px' }}>
      <h1 style={{ fontSize: 'var(--font-size-xl)', color: 'var(--color-text-primary)', marginBottom: '32px' }}>
        Mon profil
      </h1>

      {/* Profile card */}
      <div
        style={{
          padding: '24px',
          borderRadius: 'var(--radius-xl)',
          background: 'var(--color-surface)',
          border: 'var(--border-default)',
          marginBottom: '16px',
        }}
      >
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '20px' }}>
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: 'var(--gradient-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <User size={24} color="#FFFFFF" />
          </div>
          <div>
            <p style={{ fontSize: 'var(--font-size-md)', fontWeight: 500, color: 'var(--color-text-primary)' }}>
              {profile?.name || 'Utilisateur'}
            </p>
            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>{profile?.email}</p>
          </div>
        </div>

        <div style={{ borderTop: 'var(--border-default)', paddingTop: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CreditCard size={16} color="var(--color-text-muted)" />
              <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>Abonnement</span>
            </div>
            <span
              style={{
                padding: '4px 12px',
                borderRadius: 'var(--radius-pill)',
                background: isPremium ? '#E1F5EE' : 'var(--color-blue-light)',
                color: isPremium ? '#1D9E75' : 'var(--color-blue-france)',
                fontSize: 'var(--font-size-xs)',
                fontWeight: 500,
              }}
            >
              {isPremium ? 'Premium actif' : 'Gratuit'}
            </span>
          </div>
        </div>
      </div>

      {/* Abonnement actions */}
      <div
        style={{
          padding: '24px',
          borderRadius: 'var(--radius-xl)',
          background: 'var(--color-surface)',
          border: 'var(--border-default)',
          marginBottom: '16px',
        }}
      >
        <h2 style={{ fontSize: 'var(--font-size-base)', fontWeight: 500, color: 'var(--color-text-primary)', marginBottom: '16px' }}>
          Abonnement
        </h2>
        {isPremium ? (
          <button
            onClick={handleManageBilling}
            disabled={portalLoading}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 20px',
              borderRadius: 'var(--radius-pill)',
              background: 'transparent',
              color: 'var(--color-blue-france)',
              border: '1.5px solid var(--color-blue-france)',
              fontSize: 'var(--font-size-sm)',
              fontWeight: 500,
              cursor: 'pointer',
              fontFamily: 'var(--font-sans)',
              minHeight: '44px',
            }}
          >
            <CreditCard size={15} />
            {portalLoading ? 'Chargement…' : 'Gérer mon abonnement'}
          </button>
        ) : (
          <div>
            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', marginBottom: '16px' }}>
              Passez à Premium pour accéder aux 5 modules, 177 questions et examens blancs illimités.
            </p>
            <button
              onClick={handleUpgrade}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                borderRadius: 'var(--radius-pill)',
                background: 'var(--gradient-primary)',
                color: '#FFFFFF',
                border: 'none',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 500,
                cursor: 'pointer',
                fontFamily: 'var(--font-sans)',
                minHeight: '44px',
              }}
            >
              Passer Premium — 12€/mois
            </button>
          </div>
        )}
      </div>

      {/* ── Changer mot de passe ── */}
      <div
        style={{
          padding: '24px',
          borderRadius: 'var(--radius-xl)',
          background: 'var(--color-surface)',
          border: 'var(--border-default)',
          marginBottom: '16px',
        }}
      >
        <h2 style={{ fontSize: 'var(--font-size-base)', fontWeight: 500, color: 'var(--color-text-primary)', marginBottom: '4px' }}>
          Changer le mot de passe
        </h2>
        <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginBottom: '20px' }}>
          Choisissez un mot de passe d'au moins 8 caractères.
        </p>

        {pwdSuccess && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 16px', borderRadius: 'var(--radius-md)', background: '#E1F5EE', color: '#1D9E75', fontSize: 'var(--font-size-sm)', marginBottom: '16px' }}>
            <CheckCircle size={16} />Mot de passe mis à jour !
          </div>
        )}
        {pwdError && (
          <div style={{ padding: '12px 16px', borderRadius: 'var(--radius-md)', background: 'var(--color-red-light)', border: '1px solid rgba(204,26,26,0.2)', fontSize: 'var(--font-size-sm)', color: 'var(--color-red-france)', marginBottom: '16px' }}>
            {pwdError}
          </div>
        )}

        <form onSubmit={handlePasswordChange} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {/* Nouveau mdp */}
          <div>
            <label style={{ display: 'block', fontSize: 'var(--font-size-sm)', fontWeight: 500, color: 'var(--color-text-primary)', marginBottom: '6px' }}>
              Nouveau mot de passe
            </label>
            <div style={{ position: 'relative' }}>
              <Lock size={15} color="var(--color-text-muted)" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type={showNew ? 'text' : 'password'}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                autoComplete="new-password"
                placeholder="••••••••"
                style={{ width: '100%', padding: '11px 44px 11px 40px', borderRadius: 'var(--radius-md)', border: 'var(--border-default)', fontSize: 'var(--font-size-base)', color: 'var(--color-text-primary)', background: 'var(--color-off-white)', fontFamily: 'var(--font-sans)', outline: 'none', minHeight: '46px', boxSizing: 'border-box' }}
                onFocus={(e) => { e.target.style.borderColor = 'var(--color-blue-france)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'var(--color-border)'; }}
              />
              <button type="button" onClick={() => setShowNew(!showNew)} style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-muted)', display: 'flex', padding: 4 }}>
                {showNew ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
            </div>
          </div>

          {/* Confirmer mdp */}
          <div>
            <label style={{ display: 'block', fontSize: 'var(--font-size-sm)', fontWeight: 500, color: 'var(--color-text-primary)', marginBottom: '6px' }}>
              Confirmer le mot de passe
            </label>
            <div style={{ position: 'relative' }}>
              <Lock size={15} color="var(--color-text-muted)" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type={showConfirm ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                autoComplete="new-password"
                placeholder="••••••••"
                style={{ width: '100%', padding: '11px 44px 11px 40px', borderRadius: 'var(--radius-md)', border: 'var(--border-default)', fontSize: 'var(--font-size-base)', color: 'var(--color-text-primary)', background: 'var(--color-off-white)', fontFamily: 'var(--font-sans)', outline: 'none', minHeight: '46px', boxSizing: 'border-box' }}
                onFocus={(e) => { e.target.style.borderColor = 'var(--color-blue-france)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'var(--color-border)'; }}
              />
              <button type="button" onClick={() => setShowConfirm(!showConfirm)} style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-muted)', display: 'flex', padding: 4 }}>
                {showConfirm ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={pwdLoading}
            style={{ alignSelf: 'flex-start', padding: '11px 24px', borderRadius: 'var(--radius-pill)', background: pwdLoading ? 'var(--color-text-muted)' : 'var(--gradient-primary)', color: '#fff', border: 'none', fontSize: 'var(--font-size-sm)', fontWeight: 500, cursor: pwdLoading ? 'not-allowed' : 'pointer', fontFamily: 'var(--font-sans)', minHeight: '44px' }}
          >
            {pwdLoading ? 'Mise à jour…' : 'Mettre à jour'}
          </button>
        </form>
      </div>

      {/* ── Zone admin (visible uniquement pour l'admin) ── */}
      {profile?.email === (process.env.NEXT_PUBLIC_ADMIN_EMAIL ?? 'tamburriniugo@gmail.com') && (
        <div style={{
          padding: '20px 24px',
          borderRadius: 'var(--radius-xl)',
          background: isPremium ? '#FFF7ED' : '#F0FDF4',
          border: `1.5px solid ${isPremium ? '#FED7AA' : '#BBF7D0'}`,
          marginBottom: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
        }}>
          <div>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: isPremium ? '#C2410C' : '#15803D', marginBottom: 3 }}>
              🔧 Mode test admin
            </p>
            <p style={{ fontSize: 13, color: 'var(--color-text-muted)', margin: 0 }}>
              Plan actuel : <strong>{isPremium ? 'Premium' : 'Gratuit'}</strong> — bascule sans paiement
            </p>
          </div>
          <button
            onClick={handleAdminToggle}
            disabled={adminToggling}
            style={{
              padding: '9px 18px',
              borderRadius: 'var(--radius-pill)',
              background: isPremium ? '#EA580C' : '#16A34A',
              color: '#fff',
              border: 'none',
              fontSize: 13,
              fontWeight: 600,
              cursor: adminToggling ? 'wait' : 'pointer',
              fontFamily: 'var(--font-sans)',
              minHeight: 40,
              opacity: adminToggling ? 0.7 : 1,
              whiteSpace: 'nowrap',
            }}
          >
            {adminToggling ? '…' : isPremium ? 'Repasser Gratuit' : 'Activer Premium'}
          </button>
        </div>
      )}

      {/* Déconnexion */}
      <button
        onClick={handleSignOut}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '12px 20px',
          borderRadius: 'var(--radius-lg)',
          background: 'var(--color-surface)',
          border: 'var(--border-default)',
          fontSize: 'var(--font-size-sm)',
          color: 'var(--color-red-france)',
          cursor: 'pointer',
          fontFamily: 'var(--font-sans)',
          minHeight: '44px',
          width: '100%',
          justifyContent: 'center',
          transition: 'all 200ms ease-out',
        }}
      >
        <LogOut size={15} />
        Se déconnecter
      </button>
    </div>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { User, CreditCard, LogOut, Globe } from 'lucide-react';

export default function ProfilPage() {
  const router = useRouter();
  const supabase = createClient();
  const [profile, setProfile] = useState<{ name?: string; email?: string; plan?: string; lang?: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [portalLoading, setPortalLoading] = useState(false);

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { router.push('/connexion'); return; }
      const { data } = await supabase.from('users').select('*').eq('id', user.id).single();
      setProfile({ ...data, email: user.email });
      setLoading(false);
    }
    load();
  }, []);

  const handleSignOut = async () => {
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

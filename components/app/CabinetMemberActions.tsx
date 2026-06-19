'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { KeyRound, UserX } from 'lucide-react';

interface Props {
  userId: string;
  memberEmail: string;
}

export function CabinetMemberActions({ userId, memberEmail }: Props) {
  const router = useRouter();
  const [loadingReset, setLoadingReset] = useState(false);
  const [loadingRevoke, setLoadingRevoke] = useState(false);
  const [resetDone, setResetDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleResetPassword() {
    setLoadingReset(true);
    setError(null);
    try {
      const res = await fetch('/api/cabinet/member/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId }),
      });
      if (!res.ok) {
        const d = await res.json();
        setError(d.error ?? 'Erreur');
      } else {
        setResetDone(true);
        setTimeout(() => setResetDone(false), 4000);
      }
    } catch {
      setError('Erreur réseau');
    } finally {
      setLoadingReset(false);
    }
  }

  async function handleRevoke() {
    if (!confirm(`Révoquer l'accès de ${memberEmail} ? Son compte passera en Gratuit.`)) return;
    setLoadingRevoke(true);
    setError(null);
    try {
      const res = await fetch('/api/cabinet/member/revoke', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId }),
      });
      if (!res.ok) {
        const d = await res.json();
        setError(d.error ?? 'Erreur');
      } else {
        router.push('/cabinet');
        router.refresh();
      }
    } catch {
      setError('Erreur réseau');
    } finally {
      setLoadingRevoke(false);
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-end' }}>
      {error && (
        <p style={{ fontSize: 12, color: 'var(--color-red-france)', textAlign: 'right' }}>{error}</p>
      )}

      {/* Reset mot de passe */}
      <button
        onClick={handleResetPassword}
        disabled={loadingReset || resetDone}
        style={{
          display: 'flex', alignItems: 'center', gap: 6,
          padding: '8px 14px', borderRadius: 'var(--radius-pill)',
          border: '1.5px solid var(--color-border)',
          background: resetDone ? '#ECFDF5' : 'var(--color-surface)',
          color: resetDone ? '#1D9E75' : 'var(--color-text-secondary)',
          fontSize: 'var(--font-size-xs)', fontWeight: 600, cursor: loadingReset ? 'wait' : 'pointer',
          fontFamily: 'var(--font-sans)', whiteSpace: 'nowrap',
          transition: 'all 200ms',
        }}
      >
        <KeyRound size={13} />
        {loadingReset ? 'Envoi…' : resetDone ? 'Email envoyé ✓' : 'Envoyer lien mot de passe'}
      </button>

      {/* Révoquer */}
      <button
        onClick={handleRevoke}
        disabled={loadingRevoke}
        style={{
          display: 'flex', alignItems: 'center', gap: 6,
          padding: '8px 14px', borderRadius: 'var(--radius-pill)',
          border: '1.5px solid rgba(204,26,26,0.3)',
          background: 'transparent',
          color: 'var(--color-red-france)',
          fontSize: 'var(--font-size-xs)', fontWeight: 600, cursor: loadingRevoke ? 'wait' : 'pointer',
          fontFamily: 'var(--font-sans)', whiteSpace: 'nowrap',
          transition: 'all 200ms',
        }}
      >
        <UserX size={13} />
        {loadingRevoke ? 'Révocation…' : 'Révoquer l\'accès'}
      </button>
    </div>
  );
}

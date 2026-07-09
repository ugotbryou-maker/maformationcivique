'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

interface Props {
  id: string;
  email: string;
  createdAt: string;
}

export function CabinetInviteRow({ id, email, createdAt }: Props) {
  const [cancelling, setCancelling] = useState(false);
  const [cancelled, setCancelled] = useState(false);

  const handleCancel = async () => {
    if (!confirm(`Annuler l'invitation envoyée à ${email} ? La place sera libérée.`)) return;
    setCancelling(true);
    await fetch('/api/cabinet/invite/cancel', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ inviteId: id }),
    });
    setCancelled(true);
    setCancelling(false);
  };

  if (cancelled) return null;

  return (
    <div style={{
      background: 'var(--color-surface)', border: '1px dashed var(--color-border)',
      borderRadius: 'var(--radius-lg)', padding: '14px 18px',
      display: 'flex', alignItems: 'center', gap: 14, opacity: 0.72,
    }}>
      <div style={{
        width: 44, height: 44, borderRadius: '50%', flexShrink: 0,
        background: 'var(--color-off-white)', border: '2px dashed var(--color-border)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 18, color: 'var(--color-text-muted)',
      }}>
        ?
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{ fontWeight: 500, fontSize: 14, color: 'var(--color-text-secondary)', margin: 0 }}>
          {email}
        </p>
        <p style={{ fontSize: 12, color: 'var(--color-text-muted)', marginTop: 2 }}>
          Invitation envoyée le {new Date(createdAt).toLocaleDateString('fr-FR')}
        </p>
      </div>
      <span style={{
        fontSize: 11, fontWeight: 500, color: 'var(--color-text-muted)',
        background: 'var(--color-off-white)',
        padding: '3px 10px', borderRadius: 'var(--radius-pill)',
        border: 'var(--border-default)', whiteSpace: 'nowrap',
      }}>
        En attente
      </span>
      <button
        onClick={handleCancel}
        disabled={cancelling}
        title="Annuler l'invitation — libère la place"
        style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: 26, height: 26, borderRadius: 'var(--radius-pill)',
          border: '1px solid #FECACA', background: '#FEF2F2',
          color: '#B91C1C', cursor: cancelling ? 'wait' : 'pointer',
          opacity: cancelling ? 0.5 : 1, padding: 0, flexShrink: 0,
        }}
      >
        <X size={12} />
      </button>
    </div>
  );
}

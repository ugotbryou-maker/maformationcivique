'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Download, UserX } from 'lucide-react';

const AVATAR_GRADIENTS = [
  'linear-gradient(135deg,#002395,#0057A8)',
  'linear-gradient(135deg,#0A5F38,#1D9E75)',
  'linear-gradient(135deg,#6B0A2D,#8B1A2B)',
  'linear-gradient(135deg,#374151,#6B7280)',
  'linear-gradient(135deg,#5B21B6,#7C3AED)',
  'linear-gradient(135deg,#92400E,#D97706)',
];

function avatarGradient(name: string) {
  const code = (name || 'U').toUpperCase().charCodeAt(0);
  return AVATAR_GRADIENTS[code % AVATAR_GRADIENTS.length];
}

function formatLastActive(dateStr: string | null): string {
  if (!dateStr) return 'Jamais connecté';
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / 86400000);
  if (days === 0) return "Actif aujourd'hui";
  if (days === 1) return 'Actif hier';
  if (days < 7) return `Actif il y a ${days} jours`;
  if (days < 30) return `Actif il y a ${Math.floor(days / 7)} sem.`;
  return `Actif il y a ${Math.floor(days / 30)} mois`;
}

interface Props {
  id: string;
  displayName: string;
  email: string;
  pct: number;
  lastActive: string | null;
}

export function CabinetMemberRow({ id, displayName, email, pct, lastActive }: Props) {
  const [revoking, setRevoking] = useState(false);
  const [revoked, setRevoked]   = useState(false);

  const handleRevoke = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!confirm(`Révoquer l'accès de ${displayName} ? Son plan repassera en gratuit et sa place sera libérée.`)) return;
    setRevoking(true);
    await fetch('/api/cabinet/member/revoke', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: id }),
    });
    setRevoked(true);
    setRevoking(false);
  };

  if (revoked) return null;

  const initial  = displayName[0].toUpperCase();
  const gradient = avatarGradient(displayName);
  const isReady  = pct >= 80;
  const barColor = pct === 100 ? '#1D9E75' : isReady ? '#0057A8' : 'var(--gradient-primary)';

  return (
    <Link href={`/cabinet/membre/${id}`} style={{ textDecoration: 'none', display: 'block' }}>
      <div
        className="cabinet-client-row"
        style={{
          background: 'var(--color-surface)', border: 'var(--border-default)',
          borderRadius: 'var(--radius-lg)', padding: '14px 18px',
          display: 'flex', alignItems: 'center', gap: 14,
          transition: 'box-shadow 180ms ease, border-color 180ms ease',
          cursor: 'pointer',
        }}
      >
        {/* Avatar */}
        <div style={{
          width: 44, height: 44, borderRadius: '50%', flexShrink: 0,
          background: gradient,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 16, fontWeight: 700, color: '#fff',
        }}>
          {initial}
        </div>

        {/* Info + progress */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 5 }}>
            <p style={{
              fontWeight: 600, fontSize: 14, color: 'var(--color-text-primary)',
              margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
            }}>
              {displayName}
            </p>
            {/* Status badge */}
            {pct === 100 ? (
              <span style={{
                fontSize: 11, fontWeight: 600, flexShrink: 0,
                background: '#ECFDF5', color: '#0F6E56',
                padding: '2px 8px', borderRadius: 100,
              }}>
                ✓ Terminé
              </span>
            ) : isReady ? (
              <span style={{
                fontSize: 11, fontWeight: 600, flexShrink: 0,
                background: '#EFF6FF', color: '#1D4ED8',
                padding: '2px 8px', borderRadius: 100,
              }}>
                Prêt
              </span>
            ) : (
              <span style={{
                fontSize: 11, fontWeight: 500, flexShrink: 0,
                background: 'var(--color-off-white)', color: 'var(--color-text-muted)',
                padding: '2px 8px', borderRadius: 100, border: 'var(--border-default)',
              }}>
                En cours
              </span>
            )}
          </div>

          {/* Sub-line */}
          <p style={{ fontSize: 11, color: 'var(--color-text-muted)', margin: '0 0 8px' }}>
            {email} · {formatLastActive(lastActive)}
          </p>

          {/* Progress bar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ flex: 1, height: 5, borderRadius: 99, background: 'var(--color-border)', overflow: 'hidden' }}>
              <div style={{
                height: '100%', width: `${pct}%`, borderRadius: 99,
                background: barColor, transition: 'width 400ms ease',
              }} />
            </div>
            <span style={{
              fontSize: 12, fontWeight: 700, flexShrink: 0, minWidth: 32, textAlign: 'right',
              color: pct >= 80 ? '#0F6E56' : 'var(--color-text-muted)',
            }}>
              {pct}%
            </span>
          </div>
        </div>

        {/* Actions */}
        <div
          style={{ display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <a
            href={pct === 100 ? `/api/cabinet/attestation/${id}` : undefined}
            onClick={(e) => { e.stopPropagation(); if (pct < 100) e.preventDefault(); }}
            style={{
              fontSize: 11, fontWeight: 600,
              color: pct === 100 ? '#0F6E56' : 'var(--color-text-muted)',
              background: pct === 100 ? '#ECFDF5' : 'var(--color-off-white)',
              border: pct === 100 ? '1px solid #A7F3D0' : '1px solid var(--color-border)',
              padding: '5px 10px', borderRadius: 'var(--radius-pill)',
              whiteSpace: 'nowrap', textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: 4,
              opacity: pct === 100 ? 1 : 0.45,
              cursor: pct === 100 ? 'pointer' : 'not-allowed',
            }}
            title={pct === 100 ? "Télécharger l'attestation PDF" : `Disponible à 100% de complétion (${pct}%)`}
          >
            <Download size={10} />
            Attestation
          </a>
          <button
            onClick={handleRevoke}
            disabled={revoking}
            title="Révoquer l'accès — libère la place"
            style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              width: 28, height: 28, borderRadius: 'var(--radius-pill)',
              border: '1px solid #FECACA', background: '#FEF2F2',
              color: '#B91C1C', cursor: revoking ? 'wait' : 'pointer',
              opacity: revoking ? 0.5 : 1, padding: 0, flexShrink: 0,
            }}
          >
            <UserX size={12} />
          </button>
        </div>
      </div>
    </Link>
  );
}

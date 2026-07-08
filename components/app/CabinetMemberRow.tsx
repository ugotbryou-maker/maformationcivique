'use client';

import Link from 'next/link';
import { Download } from 'lucide-react';
import { ProgressBar } from '@/components/app/ProgressBar';

const AVATAR_COLORS = [
  { bg: '#DBEAFE', color: '#1E40AF' },
  { bg: '#D1FAE5', color: '#065F46' },
  { bg: '#EDE9FE', color: '#5B21B6' },
  { bg: '#FEF3C7', color: '#92400E' },
  { bg: '#FCE7F3', color: '#9D174D' },
  { bg: '#FEE2E2', color: '#991B1B' },
];

function getAvatarStyle(name: string) {
  const code = (name || 'U').toUpperCase().charCodeAt(0);
  return AVATAR_COLORS[code % AVATAR_COLORS.length];
}

interface Props {
  id: string;
  displayName: string;
  pct: number;
}

export function CabinetMemberRow({ id, displayName, pct }: Props) {
  const initial = displayName[0].toUpperCase();
  const avatarStyle = getAvatarStyle(displayName);

  return (
    <Link
      href={`/cabinet/membre/${id}`}
      style={{ textDecoration: 'none', display: 'block' }}
    >
      <div
        style={{
          background: 'var(--color-surface)', border: 'var(--border-default)',
          borderRadius: 'var(--radius-lg)', padding: '14px 18px',
          display: 'flex', alignItems: 'center', gap: 14,
          transition: 'box-shadow 180ms ease, border-color 180ms ease',
          cursor: 'pointer',
        }}
        className="cabinet-client-row"
      >
        <div style={{
          width: 44, height: 44, borderRadius: '50%', flexShrink: 0,
          background: avatarStyle.bg, color: avatarStyle.color,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 16, fontWeight: 700,
        }}>
          {initial}
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, marginBottom: 8 }}>
            <p style={{ fontWeight: 600, fontSize: 14, color: 'var(--color-text-primary)', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {displayName}
            </p>
            <div
              style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <span style={{ fontSize: 13, fontWeight: 700, color: pct === 100 ? '#1D9E75' : 'var(--color-text-muted)' }}>
                {pct}%
              </span>
              <a
                href={pct === 100 ? `/api/cabinet/attestation/${id}` : undefined}
                onClick={(e) => {
                  e.stopPropagation();
                  if (pct < 100) e.preventDefault();
                }}
                style={{
                  fontSize: 11, fontWeight: 700,
                  color: pct === 100 ? '#1D9E75' : 'var(--color-text-muted)',
                  background: pct === 100 ? '#ECFDF5' : 'var(--color-off-white)',
                  border: pct === 100 ? '1px solid #A7F3D0' : '1px solid var(--color-border)',
                  padding: '3px 8px', borderRadius: 'var(--radius-pill)',
                  whiteSpace: 'nowrap', textDecoration: 'none',
                  display: 'inline-flex', alignItems: 'center', gap: 4,
                  opacity: pct === 100 ? 1 : 0.5,
                  cursor: pct === 100 ? 'pointer' : 'not-allowed',
                }}
                title={pct === 100 ? "Télécharger l'attestation PDF" : `Formation à ${pct}% — disponible à 100%`}
              >
                <Download size={9} />
                Attestation
              </a>
            </div>
          </div>
          <div style={{ height: 6, borderRadius: 99, background: 'var(--color-border)', overflow: 'hidden' }}>
            <div style={{
              height: '100%', width: `${pct}%`, borderRadius: 99,
              background: pct === 100 ? '#1D9E75' : 'var(--gradient-primary)',
            }} />
          </div>
        </div>
      </div>
    </Link>
  );
}

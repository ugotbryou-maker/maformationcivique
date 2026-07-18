/**
 * Bannière CTA vers le test d'éligibilité — à placer sur les pages qui ciblent
 * les candidats TDS / naturalisation (ex. pages départementales examen civique).
 * Lead magnet transverse.
 */

import { ShieldCheck, ArrowRight } from 'lucide-react';
import { SITE_URL } from '@/lib/reglementation';

export function EligibiliteCTA() {
  return (
    <a
      href={`${SITE_URL}/test-eligibilite`}
      style={{
        display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap',
        textDecoration: 'none',
        background: 'linear-gradient(135deg, #001A70 0%, #002395 60%, #1D4ED8 100%)',
        borderRadius: 'var(--radius-xl)', padding: '22px 26px',
      }}
    >
      <div style={{
        width: 46, height: 46, borderRadius: 12, flexShrink: 0,
        background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <ShieldCheck size={24} color="#fff" />
      </div>
      <div style={{ flex: 1, minWidth: 200 }}>
        <p style={{ fontSize: 16, fontWeight: 800, color: '#fff', margin: '0 0 3px' }}>
          Êtes-vous éligible ? Testez en 2 minutes
        </p>
        <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.75)', margin: 0, lineHeight: 1.5 }}>
          Carte de séjour, carte de résident ou naturalisation : découvrez votre profil et votre plan d’action.
        </p>
      </div>
      <span style={{
        display: 'inline-flex', alignItems: 'center', gap: 7, flexShrink: 0,
        background: '#fff', color: 'var(--color-blue-france)',
        padding: '11px 20px', borderRadius: 'var(--radius-pill)',
        fontWeight: 700, fontSize: 14,
      }}>
        Faire le test <ArrowRight size={15} />
      </span>
    </a>
  );
}

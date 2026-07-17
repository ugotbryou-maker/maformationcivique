/**
 * Bloc OFII — ancrage étatique officiel (interlocuteur public du parcours
 * intégration / naturalisation). Rendu uniquement si l'OFII est vérifié.
 *
 * ⚠️ Formulation : l'OFII n'organise PAS l'examen civique (opérateurs agréés).
 * On le présente comme l'interlocuteur État du parcours, pas comme un centre
 * d'examen. La source (annuaire .gouv.fr) et la date sont affichées.
 */

import { Landmark, ExternalLink } from 'lucide-react';
import type { Departement } from '@/data/departements/types';

export function OfiiBlock({ dep }: { dep: Departement }) {
  const o = dep.ofii;
  if (!o) return null;

  return (
    <div style={{
      background: 'var(--color-surface)', border: 'var(--border-default)',
      borderRadius: 'var(--radius-lg)', padding: '20px 24px',
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
        <div style={{
          width: 40, height: 40, borderRadius: 10, flexShrink: 0,
          background: '#EEF4FF', display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Landmark size={20} color="var(--color-blue-france)" />
        </div>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: 16, fontWeight: 700, color: 'var(--color-text-primary)', margin: '0 0 2px' }}>
            {o.nom}
          </p>
          <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', margin: '0 0 8px' }}>
            {o.adresse}
          </p>
          <a
            href={o.urlOfficielle}
            target="_blank"
            rel="noopener"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 5,
              fontSize: 13, fontWeight: 600, color: 'var(--color-blue-france)', textDecoration: 'none',
            }}
          >
            ofii.fr <ExternalLink size={12} />
          </a>
        </div>
      </div>
      <p style={{ fontSize: 12, color: 'var(--color-text-muted)', margin: '12px 0 0' }}>
        Source :{' '}
        <a href={o.sourceUrl} target="_blank" rel="noopener" style={{ color: 'var(--color-blue-france)' }}>
          annuaire officiel de l&apos;administration
        </a>{' '}
        — vérifié le {formatDateFr(o.verifieLe)}
      </p>
    </div>
  );
}

function formatDateFr(iso: string): string {
  const d = new Date(iso);
  return Number.isNaN(d.getTime())
    ? iso
    : d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
}

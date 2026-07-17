/**
 * Bloc « Ce que demande la préfecture » — le différenciateur éditorial.
 *
 * Ne rend QUE ce que la préfecture publie elle-même (specificites non vide +
 * sourceUrl + verifieLe obligatoires, sinon null). La source et la date sont
 * affichées visiblement.
 *
 * ⚠️ Aucun délai préfectoral chiffré ici — la phrase « les délais varient »
 * est écrite en dur, le bloc first-party DelaisObservesBlock est le seul
 * endroit autorisé pour des chiffres de délais.
 */

import { CheckCircle2 } from 'lucide-react';
import type { Departement } from '@/data/departements/types';

export function PiecesPrefectureBlock({ dep }: { dep: Departement }) {
  const p = dep.piecesPrefecture;

  if (!p.specificites.length || !p.sourceUrl || !p.verifieLe) return null;

  return (
    <div style={{
      background: 'var(--color-surface)', border: 'var(--border-default)',
      borderRadius: 'var(--radius-lg)', padding: '20px 24px',
    }}>
      <ul style={{ listStyle: 'none', margin: '0 0 14px', padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {p.specificites.map((s) => (
          <li key={s} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
            <CheckCircle2 size={16} color="#1D9E75" style={{ flexShrink: 0, marginTop: 3 }} />
            <span style={{ fontSize: 14.5, lineHeight: 1.65, color: 'var(--color-text-secondary)' }}>{s}</span>
          </li>
        ))}
      </ul>
      <p style={{ fontSize: 12, color: 'var(--color-text-muted)', margin: 0 }}>
        Source :{' '}
        <a href={p.sourceUrl} target="_blank" rel="noopener" style={{ color: 'var(--color-blue-france)' }}>
          site officiel de la {dep.prefecture.nom.toLowerCase().startsWith('préfecture') ? dep.prefecture.nom : `préfecture (${dep.prefecture.nom})`}
        </a>{' '}
        — vérifié le {formatDateFr(p.verifieLe)}
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

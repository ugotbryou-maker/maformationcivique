/**
 * Section « Où passer l'examen » — cartes des centres réels, ou bloc honnête
 * « aucun centre dans ce département » + centres proches.
 *
 * Chaque centre affiche sa source officielle et sa date de vérification.
 */

import { MapPin, ExternalLink } from 'lucide-react';
import type { Departement } from '@/data/departements/types';
import { centreValide, centreProcheValide } from '@/data/departements';

const MENTION_LABELS: Record<string, string> = {
  CSP: 'Carte de séjour pluriannuelle',
  CR: 'Carte de résident',
  NAT: 'Naturalisation',
};

export function CentresSection({ dep }: { dep: Departement }) {
  const centres = dep.centresExamen.filter(centreValide);
  const proches = dep.centresProches.filter(centreProcheValide);

  if (centres.length === 0) {
    return (
      <div>
        {/* Information utile et unique : pas de centre local — on le dit honnêtement */}
        <div style={{
          background: '#FFFBEB', border: '1px solid #FDE68A',
          borderRadius: 'var(--radius-lg)', padding: '18px 22px', marginBottom: 20,
        }}>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: '#92400E', margin: 0 }}>
            <strong>Il n&apos;y a actuellement aucun centre d&apos;examen civique agréé{' '}
            {dep.nomAvecPreposition}.</strong> Les candidats du département passent l&apos;épreuve
            dans un centre voisin — voici les plus proches de {dep.prefectureVille}.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {proches.map((c) => (
            <div key={`${c.nom}-${c.ville}`} style={{
              display: 'flex', alignItems: 'flex-start', gap: 14,
              background: 'var(--color-surface)', border: 'var(--border-default)',
              borderRadius: 'var(--radius-lg)', padding: '18px 22px',
            }}>
              <MapPin size={18} color="var(--color-blue-france)" style={{ flexShrink: 0, marginTop: 2 }} />
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 15, fontWeight: 700, color: 'var(--color-text-primary)', margin: '0 0 4px' }}>
                  {c.nom} — {c.ville} ({c.departement})
                  {c.distanceKm != null && (
                    <span style={{ fontWeight: 500, color: 'var(--color-text-muted)' }}>
                      {' '}· ~{c.distanceKm} km de {dep.prefectureVille}
                    </span>
                  )}
                </p>
                <p style={{ fontSize: 12, color: 'var(--color-text-muted)', margin: 0 }}>
                  <a href={c.sourceUrl} target="_blank" rel="noopener" style={{ color: 'var(--color-blue-france)' }}>
                    Source officielle
                  </a>{' '}
                  — vérifié le {formatDateFr(c.verifieLe)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {centres.map((c) => (
        <div key={`${c.nom}-${c.adresse}`} style={{
          background: 'var(--color-surface)', border: 'var(--border-default)',
          borderRadius: 'var(--radius-lg)', padding: '20px 24px',
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: 240 }}>
              <p style={{ fontSize: 16, fontWeight: 700, color: 'var(--color-text-primary)', margin: '0 0 2px' }}>
                {c.nom}
              </p>
              <p style={{ fontSize: 13, color: 'var(--color-text-muted)', margin: '0 0 8px' }}>
                Opérateur agréé : {c.operateur}
              </p>
              <p style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, color: 'var(--color-text-secondary)', margin: '0 0 10px' }}>
                <MapPin size={14} style={{ flexShrink: 0 }} />
                {c.adresse}, {c.codePostal} {c.ville}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {c.mentionsProposees.map((m) => (
                  <span key={m} title={MENTION_LABELS[m]} style={{
                    fontSize: 11, fontWeight: 600, color: 'var(--color-blue-france)',
                    background: '#EEF4FF', borderRadius: 99, padding: '3px 10px',
                  }}>
                    {MENTION_LABELS[m] ?? m}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={c.urlReservation}
              target="_blank"
              rel="noopener"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6, flexShrink: 0,
                background: 'var(--color-blue-france)', color: '#fff',
                padding: '10px 18px', borderRadius: 'var(--radius-pill)',
                fontSize: 13, fontWeight: 600, textDecoration: 'none',
              }}
            >
              Réserver <ExternalLink size={13} />
            </a>
          </div>
          <p style={{ fontSize: 12, color: 'var(--color-text-muted)', margin: '12px 0 0' }}>
            <a href={c.sourceUrl} target="_blank" rel="noopener" style={{ color: 'var(--color-blue-france)' }}>
              Source officielle
            </a>{' '}
            — vérifié le {formatDateFr(c.verifieLe)}
          </p>
        </div>
      ))}
    </div>
  );
}

function formatDateFr(iso: string): string {
  const d = new Date(iso);
  return Number.isNaN(d.getTime())
    ? iso
    : d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
}

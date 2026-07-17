/**
 * Bloc « délais observés » — données first-party UNIQUEMENT.
 *
 * GARDE-FOU NON CONTOURNABLE : le composant retourne null si
 *   - actif !== true, ou
 *   - nbDossiers < 30, ou
 *   - une des valeurs (min/max/médiane/période/date maj) est absente.
 *
 * Le disclaimer est écrit en dur DANS le composant : il est impossible
 * d'afficher un délai sans lui.
 */

import type { Departement } from '@/data/departements/types';

const SEUIL_DOSSIERS = 30;

export function DelaisObservesBlock({ dep }: { dep: Departement }) {
  const d = dep.delaisObserves;

  if (
    !d.actif ||
    d.nbDossiers < SEUIL_DOSSIERS ||
    d.moisMin == null ||
    d.moisMax == null ||
    d.moisMediane == null ||
    !d.periodeObservation ||
    !d.misAJourLe
  ) {
    return null;
  }

  return (
    <div style={{
      background: '#F0F7FF',
      border: '1px solid #BFDBFE',
      borderRadius: 'var(--radius-lg)',
      padding: '18px 22px',
      marginTop: 16,
    }}>
      <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--color-text-secondary)', margin: 0 }}>
        D&apos;après <strong>{d.nbDossiers} dossiers suivis</strong> par les utilisateurs de
        maformationcivique.fr {dep.nomAvecPreposition} ({d.periodeObservation}), le délai observé
        s&apos;échelonne de <strong>{d.moisMin} à {d.moisMax} mois</strong> (médiane :{' '}
        {d.moisMediane} mois). <strong>Données déclaratives issues de notre base, il ne
        s&apos;agit pas d&apos;un délai officiel.</strong> Votre préfecture peut varier.
        Mis à jour le {formatDateFr(d.misAJourLe)}.
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

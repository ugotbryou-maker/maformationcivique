/**
 * FAQ locale — 3-4 questions générées à partir des DONNÉES du département
 * (jamais de texte générique interchangeable), dédupliquées par question.
 *
 * ⛔ Pas de balisage FAQPage (rich results FAQ retirés par Google le 07/05/2026).
 * HTML visible uniquement.
 */

import type { Departement } from '@/data/departements/types';
import { centreValide, centreProcheValide, ofiiValide } from '@/data/departements';
import { ARTICLE_PILIER_URL, EXAMEN_CIVIQUE } from '@/lib/reglementation';

interface QA {
  q: string;
  a: React.ReactNode;
}

export function buildFaq(dep: Departement): QA[] {
  const centres = dep.centresExamen.filter(centreValide);
  const proches = dep.centresProches.filter(centreProcheValide);
  const qa: QA[] = [];

  const ofiiOk = ofiiValide(dep.ofii);

  // Q1 — spécifique : où passer / trouver un centre dans le département
  qa.push({
    q: `Y a-t-il un centre d'examen civique ${dep.nomAvecPreposition} ?`,
    a: centres.length > 0 ? (
      <>
        Oui — {centres.length === 1 ? 'un centre agréé' : `${centres.length} centres agréés`}{' '}
        : {centres.map((c) => `${c.nom} à ${c.ville}`).join(', ')}. Les adresses et liens de
        réservation officiels sont listés en haut de cette page.
      </>
    ) : proches.length > 0 ? (
      <>
        Non, il n&apos;y a actuellement aucun centre agréé {dep.nomAvecPreposition}. Le plus
        proche se trouve à {proches[0]?.ville}
        {proches[0]?.distanceKm != null && <> (~{proches[0].distanceKm} km de {dep.prefectureVille})</>},
        dans le département voisin ({proches[0]?.departement}).
      </>
    ) : (
      <>
        L&apos;examen se passe dans un centre agréé par l&apos;État. La liste officielle et à jour
        des opérateurs et de leurs centres {dep.nomAvecPreposition} est tenue par le ministère de
        l&apos;Intérieur — c&apos;est la seule source fiable pour trouver et réserver une session
        (liens officiels en haut de page).
      </>
    ),
  });

  // Q2 — spécifique : parcours / interlocuteur près de la ville-préfecture
  qa.push({
    q: `Où passer l'examen civique près de ${dep.prefectureVille} ?`,
    a: centres.length > 0 ? (
      <>
        Le centre le plus pratique depuis {dep.prefectureVille} est {centres[0].nom},{' '}
        {centres[0].adresse}, {centres[0].codePostal} {centres[0].ville}. La réservation se fait
        en ligne sur le site de l&apos;opérateur ({centres[0].operateur}).
      </>
    ) : proches.length > 0 ? (
      <>
        Les candidats de {dep.prefectureVille} et des environs ({dep.villesPrincipales.slice(0, 2).join(', ')})
        se rendent {proches.length > 1 ? 'dans l\'un des centres voisins listés ci-dessus' : `au centre de ${proches[0]?.ville}`}.
        Vérifiez les dates disponibles avant de réserver.
      </>
    ) : (
      <>
        Passez par la démarche officielle (service-public.fr, liens en haut de page) pour trouver
        un centre agréé proche de {dep.prefectureVille}. Pour votre dossier d&apos;intégration ou
        de naturalisation, votre interlocuteur public {dep.nomAvecPreposition} est la direction
        territoriale de l&apos;OFII{ofiiOk && dep.ofii ? <> ({dep.ofii.adresse})</> : null}.
      </>
    ),
  });

  // Q3 — inscription (utilise les opérateurs réels de la page)
  const operateurs = [...new Set(centres.map((c) => c.operateur))];
  qa.push({
    q: `Comment s'inscrire à l'examen civique ${dep.nomAvecPreposition} ?`,
    a: (
      <>
        L&apos;inscription se fait uniquement en ligne, sur le site de l&apos;opérateur agréé
        {operateurs.length > 0 ? <> ({operateurs.join(' ou ')})</> : ' par l\'État'} — les
        liens officiels sont en haut de cette page. Le tarif est fixé par chaque centre :
        vérifiez-le au moment de la réservation. Pour le format de l&apos;épreuve et les niveaux
        exigés selon votre démarche, consultez{' '}
        <a href={ARTICLE_PILIER_URL} style={{ color: 'var(--color-blue-france)' }}>
          notre guide complet de l&apos;examen civique
        </a>.
      </>
    ),
  });

  // Q4 — pièces préfecture (seulement si la donnée existe)
  if (dep.piecesPrefecture.specificites.length > 0 && dep.piecesPrefecture.sourceUrl) {
    qa.push({
      q: `Quelles sont les particularités de la ${dep.prefecture.nom} ?`,
      a: (
        <>
          La préfecture publie plusieurs consignes spécifiques (détaillées plus haut sur cette
          page, avec la source officielle). Le dépôt du dossier passe par l&apos;ANEF ; les
          délais varient selon la préfecture — vérifiez auprès de la vôtre.
        </>
      ),
    });
  }

  // Déduplication stricte par question (garde-fou template bâclé)
  const seen = new Set<string>();
  return qa.filter(({ q }) => {
    if (seen.has(q)) return false;
    seen.add(q);
    return true;
  });
}

export function FaqLocale({ dep }: { dep: Departement }) {
  const items = buildFaq(dep);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {items.map(({ q, a }) => (
        <div key={q} style={{
          background: 'var(--color-surface)', border: 'var(--border-default)',
          borderRadius: 'var(--radius-lg)', padding: '18px 22px',
        }}>
          <p style={{ fontSize: 15, fontWeight: 700, color: 'var(--color-text-primary)', margin: '0 0 8px' }}>
            {q}
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--color-text-secondary)', margin: 0 }}>
            {a}
          </p>
        </div>
      ))}
    </div>
  );
}

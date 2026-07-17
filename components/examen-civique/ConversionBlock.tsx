/**
 * Bloc de conversion — l'argument produit est CALCULÉ à partir des données
 * du département, jamais filé (§4.4 bis de la spec).
 *
 * Le pont logique : l'examen est local, la préparation ne l'est pas.
 * Plus le centre est loin, plus il est coûteux d'échouer et d'y retourner.
 *
 * Trois variantes, sélectionnées selon centresExamen.length (0 / 1 / 2+),
 * chacune citant au moins une donnée réelle de la page (ville, distance,
 * nombre de centres). Le seuil de réussite vient de lib/reglementation.ts.
 *
 * ⛔ Interdit ici : « formez-vous à distance à [Ville] », monuments locaux,
 * témoignages, tarifs. C'est un pont vers le CTA (~80-120 mots), pas une
 * page de vente.
 */

import type { Departement } from '@/data/departements/types';
import { centreValide, centreProcheValide, ofiiValide } from '@/data/departements';
import { EXAMEN_CIVIQUE, SITE_URL } from '@/lib/reglementation';

export function ConversionBlock({ dep }: { dep: Departement }) {
  const centres = dep.centresExamen.filter(centreValide);
  const proches = dep.centresProches.filter(centreProcheValide);

  let argument: React.ReactNode = null;

  if (centres.length === 0 && proches.length === 0 && ofiiValide(dep.ofii)) {
    // Cas « ancrage étatique » : pas de centre partenaire. On s'appuie sur le
    // caractère éliminatoire de l'examen + l'interlocuteur OFII local nommé
    // plus haut, sans promettre de lieu d'examen.
    argument = (
      <>
        {dep.nomAvecPreposition.charAt(0).toUpperCase() + dep.nomAvecPreposition.slice(1)}, votre
        interlocuteur public pour la naturalisation est l&apos;OFII (coordonnées ci-dessus) ;
        l&apos;examen civique, lui, est organisé par des opérateurs agréés par l&apos;État. Une
        constante quel que soit le centre : l&apos;épreuve est <strong>éliminatoire</strong> — il
        faut au moins {EXAMEN_CIVIQUE.seuilReussite} bonnes réponses sur {EXAMEN_CIVIQUE.nbQuestions}.
        Autant vérifier où vous en êtes <strong>avant</strong> de vous engager dans la démarche :
        testez votre niveau avec un examen blanc gratuit, au format officiel.
      </>
    );
  } else if (centres.length === 0 && proches.length > 0) {
    const plusProche = proches[0];
    argument = (
      <>
        Il n&apos;y a pas de centre d&apos;examen {dep.nomAvecPreposition} : le plus proche est à{' '}
        <strong>{plusProche.ville}</strong>
        {plusProche.distanceKm != null && <> , à environ {plusProche.distanceKm} km de {dep.prefectureVille}</>}.
        Ce trajet, vous ne voulez le faire qu&apos;une seule fois. Échouer, c&apos;est reprendre
        une date, refaire la route et retarder votre dossier. La préparation, elle, ne demande
        aucun déplacement : entraînez-vous depuis chez vous avec des examens blancs au format
        officiel, et faites le déplacement à {plusProche.ville} prêt à valider du premier coup.
      </>
    );
  } else if (centres.length === 1) {
    const centre = centres[0];
    argument = (
      <>
        {dep.nom} compte un seul centre agréé, à <strong>{centre.ville}</strong>. Selon votre
        commune, le déplacement peut être long — et en cas d&apos;échec, il faut reprendre une
        date et refaire le trajet. Mettez toutes les chances de votre côté : entraînez-vous en
        ligne avant de réserver, avec des examens blancs au format officiel et un objectif
        clair — {EXAMEN_CIVIQUE.seuilReussite} bonnes réponses sur {EXAMEN_CIVIQUE.nbQuestions}.
        Le jour J, vous ne vous déplacez qu&apos;une fois : pour réussir.
      </>
    );
  } else if (centres.length >= 2) {
    const villes = [...new Set(centres.map((c) => c.ville))].join(', ');
    argument = (
      <>
        Avec <strong>{centres.length} centres agréés</strong> {dep.nomAvecPreposition} ({villes}),
        trouver une date n&apos;est pas le problème. Le vrai enjeu est ailleurs : sortir de la
        salle avec au moins {EXAMEN_CIVIQUE.seuilReussite} bonnes réponses sur{' '}
        {EXAMEN_CIVIQUE.nbQuestions}. Testez votre niveau dès maintenant avec un examen blanc
        gratuit, identifiez vos points faibles, puis réservez votre session en confiance.
      </>
    );
  }

  if (!argument) return null; // aucune donnée réelle → pas de bloc (jamais de texte filé)

  return (
    <div>
      <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--color-text-secondary)', margin: '0 0 20px' }}>
        {argument}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
        <a
          href={`${SITE_URL}/examen`}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'var(--gradient-primary)', color: '#fff',
            padding: '13px 26px', borderRadius: 'var(--radius-pill)',
            fontWeight: 700, fontSize: 15, textDecoration: 'none',
          }}
        >
          Passer un examen blanc gratuit →
        </a>
        <a
          href={`${SITE_URL}/modulesciviques`}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'transparent', border: '1.5px solid var(--color-border)',
            color: 'var(--color-text-primary)',
            padding: '13px 26px', borderRadius: 'var(--radius-pill)',
            fontWeight: 600, fontSize: 15, textDecoration: 'none',
          }}
        >
          Découvrir les modules civiques
        </a>
      </div>
    </div>
  );
}

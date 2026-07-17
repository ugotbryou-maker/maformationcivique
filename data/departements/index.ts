/**
 * Registre des départements + garde-fous de publication.
 *
 * Une page ne peut être servie QUE si :
 *   publie === true
 *   ET ( >= 1 centre d'examen COMPLET  OU  >= 2 centres proches COMPLETS )
 *
 * « Complet » = tous les champs critiques remplis, dont sourceUrl + verifieLe.
 * Un département marqué publie: true mais invalide est ignoré (avec un
 * console.warn au build) : impossible de publier une coquille par accident.
 */

import type { CentreExamen, CentreProche, Departement, OfiiDirection } from './types';
import { paris } from './paris';
import { seineEtMarne } from './seine-et-marne';
import { yvelines } from './yvelines';
import { essonne } from './essonne';
import { hautsDeSeine } from './hauts-de-seine';
import { seineSaintDenis } from './seine-saint-denis';
import { valDeMarne } from './val-de-marne';
import { valDOise } from './val-d-oise';
import { rhone } from './rhone';
import { bouchesDuRhone } from './bouches-du-rhone';
import { nord } from './nord';
import { gironde } from './gironde';
import { hauteGaronne } from './haute-garonne';

// ── Registre ────────────────────────────────────────────────────────────────
// Ajouter chaque nouveau département ici (import + tableau).
// Île-de-France (8) + autres métropoles. Centres/OFII à sourcer avant publie:true.
const ALL: Departement[] = [
  // Île-de-France
  paris,
  seineEtMarne,
  yvelines,
  essonne,
  hautsDeSeine,
  seineSaintDenis,
  valDeMarne,
  valDOise,
  // Autres métropoles (vague 1)
  rhone,
  bouchesDuRhone,
  nord,
  gironde,
  hauteGaronne,
];

// ── Validation ──────────────────────────────────────────────────────────────

export function centreValide(c: CentreExamen): boolean {
  return Boolean(
    c.nom && c.operateur && c.adresse && c.ville && c.codePostal &&
    c.urlReservation && c.sourceUrl && c.verifieLe &&
    c.mentionsProposees.length > 0,
  );
}

export function centreProcheValide(c: CentreProche): boolean {
  return Boolean(c.nom && c.ville && c.departement && c.sourceUrl && c.verifieLe);
}

export function ofiiValide(o: OfiiDirection | undefined): o is OfiiDirection {
  return Boolean(o && o.nom && o.adresse && o.urlOfficielle && o.sourceUrl && o.verifieLe);
}

export interface VerdictPublication {
  ok: boolean;
  raisons: string[];
}

export function canPublish(d: Departement): VerdictPublication {
  const raisons: string[] = [];

  if (!d.slug || !d.code || !d.nom || !d.nomAvecPreposition || !d.prefectureVille) {
    raisons.push('Champs administratifs incomplets (slug/code/nom/préposition/préfecture).');
  }

  const centresOk = d.centresExamen.filter(centreValide).length;
  const prochesOk = d.centresProches.filter(centreProcheValide).length;
  const ofiiOk = ofiiValide(d.ofii);

  // Base de publication valide : 1 centre partenaire OU 2 proches OU un ancrage
  // étatique OFII vérifié (cas « pas encore de partenaire »).
  if (centresOk === 0 && prochesOk < 2 && !ofiiOk) {
    raisons.push(
      `Données insuffisantes : ${centresOk} centre(s), ${prochesOk} proche(s), ` +
      `OFII ${ofiiOk ? 'OK' : 'absent'}. Minimum : 1 centre OU 2 proches OU 1 OFII vérifié.`,
    );
  }

  // Les entrées partiellement remplies sont interdites : soit complètes, soit absentes.
  if (d.centresExamen.some((c) => !centreValide(c))) {
    raisons.push('Au moins un centre d\'examen est incomplet (sourceUrl/verifieLe manquant ?).');
  }
  if (d.centresProches.some((c) => !centreProcheValide(c))) {
    raisons.push('Au moins un centre proche est incomplet.');
  }

  return { ok: raisons.length === 0, raisons };
}

// ── Accès ───────────────────────────────────────────────────────────────────

export const departementsPublies: Departement[] = ALL.filter((d) => {
  if (!d.publie) return false;
  const verdict = canPublish(d);
  if (!verdict.ok) {
    console.warn(
      `[departements] "${d.slug}" est marqué publie:true mais NE SERA PAS publié :\n` +
      verdict.raisons.map((r) => `  - ${r}`).join('\n'),
    );
    return false;
  }
  return true;
});

export function getDepartementPublie(slug: string): Departement | undefined {
  return departementsPublies.find((d) => d.slug === slug);
}

/** Départements limitrophes publiés (pour le maillage horizontal). */
export function getLimitrophesPublies(d: Departement): Departement[] {
  return d.limitrophes
    .map((slug) => departementsPublies.find((x) => x.slug === slug))
    .filter((x): x is Departement => Boolean(x))
    .slice(0, 3);
}

/** Dernière date de vérification affichable en pied de page. */
export function derniereVerification(d: Departement): string | null {
  const dates = [
    ...d.centresExamen.map((c) => c.verifieLe),
    ...d.centresProches.map((c) => c.verifieLe),
    d.prefecture.verifieLe,
    d.piecesPrefecture.verifieLe,
  ].filter(Boolean).sort();
  return dates.length > 0 ? dates[dates.length - 1] : null;
}

export type { Departement, CentreExamen, CentreProche } from './types';

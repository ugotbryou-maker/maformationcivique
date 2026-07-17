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

import type { CentreExamen, CentreProche, Departement } from './types';
import { seineSaintDenis } from './seine-saint-denis';

// ── Registre ────────────────────────────────────────────────────────────────
// Ajouter chaque nouveau département ici (import + tableau).
const ALL: Departement[] = [
  seineSaintDenis,
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

  if (centresOk === 0 && prochesOk < 2) {
    raisons.push(
      `Données centres insuffisantes : ${centresOk} centre(s) complet(s), ` +
      `${prochesOk} centre(s) proche(s) complet(s). Minimum : 1 centre OU 2 proches.`,
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

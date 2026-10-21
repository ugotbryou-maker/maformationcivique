import type { ExamenBlancLangue, NiveauLangue, QuestionExamen, SectionExamen } from './types';
import { QUESTIONS_HERITEES } from './depuis-modules';
import { examenBlancA2 } from './a2';
import { examenBlancB1 } from './b1';
import { examenBlancB2 } from './b2';

export * from './types';

/**
 * ⚠️ Fichier LOURD : il contient les énoncés ET les corrigés des trois
 * examens. Ne jamais l'importer depuis un composant « use client » — les
 * réponses partiraient dans le navigateur, lisibles avant même de composer.
 * Les épreuves sont servies par /api/examen-langue/[niveau], qui retire les
 * corrigés avant l'envoi.
 */
export const EXAMENS_LANGUE: Record<NiveauLangue, ExamenBlancLangue> = {
  A2: examenBlancA2,
  B1: examenBlancB1,
  B2: examenBlancB2,
};

export function examenLangue(niveau: NiveauLangue): ExamenBlancLangue | null {
  return EXAMENS_LANGUE[niveau] ?? null;
}

/**
 * Pool complet d'un niveau : les questions écrites pour l'épreuve, plus
 * celles récupérées des anciens modules d'examen blanc.
 */
export function poolLangue(niveau: NiveauLangue): QuestionExamen[] {
  const base = EXAMENS_LANGUE[niveau]?.questions ?? [];
  return [...base, ...(QUESTIONS_HERITEES[niveau] ?? [])];
}

/** Mélange de Fisher-Yates — un tri aléatoire naïf biaise la distribution. */
function melanger<T>(t: T[]): T[] {
  const a = [...t];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Quotas par section. Ils garantissent qu'une épreuve tirée au hasard reste
 * équilibrée : sans eux, un tirage pourrait ne proposer aucune question
 * d'orthographe, et l'épreuve ne mesurerait plus la même chose d'une fois
 * sur l'autre. Les sections de saisie libre (conjugaison, orthographe,
 * expression) n'existent que dans les questions écrites pour l'épreuve :
 * leur quota est donc plafonné par ce qui existe.
 */
const QUOTAS: Record<SectionExamen, number> = {
  comprehension: 12,
  grammaire: 12,
  conjugaison: 6,
  orthographe: 6,
  expression: 4,
};

/**
 * Compose une épreuve de 40 questions tirées du pool, à quotas constants.
 * Deux passages donnent deux épreuves différentes tout en gardant le même
 * poids relatif de chaque compétence.
 */
export function composerEpreuve(niveau: NiveauLangue): QuestionExamen[] {
  const pool = poolLangue(niveau);
  const retenues: QuestionExamen[] = [];

  for (const [section, quota] of Object.entries(QUOTAS) as [SectionExamen, number][]) {
    const dispo = pool.filter((q) => q.section === section);
    retenues.push(...melanger(dispo).slice(0, quota));
  }

  // Si une section manque de matière, on complète avec le reste du pool
  // plutôt que de livrer une épreuve plus courte que celle annoncée.
  if (retenues.length < 40) {
    const deja = new Set(retenues.map((q) => q.id));
    retenues.push(...melanger(pool.filter((q) => !deja.has(q.id))).slice(0, 40 - retenues.length));
  }

  // Les sections restent groupées, dans l'ordre de passage ; seul l'ordre
  // interne est aléatoire. Enchaîner orthographe et compréhension au hasard
  // rendrait l'épreuve désagréable à passer.
  const ordre: SectionExamen[] = ['comprehension', 'grammaire', 'conjugaison', 'orthographe', 'expression'];
  return retenues.sort((a, b) => ordre.indexOf(a.section) - ordre.indexOf(b.section));
}

/** Retrouve une question par son identifiant, pour la correction. */
export function questionParId(niveau: NiveauLangue, id: string): QuestionExamen | undefined {
  return poolLangue(niveau).find((q) => q.id === id);
}

/** Métadonnées seules — sans aucun énoncé : sûr côté client. */
export const RESUME_EXAMENS_LANGUE = (Object.keys(EXAMENS_LANGUE) as NiveauLangue[]).map((n) => {
  const e = EXAMENS_LANGUE[n];
  return {
    niveau: n,
    titre: e.titre,
    demarche: e.demarche,
    dureeMinutes: e.dureeMinutes,
    nbQuestions: e.questions.length,
    seuilReussite: e.seuilReussite,
    seuilQuestions: Math.ceil(e.questions.length * e.seuilReussite),
  };
});

export type { ExamenBlancLangue, NiveauLangue };

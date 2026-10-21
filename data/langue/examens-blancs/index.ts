import type { ExamenBlancLangue, NiveauLangue } from './types';
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

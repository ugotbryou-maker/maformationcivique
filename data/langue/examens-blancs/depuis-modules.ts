/**
 * Récupération des trois examens blancs historiques.
 *
 * Ils existaient sous forme de modules de cours (`examenModules`) : 160 QCM
 * répartis en sections, mais présentés sur une seule page interminable, sans
 * chronomètre, sans score et sans XP. Le contenu est bon — ce sont les
 * questions qui comptent — seule la présentation ne l'était pas.
 *
 * On les convertit donc au format des épreuves, pour qu'ils alimentent le
 * même pool que les questions écrites pour l'occasion. Rien n'est perdu, et
 * le pool devient assez large pour qu'un second passage ne redonne pas
 * exactement la même épreuve.
 */

import { examenModules } from '../index';
import type { LangLesson } from '../types';
import type { QuestionExamen, SectionExamen } from './types';

/**
 * La section se déduit du titre de la leçon d'origine : les intitulés sont
 * stables et explicites (« Grammaire et vocabulaire », « Compréhension
 * écrite »…). Défaut prudent : compréhension.
 */
function sectionDepuisTitre(titre: string): SectionExamen {
  const t = titre.toLowerCase();
  if (t.includes('grammaire')) return 'grammaire';
  if (t.includes('production') || t.includes('entretien') || t.includes('argumentation')) return 'expression';
  if (t.includes('compréhension') || t.includes('comprehension')) return 'comprehension';
  return 'comprehension';
}

/**
 * Le support partagé par les questions d'une section se trouve après la
 * ligne de séparation du markdown : avant, ce sont les consignes de durée,
 * qui n'ont plus de sens une fois l'épreuve chronométrée.
 */
function supportDepuisDialogue(dialogue: string): string | undefined {
  const i = dialogue.indexOf('\n---\n');
  if (i === -1) return undefined;
  const corps = dialogue
    .slice(i + 5)
    .replace(/\*\*/g, '')
    .trim();
  return corps.length > 0 ? corps : undefined;
}

function convertirLecon(lecon: LangLesson): QuestionExamen[] {
  const section = sectionDepuisTitre(lecon.title);
  // Le support est rattaché à chaque question de la section : dans une
  // épreuve question par question, le texte de référence doit rester sous
  // les yeux, pas rester en haut d'une page qu'on a quittée.
  const support = supportDepuisDialogue(lecon.dialogue);

  return (lecon.exercises ?? [])
    .filter((e) => Array.isArray(e.options) && e.options.length >= 2 && typeof e.correctIndex === 'number')
    .map((e) => ({
      id: e.id,
      section,
      format: 'qcm' as const,
      support,
      enonce: e.question,
      options: e.options,
      bonneReponse: e.correctIndex,
      explication: e.explanation,
    }));
}

/** Questions historiques, indexées par niveau. */
export const QUESTIONS_HERITEES: Record<'A2' | 'B1' | 'B2', QuestionExamen[]> = {
  A2: [], B1: [], B2: [],
};

for (const m of examenModules) {
  const niveau = m.level === 'A2' ? 'A2' : m.level === 'B1' ? 'B1' : 'B2';
  for (const lecon of m.lessons) {
    QUESTIONS_HERITEES[niveau].push(...convertirLecon(lecon));
  }
}

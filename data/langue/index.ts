import type { LangLevel, LangModule, LangLesson } from './types';

// A2
import { a2VieQuotidienne } from './a2/vie-quotidienne';
import { a2DemarchesAdmin } from './a2/demarches-admin';
import { a2Logement } from './a2/logement';
import { a2Travail } from './a2/travail';
import { a2Sante } from './a2/sante';
import { a2Transports } from './a2/transports';
import { a2Grammaire } from './a2/grammaire';
import { a2Conjugaison } from './a2/conjugaison';

// B1
import { b1Actualite } from './b1/actualite';
import { b1ExprimerOpinion } from './b1/exprimer-opinion';
import { b1VieSociete } from './b1/vie-societe';
import { b1Institutions } from './b1/institutions';
import { b1Rediger } from './b1/rediger';
import { b1Entretien } from './b1/entretien';
import { b1TravailDroits } from './b1/travail-droits';
import { b1Grammaire } from './b1/grammaire';
import { b1Conjugaison } from './b1/conjugaison';

// B2
import { b2TextesArgumentatifs } from './b2/textes-argumentatifs';
import { b2DebatFormel } from './b2/debat-formel';
import { b2ExpressionEcrite } from './b2/expression-ecrite';
import { b2NuancesCulturelles } from './b2/nuances-culturelles';
import { b2EntretienNaturalisation } from './b2/entretien-naturalisation';
import { b2LettresFormelles } from './b2/lettres-formelles';
import { b2Grammaire } from './b2/grammaire';
import { b2Conjugaison } from './b2/conjugaison';

// Transversal
import { transversalPhonetique } from './transversal/phonetique';
import { transversalOrthographe } from './transversal/orthographe';
import { transversalErreursFrequentes } from './transversal/erreurs-frequentes';

// Examens blancs
import { examenBlancA2 } from './examens/examen-a2';
import { examenBlancB1 } from './examens/examen-b1';
import { examenBlancB2 } from './examens/examen-b2';

export const a2Modules: LangModule[] = [
  a2VieQuotidienne,
  a2DemarchesAdmin,
  a2Logement,
  a2Travail,
  a2Sante,
  a2Transports,
  a2Grammaire,
  a2Conjugaison,
];

export const b1Modules: LangModule[] = [
  b1Actualite,
  b1ExprimerOpinion,
  b1VieSociete,
  b1Institutions,
  b1Rediger,
  b1Entretien,
  b1TravailDroits,
  b1Grammaire,
  b1Conjugaison,
];

export const b2Modules: LangModule[] = [
  b2TextesArgumentatifs,
  b2DebatFormel,
  b2ExpressionEcrite,
  b2NuancesCulturelles,
  b2EntretienNaturalisation,
  b2LettresFormelles,
  b2Grammaire,
  b2Conjugaison,
];

export const transversalModules: LangModule[] = [
  transversalPhonetique,
  transversalOrthographe,
  transversalErreursFrequentes,
];

export const examenModules: LangModule[] = [examenBlancA2, examenBlancB1, examenBlancB2];

export const allModules: LangModule[] = [
  ...a2Modules,
  ...b1Modules,
  ...b2Modules,
  ...transversalModules,
  ...examenModules,
];

export function getModulesByLevel(level: LangLevel): LangModule[] {
  switch (level) {
    case 'A2':
      return a2Modules;
    case 'B1':
      return b1Modules;
    case 'B2':
      return b2Modules;
    case 'transversal':
      return transversalModules;
    default:
      return [];
  }
}

export function getModuleBySlug(slug: string): LangModule | undefined {
  return allModules.find((m) => m.slug === slug);
}

export function getLessonBySlug(moduleSlug: string, lessonSlug: string): LangLesson | undefined {
  const mod = getModuleBySlug(moduleSlug);
  return mod?.lessons.find((l) => l.slug === lessonSlug);
}

export function getExamenByLevel(level: LangLevel): LangModule | undefined {
  return examenModules.find((m) => m.level === level);
}

export function getTotalLessonCount(): number {
  return allModules.reduce((sum, m) => sum + m.lessons.length, 0);
}

export function getTotalExerciseCount(): number {
  return allModules.reduce(
    (sum, m) => sum + m.lessons.reduce((s, l) => s + l.exercises.length, 0),
    0,
  );
}

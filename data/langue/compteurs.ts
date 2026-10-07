/**
 * Compteurs des modules de langue, calculés depuis les données réelles.
 *
 * POURQUOI CE FICHIER EXISTE : `data/langue/index.ts` pèse 1,87 Mo une fois
 * sérialisé (127 leçons, 2 540 exercices avec leurs corrigés). Tout composant
 * « use client » qui l'importe — même pour n'en lire qu'un `.length` — fait
 * partir ces 1,87 Mo dans le navigateur, et avec eux toutes les bonnes
 * réponses, lisibles sans compte.
 *
 * Les pages qui n'affichent que des nombres appellent donc cette fonction
 * DEPUIS UN COMPOSANT SERVEUR et passent le résultat en props. Les chiffres
 * restent calculés à partir des vraies données : ils ne peuvent pas se
 * désynchroniser quand on ajoute une leçon.
 *
 * ⚠️ Ne jamais importer ce fichier depuis un composant « use client » : il
 * tire `index.ts`, et on reperd tout le bénéfice.
 */

import { a2Modules, b1Modules, b2Modules, transversalModules } from './index';

export interface CompteurNiveau {
  modules: number;
  lecons: number;
}

export type CompteursLangue = Record<'a2' | 'b1' | 'b2' | 'transversal', CompteurNiveau> & {
  totalModules: number;
  totalLecons: number;
};

function compter(mods: { lessons: unknown[] }[]): CompteurNiveau {
  return { modules: mods.length, lecons: mods.reduce((s, m) => s + m.lessons.length, 0) };
}

export function compteursLangue(): CompteursLangue {
  const a2 = compter(a2Modules);
  const b1 = compter(b1Modules);
  const b2 = compter(b2Modules);
  const transversal = compter(transversalModules);
  return {
    a2, b1, b2, transversal,
    totalModules: a2.modules + b1.modules + b2.modules + transversal.modules,
    totalLecons:  a2.lecons  + b1.lecons  + b2.lecons  + transversal.lecons,
  };
}

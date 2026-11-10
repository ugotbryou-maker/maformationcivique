/**
 * Compteurs des modules de langue, calculés depuis les données réelles.
 *
 * POURQUOI CE FICHIER EXISTE : `data/langue/index.ts` pèse 1,87 Mo une fois
 * sérialisé (127 leçons, 2 540 exercices avec leurs corrigés). Tout composant
 * « use client » qui l'importe — même pour n'en lire qu'un `.length` — fait
 * partir ces 1,87 Mo dans le navigateur, et avec eux toutes les bonnes
 * réponses, lisibles sans compte.
 *
 * Les chiffres viennent du catalogue généré, qui ne contient que des slugs et
 * des titres : ils restent dérivés des vraies données — le catalogue est
 * réécrit au `prebuild` — sans pouvoir se désynchroniser.
 */

import { a2Catalogue, b1Catalogue, b2Catalogue, transversalCatalogue } from './catalogue';

export interface CompteurNiveau {
  modules: number;
  lecons: number;
}

export type CompteursLangue = Record<'a2' | 'b1' | 'b2' | 'transversal', CompteurNiveau> & {
  totalModules: number;
  totalLecons: number;
};

function compter(mods: { lecons: string[] }[]): CompteurNiveau {
  return { modules: mods.length, lecons: mods.reduce((s, m) => s + m.lecons.length, 0) };
}

export function compteursLangue(): CompteursLangue {
  const a2 = compter(a2Catalogue);
  const b1 = compter(b1Catalogue);
  const b2 = compter(b2Catalogue);
  const transversal = compter(transversalCatalogue);
  return {
    a2, b1, b2, transversal,
    totalModules: a2.modules + b1.modules + b2.modules + transversal.modules,
    totalLecons:  a2.lecons  + b1.lecons  + b2.lecons  + transversal.lecons,
  };
}

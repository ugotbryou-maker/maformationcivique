/**
 * Progression par volet — civique, linguistique, et global sur le périmètre
 * réellement souscrit.
 *
 * POURQUOI PAR VOLET : un élève venu pour le français seul affichait 0 % tant
 * qu'il n'avait pas touché aux leçons civiques, alors qu'il pouvait avoir
 * terminé la moitié de son parcours. Le pourcentage ne disait pas où il en
 * était, il disait ce qu'il n'avait pas acheté. Un cabinet qui lit ce chiffre
 * en conclut que son client décroche, à tort.
 *
 * ⚠️ Module serveur : il importe les données de langue (1,87 Mo). Ne jamais
 * l'importer depuis un composant « use client ».
 */

import { modules } from '@/data/modules';
import { a2Modules, b1Modules, b2Modules, transversalModules } from '@/data/langue';

export type Volet = 'civique' | 'langue' | 'complet';

export interface DetailVolet {
  faites: number;
  total: number;
  pct: number;
}

export interface ProgressionVolets {
  /** Périmètre souscrit — détermine ce que « global » mesure. */
  volet: Volet;
  civique: DetailVolet;
  langue: DetailVolet;
  /** Agrégat sur le seul périmètre souscrit. */
  global: DetailVolet;
}

export interface LigneProgression {
  module_slug: string | null;
  lesson_slug: string | null;
  completed: boolean | null;
}

const SLUGS_CIVIQUES = new Set(modules.map((m) => m.slug));
const SLUGS_LANGUE = new Set(
  [...a2Modules, ...b1Modules, ...b2Modules, ...transversalModules].map((m) => m.slug),
);

export const TOTAL_LECONS_CIVIQUES = modules.reduce((a, m) => a + m.lessons.length, 0);
export const TOTAL_LECONS_LANGUE =
  [...a2Modules, ...b1Modules, ...b2Modules, ...transversalModules]
    .reduce((a, m) => a + m.lessons.length, 0);

/**
 * Volet souscrit. Pour un membre de cabinet, c'est le contrat du cabinet qui
 * fait foi : son propre `plan` reflète l'accès accordé, pas ce qu'il a choisi.
 */
export function voletDuPlan(plan: string | null | undefined, planCabinet?: string | null): Volet {
  const p = (planCabinet ?? plan ?? 'free').toLowerCase();
  if (p === 'langue') return 'langue';
  if (p === 'bundle') return 'complet';
  return 'civique';
}

function pourcent(faites: number, total: number): number {
  return total > 0 ? Math.round((faites / total) * 100) : 0;
}

export function calculerProgression(
  lignes: LigneProgression[],
  volet: Volet,
): ProgressionVolets {
  // On déduplique : une leçon reprise plusieurs fois ne compte qu'une fois,
  // et la table peut contenir plusieurs lignes pour un même couple.
  const faitesCiv = new Set<string>();
  const faitesLng = new Set<string>();

  for (const l of lignes) {
    if (!l.completed || !l.module_slug || !l.lesson_slug) continue;
    const cle = `${l.module_slug}:${l.lesson_slug}`;
    if (SLUGS_CIVIQUES.has(l.module_slug)) faitesCiv.add(cle);
    else if (SLUGS_LANGUE.has(l.module_slug)) faitesLng.add(cle);
    // Un module_slug inconnu (contenu retiré, ligne corrompue) est ignoré
    // plutôt que compté au hasard dans l'un des deux volets.
  }

  const civique: DetailVolet = {
    faites: faitesCiv.size,
    total: TOTAL_LECONS_CIVIQUES,
    pct: pourcent(faitesCiv.size, TOTAL_LECONS_CIVIQUES),
  };
  const langue: DetailVolet = {
    faites: faitesLng.size,
    total: TOTAL_LECONS_LANGUE,
    pct: pourcent(faitesLng.size, TOTAL_LECONS_LANGUE),
  };

  // Pour un parcours complet, le pourcentage global est la MOYENNE des deux
  // volets, pas le rapport brut des leçons terminées au total.
  //
  // Le volet linguistique compte 127 leçons contre 22 au civique : pondérer
  // par le nombre de leçons laisserait le français écraser le civique. Un
  // élève ayant terminé l'intégralité du programme civique afficherait 15 %,
  // ce qui est faux de son point de vue comme de celui du cabinet. Chaque
  // volet est un objectif en soi ; ils pèsent donc autant l'un que l'autre.
  const global: DetailVolet =
    volet === 'civique' ? civique
    : volet === 'langue' ? langue
    : {
        faites: civique.faites + langue.faites,
        total: civique.total + langue.total,
        pct: Math.round((civique.pct + langue.pct) / 2),
      };

  return { volet, civique, langue, global };
}

export const LIBELLE_VOLET: Record<Volet, string> = {
  civique: 'Formation civique',
  langue: 'Français langue étrangère',
  complet: 'Civique et linguistique',
};

/** Volets effectivement suivis, quel que soit le contrat. */
export function voletsEntames(p: ProgressionVolets): Volet[] {
  const v: Volet[] = [];
  if (p.civique.faites > 0) v.push('civique');
  if (p.langue.faites > 0) v.push('langue');
  return v;
}

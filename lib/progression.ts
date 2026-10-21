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
  /** Niveau linguistique retenu pour le dénominateur. */
  niveau: NiveauCible;
  civique: DetailVolet;
  langue: DetailVolet;
  /** Agrégat sur le seul périmètre souscrit. */
  global: DetailVolet;
  /** Totaux bruts, utiles quand on préfère annoncer un nombre qu'un taux. */
  leconsTerminees: number;
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

/**
 * Le parcours linguistique est organisé par niveau : un candidat ne suit que
 * celui qu'on lui demande, jamais les trois. Le rapporter aux 127 leçons de
 * A2 + B1 + B2 revient à le mesurer sur des contenus qu'il n'ouvrira jamais —
 * quatre leçons faites donnaient alors 3 %, ce qui ne décrit ni son travail
 * ni son avancement réel.
 *
 * Le transversal (phonétique, orthographe, erreurs fréquentes) concerne tous
 * les niveaux : il compte toujours.
 */
const MODULES_PAR_NIVEAU = {
  A2: [...a2Modules, ...transversalModules],
  B1: [...b1Modules, ...transversalModules],
  B2: [...b2Modules, ...transversalModules],
} as const;

export type NiveauCible = 'A2' | 'B1' | 'B2';

/** Niveau exigé par la démarche déclarée. Référence : lib/reglementation.ts. */
export function niveauCible(
  demarche: string | null | undefined,
  lignes: LigneProgression[] = [],
): NiveauCible {
  const d = (demarche ?? '').toLowerCase();
  if (d.includes('natural')) return 'B2';
  if (d.includes('resident') || d.includes('résident') || d === 'cr') return 'B1';
  if (d.includes('csp') || d.includes('pluriannuelle')) return 'A2';

  // Démarche non renseignée : on retient le niveau le plus avancé que la
  // personne a effectivement ouvert. C'est ce qu'elle a choisi de travailler.
  const vus = new Set(
    lignes.map((l) => (l.module_slug ?? '').slice(0, 2).toUpperCase()),
  );
  if (vus.has('B2')) return 'B2';
  if (vus.has('B1')) return 'B1';
  return 'A2';
}

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
  demarche?: string | null,
): ProgressionVolets {
  const niveau = niveauCible(demarche, lignes);
  const slugsNiveau = new Set(MODULES_PAR_NIVEAU[niveau].map((m) => m.slug));
  const totalLangue = MODULES_PAR_NIVEAU[niveau].reduce((a, m) => a + m.lessons.length, 0);
  // On déduplique : une leçon reprise plusieurs fois ne compte qu'une fois,
  // et la table peut contenir plusieurs lignes pour un même couple.
  const faitesCiv = new Set<string>();
  const faitesLng = new Set<string>();
  const faitesNiveau = new Set<string>();

  for (const l of lignes) {
    if (!l.completed || !l.module_slug || !l.lesson_slug) continue;
    const cle = `${l.module_slug}:${l.lesson_slug}`;
    if (SLUGS_CIVIQUES.has(l.module_slug)) faitesCiv.add(cle);
    else if (SLUGS_LANGUE.has(l.module_slug)) {
      faitesLng.add(cle);
      // Une leçon d'un autre niveau reste du travail accompli : on la compte
      // au numérateur sans gonfler le dénominateur.
      if (slugsNiveau.has(l.module_slug)) faitesNiveau.add(cle);
    }
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
    total: totalLangue,
    // Plafonné à 100 : quelqu'un ayant aussi travaillé un autre niveau peut
    // dépasser le total de son niveau cible.
    pct: Math.min(100, pourcent(faitesLng.size, totalLangue)),
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

  return {
    volet, niveau, civique, langue, global,
    leconsTerminees: faitesCiv.size + faitesLng.size,
  };
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

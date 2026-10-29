/**
 * Droits d'accès au contenu, dérivés du plan.
 *
 * Ces règles étaient réécrites à la main dans chaque page, et trois d'entre
 * elles comparaient le plan à 'premium' en dur. L'offre 'bundle' — civique
 * ET langue, celle que reçoivent tous les clients des cabinets partenaires —
 * échouait donc au test et se retrouvait renvoyée vers la page d'inscription
 * sur chaque leçon civique payante. Un seul endroit désormais.
 */

import { isAdminEmail } from '@/lib/admin';

/** Plans ouvrant les 5 modules civiques. */
const PLANS_CIVIQUE = new Set(['premium', 'bundle']);

/** Plans ouvrant les modules A2 / B1 / B2 et transversaux. */
const PLANS_LANGUE = new Set(['langue', 'bundle']);

function normaliser(plan: string | null | undefined): string {
  return (plan ?? 'free').toLowerCase().trim();
}

/** Accès au contenu civique payant. */
export function accesCivique(plan: string | null | undefined, email?: string | null): boolean {
  return isAdminEmail(email) || PLANS_CIVIQUE.has(normaliser(plan));
}

/** Accès au contenu linguistique payant. */
export function accesLangue(plan: string | null | undefined, email?: string | null): boolean {
  return isAdminEmail(email) || PLANS_LANGUE.has(normaliser(plan));
}

/** Au moins un volet payant — pour ce qui n'est propre à aucun des deux. */
export function accesPayant(plan: string | null | undefined, email?: string | null): boolean {
  return accesCivique(plan, email) || accesLangue(plan, email);
}

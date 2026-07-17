/**
 * lib/reglementation.ts — SOURCE UNIQUE des constantes réglementaires.
 *
 * ⚠️ RÈGLE ABSOLUE : ne JAMAIS dupliquer ces valeurs dans un template,
 * un composant ou un fichier de données département. Toute page qui a
 * besoin d'un chiffre réglementaire l'importe d'ici. À chaque réforme,
 * on modifie CE fichier et uniquement celui-ci.
 *
 * Sources officielles :
 * - service-public.fr, fiche F39426 (examen civique) — vérifié le 15/04/2026
 * - Arrêté du 10 octobre 2025 (format de l'épreuve)
 * - formation-civique.interieur.gouv.fr (liste officielle des questions)
 * - Loi du 26 janvier 2024 (niveaux de langue, en vigueur au 01/01/2026)
 */

export const EXAMEN_CIVIQUE = {
  nbQuestions: 40,
  dureeMinutes: 45,
  seuilReussite: 32,
  verifieLe: '2026-04-15',
  sourceUrl: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F39426',
  sourceQuestionsUrl: 'https://www.formation-civique.interieur.gouv.fr',
} as const;

/**
 * Niveaux de langue exigés par démarche depuis le 1ᵉʳ janvier 2026.
 * (Avant réforme : naturalisation B1, carte de résident A2.)
 */
export const NIVEAUX_LANGUE = {
  CSP: 'A2',
  carteResident: 'B1',
  naturalisation: 'B2',
  verifieLe: '2026-04-15',
  sourceUrl: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F39426',
} as const;

/**
 * Article pilier du blog : tout ce qui touche au format de l'épreuve, aux
 * niveaux exigés et à la réglementation est expliqué LÀ-BAS, une seule fois.
 * Les pages locales lient vers cet article au lieu de réexpliquer.
 */
export const ARTICLE_PILIER_URL =
  'https://www.maformationcivique.fr/ressources/examen-civique-2026-questions-reponses';

export const SITE_URL = 'https://www.maformationcivique.fr';

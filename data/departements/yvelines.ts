/**
 * Yvelines (78) — squelette Île-de-France.
 * Champs administratifs pré-remplis (à confirmer). OFII + préfecture à SOURCER.
 */

import type { Departement } from './types';

export const yvelines: Departement = {
  slug: 'yvelines',
  introUnique:
    'Les Yvelines combinent des pôles urbains denses à l\'est — Sartrouville, Saint-Germain-en-Laye, Poissy — et un ouest nettement plus rural, jusqu\'à Mantes-la-Jolie et la vallée de la Seine. Pour un candidat à l\'examen civique, cette géographie détermine surtout le temps de trajet : la desserte ferroviaire est excellente le long de la Seine et sur l\'axe Paris–Versailles, plus contrainte ailleurs. **Versailles**, ville-préfecture, concentre les services de l\'État du département. Les candidats yvelinois se déplacent le plus souvent vers Paris ou la proche couronne pour passer l\'épreuve, faute de centre agréé sur place.',
  contexteLocal:
    'Depuis Versailles, Saint-Germain-en-Laye ou Sartrouville, Paris est accessible en moins de quarante minutes par le RER A, le RER C ou les lignes Transilien L et N. Depuis Mantes-la-Jolie et l\'ouest du département, prévoyez davantage : la ligne J et le TER desservent l\'axe de la Seine, mais les fréquences se réduisent en dehors des heures de pointe. Les candidats yvelinois se tournent le plus souvent vers Paris ou les Hauts-de-Seine pour trouver une date disponible rapidement.',
  code: '78',
  nom: 'Yvelines',
  nomAvecPreposition: 'dans les Yvelines',
  prefectureVille: 'Versailles',
  region: 'Île-de-France',
  villesPrincipales: ['Versailles', 'Sartrouville', 'Mantes-la-Jolie', 'Saint-Germain-en-Laye', 'Poissy'],
  limitrophes: ['hauts-de-seine', 'val-d-oise', 'essonne'],

  heroImage: { src: '/images/departements/yvelines.jpg', alt: 'Château de Versailles, Yvelines' },

  centresExamen: [],
  centresProches: [],

  prefecture: {
    nom: 'Préfecture des Yvelines',
    adresse: '',
    urlOfficielle: 'https://www.yvelines.gouv.fr', // à confirmer
    verifieLe: '',
  },

  ofii: {
    nom: "Office français de l'immigration et de l'intégration (OFII) — Direction territoriale de Montrouge",
    adresse: '55 rue Étienne Dolet, 92240 Malakoff',
    departementsCouverts: ['78', '92'],
    urlOfficielle: 'https://www.ofii.fr',
    sourceUrl: 'https://lannuaire.service-public.gouv.fr/ile-de-france/hauts-de-seine/e512f4b2-8f2b-4a4a-8e77-76b90b1eee6e',
    verifieLe: '2026-07-17',
  },

  piecesPrefecture: { sourceUrl: '', verifieLe: '', specificites: [] },

  delaisObserves: {
    actif: false, nbDossiers: 0, moisMin: null, moisMax: null,
    moisMediane: null, periodeObservation: '', misAJourLe: '',
  },

  publie: true,
};

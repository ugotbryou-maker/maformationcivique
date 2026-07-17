/**
 * Bouches-du-Rhône (13) — squelette vague 1.
 * Champs administratifs pré-remplis (à confirmer). Centres + préfecture à SOURCER (README).
 */

import type { Departement } from './types';

export const bouchesDuRhone: Departement = {
  slug: 'bouches-du-rhone',
  code: '13',
  nom: 'Bouches-du-Rhône',
  nomAvecPreposition: 'dans les Bouches-du-Rhône',
  prefectureVille: 'Marseille',
  region: "Provence-Alpes-Côte d'Azur",
  villesPrincipales: ['Marseille', 'Aix-en-Provence', 'Arles'],
  limitrophes: ['vaucluse', 'var', 'gard', 'alpes-de-haute-provence'],

  centresExamen: [], // TODO — sourcer
  centresProches: [],

  prefecture: {
    nom: 'Préfecture des Bouches-du-Rhône',
    adresse: '',
    urlOfficielle: 'https://www.bouches-du-rhone.gouv.fr', // à confirmer
    verifieLe: '',
  },

  piecesPrefecture: { sourceUrl: '', verifieLe: '', specificites: [] },

  delaisObserves: {
    actif: false, nbDossiers: 0, moisMin: null, moisMax: null,
    moisMediane: null, periodeObservation: '', misAJourLe: '',
  },

  publie: false,
};

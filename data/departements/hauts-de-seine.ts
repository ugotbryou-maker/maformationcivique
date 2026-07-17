/**
 * Hauts-de-Seine (92) — squelette vague 1.
 * Champs administratifs pré-remplis (à confirmer). Centres + préfecture à SOURCER (README).
 */

import type { Departement } from './types';

export const hautsDeSeine: Departement = {
  slug: 'hauts-de-seine',
  code: '92',
  nom: 'Hauts-de-Seine',
  nomAvecPreposition: 'dans les Hauts-de-Seine',
  prefectureVille: 'Nanterre',
  region: 'Île-de-France',
  villesPrincipales: ['Boulogne-Billancourt', 'Nanterre', 'Colombes'],
  limitrophes: ['paris', 'seine-saint-denis', 'val-de-marne', 'val-d-oise', 'yvelines', 'essonne'],

  centresExamen: [], // TODO — sourcer
  centresProches: [],

  prefecture: {
    nom: 'Préfecture des Hauts-de-Seine',
    adresse: '',
    urlOfficielle: 'https://www.hauts-de-seine.gouv.fr', // à confirmer (verifieLe requis avant affichage sourcé)
    verifieLe: '',
  },

  piecesPrefecture: { sourceUrl: '', verifieLe: '', specificites: [] },

  delaisObserves: {
    actif: false, nbDossiers: 0, moisMin: null, moisMax: null,
    moisMediane: null, periodeObservation: '', misAJourLe: '',
  },

  publie: false,
};

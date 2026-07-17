/**
 * Yvelines (78) — squelette Île-de-France.
 * Champs administratifs pré-remplis (à confirmer). OFII + préfecture à SOURCER.
 */

import type { Departement } from './types';

export const yvelines: Departement = {
  slug: 'yvelines',
  code: '78',
  nom: 'Yvelines',
  nomAvecPreposition: 'dans les Yvelines',
  prefectureVille: 'Versailles',
  region: 'Île-de-France',
  villesPrincipales: ['Versailles', 'Sartrouville', 'Mantes-la-Jolie', 'Saint-Germain-en-Laye', 'Poissy'],
  limitrophes: ['hauts-de-seine', 'val-d-oise', 'essonne'],

  centresExamen: [],
  centresProches: [],

  prefecture: {
    nom: 'Préfecture des Yvelines',
    adresse: '',
    urlOfficielle: 'https://www.yvelines.gouv.fr', // à confirmer
    verifieLe: '',
  },

  piecesPrefecture: { sourceUrl: '', verifieLe: '', specificites: [] },

  delaisObserves: {
    actif: false, nbDossiers: 0, moisMin: null, moisMax: null,
    moisMediane: null, periodeObservation: '', misAJourLe: '',
  },

  publie: false,
};

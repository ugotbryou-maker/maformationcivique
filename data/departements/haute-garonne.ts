/**
 * Haute-Garonne (31) — squelette vague 1.
 * Champs administratifs pré-remplis (à confirmer). Centres + préfecture à SOURCER (README).
 */

import type { Departement } from './types';

export const hauteGaronne: Departement = {
  slug: 'haute-garonne',
  code: '31',
  nom: 'Haute-Garonne',
  nomAvecPreposition: 'en Haute-Garonne',
  prefectureVille: 'Toulouse',
  region: 'Occitanie',
  villesPrincipales: ['Toulouse', 'Colomiers', 'Tournefeuille'],
  limitrophes: ['ariege', 'gers', 'tarn', 'tarn-et-garonne', 'hautes-pyrenees', 'aude'],

  centresExamen: [], // TODO — sourcer
  centresProches: [],

  prefecture: {
    nom: 'Préfecture de la Haute-Garonne',
    adresse: '',
    urlOfficielle: 'https://www.haute-garonne.gouv.fr', // à confirmer
    verifieLe: '',
  },

  piecesPrefecture: { sourceUrl: '', verifieLe: '', specificites: [] },

  delaisObserves: {
    actif: false, nbDossiers: 0, moisMin: null, moisMax: null,
    moisMediane: null, periodeObservation: '', misAJourLe: '',
  },

  publie: false,
};

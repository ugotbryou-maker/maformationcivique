/**
 * Nord (59) — squelette vague 1.
 * Champs administratifs pré-remplis (à confirmer). Centres + préfecture à SOURCER (README).
 */

import type { Departement } from './types';

export const nord: Departement = {
  slug: 'nord',
  code: '59',
  nom: 'Nord',
  nomAvecPreposition: 'dans le Nord',
  prefectureVille: 'Lille',
  region: 'Hauts-de-France',
  villesPrincipales: ['Lille', 'Roubaix', 'Tourcoing', 'Dunkerque'],
  limitrophes: ['pas-de-calais', 'aisne'],

  centresExamen: [], // TODO — sourcer
  centresProches: [],

  prefecture: {
    nom: 'Préfecture du Nord',
    adresse: '',
    urlOfficielle: 'https://www.nord.gouv.fr', // à confirmer
    verifieLe: '',
  },

  piecesPrefecture: { sourceUrl: '', verifieLe: '', specificites: [] },

  delaisObserves: {
    actif: false, nbDossiers: 0, moisMin: null, moisMax: null,
    moisMediane: null, periodeObservation: '', misAJourLe: '',
  },

  publie: false,
};

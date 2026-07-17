/**
 * Rhône (69) — squelette vague 1.
 * Champs administratifs pré-remplis (à confirmer). Centres + préfecture à SOURCER (README).
 */

import type { Departement } from './types';

export const rhone: Departement = {
  slug: 'rhone',
  code: '69',
  nom: 'Rhône',
  nomAvecPreposition: 'dans le Rhône',
  prefectureVille: 'Lyon',
  region: 'Auvergne-Rhône-Alpes',
  villesPrincipales: ['Lyon', 'Villeurbanne', 'Vénissieux'],
  limitrophes: ['ain', 'isere', 'loire', 'saone-et-loire'],

  centresExamen: [], // TODO — sourcer
  centresProches: [],

  prefecture: {
    nom: 'Préfecture du Rhône',
    adresse: '',
    urlOfficielle: 'https://www.rhone.gouv.fr', // à confirmer
    verifieLe: '',
  },

  piecesPrefecture: { sourceUrl: '', verifieLe: '', specificites: [] },

  delaisObserves: {
    actif: false, nbDossiers: 0, moisMin: null, moisMax: null,
    moisMediane: null, periodeObservation: '', misAJourLe: '',
  },

  publie: false,
};

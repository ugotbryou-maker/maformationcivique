/**
 * Val-de-Marne (94) — squelette vague 1.
 * Champs administratifs pré-remplis (à confirmer). Centres + préfecture à SOURCER (README).
 */

import type { Departement } from './types';

export const valDeMarne: Departement = {
  slug: 'val-de-marne',
  code: '94',
  nom: 'Val-de-Marne',
  nomAvecPreposition: 'dans le Val-de-Marne',
  prefectureVille: 'Créteil',
  region: 'Île-de-France',
  villesPrincipales: ['Créteil', 'Vitry-sur-Seine', 'Champigny-sur-Marne'],
  limitrophes: ['paris', 'hauts-de-seine', 'seine-saint-denis', 'essonne', 'seine-et-marne'],

  centresExamen: [], // TODO — sourcer
  centresProches: [],

  prefecture: {
    nom: 'Préfecture du Val-de-Marne',
    adresse: '',
    urlOfficielle: 'https://www.val-de-marne.gouv.fr', // à confirmer
    verifieLe: '',
  },

  piecesPrefecture: { sourceUrl: '', verifieLe: '', specificites: [] },

  delaisObserves: {
    actif: false, nbDossiers: 0, moisMin: null, moisMax: null,
    moisMediane: null, periodeObservation: '', misAJourLe: '',
  },

  publie: false,
};

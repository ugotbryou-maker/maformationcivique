/**
 * Essonne (91) — squelette Île-de-France.
 * Champs administratifs pré-remplis (à confirmer). OFII + préfecture à SOURCER.
 */

import type { Departement } from './types';

export const essonne: Departement = {
  slug: 'essonne',
  code: '91',
  nom: 'Essonne',
  nomAvecPreposition: "dans l'Essonne",
  prefectureVille: 'Évry-Courcouronnes',
  region: 'Île-de-France',
  villesPrincipales: ['Évry-Courcouronnes', 'Corbeil-Essonnes', 'Massy', 'Savigny-sur-Orge', 'Sainte-Geneviève-des-Bois'],
  limitrophes: ['hauts-de-seine', 'val-de-marne', 'seine-et-marne', 'yvelines'],

  centresExamen: [],
  centresProches: [],

  prefecture: {
    nom: "Préfecture de l'Essonne",
    adresse: '',
    urlOfficielle: 'https://www.essonne.gouv.fr', // à confirmer
    verifieLe: '',
  },

  piecesPrefecture: { sourceUrl: '', verifieLe: '', specificites: [] },

  delaisObserves: {
    actif: false, nbDossiers: 0, moisMin: null, moisMax: null,
    moisMediane: null, periodeObservation: '', misAJourLe: '',
  },

  publie: false,
};

/**
 * Seine-et-Marne (77) — squelette Île-de-France.
 * Champs administratifs pré-remplis (à confirmer). OFII + préfecture à SOURCER.
 */

import type { Departement } from './types';

export const seineEtMarne: Departement = {
  slug: 'seine-et-marne',
  code: '77',
  nom: 'Seine-et-Marne',
  nomAvecPreposition: 'en Seine-et-Marne',
  prefectureVille: 'Melun',
  region: 'Île-de-France',
  villesPrincipales: ['Melun', 'Meaux', 'Chelles', 'Champs-sur-Marne', 'Pontault-Combault'],
  limitrophes: ['essonne', 'val-de-marne', 'seine-saint-denis', 'val-d-oise'],

  centresExamen: [],
  centresProches: [],

  prefecture: {
    nom: 'Préfecture de Seine-et-Marne',
    adresse: '',
    urlOfficielle: 'https://www.seine-et-marne.gouv.fr', // à confirmer
    verifieLe: '',
  },

  piecesPrefecture: { sourceUrl: '', verifieLe: '', specificites: [] },

  delaisObserves: {
    actif: false, nbDossiers: 0, moisMin: null, moisMax: null,
    moisMediane: null, periodeObservation: '', misAJourLe: '',
  },

  publie: false,
};

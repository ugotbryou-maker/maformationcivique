/**
 * Val-d'Oise (95) — squelette vague 1.
 * Champs administratifs pré-remplis (à confirmer). Centres + préfecture à SOURCER (README).
 * ⚠️ prefectureVille : la préfecture du Val-d'Oise est à Cergy (chef-lieu) —
 * à confirmer, historiquement Pontoise.
 */

import type { Departement } from './types';

export const valDOise: Departement = {
  slug: 'val-d-oise',
  code: '95',
  nom: "Val-d'Oise",
  nomAvecPreposition: "dans le Val-d'Oise",
  prefectureVille: 'Cergy',
  region: 'Île-de-France',
  villesPrincipales: ['Argenteuil', 'Cergy', 'Sarcelles'],
  limitrophes: ['seine-saint-denis', 'hauts-de-seine', 'yvelines', 'oise', 'seine-et-marne'],

  centresExamen: [], // TODO — sourcer
  centresProches: [],

  prefecture: {
    nom: "Préfecture du Val-d'Oise",
    adresse: '',
    urlOfficielle: 'https://www.val-doise.gouv.fr', // à confirmer
    verifieLe: '',
  },

  piecesPrefecture: { sourceUrl: '', verifieLe: '', specificites: [] },

  delaisObserves: {
    actif: false, nbDossiers: 0, moisMin: null, moisMax: null,
    moisMediane: null, periodeObservation: '', misAJourLe: '',
  },

  publie: false,
};

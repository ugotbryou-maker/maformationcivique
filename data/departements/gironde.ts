/**
 * Gironde (33) — squelette vague 1.
 * Champs administratifs pré-remplis (à confirmer). Centres + préfecture à SOURCER (README).
 */

import type { Departement } from './types';

export const gironde: Departement = {
  slug: 'gironde',
  code: '33',
  nom: 'Gironde',
  nomAvecPreposition: 'en Gironde',
  prefectureVille: 'Bordeaux',
  region: 'Nouvelle-Aquitaine',
  villesPrincipales: ['Bordeaux', 'Mérignac', 'Pessac'],
  limitrophes: ['dordogne', 'lot-et-garonne', 'landes', 'charente-maritime', 'charente'],

  centresExamen: [], // TODO — sourcer
  centresProches: [],

  prefecture: {
    nom: 'Préfecture de la Gironde',
    adresse: '',
    urlOfficielle: 'https://www.gironde.gouv.fr', // à confirmer
    verifieLe: '',
  },

  piecesPrefecture: { sourceUrl: '', verifieLe: '', specificites: [] },

  delaisObserves: {
    actif: false, nbDossiers: 0, moisMin: null, moisMax: null,
    moisMediane: null, periodeObservation: '', misAJourLe: '',
  },

  publie: false,
};

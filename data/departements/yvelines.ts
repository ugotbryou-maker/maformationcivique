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

  heroImage: { src: '/images/departements/yvelines.jpg', alt: 'Château de Versailles, Yvelines' },

  centresExamen: [],
  centresProches: [],

  prefecture: {
    nom: 'Préfecture des Yvelines',
    adresse: '',
    urlOfficielle: 'https://www.yvelines.gouv.fr', // à confirmer
    verifieLe: '',
  },

  ofii: {
    nom: "Office français de l'immigration et de l'intégration (OFII) — Direction territoriale de Montrouge",
    adresse: '55 rue Étienne Dolet, 92240 Malakoff',
    departementsCouverts: ['78', '92'],
    urlOfficielle: 'https://www.ofii.fr',
    sourceUrl: 'https://lannuaire.service-public.gouv.fr/ile-de-france/hauts-de-seine/e512f4b2-8f2b-4a4a-8e77-76b90b1eee6e',
    verifieLe: '2026-07-17',
  },

  piecesPrefecture: { sourceUrl: '', verifieLe: '', specificites: [] },

  delaisObserves: {
    actif: false, nbDossiers: 0, moisMin: null, moisMax: null,
    moisMediane: null, periodeObservation: '', misAJourLe: '',
  },

  publie: true,
};

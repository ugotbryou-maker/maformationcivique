/**
 * Hauts-de-Seine (92) — squelette vague 1.
 * Champs administratifs pré-remplis (à confirmer). Centres + préfecture à SOURCER (README).
 */

import type { Departement } from './types';

export const hautsDeSeine: Departement = {
  slug: 'hauts-de-seine',
  code: '92',
  nom: 'Hauts-de-Seine',
  nomAvecPreposition: 'dans les Hauts-de-Seine',
  prefectureVille: 'Nanterre',
  region: 'Île-de-France',
  villesPrincipales: ['Boulogne-Billancourt', 'Nanterre', 'Colombes'],
  limitrophes: ['paris', 'seine-saint-denis', 'val-de-marne', 'val-d-oise', 'yvelines', 'essonne'],

  heroImage: { src: '/images/departements/hauts-de-seine.jpg', alt: 'La Défense, Hauts-de-Seine' },

  centresExamen: [],
  centresProches: [],

  prefecture: {
    nom: 'Préfecture des Hauts-de-Seine',
    adresse: '',
    urlOfficielle: 'https://www.hauts-de-seine.gouv.fr', // à confirmer
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

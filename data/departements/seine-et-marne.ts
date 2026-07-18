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

  heroImage: { src: '/images/departements/seine-et-marne.jpg', alt: 'Seine-et-Marne' },

  centresExamen: [],
  centresProches: [],

  prefecture: {
    nom: 'Préfecture de Seine-et-Marne',
    adresse: '',
    urlOfficielle: 'https://www.seine-et-marne.gouv.fr', // à confirmer
    verifieLe: '',
  },

  ofii: {
    nom: "Office français de l'immigration et de l'intégration (OFII) — Direction territoriale de Melun",
    adresse: '2 bis avenue Jean-Jaurès, 77000 Melun',
    departementsCouverts: ['77'],
    urlOfficielle: 'https://www.ofii.fr',
    sourceUrl: 'https://lannuaire.service-public.gouv.fr/ile-de-france/seine-et-marne/2ae12855-6a34-4afa-9baa-cc4ca917cd98',
    verifieLe: '2026-07-17',
  },

  piecesPrefecture: { sourceUrl: '', verifieLe: '', specificites: [] },

  delaisObserves: {
    actif: false, nbDossiers: 0, moisMin: null, moisMax: null,
    moisMediane: null, periodeObservation: '', misAJourLe: '',
  },

  publie: true,
};

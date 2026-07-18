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

  heroImage: { src: '/images/departements/essonne.jpg', alt: 'Essonne' },

  centresExamen: [],
  centresProches: [],

  prefecture: {
    nom: "Préfecture de l'Essonne",
    adresse: '',
    urlOfficielle: 'https://www.essonne.gouv.fr', // à confirmer
    verifieLe: '',
  },

  ofii: {
    nom: "Office français de l'immigration et de l'intégration (OFII) — Direction territoriale de Créteil",
    adresse: '13-15 rue Claude-Nicolas Ledoux, 94000 Créteil',
    departementsCouverts: ['91', '94'],
    urlOfficielle: 'https://www.ofii.fr',
    sourceUrl: 'https://lannuaire.service-public.gouv.fr/ile-de-france/val-de-marne/982c071e-172f-4d85-933c-40cb06c710b6',
    verifieLe: '2026-07-17',
  },

  piecesPrefecture: { sourceUrl: '', verifieLe: '', specificites: [] },

  delaisObserves: {
    actif: false, nbDossiers: 0, moisMin: null, moisMax: null,
    moisMediane: null, periodeObservation: '', misAJourLe: '',
  },

  publie: true,
};

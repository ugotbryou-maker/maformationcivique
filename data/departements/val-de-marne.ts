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

  heroImage: { src: '/images/departements/val-de-marne.jpg', alt: 'Val-de-Marne' },

  centresExamen: [],
  centresProches: [],

  prefecture: {
    nom: 'Préfecture du Val-de-Marne',
    adresse: '',
    urlOfficielle: 'https://www.val-de-marne.gouv.fr', // à confirmer
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

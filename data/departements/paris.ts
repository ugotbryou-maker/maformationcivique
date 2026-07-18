/**
 * Paris (75) — squelette vague 1.
 *
 * Champs administratifs pré-remplis (à confirmer d'un coup d'œil).
 * ⚠️ À SOURCER avant publication (README) : centresExamen, préfecture
 * (adresse, urlOfficielle, pièces). Reste en 404 tant que publie:false.
 *
 * Cas particulier : Paris est à la fois commune et département — le H1 est
 * collapsé automatiquement (« Examen civique à Paris (75) »).
 */

import type { Departement } from './types';

export const paris: Departement = {
  slug: 'paris',
  code: '75',
  nom: 'Paris',
  nomAvecPreposition: 'à Paris',
  prefectureVille: 'Paris',
  region: 'Île-de-France',
  villesPrincipales: ['Paris'],
  limitrophes: ['hauts-de-seine', 'seine-saint-denis', 'val-de-marne'],

  heroImage: {
    src: '/images/departements/paris.jpg',
    alt: 'Vue de Paris',
  },

  centresExamen: [],
  centresProches: [],

  prefecture: {
    nom: 'Préfecture de Paris',
    adresse: '',
    urlOfficielle: '', // Paris a une organisation particulière (préf. de police / préf. de région)
    verifieLe: '',
  },

  ofii: {
    nom: "Office français de l'immigration et de l'intégration (OFII) — Direction territoriale de Paris",
    adresse: '83 rue de Patay, 75013 Paris',
    departementsCouverts: ['75'],
    urlOfficielle: 'https://www.ofii.fr',
    sourceUrl: 'https://lannuaire.service-public.gouv.fr/ile-de-france/paris/ofii-75056-01',
    verifieLe: '2026-07-17',
  },

  piecesPrefecture: {
    sourceUrl: '',
    verifieLe: '',
    specificites: [],
  },

  delaisObserves: {
    actif: false,
    nbDossiers: 0,
    moisMin: null,
    moisMax: null,
    moisMediane: null,
    periodeObservation: '',
    misAJourLe: '',
  },

  publie: true,
};

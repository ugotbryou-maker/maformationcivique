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

  centresExamen: [], // TODO — sourcer sur formation-civique.interieur.gouv.fr + opérateur
  centresProches: [],

  prefecture: {
    nom: 'Préfecture de Paris',
    adresse: '',
    urlOfficielle: '', // TODO — Paris a une organisation particulière (préf. de police / préf. de région), à vérifier
    verifieLe: '',
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

  publie: false,
};

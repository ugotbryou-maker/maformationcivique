/**
 * Rhône (69) — page publiée sur ancrage ÉTATIQUE (OFII), sans centre partenaire.
 *
 * Business model : les centres référencés seront à terme des partenaires. Tant
 * qu'aucun partenaire n'est signé, on ne promeut aucun centre commercial — la
 * page renvoie vers les ressources officielles (ministère, service-public) et
 * l'interlocuteur public local (OFII de Lyon), avec sources vérifiées.
 *
 * Données OFII vérifiées le 17/07/2026 sur l'annuaire officiel de l'État
 * (lannuaire.service-public.gouv.fr).
 */

import type { Departement } from './types';

export const rhone: Departement = {
  slug: 'rhone',
  code: '69',
  nom: 'Rhône',
  nomAvecPreposition: 'dans le Rhône',
  prefectureVille: 'Lyon',
  region: 'Auvergne-Rhône-Alpes',
  villesPrincipales: ['Lyon', 'Villeurbanne', 'Vénissieux', 'Bron', 'Saint-Priest', 'Caluire-et-Cuire', 'Rillieux-la-Pape', 'Décines-Charpieu'],
  limitrophes: ['ain', 'isere', 'loire', 'saone-et-loire'],

  heroImage: {
    src: '/images/departements/rhone.jpg',
    alt: 'Vue de Lyon et du Rhône depuis Fourvière',
    // credit: '', // à renseigner si la photo l'exige
  },

  // Aucun centre partenaire pour l'instant (phase 2). Page servie via l'OFII.
  centresExamen: [],
  centresProches: [],

  prefecture: {
    nom: 'Préfecture du Rhône',
    adresse: '', // TODO — à sourcer sur rhone.gouv.fr avant affichage sourcé
    urlOfficielle: 'https://www.rhone.gouv.fr',
    verifieLe: '',
  },

  ofii: {
    nom: "Office français de l'immigration et de l'intégration (OFII) — Direction territoriale de Lyon",
    adresse: '7 rue Quivogne, 69286 Lyon Cedex 02',
    departementsCouverts: ['01', '07', '42', '69'],
    urlOfficielle: 'https://www.ofii.fr',
    sourceUrl: 'https://lannuaire.service-public.gouv.fr/auvergne-rhone-alpes/rhone/1086e5c3-414e-4f4d-90a8-d9acd46c21fe',
    verifieLe: '2026-07-17',
  },

  piecesPrefecture: {
    sourceUrl: '', // TODO — page titres de séjour de rhone.gouv.fr
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

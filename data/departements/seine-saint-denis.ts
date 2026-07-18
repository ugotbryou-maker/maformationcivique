/**
 * Seine-Saint-Denis (93) — département exemple de la vague 1.
 *
 * ⚠️ Données volontairement laissées vides : elles doivent être vérifiées en
 * source officielle AVANT publication (voir README.md). Ne pas remplir de
 * mémoire, ne pas deviner. La page restera en 404 tant que `publie: false`
 * et que le garde-fou canPublish() n'est pas satisfait.
 *
 * Sources à consulter pour remplir :
 * - https://www.formation-civique.interieur.gouv.fr (centres agréés)
 * - Site de la CCI Paris Île-de-France (réservation examen civique)
 * - https://www.seine-saint-denis.gouv.fr (préfecture — pièces & modalités)
 */

import type { Departement } from './types';

export const seineSaintDenis: Departement = {
  slug: 'seine-saint-denis',
  code: '93',
  nom: 'Seine-Saint-Denis',
  nomAvecPreposition: 'en Seine-Saint-Denis',
  prefectureVille: 'Bobigny',
  region: 'Île-de-France',
  villesPrincipales: ['Saint-Denis', 'Montreuil', 'Aubervilliers', 'Aulnay-sous-Bois', 'Drancy'],
  limitrophes: ['paris', 'val-de-marne', 'val-d-oise', 'seine-et-marne'],

  heroImage: { src: '/images/departements/seine-saint-denis.jpg', alt: 'Basilique de Saint-Denis, Seine-Saint-Denis' },

  centresExamen: [],
  centresProches: [],

  prefecture: {
    nom: 'Préfecture de la Seine-Saint-Denis',
    adresse: '', // TODO — depuis https://www.seine-saint-denis.gouv.fr uniquement
    urlOfficielle: 'https://www.seine-saint-denis.gouv.fr',
    verifieLe: '', // TODO
  },

  ofii: {
    nom: "Office français de l'immigration et de l'intégration (OFII) — Direction territoriale de Bobigny",
    adresse: '13 rue Marguerite-Yourcenar, 93000 Bobigny',
    departementsCouverts: ['93'],
    urlOfficielle: 'https://www.ofii.fr',
    sourceUrl: 'https://lannuaire.service-public.gouv.fr/ile-de-france/seine-saint-denis/5a8e3d32-3789-4c86-ae57-2e6fd454dcff',
    verifieLe: '2026-07-17',
  },

  piecesPrefecture: {
    sourceUrl: '', // TODO — page titres de séjour / naturalisation de la préfecture
    verifieLe: '',
    specificites: [
      // TODO : uniquement ce que la préfecture du 93 publie elle-même.
    ],
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

  publie: true, // Publié sur ancrage OFII (Bobigny). Centres partenaires : phase 2.
};

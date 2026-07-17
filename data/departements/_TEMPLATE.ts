/**
 * _TEMPLATE.ts — modèle à copier pour ajouter un département.
 *
 * Procédure complète : voir README.md dans ce dossier.
 *
 * 1. Copier ce fichier → `<slug>.ts` (ex. `rhone.ts`)
 * 2. Remplir les champs administratifs (slug, code, nom, préposition, région…)
 * 3. Sourcer les centres sur formation-civique.interieur.gouv.fr et les sites
 *    des opérateurs agréés (CCI Paris ÎdF, France Éducation International).
 *    CHAQUE centre = sourceUrl + verifieLe obligatoires.
 * 4. Sourcer les spécificités préfectorales sur le site .gouv.fr de la
 *    préfecture UNIQUEMENT (rien de supposé, rien de forum).
 * 5. Enregistrer le département dans index.ts (import + ajout au tableau ALL).
 * 6. `publie: true` seulement quand les données minimales sont là —
 *    le garde-fou canPublish() refuse de publier sinon.
 *
 * ⚠️ NE PAS remplir de mémoire. Champ introuvable → laisser vide + TODO.
 * ⚠️ PAS de délai préfectoral, PAS de tarif non sourcé, PAS de niveau de langue.
 */

import type { Departement } from './types';

export const TEMPLATE: Departement = {
  slug: '',                      // TODO ex. 'rhone'
  code: '',                      // TODO ex. '69'
  nom: '',                       // TODO ex. 'Rhône'
  nomAvecPreposition: '',        // TODO ex. 'dans le Rhône' / 'en Gironde' / 'à Paris'
  prefectureVille: '',           // TODO ex. 'Lyon'
  region: '',                    // TODO ex. 'Auvergne-Rhône-Alpes'
  villesPrincipales: [],         // TODO 2-4 villes, ex. ['Lyon', 'Villeurbanne', 'Vénissieux']
  limitrophes: [],               // TODO slugs voisins, ex. ['ain', 'isere', 'loire']

  centresExamen: [
    // TODO : sourcer sur formation-civique.interieur.gouv.fr + site de l'opérateur.
    // Supprimer ce bloc s'il n'y a AUCUN centre dans le département (et remplir
    // centresProches à la place — minimum 2).
    // {
    //   nom: '',
    //   operateur: '',
    //   adresse: '',
    //   ville: '',
    //   codePostal: '',
    //   urlReservation: '',
    //   mentionsProposees: ['CSP', 'CR', 'NAT'],
    //   sourceUrl: '',
    //   verifieLe: '',
    // },
  ],

  centresProches: [
    // TODO : uniquement si centresExamen est vide — minimum 2 centres voisins.
    // {
    //   nom: '',
    //   ville: '',
    //   departement: '',
    //   distanceKm: null,
    //   sourceUrl: '',
    //   verifieLe: '',
    // },
  ],

  prefecture: {
    nom: '',                     // TODO ex. 'Préfecture du Rhône'
    adresse: '',                 // TODO — depuis le site officiel uniquement
    urlOfficielle: '',           // TODO ex. 'https://www.rhone.gouv.fr'
    verifieLe: '',
  },

  piecesPrefecture: {
    sourceUrl: '',               // TODO — page .gouv.fr de la préfecture
    verifieLe: '',
    specificites: [
      // TODO : UNIQUEMENT ce que la préfecture publie elle-même.
      // ex. 'Dépôt uniquement via l'ANEF, aucun accueil physique pour ce titre'
    ],
  },

  delaisObserves: {
    actif: false,                // ⛔ Vague 2 — ne pas activer sans >= 30 dossiers first-party
    nbDossiers: 0,
    moisMin: null,
    moisMax: null,
    moisMediane: null,
    periodeObservation: '',
    misAJourLe: '',
  },

  publie: false,
};

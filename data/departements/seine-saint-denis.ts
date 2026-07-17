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
  villesPrincipales: ['Saint-Denis', 'Montreuil', 'Aubervilliers'],
  limitrophes: ['paris', 'val-de-marne', 'val-d-oise', 'seine-et-marne'],

  centresExamen: [
    // TODO : vérifier sur formation-civique.interieur.gouv.fr la liste des
    // centres agréés en Seine-Saint-Denis, puis croiser avec le site de
    // l'opérateur (CCI Paris ÎdF / FEI) pour adresse + URL de réservation.
    // Chaque entrée DOIT avoir sourceUrl + verifieLe.
  ],

  centresProches: [
    // TODO : à remplir seulement si aucun centre dans le 93 (peu probable).
  ],

  prefecture: {
    nom: 'Préfecture de la Seine-Saint-Denis',
    adresse: '', // TODO — depuis https://www.seine-saint-denis.gouv.fr uniquement
    urlOfficielle: 'https://www.seine-saint-denis.gouv.fr',
    verifieLe: '', // TODO
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

  publie: false, // ⛔ Ne passer à true qu'une fois les centres sourcés et vérifiés.
};

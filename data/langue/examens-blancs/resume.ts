/**
 * Métadonnées des examens linguistiques — SANS aucun énoncé ni corrigé.
 *
 * Fichier volontairement séparé de `index.ts` : celui-ci contient les 120
 * questions et leurs réponses, et ne doit jamais entrer dans un bundle
 * client. Les pages qui n'ont besoin que des cartes de présentation
 * importent ce résumé, qui pèse quelques centaines d'octets.
 */

export interface ResumeExamenLangue {
  niveau: 'A2' | 'B1' | 'B2';
  titre: string;
  demarche: string;
  dureeMinutes: number;
  nbQuestions: number;
  seuilQuestions: number;
  sousTitre: string;
  sections: string;
}

export const RESUME_EXAMENS_LANGUE: ResumeExamenLangue[] = [
  {
    niveau: 'A2', titre: 'Examen blanc A2', demarche: 'Carte de séjour pluriannuelle',
    dureeMinutes: 45, nbQuestions: 40, seuilQuestions: 28,
    sousTitre: 'Comprendre et se débrouiller dans les situations courantes de la vie administrative.',
    sections: 'Compréhension · Grammaire · Conjugaison · Orthographe · Expression',
  },
  {
    niveau: 'B1', titre: 'Examen blanc B1', demarche: 'Carte de résident (10 ans)',
    dureeMinutes: 50, nbQuestions: 40, seuilQuestions: 28,
    sousTitre: 'Comprendre un courrier suivi, raconter, justifier un projet et articuler ses idées.',
    sections: 'Compréhension · Grammaire · Conjugaison · Orthographe · Expression',
  },
  {
    niveau: 'B2', titre: 'Examen blanc B2', demarche: 'Naturalisation française',
    dureeMinutes: 60, nbQuestions: 40, seuilQuestions: 30,
    sousTitre: 'Suivre une argumentation, nuancer et rédiger dans un registre soutenu.',
    sections: 'Compréhension · Grammaire · Conjugaison · Orthographe · Expression',
  },
];

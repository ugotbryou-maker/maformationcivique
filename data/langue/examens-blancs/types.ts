/**
 * Examens blancs linguistiques — modèle et correction.
 *
 * NIVEAUX : A2 (carte de séjour pluriannuelle), B1 (carte de résident),
 * B2 (naturalisation). Exigences applicables aux demandes déposées à partir
 * du 1ᵉʳ janvier 2026 (loi du 26 janvier 2024). Les valeurs font foi dans
 * `lib/reglementation.ts` — ne rien redéfinir ici.
 *
 * STRUCTURE : calquée sur le TCF IRN, qui sert de référence pour ces trois
 * démarches — compréhension écrite, structure de la langue, expression
 * écrite. Les épreuves orales du test réel ne sont pas reproductibles ici :
 * elles sont annoncées comme absentes plutôt que simulées approximativement.
 */

export type NiveauLangue = 'A2' | 'B1' | 'B2';

/** Section de l'épreuve, dans l'ordre de passage. */
export type SectionExamen =
  | 'comprehension'   // compréhension écrite — textes, annonces, courriers
  | 'grammaire'       // structure de la langue — accords, pronoms, syntaxe
  | 'conjugaison'     // temps et modes
  | 'orthographe'     // graphie, homophones, accents
  | 'expression';     // production écrite courte

export const LIBELLE_SECTION: Record<SectionExamen, string> = {
  comprehension: 'Compréhension écrite',
  grammaire:     'Structure de la langue',
  conjugaison:   'Conjugaison',
  orthographe:   'Orthographe',
  expression:    'Expression écrite',
};

/**
 * Deux formats seulement, parce qu'ils se corrigent automatiquement sans
 * ambiguïté :
 *  — `qcm`    : une bonne réponse parmi quatre ;
 *  — `saisie` : la personne écrit elle-même. C'est le seul moyen d'évaluer
 *               réellement l'orthographe et la conjugaison : un QCM permet
 *               de reconnaître la bonne graphie sans savoir la produire.
 */
export type FormatQuestion = 'qcm' | 'saisie';

export interface QuestionExamen {
  id: string;
  section: SectionExamen;
  format: FormatQuestion;
  /** Texte, dialogue ou annonce à lire avant la question (compréhension). */
  support?: string;
  enonce: string;
  /** Format qcm uniquement — toujours 4 propositions. */
  options?: string[];
  /** Format qcm : index de la bonne réponse. */
  bonneReponse?: number;
  /**
   * Format saisie : réponses acceptées. La première sert de corrigé affiché.
   * Les variantes légitimes (élision, ordre des mots, synonyme strict)
   * doivent y figurer — sinon on sanctionne une réponse juste.
   */
  reponses?: string[];
  /**
   * Format saisie : accepter une réponse non accentuée.
   * `false` sur les questions d'orthographe et de conjugaison, où l'accent
   * fait partie de ce qui est évalué. `true` ailleurs, pour ne pas pénaliser
   * un clavier étranger sur une question qui ne porte pas sur la graphie.
   */
  accentsFacultatifs?: boolean;
  explication: string;
}

export interface ExamenBlancLangue {
  niveau: NiveauLangue;
  titre: string;
  demarche: string;
  dureeMinutes: number;
  /**
   * Part de bonnes réponses visée. Objectif pédagogique, pas seuil officiel :
   * le TCF IRN n'attribue pas un « réussi / échoué » mais un niveau CECRL en
   * fonction du score. On se cale volontairement au-dessus du minimum pour
   * que réussir ici signifie être à l'aise, pas être juste à la limite.
   */
  seuilReussite: number;
  questions: QuestionExamen[];
}

// ── Correction ──────────────────────────────────────────────────────────────

/** Retire les accents — utilisé seulement si la question l'autorise. */
function sansAccents(s: string): string {
  return s.normalize('NFD').replace(/[̀-ͯ]/g, '');
}

/**
 * Normalise une saisie avant comparaison : espaces superflus, casse,
 * apostrophe typographique, ponctuation finale. On ne touche ni aux accents
 * (sauf autorisation explicite) ni à l'intérieur des mots.
 */
export function normaliser(s: string, ignorerAccents = false): string {
  let t = s
    .trim()
    .toLowerCase()
    .replace(/[’ʼ`]/g, "'")   // apostrophes typographiques
    .replace(/\s+/g, ' ')
    .replace(/\s*'\s*/g, "'")
    .replace(/[.!?;:]+$/, '');
  if (ignorerAccents) t = sansAccents(t);
  return t;
}

/** Vrai si la saisie correspond à l'une des réponses acceptées. */
export function saisieCorrecte(saisie: string, q: QuestionExamen): boolean {
  if (!q.reponses || q.reponses.length === 0) return false;
  const ignorer = q.accentsFacultatifs === true;
  const candidat = normaliser(saisie, ignorer);
  if (!candidat) return false;
  return q.reponses.some((r) => normaliser(r, ignorer) === candidat);
}

/** Vrai si la réponse — quel que soit le format — est juste. */
export function reponseCorrecte(q: QuestionExamen, valeur: string | number | undefined): boolean {
  if (valeur === undefined || valeur === null || valeur === '') return false;
  if (q.format === 'qcm') return valeur === q.bonneReponse;
  return typeof valeur === 'string' && saisieCorrecte(valeur, q);
}

/** Corrigé à afficher après coup. */
export function corrige(q: QuestionExamen): string {
  if (q.format === 'qcm') return q.options?.[q.bonneReponse ?? 0] ?? '—';
  return q.reponses?.[0] ?? '—';
}

/** Répartition des bonnes réponses par section — base du bilan détaillé. */
export function bilanParSection(
  questions: QuestionExamen[],
  reponses: Record<number, string | number>,
): { section: SectionExamen; justes: number; total: number }[] {
  const acc = new Map<SectionExamen, { justes: number; total: number }>();
  questions.forEach((q, i) => {
    const e = acc.get(q.section) ?? { justes: 0, total: 0 };
    e.total += 1;
    if (reponseCorrecte(q, reponses[i])) e.justes += 1;
    acc.set(q.section, e);
  });
  return [...acc.entries()].map(([section, v]) => ({ section, ...v }));
}

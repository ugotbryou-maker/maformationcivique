/**
 * lib/eligibilite.ts — moteur du test d'éligibilité (lead magnet).
 *
 * Couvre 3 démarches : carte de séjour pluriannuelle (CSP), carte de résident,
 * naturalisation. Le niveau de langue exigé et les seuils viennent de
 * `lib/reglementation.ts` (RÈGLE N°2 : aucune valeur réglementaire en dur ici).
 *
 * Sources droit 2026 : service-public.fr F2213 (naturalisation), F39426
 * (examen civique). Voir docs/test-eligibilite-mapping.md.
 */

import { EXAMEN_CIVIQUE, NIVEAUX_LANGUE } from '@/lib/reglementation';

export type Demarche = 'csp' | 'resident' | 'naturalisation';

export interface Answers {
  demarche?: Demarche;
  titre?: string;
  duree?: string;
  langue?: string;
  casier?: string;
  fiscal?: string;
  civique?: string;
  [k: string]: string | undefined;
}

export interface QuizOption {
  value: string;
  label: string;
}

export interface QuizQuestion {
  id: keyof Answers;
  theme: string;
  question: string;
  help?: string;
  options: QuizOption[];
  /** Question conditionnelle : ne s'affiche que si vrai. */
  showIf?: (a: Answers) => boolean;
}

// Niveau de langue exigé selon la démarche (depuis reglementation.ts)
export function niveauRequis(d: Demarche): string {
  return d === 'naturalisation'
    ? NIVEAUX_LANGUE.naturalisation
    : d === 'resident'
      ? NIVEAUX_LANGUE.carteResident
      : NIVEAUX_LANGUE.CSP;
}

const DEMARCHE_LABEL: Record<Demarche, string> = {
  csp: 'Carte de séjour pluriannuelle',
  resident: 'Carte de résident (10 ans)',
  naturalisation: 'Naturalisation française',
};

export function demarcheLabel(d: Demarche): string {
  return DEMARCHE_LABEL[d];
}

// ── Questions ─────────────────────────────────────────────────────────────────

export const QUESTIONS: QuizQuestion[] = [
  {
    id: 'demarche',
    theme: 'Votre objectif',
    question: 'Quelle démarche souhaitez-vous préparer ?',
    help: "Le test s'adapte à votre situation : les conditions et le niveau de français exigé ne sont pas les mêmes selon la démarche.",
    options: [
      { value: 'csp', label: 'Carte de séjour pluriannuelle (plusieurs années)' },
      { value: 'resident', label: 'Carte de résident (10 ans)' },
      { value: 'naturalisation', label: 'Naturalisation (devenir français·e)' },
    ],
  },
  {
    id: 'titre',
    theme: 'Situation actuelle',
    question: 'Quel est votre titre de séjour actuel en France ?',
    help: 'Votre titre actuel détermine où vous en êtes dans votre parcours.',
    options: [
      { value: 'vls_ts', label: 'Visa long séjour / première année (VLS-TS)' },
      { value: 'temporaire', label: 'Carte de séjour temporaire (1 an)' },
      { value: 'pluriannuelle', label: 'Carte de séjour pluriannuelle (plus d\'1 an)' },
      { value: 'resident', label: 'Carte de résident (10 ans)' },
      { value: 'refugie_ue', label: 'Réfugié·e / protection internationale / citoyen·ne UE' },
    ],
  },
  {
    id: 'duree',
    theme: 'Durée de séjour',
    question: 'Depuis combien de temps résidez-vous de façon régulière et ininterrompue en France ?',
    help: 'Le décompte commence à la date de votre 1er titre valide — pas à votre arrivée. Un séjour irrégulier peut interrompre le calcul.',
    options: [
      { value: 'lt2', label: 'Moins de 2 ans' },
      { value: '2to4', label: 'Entre 2 et 4 ans' },
      { value: '5plus', label: '5 ans ou plus' },
      { value: 'unsure', label: 'Je ne sais pas exactement' },
    ],
    // La durée est déterminante pour résident (≈3-5 ans) et naturalisation (5 ans).
    showIf: (a) => a.demarche === 'resident' || a.demarche === 'naturalisation',
  },
  {
    id: 'langue',
    theme: 'Niveau de français',
    question: 'Pouvez-vous justifier du niveau de français exigé pour votre démarche ?',
    // Le libellé du niveau requis est injecté dynamiquement à l'affichage.
    help: '__LANGUE_HELP__',
    options: [
      { value: 'dip', label: 'Oui — diplôme français (Bac, BTS, Licence ou +)' },
      { value: 'cert', label: 'Oui — attestation TCF / TEF / DELF récente (moins de 2 ans)' },
      { value: 'noproof', label: 'J\'ai le niveau mais pas encore de justificatif officiel' },
      { value: 'weak', label: 'Mon niveau est en dessous / je ne suis pas sûr·e' },
    ],
  },
  {
    id: 'casier',
    theme: 'Casier judiciaire',
    question: 'Avez-vous été condamné·e à une peine d\'emprisonnement ferme, en France ou à l\'étranger ?',
    help: 'Une condamnation à 6 mois ou plus d\'emprisonnement ferme est une cause d\'indignité qui entraîne le rejet du dossier de naturalisation.',
    options: [
      { value: 'clean', label: 'Non, aucune condamnation à de la prison ferme' },
      { value: 'minor', label: 'Sursis, amende, ou peine ancienne et isolée' },
      { value: 'prison', label: 'Oui, prison ferme de 6 mois ou plus' },
      { value: 'unsure', label: 'Je ne suis pas certain·e de ma situation' },
    ],
  },
  {
    id: 'fiscal',
    theme: 'Situation fiscale',
    question: 'Êtes-vous à jour de vos déclarations d\'impôts sur les dernières années ?',
    help: 'La préfecture vérifie vos derniers avis d\'imposition. Un retard non régularisé peut bloquer le dossier.',
    options: [
      { value: 'ok', label: 'Oui, je déclare et je suis à jour' },
      { value: 'noincome', label: 'Je n\'ai pas encore de revenus imposables en France' },
      { value: 'late', label: 'J\'ai eu des retards, en cours de régularisation' },
      { value: 'bad', label: 'Non, je ne suis pas à jour' },
    ],
  },
  {
    id: 'civique',
    theme: 'Connaissances civiques',
    question: 'Comment évaluez-vous votre connaissance des institutions, de l\'histoire et des valeurs de la France ?',
    help: '__CIVIQUE_HELP__',
    options: [
      { value: 'good', label: 'Bonne — institutions, grandes dates et valeurs' },
      { value: 'partial', label: 'Partielle — je me prépare mais j\'ai des lacunes' },
      { value: 'low', label: 'Limitée — je n\'ai pas vraiment commencé' },
      { value: 'none', label: 'Très faible — je n\'ai pas encore abordé le sujet' },
    ],
  },
];

/** Textes d'aide dynamiques (dépendent des réponses / de la réglementation). */
export function helpText(q: QuizQuestion, a: Answers): string | undefined {
  if (q.help === '__LANGUE_HELP__') {
    const d = a.demarche ?? 'naturalisation';
    const niv = niveauRequis(d);
    const dateNote = d === 'naturalisation'
      ? ` Depuis le 1ᵉʳ janvier 2026, le niveau ${niv} (oral et écrit) est exigé pour la naturalisation.`
      : '';
    return `Pour « ${demarcheLabel(d)} », le niveau requis est le ${niv}.${dateNote}`;
  }
  if (q.help === '__CIVIQUE_HELP__') {
    return `C'est le cœur de l'examen civique : ${EXAMEN_CIVIQUE.nbQuestions} questions, seuil de réussite ${EXAMEN_CIVIQUE.seuilReussite}/${EXAMEN_CIVIQUE.nbQuestions}. Il porte sur les institutions, l'histoire, la laïcité et les droits.`;
  }
  return q.help;
}

/** Questions effectivement affichées pour un jeu de réponses. */
export function visibleQuestions(a: Answers): QuizQuestion[] {
  return QUESTIONS.filter((q) => !q.showIf || q.showIf(a));
}

// ── Verdict ───────────────────────────────────────────────────────────────────

export type VerdictStatus = 'pret' | 'bientot' | 'langue' | 'bloque' | 'a_verifier';

export interface ChecklistItem {
  label: string;
  ok: boolean | 'warn';
}

export interface Verdict {
  status: VerdictStatus;
  titre: string;
  message: string;
  checklist: ChecklistItem[];
  etapes: string[];
}

export function computeVerdict(a: Answers): Verdict {
  const demarche = (a.demarche ?? 'naturalisation') as Demarche;
  const niv = niveauRequis(demarche);

  // Blocage dur : indignité (prison ferme ≥ 6 mois).
  const casierBloque = a.casier === 'prison';
  // Langue insuffisante / non justifiée réellement.
  const langueOk = a.langue === 'dip' || a.langue === 'cert';
  const langueFaible = a.langue === 'weak';
  // Durée (seulement demandée pour resident / naturalisation).
  const dureeOk = a.duree === '5plus';
  const dureeIntermediaire = a.duree === '2to4';
  const fiscalOk = a.fiscal === 'ok' || a.fiscal === 'noincome';

  const checklist: ChecklistItem[] = [];
  if (demarche !== 'csp') {
    checklist.push({
      label: demarche === 'naturalisation' ? '5 ans de résidence régulière' : 'Ancienneté de séjour suffisante',
      ok: dureeOk ? true : dureeIntermediaire ? 'warn' : false,
    });
  }
  checklist.push({ label: `Niveau de français ${niv} justifié`, ok: langueOk ? true : a.langue === 'noproof' ? 'warn' : false });
  checklist.push({ label: 'Examen civique à préparer', ok: a.civique === 'good' ? true : 'warn' });
  checklist.push({ label: 'Situation fiscale à jour', ok: fiscalOk ? true : a.fiscal === 'late' ? 'warn' : false });
  checklist.push({ label: 'Casier compatible', ok: casierBloque ? false : a.casier === 'unsure' ? 'warn' : true });

  // Étapes communes (numérotation correcte, sans trou).
  const etapesBase = [
    'Réunissez vos justificatifs : titre de séjour, preuve de niveau de français, avis d\'imposition, état civil.',
    `Entraînez-vous à l'examen civique jusqu'à dépasser ${EXAMEN_CIVIQUE.seuilReussite}/${EXAMEN_CIVIQUE.nbQuestions} en conditions réelles.`,
    demarche === 'naturalisation'
      ? 'Préparez l\'entretien d\'assimilation (institutions, histoire, valeurs).'
      : 'Vérifiez les pièces spécifiques demandées par votre préfecture.',
    'Déposez votre dossier via l\'ANEF (ou au guichet selon votre préfecture).',
  ];

  // ── Détermination du statut (priorité aux blocages) ──
  if (casierBloque) {
    return {
      status: 'bloque',
      titre: 'Un point de vigilance majeur',
      message: `Une condamnation à 6 mois ou plus d'emprisonnement ferme constitue une cause d'indignité qui entraîne, en principe, le rejet d'une demande de naturalisation. Un avis juridique personnalisé est indispensable avant toute démarche.`,
      checklist,
      etapes: ['Consultez un·e professionnel·le du droit des étrangers pour évaluer une éventuelle réhabilitation ou une autre voie.'],
    };
  }

  if (langueFaible) {
    return {
      status: 'langue',
      titre: `Objectif prioritaire : atteindre le niveau ${niv}`,
      message: `Pour « ${demarcheLabel(demarche)} », le niveau de français ${niv} est exigé. C'est aujourd'hui votre point bloquant : le reste de votre dossier pourra avancer une fois ce niveau atteint et justifié par un test certifié.`,
      checklist,
      etapes: [
        `Suivez une préparation ciblée pour atteindre le niveau ${niv} (oral et écrit).`,
        'Passez un test certifié récent (TCF / TEF / DELF) pour obtenir votre justificatif.',
        ...etapesBase.slice(1),
      ],
    };
  }

  if (demarche !== 'csp' && !dureeOk) {
    return {
      status: 'bientot',
      titre: dureeIntermediaire ? 'Vous approchez de l\'éligibilité' : 'Il est encore un peu tôt',
      message: demarche === 'naturalisation'
        ? `La naturalisation par décret demande en principe 5 ans de résidence régulière (des réductions existent : diplôme supérieur français, statut de réfugié, etc.). En attendant, vous pouvez déjà préparer l'examen civique et votre niveau de français — c'est ce qui fait la différence le jour du dépôt.`
        : `La carte de résident suppose une ancienneté de séjour suffisante (souvent 3 à 5 ans selon votre situation). Prenez de l'avance sur l'examen civique et le niveau de français.`,
      checklist,
      etapes: etapesBase,
    };
  }

  // Sinon : conditions essentielles réunies.
  return {
    status: 'pret',
    titre: 'Bonne nouvelle : vous réunissez les conditions essentielles',
    message: `D'après vos réponses, rien ne bloque votre démarche « ${demarcheLabel(demarche)} ». Il reste à consolider votre dossier et à préparer l'examen civique${demarche === 'naturalisation' ? ' et l\'entretien d\'assimilation' : ''} pour mettre toutes les chances de votre côté.`,
    checklist,
    etapes: etapesBase,
  };
}

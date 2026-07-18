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
      { value: 'sans_titre', label: 'Sans titre de séjour valide, ou sous OQTF' },
    ],
  },
  {
    id: 'situation',
    theme: 'Votre situation',
    question: 'Êtes-vous dans l\'une de ces situations particulières ?',
    help: 'Certaines situations réduisent, voire suppriment, la durée de résidence exigée — ou relèvent d\'une autre procédure.',
    options: [
      { value: 'diplome_sup', label: 'Diplôme d\'un établissement supérieur français (2 ans d\'études)' },
      { value: 'refugie', label: 'Réfugié·e statutaire (protection reconnue)' },
      { value: 'francophone', label: 'Pays francophone / 5 ans de scolarité en français' },
      { value: 'conjoint_fr', label: 'Marié·e à un·e Français·e depuis 4 ans ou plus' },
      { value: 'aucune', label: 'Aucune de ces situations' },
    ],
    // Ces dispenses/réductions ne concernent que la naturalisation.
    showIf: (a) => a.demarche === 'naturalisation' && a.titre !== 'sans_titre',
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
    // Déterminante pour résident (≈3-5 ans) et naturalisation (5 ans).
    // Sautée si la personne n'a pas de titre valide (parcours régularisation).
    showIf: (a) => a.titre !== 'sans_titre' && (a.demarche === 'resident' || a.demarche === 'naturalisation'),
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
    showIf: (a) => a.titre !== 'sans_titre',
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
    showIf: (a) => a.titre !== 'sans_titre',
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
    showIf: (a) => a.titre !== 'sans_titre',
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
    showIf: (a) => a.titre !== 'sans_titre',
  },
];

/**
 * Parcours « régularisation » : la personne n'a pas de titre valide (ou est
 * sous OQTF). On ne lui pose pas les questions de préparation et on ne la
 * traite PAS comme un prospect commercial — on l'oriente vers un conseil
 * juridique. Choix éthique assumé : son blocage n'est pas l'examen.
 */
export function estParcoursRegularisation(a: Answers): boolean {
  return a.titre === 'sans_titre';
}

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

export type VerdictStatus = 'pret' | 'bientot' | 'langue' | 'bloque' | 'a_verifier' | 'regularisation' | 'autre_voie';

export interface ChecklistItem {
  label: string;
  ok: boolean | 'warn';
}

/**
 * Routage du prospect — sert à qualifier le lead pour la mise en relation.
 * 'avocat'    : situation juridique prioritaire (OQTF, indignité, cas complexe)
 * 'formation' : le blocage est la préparation (civique / dossier)
 * 'langue'    : le blocage est le niveau de français
 * 'mixte'     : les deux sont pertinents
 */
export type Routage = 'avocat' | 'formation' | 'langue' | 'mixte';

export interface Verdict {
  status: VerdictStatus;
  titre: string;
  message: string;
  checklist: ChecklistItem[];
  etapes: string[];
  /** Qualification du prospect pour la mise en relation. */
  routage: Routage;
  /** Libellé lisible de la qualification (pour la notification interne). */
  qualification: string;
}

export function computeVerdict(a: Answers): Verdict {
  const demarche = (a.demarche ?? 'naturalisation') as Demarche;
  const niv = niveauRequis(demarche);

  // ── Priorité absolue : situation administrative à régulariser (OQTF / sans titre).
  // On n'oriente PAS vers une offre de préparation : ce n'est pas le blocage.
  if (estParcoursRegularisation(a)) {
    return {
      status: 'regularisation',
      titre: 'Votre situation nécessite un avocat, rapidement',
      message:
        "Sans titre de séjour valide — ou sous obligation de quitter le territoire (OQTF) — les démarches de titre de séjour et de naturalisation supposent d'abord de régulariser votre séjour. ⚠️ Les délais de recours contre une OQTF sont très courts (souvent 48 heures à 30 jours selon la mesure) : chaque jour compte. Nous pouvons vous mettre en relation avec un·e avocat·e partenaire spécialisé·e en droit des étrangers, qui évaluera un recours ou une voie de régularisation adaptée à votre situation.",
      checklist: [],
      etapes: [
        "Restez joignable : un·e avocat·e partenaire vous recontacte pour examiner votre dossier.",
        "Rassemblez dès maintenant vos documents : notification de l'OQTF (avec sa date), passeport, justificatifs de présence en France.",
        "Réunissez les preuves de vos attaches : travail, famille, scolarité des enfants, santé, ancienneté de présence.",
        "Ne laissez pas filer les délais : un recours hors délai est irrecevable, même si votre dossier est solide.",
      ],
      routage: 'avocat',
      qualification: 'PRIORITAIRE — OQTF / sans titre : à transmettre à l\'avocat partenaire sans délai',
    };
  }

  // ── Voie particulière : conjoint·e de Français·e (déclaration, pas décret).
  if (demarche === 'naturalisation' && a.situation === 'conjoint_fr') {
    return {
      status: 'autre_voie',
      titre: 'Une autre voie, plus rapide, vous concerne',
      message:
        "Marié·e à un·e Français·e depuis 4 ans ou plus, vous relevez en principe de l'acquisition de la nationalité **par déclaration** (article 21-2 du Code civil) et non de la naturalisation par décret. La procédure est différente et souvent plus courte : pas de condition de durée de résidence de 5 ans, mais une communauté de vie et un niveau de français exigés. L'examen civique et l'entretien restent au programme.",
      checklist: [
        { label: `Niveau de français ${niv} à justifier`, ok: a.langue === 'dip' || a.langue === 'cert' ? true : 'warn' },
        { label: 'Communauté de vie à prouver', ok: 'warn' },
        { label: 'Connaissances civiques à préparer', ok: a.civique === 'good' ? true : 'warn' },
      ],
      etapes: [
        "Vérifiez les conditions de la déclaration par mariage (durée de communauté de vie, résidence).",
        `Justifiez votre niveau de français ${niv} par un diplôme ou un test certifié.`,
        `Préparez l'examen civique (objectif ${EXAMEN_CIVIQUE.seuilReussite}/${EXAMEN_CIVIQUE.nbQuestions}) et l'entretien.`,
        "Déposez votre déclaration auprès de l'autorité compétente.",
      ],
      routage: 'mixte',
      qualification: 'Voie déclaration par mariage (art. 21-2) — procédure spécifique : avocat utile + préparation',
    };
  }

  // Blocage dur : indignité (prison ferme ≥ 6 mois).
  const casierBloque = a.casier === 'prison';
  // Langue insuffisante / non justifiée réellement.
  const langueOk = a.langue === 'dip' || a.langue === 'cert';
  const langueFaible = a.langue === 'weak';
  // Durée (seulement demandée pour resident / naturalisation), corrigée par les
  // dispenses/réductions de stage (service-public.fr F2213) :
  //  - réfugié·e statutaire / francophone → aucune durée exigée
  //  - diplôme d'un établissement supérieur français → stage réduit à 2 ans
  const dispenseTotale = a.situation === 'refugie' || a.situation === 'francophone';
  const stageReduit = a.situation === 'diplome_sup';
  const dureeOk =
    dispenseTotale ||
    a.duree === '5plus' ||
    (stageReduit && a.duree === '2to4');
  const dureeIntermediaire = !dureeOk && a.duree === '2to4';
  const fiscalOk = a.fiscal === 'ok' || a.fiscal === 'noincome';

  const checklist: ChecklistItem[] = [];
  if (demarche !== 'csp') {
    checklist.push({
      label: dispenseTotale
        ? 'Durée de résidence : dispense applicable à votre situation'
        : stageReduit
          ? 'Durée de résidence (stage réduit à 2 ans — diplôme français)'
          : demarche === 'naturalisation' ? '5 ans de résidence régulière' : 'Ancienneté de séjour suffisante',
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
      message: `Une condamnation à 6 mois ou plus d'emprisonnement ferme constitue une cause d'indignité qui entraîne, en principe, le rejet d'une demande de naturalisation. Tout n'est pas figé pour autant : réhabilitation, effacement de la condamnation, ancienneté des faits ou autre voie de séjour peuvent changer la donne. C'est typiquement une situation où l'avis d'un·e avocat·e est décisif — nous pouvons vous mettre en relation.`,
      checklist,
      etapes: [
        "Restez joignable : un·e avocat·e partenaire vous recontacte pour qualifier votre situation.",
        "Rassemblez les pièces utiles : décision de condamnation, date des faits, éventuelle réhabilitation.",
        "N'engagez pas de démarche avant cet avis : un rejet laisse une trace dans votre dossier.",
      ],
      routage: 'avocat',
      qualification: 'Indignité (prison ferme ≥ 6 mois) — dossier juridique complexe, à qualifier par l\'avocat',
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
      routage: 'langue',
      qualification: `Blocage langue — niveau ${niv} non atteint : prospect formation linguistique`,
    };
  }

  if (demarche !== 'csp' && !dureeOk) {
    return {
      status: 'bientot',
      titre: dureeIntermediaire ? 'Vous approchez de l\'éligibilité' : 'Il est encore un peu tôt',
      message: demarche === 'naturalisation'
        ? `La naturalisation par décret demande en principe 5 ans de résidence régulière (des réductions existent : diplôme supérieur français, statut de réfugié, etc.). En attendant, vous pouvez déjà préparer l'examen civique et votre niveau de français — c'est ce qui fait la différence le jour du dépôt.`
        : `La carte de résident suppose une ancienneté de séjour suffisante (souvent 3 à 5 ans selon votre situation, moins dans certains cas : conjoint·e de Français·e, parent d'enfant français…). Prenez de l'avance sur l'examen civique et le niveau de français.`,
      checklist,
      etapes: etapesBase,
      routage: 'mixte',
      qualification: dureeIntermediaire
        ? 'Proche de l\'éligibilité — bon prospect formation ; vérification durée/dispense par avocat utile'
        : 'Éligibilité future — prospect formation à nourrir (durée insuffisante)',
    };
  }

  // Sinon : conditions essentielles réunies.
  return {
    status: 'pret',
    titre: 'Bonne nouvelle : vous réunissez les conditions essentielles',
    message: `D'après vos réponses, rien ne bloque votre démarche « ${demarcheLabel(demarche)} ». Il reste à consolider votre dossier et à préparer l'examen civique${demarche === 'naturalisation' ? ' et l\'entretien d\'assimilation' : ''} pour mettre toutes les chances de votre côté. Si vous souhaitez sécuriser le montage de votre dossier, nous pouvons aussi vous mettre en relation avec un·e avocat·e partenaire.`,
    checklist,
    etapes: etapesBase,
    routage: fiscalOk ? 'formation' : 'mixte',
    qualification: fiscalOk
      ? 'CHAUD — conditions réunies : prospect formation prioritaire'
      : 'Conditions réunies mais point fiscal à régler — formation + vérification avocat',
  };
}

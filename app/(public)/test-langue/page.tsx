'use client';

import { useState } from 'react';
import { FileText, Clock, CheckCircle } from 'lucide-react';

// ─── Textes de compréhension ─────────────────────────────────────────────────

const READING_TEXTS: Record<string, { label: string; text: string }> = {
  t1: {
    label: 'Lisez ce message, puis répondez aux questions :',
    text: `Madame, Monsieur,

Suite à votre demande de rendez-vous, nous vous informons qu'une place est disponible le 15 mars à 14h30 à la préfecture. Veuillez vous présenter avec votre passeport et votre justificatif de domicile. En cas d'empêchement, contactez-nous au 01 23 45 67 89.

Cordialement,
Le Service des Étrangers`,
  },
  t2: {
    label: 'Lisez ce texte, puis répondez aux questions :',
    text: `Le renouvellement de votre titre de séjour doit être effectué deux mois avant la date d'expiration. Pour ce faire, vous devez constituer un dossier comprenant : une demande en ligne sur le site de l'ANEF, les justificatifs de ressources des trois derniers mois, un justificatif de domicile de moins de trois mois, ainsi que des photos d'identité récentes. Le dossier incomplet ne sera pas traité.`,
  },
  t3: {
    label: 'Lisez ce texte, puis répondez aux questions :',
    text: `Depuis le 1er janvier 2026, l'acquisition de la nationalité française par naturalisation requiert la justification d'un niveau B2 en langue française. Cette exigence, rehaussée par rapport au niveau B1 précédemment en vigueur, vise à garantir une intégration linguistique plus approfondie. Les candidats devront présenter un diplôme reconnu — DELF, TCF ou TEF — datant de moins de cinq ans. Les titulaires d'un diplôme obtenu dans un pays francophone ou d'un diplôme français de niveau au moins égal au baccalauréat sont dispensés de cette obligation.`,
  },
};

// ─── Questions ───────────────────────────────────────────────────────────────

type Section = 'Vocabulaire' | 'Grammaire' | 'Compréhension';
type CEFRLevel = 'A2' | 'B1' | 'B2';

interface Question {
  id: number;
  section: Section;
  level: CEFRLevel;
  text: string;
  context?: keyof typeof READING_TEXTS;
  options: [string, string, string, string];
  answer: 0 | 1 | 2 | 3;
}

const QUESTIONS: Question[] = [
  // ── Vocabulaire — A2 ──────────────────────────────────────────────────────
  {
    id: 1, section: 'Vocabulaire', level: 'A2',
    text: "Quel mot décrit une personne qui n'a pas de travail ?",
    options: ['Retraité', 'Chômeur', 'Étudiant', 'Directeur'],
    answer: 1,
  },
  {
    id: 2, section: 'Vocabulaire', level: 'A2',
    text: 'Complétez : "Je dois ___ ce formulaire avant vendredi."',
    options: ['conduire', 'chanter', 'remplir', 'construire'],
    answer: 2,
  },
  {
    id: 3, section: 'Vocabulaire', level: 'A2',
    text: 'Quel document prouve où vous habitez ?',
    options: ['Un ticket de caisse', 'Un justificatif de domicile', 'Une ordonnance', 'Un diplôme'],
    answer: 1,
  },
  // ── Vocabulaire — B1 ──────────────────────────────────────────────────────
  {
    id: 4, section: 'Vocabulaire', level: 'B1',
    text: 'Choisissez le synonyme de "réclamer" :',
    options: ['Donner', 'Exiger', 'Recevoir', 'Oublier'],
    answer: 1,
  },
  {
    id: 5, section: 'Vocabulaire', level: 'B1',
    text: '"Malgré ses efforts, il n\'a pas ___ à obtenir un rendez-vous."',
    options: ['essayé', 'réussi', 'voulu', 'pensé'],
    answer: 1,
  },
  {
    id: 6, section: 'Vocabulaire', level: 'B1',
    text: 'Le mot "bienveillant" signifie :',
    options: ['Méchant', 'Indifférent', 'Attentionné', 'Maladroit'],
    answer: 2,
  },
  {
    id: 7, section: 'Vocabulaire', level: 'B1',
    text: '"Sa demande a été ___ car il manquait des pièces justificatives."',
    options: ['acceptée', 'rejetée', 'signée', 'ouverte'],
    answer: 1,
  },
  // ── Vocabulaire — B2 ──────────────────────────────────────────────────────
  {
    id: 8, section: 'Vocabulaire', level: 'B2',
    text: '"Cette prestation est ___ aux personnes en situation régulière."',
    options: ['réservée', 'offerte', 'donnée', 'transmise'],
    answer: 0,
  },
  {
    id: 9, section: 'Vocabulaire', level: 'B2',
    text: "Quel terme désigne le fait d'acquérir la nationalité française ?",
    options: ['La résidence', 'La régularisation', 'La naturalisation', "L'intégration"],
    answer: 2,
  },
  {
    id: 10, section: 'Vocabulaire', level: 'B2',
    text: '"Il convient de ___ les arguments pour et contre avant de décider."',
    options: ['ignorer', 'peser', 'oublier', 'éviter'],
    answer: 1,
  },
  // ── Grammaire — A2 ────────────────────────────────────────────────────────
  {
    id: 11, section: 'Grammaire', level: 'A2',
    text: 'Complétez : "Hier, je ___ au bureau à 8 heures."',
    options: ['vais', 'suis allé(e)', 'allais', 'irai'],
    answer: 1,
  },
  {
    id: 12, section: 'Grammaire', level: 'A2',
    text: 'Elle ___ en France depuis 2 ans. Choisissez la bonne forme :',
    options: ['vivait', 'a vécu', 'vit', 'vivra'],
    answer: 2,
  },
  {
    id: 13, section: 'Grammaire', level: 'A2',
    text: '"Je travaille ___ lundi ___ vendredi." Choisissez les bonnes prépositions :',
    options: ['de / à', 'du / au', "depuis / jusqu'à", 'de / pour'],
    answer: 1,
  },
  {
    id: 14, section: 'Grammaire', level: 'A2',
    text: '"C\'est ___ appartement dont je t\'avais parlé." Quel article ?',
    options: ['le', 'un', "l'", 'ce'],
    answer: 2,
  },
  // ── Grammaire — B1 ────────────────────────────────────────────────────────
  {
    id: 15, section: 'Grammaire', level: 'B1',
    text: 'Complétez : "Je voudrais que tu ___ ce document."',
    options: ['signe', 'signes', 'signais', 'signeras'],
    answer: 1,
  },
  {
    id: 16, section: 'Grammaire', level: 'B1',
    text: '"Si j\'avais plus de temps, je ___ un cours de français."',
    options: ['prendrai', 'prends', 'prendrais', 'ai pris'],
    answer: 2,
  },
  {
    id: 17, section: 'Grammaire', level: 'B1',
    text: '"C\'est l\'employée ___ s\'occupe des dossiers de naturalisation."',
    options: ['qui', 'que', 'dont', 'où'],
    answer: 0,
  },
  {
    id: 18, section: 'Grammaire', level: 'B1',
    text: '"Il m\'a dit ___ il serait absent la semaine suivante." Quel mot ?',
    options: ['que', "qu'", 'si', 'quand'],
    answer: 1,
  },
  // ── Grammaire — B2 ────────────────────────────────────────────────────────
  {
    id: 19, section: 'Grammaire', level: 'B2',
    text: '"La décision ___ par le préfet a été contestée." Complétez :',
    options: ['a pris', 'prise', 'prenait', 'prend'],
    answer: 1,
  },
  {
    id: 20, section: 'Grammaire', level: 'B2',
    text: '"___ que les conditions soient remplies, le titre sera renouvelé." Complétez :',
    options: ['À condition', 'Supposer', 'À moins', 'À partir'],
    answer: 0,
  },
  // ── Compréhension — Texte 1 A2 ────────────────────────────────────────────
  {
    id: 21, section: 'Compréhension', level: 'A2',
    context: 't1',
    text: "Quel est l'objet principal de ce message ?",
    options: ['Annuler un rendez-vous', 'Confirmer un rendez-vous disponible', 'Demander des documents manquants', 'Proposer un emploi'],
    answer: 1,
  },
  {
    id: 22, section: 'Compréhension', level: 'A2',
    context: 't1',
    text: 'Quels documents faut-il apporter ?',
    options: ['Le passeport seulement', 'Le justificatif de domicile seulement', 'Le passeport et le justificatif de domicile', 'La carte de séjour et le passeport'],
    answer: 2,
  },
  {
    id: 23, section: 'Compréhension', level: 'A2',
    context: 't1',
    text: "Que doit faire la personne si elle ne peut pas venir ?",
    options: ['Envoyer un email', 'Appeler le numéro indiqué', 'Se présenter quand même', 'Attendre un nouveau message'],
    answer: 1,
  },
  // ── Compréhension — Texte 2 B1 ────────────────────────────────────────────
  {
    id: 24, section: 'Compréhension', level: 'B1',
    context: 't2',
    text: "Quand faut-il faire la demande de renouvellement ?",
    options: ["Le jour de l'expiration", "Un mois avant l'expiration", "Deux mois avant l'expiration", "Trois mois avant l'expiration"],
    answer: 2,
  },
  {
    id: 25, section: 'Compréhension', level: 'B1',
    context: 't2',
    text: "Où doit-on soumettre la demande ?",
    options: ['À la préfecture directement', "Sur le site de l'ANEF en ligne", 'Par courrier postal', 'Au commissariat'],
    answer: 1,
  },
  {
    id: 26, section: 'Compréhension', level: 'B1',
    context: 't2',
    text: "Que se passe-t-il si le dossier est incomplet ?",
    options: ['Il sera traité avec un délai supplémentaire', "Il faudra payer une amende", 'Il ne sera pas traité', 'Il sera retourné par courrier'],
    answer: 2,
  },
  // ── Compréhension — Texte 3 B2 ────────────────────────────────────────────
  {
    id: 27, section: 'Compréhension', level: 'B2',
    context: 't3',
    text: "Quel niveau de français est exigé pour la naturalisation depuis 2026 ?",
    options: ['A2', 'B1', 'B2', 'C1'],
    answer: 2,
  },
  {
    id: 28, section: 'Compréhension', level: 'B2',
    context: 't3',
    text: "Quel était le niveau requis avant la réforme de 2026 ?",
    options: ['A1', 'A2', 'B1', 'B2'],
    answer: 2,
  },
  {
    id: 29, section: 'Compréhension', level: 'B2',
    context: 't3',
    text: "Qui est dispensé de fournir une preuve de niveau de français ?",
    options: ['Les personnes nées en France', 'Les personnes parlant anglais', "Les titulaires d'un baccalauréat français", 'Les personnes mariées à un Français'],
    answer: 2,
  },
  {
    id: 30, section: 'Compréhension', level: 'B2',
    context: 't3',
    text: "Quelle est la durée de validité maximale du diplôme de langue accepté ?",
    options: ['1 an', '2 ans', '3 ans', '5 ans'],
    answer: 3,
  },
];

// ─── Calcul du résultat ───────────────────────────────────────────────────────

interface Result {
  level: 'A1' | 'A2' | 'B1' | 'B2';
  levelLabel: string;
  levelColor: string;
  demarche: string;
  vocScore: number;
  gramScore: number;
  compScore: number;
  a2Correct: number;
  b1Correct: number;
  b2Correct: number;
}

function calculateResult(answers: (number | null)[]): Result {
  let vocScore = 0, gramScore = 0, compScore = 0;
  let a2Correct = 0, b1Correct = 0, b2Correct = 0;

  QUESTIONS.forEach((q, i) => {
    const correct = answers[i] === q.answer;
    if (q.section === 'Vocabulaire') vocScore += correct ? 1 : 0;
    if (q.section === 'Grammaire') gramScore += correct ? 1 : 0;
    if (q.section === 'Compréhension') compScore += correct ? 1 : 0;
    if (q.level === 'A2') a2Correct += correct ? 1 : 0;
    if (q.level === 'B1') b1Correct += correct ? 1 : 0;
    if (q.level === 'B2') b2Correct += correct ? 1 : 0;
  });

  const a2Rate = a2Correct / 10;
  const b1Rate = b1Correct / 10;
  const b2Rate = b2Correct / 10;

  let level: Result['level'];
  let levelLabel: string;
  let levelColor: string;
  let demarche: string;

  if (b2Rate >= 0.65) {
    level = 'B2'; levelLabel = 'Avancé'; levelColor = '#1B5E20';
    demarche = "Votre niveau correspond aux exigences de la naturalisation française (réforme janvier 2026). Vous pouvez envisager de préparer un diplôme certifiant : DELF B2, TCF ou TEF.";
  } else if (b1Rate >= 0.6) {
    level = 'B1'; levelLabel = 'Intermédiaire'; levelColor = '#002395';
    demarche = "Votre niveau correspond à la carte de résident (10 ans). Pour la naturalisation, un renforcement vers le B2 est nécessaire depuis janvier 2026.";
  } else if (a2Rate >= 0.55) {
    level = 'A2'; levelLabel = 'Élémentaire'; levelColor = '#B45309';
    demarche = "Votre niveau correspond à la première carte de séjour pluriannuelle. Une formation linguistique vous aidera à progresser vers le B1, puis le B2 pour la naturalisation.";
  } else {
    level = 'A1'; levelLabel = 'Débutant'; levelColor = '#9F1239';
    demarche = "Votre niveau de français est encore débutant. Une formation linguistique est recommandée pour atteindre le niveau A2, requis pour votre titre de séjour.";
  }

  return { level, levelLabel, levelColor, demarche, vocScore, gramScore, compScore, a2Correct, b1Correct, b2Correct };
}

// ─── Constantes UI ───────────────────────────────────────────────────────────

const SECTION_COLORS: Record<Section, string> = {
  Vocabulaire: '#002395',
  Grammaire: '#6B21A8',
  Compréhension: '#065F46',
};

type Phase = 'intro' | 'quiz' | 'result';

// ─── Page ────────────────────────────────────────────────────────────────────

export default function TestLanguePage() {
  const [phase, setPhase] = useState<Phase>('intro');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(30).fill(null));
  const [selected, setSelected] = useState<number | null>(null);
  const [result, setResult] = useState<Result | null>(null);

  const question = QUESTIONS[currentIndex];
  const sectionColor = question ? SECTION_COLORS[question.section] : '#002395';

  function handleStart() {
    setPhase('quiz');
    setCurrentIndex(0);
    setAnswers(Array(30).fill(null));
    setSelected(null);
    setResult(null);
  }

  function handleNext() {
    if (selected === null) return;
    const newAnswers = [...answers];
    newAnswers[currentIndex] = selected;
    setAnswers(newAnswers);
    setSelected(null);

    if (currentIndex === QUESTIONS.length - 1) {
      setResult(calculateResult(newAnswers));
      setPhase('result');
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }

  // ── Écran d'introduction ──────────────────────────────────────────────────

  if (phase === 'intro') {
    return (
      <div style={{ maxWidth: 560, margin: '0 auto', padding: '48px 20px 80px', fontFamily: 'var(--font-sans, system-ui)' }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <div style={{
            display: 'inline-block', background: '#EFF6FF', borderRadius: 100,
            padding: '6px 18px', marginBottom: 20,
          }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: '#002395', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Test de positionnement en langue française
            </span>
          </div>
          <h1 style={{ fontSize: 30, fontWeight: 800, color: '#0A0F2E', margin: '0 0 14px', lineHeight: 1.2 }}>
            Quel est votre niveau de français ?
          </h1>
          <p style={{ fontSize: 15, color: '#475569', margin: 0, lineHeight: 1.65 }}>
            Ce test évalue votre niveau selon le référentiel européen CECRL. Le résultat aide votre conseiller à vous proposer la formation adaptée.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
          {([
            { Icon: FileText, title: '30 questions', desc: 'Vocabulaire, grammaire et compréhension écrite' },
            { Icon: Clock, title: 'Environ 12 minutes', desc: "Pas de chronomètre — prenez votre temps" },
            { Icon: CheckCircle, title: 'Résultat immédiat', desc: 'Votre niveau estimé apparaît à la fin' },
          ] as const).map(({ Icon, title, desc }) => (
            <div key={title} style={{
              display: 'flex', alignItems: 'center', gap: 14,
              background: '#F8FAFF', border: '1px solid #E2E8F0',
              borderRadius: 12, padding: '14px 16px',
            }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon size={18} color="#002395" />
              </div>
              <div>
                <p style={{ margin: '0 0 2px', fontWeight: 700, fontSize: 14, color: '#0A0F2E' }}>{title}</p>
                <p style={{ margin: 0, fontSize: 13, color: '#64748B' }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleStart}
          style={{
            width: '100%', padding: '16px', borderRadius: 14,
            background: '#002395', color: '#fff', border: 'none',
            fontSize: 16, fontWeight: 700, cursor: 'pointer',
          }}
        >
          Commencer le test →
        </button>

        <p style={{ textAlign: 'center', fontSize: 12, color: '#94A3B8', marginTop: 14, lineHeight: 1.5 }}>
          Ce test est indicatif et ne remplace pas un diplôme officiel (DELF, TCF, TEF).
        </p>
      </div>
    );
  }

  // ── Écran résultat ────────────────────────────────────────────────────────

  if (phase === 'result' && result) {
    const total = result.vocScore + result.gramScore + result.compScore;
    return (
      <div style={{ maxWidth: 560, margin: '0 auto', padding: '40px 20px 80px', fontFamily: 'var(--font-sans, system-ui)' }}>
        {/* Badge niveau */}
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <div style={{
            display: 'inline-flex', flexDirection: 'column', alignItems: 'center',
            background: result.levelColor, color: '#fff', borderRadius: 20,
            padding: '28px 48px', marginBottom: 20, boxShadow: `0 8px 32px ${result.levelColor}40`,
          }}>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.8, marginBottom: 4 }}>
              Niveau estimé
            </span>
            <span style={{ fontSize: 64, fontWeight: 900, lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>
              {result.level}
            </span>
            <span style={{ fontSize: 15, fontWeight: 500, marginTop: 8, opacity: 0.9 }}>
              {result.levelLabel}
            </span>
          </div>
          <p style={{ fontSize: 14, color: '#334155', lineHeight: 1.7, margin: '0 auto', maxWidth: 440 }}>
            {result.demarche}
          </p>
        </div>

        {/* Scores par compétence */}
        <div style={{ background: '#F8FAFF', border: '1px solid #E2E8F0', borderRadius: 16, padding: 20, marginBottom: 16 }}>
          <h3 style={{ margin: '0 0 18px', fontSize: 13, fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Résultats par compétence
          </h3>
          {([
            { label: 'Vocabulaire', score: result.vocScore, color: SECTION_COLORS.Vocabulaire },
            { label: 'Grammaire', score: result.gramScore, color: SECTION_COLORS.Grammaire },
            { label: 'Compréhension', score: result.compScore, color: SECTION_COLORS.Compréhension },
          ]).map(({ label, score, color }) => (
            <div key={label} style={{ marginBottom: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 7 }}>
                <span style={{ fontSize: 14, fontWeight: 600, color: '#334155' }}>{label}</span>
                <span style={{ fontSize: 14, fontWeight: 700, color }}>{score} / 10</span>
              </div>
              <div style={{ height: 8, borderRadius: 100, background: '#E2E8F0', overflow: 'hidden' }}>
                <div style={{
                  height: '100%', borderRadius: 100, background: color,
                  width: `${(score / 10) * 100}%`,
                }} />
              </div>
            </div>
          ))}
          <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: 14, marginTop: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: '#0A0F2E' }}>Score total</span>
            <span style={{ fontSize: 16, fontWeight: 800, color: '#0A0F2E' }}>{total} / 30</span>
          </div>
        </div>

        {/* Échelle CECRL */}
        <div style={{ background: '#F8FAFF', border: '1px solid #E2E8F0', borderRadius: 16, padding: 20, marginBottom: 16 }}>
          <h3 style={{ margin: '0 0 14px', fontSize: 13, fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Niveaux CECRL et démarches administratives
          </h3>
          {([
            { lvl: 'A2', label: 'Élémentaire', demarche: 'Carte de séjour pluriannuelle (CSP)', color: '#B45309' },
            { lvl: 'B1', label: 'Intermédiaire', demarche: 'Carte de résident — 10 ans', color: '#002395' },
            { lvl: 'B2', label: 'Avancé', demarche: 'Naturalisation (exigé depuis jan. 2026)', color: '#1B5E20' },
          ]).map(({ lvl, label, demarche, color }, i, arr) => {
            const isUser = result.level === lvl;
            return (
              <div key={lvl} style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: '10px 0',
                borderBottom: i < arr.length - 1 ? '1px solid #F1F5F9' : undefined,
                opacity: isUser ? 1 : 0.45,
              }}>
                <span style={{ fontWeight: 900, fontSize: 16, color, minWidth: 30, flexShrink: 0 }}>{lvl}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ margin: '0 0 2px', fontSize: 13, fontWeight: 700, color: '#334155' }}>{label}</p>
                  <p style={{ margin: 0, fontSize: 12, color: '#64748B' }}>{demarche}</p>
                </div>
                {isUser && (
                  <span style={{
                    flexShrink: 0, fontSize: 11, background: color, color: '#fff',
                    borderRadius: 100, padding: '3px 10px', fontWeight: 700, whiteSpace: 'nowrap',
                  }}>
                    Votre niveau
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Note expert */}
        <div style={{ background: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: 12, padding: 16, marginBottom: 24 }}>
          <p style={{ margin: 0, fontSize: 13, color: '#1E40AF', lineHeight: 1.6 }}>
            Votre conseiller va analyser ces résultats avec vous et vous proposer la formation linguistique adaptée à votre parcours.
          </p>
        </div>

        <button
          onClick={handleStart}
          style={{
            width: '100%', padding: '14px', borderRadius: 12,
            background: '#F1F5F9', color: '#475569', border: 'none',
            fontSize: 14, fontWeight: 600, cursor: 'pointer',
          }}
        >
          Refaire le test
        </button>
      </div>
    );
  }

  // ── Écran quiz ────────────────────────────────────────────────────────────

  const prevQuestion = currentIndex > 0 ? QUESTIONS[currentIndex - 1] : null;
  const showContextText = !!question.context && question.context !== prevQuestion?.context;

  return (
    <div style={{ maxWidth: 560, margin: '0 auto', padding: '28px 20px 80px', fontFamily: 'var(--font-sans, system-ui)' }}>
      {/* Barre de progression */}
      <div style={{ marginBottom: 28 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
          <span style={{
            fontSize: 11, fontWeight: 700, color: sectionColor,
            textTransform: 'uppercase', letterSpacing: '0.06em',
          }}>
            {question.section}
          </span>
          <span style={{ fontSize: 12, color: '#94A3B8', fontWeight: 600 }}>
            {currentIndex + 1} / {QUESTIONS.length}
          </span>
        </div>
        <div style={{ height: 5, borderRadius: 100, background: '#E2E8F0', overflow: 'hidden' }}>
          <div style={{
            height: '100%', borderRadius: 100, background: sectionColor,
            width: `${((currentIndex + 1) / QUESTIONS.length) * 100}%`,
            transition: 'width 300ms ease-out',
          }} />
        </div>
      </div>

      {/* Texte de lecture (compréhension) */}
      {showContextText && question.context && (
        <div style={{
          background: '#FAFAFA', border: '1px solid #E2E8F0',
          borderLeft: `4px solid ${sectionColor}`,
          borderRadius: 12, padding: 18, marginBottom: 24,
        }}>
          <p style={{ margin: '0 0 10px', fontSize: 11, fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {READING_TEXTS[question.context].label}
          </p>
          <p style={{ margin: 0, fontSize: 14, color: '#334155', lineHeight: 1.75, whiteSpace: 'pre-line' }}>
            {READING_TEXTS[question.context].text}
          </p>
        </div>
      )}

      {/* Question */}
      <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0A0F2E', margin: '0 0 22px', lineHeight: 1.4 }}>
        {question.text}
      </h2>

      {/* Options */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
        {question.options.map((opt, i) => {
          const isSelected = selected === i;
          return (
            <button
              key={i}
              onClick={() => setSelected(i)}
              style={{
                textAlign: 'left', padding: '14px 16px', borderRadius: 12,
                border: isSelected ? `2px solid ${sectionColor}` : '2px solid #E2E8F0',
                background: isSelected ? `${sectionColor}0F` : '#fff',
                cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 12,
                transition: 'border-color 120ms, background 120ms',
              }}
            >
              <span style={{
                width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                border: `2px solid ${isSelected ? sectionColor : '#CBD5E1'}`,
                background: isSelected ? sectionColor : 'transparent',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 11, fontWeight: 800,
                color: isSelected ? '#fff' : '#94A3B8',
                transition: 'all 120ms',
              }}>
                {['A', 'B', 'C', 'D'][i]}
              </span>
              <span style={{
                fontSize: 14, fontWeight: isSelected ? 600 : 400,
                color: isSelected ? sectionColor : '#334155',
                lineHeight: 1.4, flex: 1,
              }}>
                {opt}
              </span>
            </button>
          );
        })}
      </div>

      {/* Bouton suivant */}
      <button
        onClick={handleNext}
        disabled={selected === null}
        style={{
          width: '100%', padding: '15px', borderRadius: 14, border: 'none',
          background: selected !== null ? sectionColor : '#E2E8F0',
          color: selected !== null ? '#fff' : '#94A3B8',
          fontSize: 15, fontWeight: 700,
          cursor: selected !== null ? 'pointer' : 'default',
          transition: 'background 150ms, color 150ms',
        }}
      >
        {currentIndex === QUESTIONS.length - 1 ? 'Voir mon résultat →' : 'Question suivante →'}
      </button>
    </div>
  );
}

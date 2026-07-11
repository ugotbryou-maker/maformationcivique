'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// ─── Textes de compréhension ─────────────────────────────────────────────────

const READING_TEXTS: Record<string, { label: string; text: string }> = {
  t1: {
    label: 'Lisez ce message, puis répondez aux questions :',
    text: `Madame, Monsieur,

Suite à votre demande de rendez-vous, nous vous informons qu'une place est disponible le 15 mars à 14h30 à la préfecture. Veuillez vous présenter avec votre passeport et votre justificatif de domicile. En cas d'empêchement, contactez-nous au 01 23 45 67 89.

Cordialement, Le Service des Étrangers`,
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
  { id: 1,  section: 'Vocabulaire',   level: 'A2', text: "Quel mot décrit une personne qui n'a pas de travail ?", options: ['Retraité', 'Chômeur', 'Étudiant', 'Directeur'], answer: 1 },
  { id: 2,  section: 'Vocabulaire',   level: 'A2', text: 'Complétez : "Je dois ___ ce formulaire avant vendredi."', options: ['conduire', 'chanter', 'remplir', 'construire'], answer: 2 },
  { id: 3,  section: 'Vocabulaire',   level: 'A2', text: 'Quel document prouve où vous habitez ?', options: ['Un ticket de caisse', 'Un justificatif de domicile', 'Une ordonnance', 'Un diplôme'], answer: 1 },
  { id: 4,  section: 'Vocabulaire',   level: 'B1', text: 'Choisissez le synonyme de "réclamer" :', options: ['Donner', 'Exiger', 'Recevoir', 'Oublier'], answer: 1 },
  { id: 5,  section: 'Vocabulaire',   level: 'B1', text: '"Malgré ses efforts, il n\'a pas ___ à obtenir un rendez-vous."', options: ['essayé', 'réussi', 'voulu', 'pensé'], answer: 1 },
  { id: 6,  section: 'Vocabulaire',   level: 'B1', text: 'Le mot "bienveillant" signifie :', options: ['Méchant', 'Indifférent', 'Attentionné', 'Maladroit'], answer: 2 },
  { id: 7,  section: 'Vocabulaire',   level: 'B1', text: '"Sa demande a été ___ car il manquait des pièces justificatives."', options: ['acceptée', 'rejetée', 'signée', 'ouverte'], answer: 1 },
  { id: 8,  section: 'Vocabulaire',   level: 'B2', text: '"Cette prestation est ___ aux personnes en situation régulière."', options: ['réservée', 'offerte', 'donnée', 'transmise'], answer: 0 },
  { id: 9,  section: 'Vocabulaire',   level: 'B2', text: "Quel terme désigne le fait d'acquérir la nationalité française ?", options: ['La résidence', 'La régularisation', 'La naturalisation', "L'intégration"], answer: 2 },
  { id: 10, section: 'Vocabulaire',   level: 'B2', text: '"Il convient de ___ les arguments pour et contre avant de décider."', options: ['ignorer', 'peser', 'oublier', 'éviter'], answer: 1 },
  { id: 11, section: 'Grammaire',     level: 'A2', text: 'Complétez : "Hier, je ___ au bureau à 8 heures."', options: ['vais', 'suis allé(e)', 'allais', 'irai'], answer: 1 },
  { id: 12, section: 'Grammaire',     level: 'A2', text: 'Elle ___ en France depuis 2 ans. Choisissez la bonne forme :', options: ['vivait', 'a vécu', 'vit', 'vivra'], answer: 2 },
  { id: 13, section: 'Grammaire',     level: 'A2', text: '"Je travaille ___ lundi ___ vendredi." Prépositions :', options: ['de / à', 'du / au', "depuis / jusqu'à", 'de / pour'], answer: 1 },
  { id: 14, section: 'Grammaire',     level: 'A2', text: '"C\'est ___ appartement dont je t\'avais parlé." Quel article ?', options: ['le', 'un', "l'", 'ce'], answer: 2 },
  { id: 15, section: 'Grammaire',     level: 'B1', text: 'Complétez : "Je voudrais que tu ___ ce document."', options: ['signe', 'signes', 'signais', 'signeras'], answer: 1 },
  { id: 16, section: 'Grammaire',     level: 'B1', text: '"Si j\'avais plus de temps, je ___ un cours de français."', options: ['prendrai', 'prends', 'prendrais', 'ai pris'], answer: 2 },
  { id: 17, section: 'Grammaire',     level: 'B1', text: '"C\'est l\'employée ___ s\'occupe des dossiers de naturalisation."', options: ['qui', 'que', 'dont', 'où'], answer: 0 },
  { id: 18, section: 'Grammaire',     level: 'B1', text: '"Il m\'a dit ___ il serait absent la semaine suivante." Quel mot ?', options: ['que', "qu'", 'si', 'quand'], answer: 1 },
  { id: 19, section: 'Grammaire',     level: 'B2', text: '"La décision ___ par le préfet a été contestée." Complétez :', options: ['a pris', 'prise', 'prenait', 'prend'], answer: 1 },
  { id: 20, section: 'Grammaire',     level: 'B2', text: '"___ que les conditions soient remplies, le titre sera renouvelé."', options: ['À condition', 'Supposer', 'À moins', 'À partir'], answer: 0 },
  { id: 21, section: 'Compréhension', level: 'A2', context: 't1', text: "Quel est l'objet principal de ce message ?", options: ['Annuler un rendez-vous', 'Confirmer un rendez-vous disponible', 'Demander des documents manquants', 'Proposer un emploi'], answer: 1 },
  { id: 22, section: 'Compréhension', level: 'A2', context: 't1', text: 'Quels documents faut-il apporter ?', options: ['Le passeport seulement', 'Le justificatif de domicile seulement', 'Le passeport et le justificatif de domicile', 'La carte de séjour et le passeport'], answer: 2 },
  { id: 23, section: 'Compréhension', level: 'A2', context: 't1', text: "Que doit faire la personne si elle ne peut pas venir ?", options: ['Envoyer un email', 'Appeler le numéro indiqué', 'Se présenter quand même', 'Attendre un nouveau message'], answer: 1 },
  { id: 24, section: 'Compréhension', level: 'B1', context: 't2', text: "Quand faut-il faire la demande de renouvellement ?", options: ["Le jour de l'expiration", "Un mois avant l'expiration", "Deux mois avant l'expiration", "Trois mois avant l'expiration"], answer: 2 },
  { id: 25, section: 'Compréhension', level: 'B1', context: 't2', text: "Où doit-on soumettre la demande ?", options: ['À la préfecture directement', "Sur le site de l'ANEF en ligne", 'Par courrier postal', 'Au commissariat'], answer: 1 },
  { id: 26, section: 'Compréhension', level: 'B1', context: 't2', text: "Que se passe-t-il si le dossier est incomplet ?", options: ['Il sera traité avec un délai supplémentaire', "Il faudra payer une amende", 'Il ne sera pas traité', 'Il sera retourné par courrier'], answer: 2 },
  { id: 27, section: 'Compréhension', level: 'B2', context: 't3', text: "Quel niveau de français est exigé pour la naturalisation depuis 2026 ?", options: ['A2', 'B1', 'B2', 'C1'], answer: 2 },
  { id: 28, section: 'Compréhension', level: 'B2', context: 't3', text: "Quel était le niveau requis avant la réforme de 2026 ?", options: ['A1', 'A2', 'B1', 'B2'], answer: 2 },
  { id: 29, section: 'Compréhension', level: 'B2', context: 't3', text: "Qui est dispensé de fournir une preuve de niveau de français ?", options: ['Les personnes nées en France', 'Les personnes parlant anglais', "Les titulaires d'un baccalauréat français", 'Les personnes mariées à un Français'], answer: 2 },
  { id: 30, section: 'Compréhension', level: 'B2', context: 't3', text: "Quelle est la durée de validité maximale du diplôme de langue accepté ?", options: ['1 an', '2 ans', '3 ans', '5 ans'], answer: 3 },
];

// ─── Calcul du résultat ───────────────────────────────────────────────────────

interface Result {
  level: 'A1' | 'A2' | 'B1' | 'B2';
  total: number;
  correct: number;
}

function calculateResult(answers: (number | null)[]): Result {
  let correct = 0;
  let a2Correct = 0, b1Correct = 0, b2Correct = 0;

  QUESTIONS.forEach((q, i) => {
    if (answers[i] === q.answer) {
      correct++;
      if (q.level === 'A2') a2Correct++;
      if (q.level === 'B1') b1Correct++;
      if (q.level === 'B2') b2Correct++;
    }
  });

  let level: Result['level'];
  if (b2Correct / 10 >= 0.65) level = 'B2';
  else if (b1Correct / 10 >= 0.6) level = 'B1';
  else if (a2Correct / 10 >= 0.55) level = 'A2';
  else level = 'A1';

  return { level, total: QUESTIONS.length, correct };
}

// ─── Carte rouge Papiers Français ────────────────────────────────────────────

const SECTION_COLORS: Record<Section, string> = {
  Vocabulaire: '#1D4ED8',
  Grammaire: '#7C3AED',
  Compréhension: '#065F46',
};

function RedCard({
  children,
  showLogo = true,
}: {
  children: React.ReactNode;
  showLogo?: boolean;
}) {
  return (
    <div style={{
      minHeight: '100svh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px 16px',
      background: '#EBEBEB',
      fontFamily: 'var(--font-sans, system-ui)',
    }}>
      <div style={{
        width: '100%',
        maxWidth: 680,
        borderRadius: 22,
        overflow: 'hidden',
        position: 'relative',
        backgroundImage: `linear-gradient(rgba(185,5,18,0.80), rgba(195,8,22,0.87)), url('/images/modules/republique.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 62%',
        padding: '52px 36px 48px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        color: '#fff',
        boxShadow: '0 24px 64px rgba(185,5,18,0.22)',
      }}>
        {showLogo && (
          <Image
            src="/tenants/papiers-francais/logo-light.svg"
            alt="Papiers Français"
            width={150}
            height={43}
            style={{ marginBottom: 40, opacity: 0.97 }}
          />
        )}
        {children}
      </div>
    </div>
  );
}

function PillButton({
  onClick,
  children,
  disabled = false,
  variant = 'white',
}: {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  variant?: 'white' | 'ghost';
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: '14px 48px',
        borderRadius: 100,
        border: variant === 'ghost' ? '2px solid rgba(255,255,255,0.5)' : 'none',
        background: disabled ? 'rgba(255,255,255,0.25)' : variant === 'white' ? '#fff' : 'transparent',
        color: disabled ? 'rgba(255,255,255,0.5)' : variant === 'white' ? '#C0060F' : '#fff',
        fontSize: 15,
        fontWeight: 700,
        cursor: disabled ? 'default' : 'pointer',
        letterSpacing: '0.01em',
        transition: 'opacity 150ms',
        marginTop: 8,
      }}
    >
      {children}
    </button>
  );
}

// ─── Page principale ──────────────────────────────────────────────────────────

type Phase = 'welcome' | 'before' | 'quiz' | 'result' | 'form' | 'done';

interface LeadForm {
  nom: string;
  prenom: string;
  telephone: string;
  email: string;
  rgpd: boolean;
}

export default function TestLanguePage() {
  const [phase, setPhase] = useState<Phase>('welcome');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(30).fill(null));
  const [selected, setSelected] = useState<number | null>(null);
  const [result, setResult] = useState<Result | null>(null);
  const [lead, setLead] = useState<LeadForm>({ nom: '', prenom: '', telephone: '', email: '', rgpd: false });
  const [submitting, setSubmitting] = useState(false);
  const [rgpdOpen, setRgpdOpen] = useState(false);

  // Scroll to top on phase change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [phase]);

  function startQuiz() {
    setCurrentIndex(0);
    setAnswers(Array(30).fill(null));
    setSelected(null);
    setPhase('quiz');
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

  async function handleFormSubmit() {
    if (!lead.nom || !lead.prenom || !lead.email || !lead.telephone || !lead.rgpd) return;
    setSubmitting(true);
    // Placeholder — intégration CRM à venir
    await new Promise(r => setTimeout(r, 800));
    setSubmitting(false);
    setPhase('done');
  }

  // ── Bienvenue ───────────────────────────────────────────────────────────────

  if (phase === 'welcome') {
    return (
      <RedCard>
        <h1 style={{ fontSize: 28, fontWeight: 800, margin: '0 0 16px', lineHeight: 1.25, color: '#fff' }}>
          Bienvenue sur le test de langue
        </h1>
        <p style={{ fontSize: 15, lineHeight: 1.7, opacity: 0.9, margin: '0 0 40px', maxWidth: 440 }}>
          Un conseiller va bientôt vous accueillir.<br />
          En attendant, nous vous invitons à effectuer ce test afin de déterminer votre niveau en français.
        </p>
        <PillButton onClick={() => setPhase('before')}>suivant</PillButton>
      </RedCard>
    );
  }

  // ── Avant de commencer ──────────────────────────────────────────────────────

  if (phase === 'before') {
    return (
      <RedCard>
        <h2 style={{ fontSize: 26, fontWeight: 800, margin: '0 0 16px', lineHeight: 1.25, color: '#fff' }}>
          Avant de commencer
        </h2>
        <p style={{ fontSize: 15, lineHeight: 1.75, opacity: 0.9, margin: '0 0 32px', maxWidth: 400 }}>
          Ce test comprend <strong>30 questions</strong> et durera jusqu&apos;à <strong>20 minutes</strong>.<br />
          Il évalue votre vocabulaire, votre grammaire et votre compréhension écrite.
        </p>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 40 }}>
          {[
            { num: '30', label: 'questions' },
            { num: '~12', label: 'minutes' },
            { num: '3', label: 'compétences' },
          ].map(({ num, label }) => (
            <div key={label} style={{
              background: 'rgba(255,255,255,0.15)',
              borderRadius: 12,
              padding: '12px 24px',
              minWidth: 80,
            }}>
              <div style={{ fontSize: 22, fontWeight: 800 }}>{num}</div>
              <div style={{ fontSize: 12, opacity: 0.8, marginTop: 2 }}>{label}</div>
            </div>
          ))}
        </div>
        <PillButton onClick={startQuiz}>commencer</PillButton>
      </RedCard>
    );
  }

  // ── Quiz ────────────────────────────────────────────────────────────────────

  if (phase === 'quiz') {
    const question = QUESTIONS[currentIndex];
    const showContextText = !!question.context;
    const sectionColor = SECTION_COLORS[question.section];

    return (
      <div style={{
        maxWidth: 600,
        margin: '0 auto',
        padding: '28px 20px 80px',
        fontFamily: 'var(--font-sans, system-ui)',
      }}>
        {/* Progression */}
        <div style={{ marginBottom: 28 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: sectionColor, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
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

        {/* Texte de lecture */}
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

        <button
          onClick={handleNext}
          disabled={selected === null}
          style={{
            width: '100%', padding: '15px', borderRadius: 14, border: 'none',
            background: selected !== null ? '#C0060F' : '#E2E8F0',
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

  // ── Résultat ────────────────────────────────────────────────────────────────

  if (phase === 'result' && result) {
    const levelDescriptions: Record<string, string> = {
      A1: "Niveau débutant — une formation linguistique intensive est recommandée.",
      A2: "Niveau élémentaire — correspond à la première carte de séjour pluriannuelle.",
      B1: "Niveau intermédiaire — correspond à la carte de résident (10 ans).",
      B2: "Niveau avancé — correspond aux exigences de la naturalisation (depuis 2026).",
    };

    return (
      <RedCard>
        <div style={{
          background: 'rgba(255,255,255,0.15)',
          borderRadius: 16,
          padding: '20px 32px',
          marginBottom: 24,
        }}>
          <p style={{ margin: '0 0 4px', fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', opacity: 0.8 }}>
            {result.correct} / {result.total} BONNES RÉPONSES
          </p>
          <p style={{ margin: 0, fontSize: 28, fontWeight: 800 }}>
            Votre niveau estimé est <span style={{ fontSize: 36 }}>{result.level}</span>
          </p>
        </div>
        <p style={{ fontSize: 14, opacity: 0.88, lineHeight: 1.65, margin: '0 0 40px', maxWidth: 400 }}>
          {levelDescriptions[result.level]}
        </p>
        <PillButton onClick={() => setPhase('form')}>suivant</PillButton>
      </RedCard>
    );
  }

  // ── Formulaire RGPD ─────────────────────────────────────────────────────────

  if (phase === 'form') {
    const isValid = lead.nom && lead.prenom && lead.email && lead.telephone && lead.rgpd;

    const inputStyle: React.CSSProperties = {
      width: '100%',
      padding: '12px 16px',
      borderRadius: 10,
      border: '1.5px solid rgba(255,255,255,0.35)',
      background: 'rgba(255,255,255,0.15)',
      color: '#fff',
      fontSize: 15,
      outline: 'none',
      boxSizing: 'border-box',
    };

    const labelStyle: React.CSSProperties = {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.04em',
      opacity: 0.75,
      marginBottom: 6,
      display: 'block',
      textAlign: 'left',
    };

    return (
      <RedCard>
        <h2 style={{ fontSize: 22, fontWeight: 800, margin: '0 0 8px', color: '#fff' }}>
          Pour finaliser votre évaluation
        </h2>
        <p style={{ fontSize: 14, opacity: 0.85, margin: '0 0 28px', lineHeight: 1.6 }}>
          Renseignez vos coordonnées afin que votre conseiller puisse vous contacter.
        </p>

        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 14, textAlign: 'left' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <div>
              <label style={labelStyle}>NOM</label>
              <input
                type="text"
                placeholder="Dupont"
                value={lead.nom}
                onChange={e => setLead(l => ({ ...l, nom: e.target.value }))}
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>PRÉNOM</label>
              <input
                type="text"
                placeholder="Marie"
                value={lead.prenom}
                onChange={e => setLead(l => ({ ...l, prenom: e.target.value }))}
                style={inputStyle}
              />
            </div>
          </div>

          <div>
            <label style={labelStyle}>TÉLÉPHONE</label>
            <input
              type="tel"
              placeholder="+33 6 12 34 56 78"
              value={lead.telephone}
              onChange={e => setLead(l => ({ ...l, telephone: e.target.value }))}
              style={inputStyle}
            />
          </div>

          <div>
            <label style={labelStyle}>EMAIL</label>
            <input
              type="email"
              placeholder="marie.dupont@email.com"
              value={lead.email}
              onChange={e => setLead(l => ({ ...l, email: e.target.value }))}
              style={inputStyle}
            />
          </div>

          {/* RGPD */}
          <div style={{ marginTop: 4 }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
              <div
                onClick={() => setLead(l => ({ ...l, rgpd: !l.rgpd }))}
                style={{
                  width: 20, height: 20, borderRadius: 5, flexShrink: 0, marginTop: 2,
                  border: '2px solid rgba(255,255,255,0.6)',
                  background: lead.rgpd ? '#fff' : 'transparent',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'background 120ms',
                }}
              >
                {lead.rgpd && (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="#C0060F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div style={{ flex: 1 }}>
                <span
                  onClick={() => setLead(l => ({ ...l, rgpd: !l.rgpd }))}
                  style={{ fontSize: 12, lineHeight: 1.55, opacity: 0.85, cursor: 'pointer' }}
                >
                  J&apos;accepte que mes données personnelles soient utilisées par Papiers Français dans le cadre de mon accompagnement administratif, conformément au RGPD.
                </span>
                {' '}
                <button
                  type="button"
                  onClick={() => setRgpdOpen(o => !o)}
                  style={{
                    background: 'none', border: 'none', padding: 0,
                    fontSize: 12, color: 'rgba(255,255,255,0.7)',
                    textDecoration: 'underline', cursor: 'pointer',
                    fontWeight: 600,
                  }}
                >
                  {rgpdOpen ? 'Masquer' : 'En savoir plus'}
                </button>

                {rgpdOpen && (
                  <div style={{
                    marginTop: 10,
                    background: 'rgba(0,0,0,0.25)',
                    borderRadius: 10,
                    padding: '14px 16px',
                    fontSize: 11,
                    lineHeight: 1.7,
                    color: 'rgba(255,255,255,0.85)',
                    textAlign: 'left',
                  }}>
                    <p style={{ margin: '0 0 8px', fontWeight: 700, fontSize: 12 }}>Politique de confidentialité — Collecte de données</p>
                    <p style={{ margin: '0 0 6px' }}>
                      <strong>Responsable du traitement :</strong> Papiers Français, cabinet d&apos;expertise en droit des étrangers.
                    </p>
                    <p style={{ margin: '0 0 6px' }}>
                      <strong>Données collectées :</strong> nom, prénom, adresse email, numéro de téléphone, résultat du test de niveau de français.
                    </p>
                    <p style={{ margin: '0 0 6px' }}>
                      <strong>Finalité :</strong> prise de contact pour vous proposer un accompagnement administratif et linguistique adapté à votre situation.
                    </p>
                    <p style={{ margin: '0 0 6px' }}>
                      <strong>Durée de conservation :</strong> 3 ans à compter de votre dernier contact avec notre cabinet.
                    </p>
                    <p style={{ margin: '0 0 6px' }}>
                      <strong>Vos droits :</strong> conformément au RGPD (Règlement UE 2016/679), vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement et de portabilité de vos données. Pour exercer ces droits, contactez-nous par email.
                    </p>
                    <p style={{ margin: 0 }}>
                      <strong>Partage des données :</strong> vos données ne sont pas transmises à des tiers sans votre consentement explicite.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 28 }}>
          <PillButton onClick={handleFormSubmit} disabled={!isValid || submitting}>
            {submitting ? 'Envoi...' : 'Envoyer'}
          </PillButton>
        </div>
      </RedCard>
    );
  }

  // ── Confirmation ────────────────────────────────────────────────────────────

  if (phase === 'done') {
    return (
      <RedCard>
        <div style={{ fontSize: 48, marginBottom: 20 }}>
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="28" cy="28" r="28" fill="rgba(255,255,255,0.2)"/>
            <path d="M18 28l8 8 12-14" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h2 style={{ fontSize: 24, fontWeight: 800, margin: '0 0 14px', color: '#fff' }}>
          Merci !
        </h2>
        <p style={{ fontSize: 15, opacity: 0.9, lineHeight: 1.7, margin: 0, maxWidth: 380 }}>
          Vos informations ont bien été enregistrées.<br />
          Votre conseiller va vous accueillir dans quelques instants.
        </p>
      </RedCard>
    );
  }

  return null;
}

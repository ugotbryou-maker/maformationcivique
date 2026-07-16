'use client';

import { useState, useEffect } from 'react';
import { PFLogoLight } from '@/components/tenants/PFLogoLight';
import { pickRandom, shuffleOptions } from '@/lib/quiz-utils';

// ─── Questions ───────────────────────────────────────────────────────────────

type Section = 'Institutions' | 'Valeurs & Histoire' | 'Intégration & Droits';
type Difficulty = 'Débutant' | 'Intermédiaire' | 'Avancé';

interface Question {
  id: number;
  section: Section;
  level: Difficulty;
  text: string;
  options: [string, string, string, string];
  answer: 0 | 1 | 2 | 3;
}

const ALL_QUESTIONS: Question[] = [
  // ── Institutions (1–10) ────────────────────────────────────────────────────
  { id: 1,  section: 'Institutions', level: 'Débutant',      text: "Qui est le chef de l'État en France ?", options: ["Le Premier ministre", "Le Président de la République", "Le roi", "Le président du Sénat"], answer: 1 },
  { id: 2,  section: 'Institutions', level: 'Débutant',      text: "Combien de chambres compose le Parlement français ?", options: ["1", "2", "3", "4"], answer: 1 },
  { id: 3,  section: 'Institutions', level: 'Débutant',      text: "Comment s'appelle la chambre basse du Parlement ?", options: ["Le Sénat", "Le Conseil d'État", "L'Assemblée nationale", "La Cour suprême"], answer: 2 },
  { id: 4,  section: 'Institutions', level: 'Débutant',      text: "Où est situé le siège de la présidence de la République ?", options: ["Matignon", "L'Élysée", "Le Louvre", "Versailles"], answer: 1 },
  { id: 5,  section: 'Institutions', level: 'Intermédiaire', text: "Combien de temps dure un mandat présidentiel en France ?", options: ["4 ans", "5 ans", "6 ans", "7 ans"], answer: 1 },
  { id: 6,  section: 'Institutions', level: 'Intermédiaire', text: "Qui nomme le Premier ministre ?", options: ["Le Parlement", "Le Sénat", "Le Président de la République", "Les citoyens par vote"], answer: 2 },
  { id: 7,  section: 'Institutions', level: 'Intermédiaire', text: "Quelle institution contrôle les dépenses de l'État ?", options: ["La Banque de France", "Le Conseil constitutionnel", "La Cour des comptes", "Le ministère des Finances"], answer: 2 },
  { id: 8,  section: 'Institutions', level: 'Intermédiaire', text: "Quel est le rôle du Conseil constitutionnel ?", options: ["Juger les crimes graves", "Vérifier la conformité des lois à la Constitution", "Gérer les élections locales", "Conseiller le Président"], answer: 1 },
  { id: 9,  section: 'Institutions', level: 'Avancé',        text: "Dans quel cas le Président peut-il dissoudre l'Assemblée nationale ?", options: ["Jamais", "Seulement avec l'accord du Sénat", "À tout moment sans condition", "Après consultation du Premier ministre et des présidents des chambres"], answer: 3 },
  { id: 10, section: 'Institutions', level: 'Avancé',        text: "Qu'est-ce qu'une motion de censure ?", options: ["Un vote du Parlement pour renverser le gouvernement", "Un discours du Président devant le Congrès", "Une loi d'urgence votée par le Sénat", "Une décision du Conseil constitutionnel"], answer: 0 },

  // ── Valeurs & Histoire (11–20) ─────────────────────────────────────────────
  { id: 11, section: 'Valeurs & Histoire', level: 'Débutant',      text: "Quelle est la devise de la République française ?", options: ["Unité, Force, Victoire", "Liberté, Égalité, Fraternité", "Travail, Famille, Patrie", "Paix, Justice, Liberté"], answer: 1 },
  { id: 12, section: 'Valeurs & Histoire', level: 'Débutant',      text: "En quelle année a eu lieu la Révolution française ?", options: ["1689", "1789", "1815", "1848"], answer: 1 },
  { id: 13, section: 'Valeurs & Histoire', level: 'Débutant',      text: "Quel principe interdit à l'État de favoriser une religion ?", options: ["La démocratie", "La laïcité", "La solidarité", "L'égalité"], answer: 1 },
  { id: 14, section: 'Valeurs & Histoire', level: 'Débutant',      text: "De quelles couleurs est le drapeau français ?", options: ["Rouge, blanc, vert", "Bleu, blanc, rouge", "Blanc, bleu, rouge", "Rouge, bleu, blanc"], answer: 1 },
  { id: 15, section: 'Valeurs & Histoire', level: 'Intermédiaire', text: "Quelle est la date de la Fête nationale française ?", options: ["1er mai", "8 mai", "14 juillet", "11 novembre"], answer: 2 },
  { id: 16, section: 'Valeurs & Histoire', level: 'Intermédiaire', text: "Quel texte de 1789 garantit les droits fondamentaux en France ?", options: ["La Constitution", "La Déclaration des droits de l'homme et du citoyen", "Le Code civil", "Le traité de Versailles"], answer: 1 },
  { id: 17, section: 'Valeurs & Histoire', level: 'Intermédiaire', text: "Depuis quand les femmes ont-elles le droit de vote en France ?", options: ["1871", "1905", "1944", "1968"], answer: 2 },
  { id: 18, section: 'Valeurs & Histoire', level: 'Intermédiaire', text: "Quel est le symbole féminin de la République représenté dans les mairies ?", options: ["Jeanne d'Arc", "Marie-Antoinette", "Marianne", "Simone Veil"], answer: 2 },
  { id: 19, section: 'Valeurs & Histoire', level: 'Avancé',        text: "La Ve République a été fondée en quelle année ?", options: ["1944", "1946", "1958", "1962"], answer: 2 },
  { id: 20, section: 'Valeurs & Histoire', level: 'Avancé',        text: "Lequel de ces principes N'EST PAS inscrit dans la Constitution française ?", options: ["La France est une République indivisible", "La langue de la République est le français", "La France est un État catholique", "La souveraineté appartient au peuple"], answer: 2 },

  // ── Intégration & Droits (21–30) ──────────────────────────────────────────
  { id: 21, section: 'Intégration & Droits', level: 'Débutant',      text: "Qu'est-ce que l'OFII ?", options: ["Un syndicat de travailleurs", "L'organisme qui gère l'intégration des étrangers en France", "Un parti politique", "Une université publique"], answer: 1 },
  { id: 22, section: 'Intégration & Droits', level: 'Débutant',      text: "Que signifie \"CSP\" dans le cadre du séjour en France ?", options: ["Carte de Séjour Permanente", "Contrat de Séjour Provisoire", "Carte de Séjour Pluriannuelle", "Contrôle de Séjour Prioritaire"], answer: 2 },
  { id: 23, section: 'Intégration & Droits', level: 'Débutant',      text: "À partir de quel âge l'instruction est-elle obligatoire en France ?", options: ["3 ans", "5 ans", "6 ans", "7 ans"], answer: 0 },
  { id: 24, section: 'Intégration & Droits', level: 'Débutant',      text: "Quel document prouve votre droit au séjour en France ?", options: ["Votre passeport seul", "Votre titre de séjour", "Votre contrat de travail", "Votre bail de logement"], answer: 1 },
  { id: 25, section: 'Intégration & Droits', level: 'Intermédiaire', text: "Combien d'années de présence régulière faut-il pour demander la naturalisation ?", options: ["3 ans", "5 ans", "7 ans", "10 ans"], answer: 1 },
  { id: 26, section: 'Intégration & Droits', level: 'Intermédiaire', text: "Quelle est la durée d'une carte de résident ?", options: ["5 ans", "7 ans", "10 ans", "15 ans"], answer: 2 },
  { id: 27, section: 'Intégration & Droits', level: 'Intermédiaire', text: "Qu'est-ce que le CIR (Contrat d'Intégration Républicaine) ?", options: ["Un contrat de travail réservé aux étrangers", "Un engagement à respecter les valeurs françaises et à suivre des formations", "Un bail de logement social", "Une aide financière de la CAF"], answer: 1 },
  { id: 28, section: 'Intégration & Droits', level: 'Intermédiaire', text: "Quel niveau de français est requis pour une carte de séjour pluriannuelle ?", options: ["Aucun", "A2 oral", "B1", "B2"], answer: 1 },
  { id: 29, section: 'Intégration & Droits', level: 'Avancé',        text: "Depuis 2026, quel niveau de français est requis pour la naturalisation ?", options: ["A2", "B1", "B2", "C1"], answer: 2 },
  { id: 30, section: 'Intégration & Droits', level: 'Avancé',        text: "Qu'est-ce que l'OFPRA ?", options: ["Un organisme qui protège les réfugiés et apatrides", "Un programme d'emploi pour les étrangers", "Un office de formation professionnelle", "Un organisme de contrôle des frontières"], answer: 0 },
];

// Construit un questionnaire de 15 questions, tiré aléatoirement de la bibliothèque
// (5 Institutions + 5 Valeurs & Histoire + 5 Intégration & Droits), options mélangées.
function buildQuiz(): Question[] {
  const inst  = pickRandom(ALL_QUESTIONS.filter(q => q.section === 'Institutions'), 5);
  const val   = pickRandom(ALL_QUESTIONS.filter(q => q.section === 'Valeurs & Histoire'), 5);
  const integ = pickRandom(ALL_QUESTIONS.filter(q => q.section === 'Intégration & Droits'), 5);
  return [...inst, ...val, ...integ].map(shuffleOptions);
}

const QUIZ_SIZE = 15;

// ─── Calcul du résultat ───────────────────────────────────────────────────────

type CivicLevel = 'Solide' | 'Correct' | 'À renforcer';

interface Result {
  level: CivicLevel;
  total: number;
  correct: number;
  institutionsRate: number;
  valeursRate: number;
  integrationRate: number;
}

function calculateResult(answers: (number | null)[], questions: Question[]): Result {
  let correct = 0, inst = 0, val = 0, integ = 0;
  questions.forEach((q, i) => {
    if (answers[i] === q.answer) {
      correct++;
      if (q.section === 'Institutions') inst++;
      if (q.section === 'Valeurs & Histoire') val++;
      if (q.section === 'Intégration & Droits') integ++;
    }
  });
  const instTotal  = questions.filter(q => q.section === 'Institutions').length;
  const valTotal   = questions.filter(q => q.section === 'Valeurs & Histoire').length;
  const integTotal = questions.filter(q => q.section === 'Intégration & Droits').length;
  const rate = correct / questions.length;
  const level: CivicLevel = rate >= 0.65 ? 'Solide' : rate >= 0.4 ? 'Correct' : 'À renforcer';
  return {
    level, total: questions.length, correct,
    institutionsRate: instTotal ? inst / instTotal : 0,
    valeursRate:      valTotal ? val / valTotal : 0,
    integrationRate:  integTotal ? integ / integTotal : 0,
  };
}

// ─── Couleurs sections ────────────────────────────────────────────────────────

const SECTION_COLORS: Record<Section, string> = {
  'Institutions':        '#1D4ED8',
  'Valeurs & Histoire':  '#7C3AED',
  'Intégration & Droits': '#065F46',
};

// ─── RedCard ──────────────────────────────────────────────────────────────────

function RedCard({ children, showLogo = true }: { children: React.ReactNode; showLogo?: boolean }) {
  return (
    <div style={{
      minHeight: '100svh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '20px 16px', background: '#EBEBEB', fontFamily: 'var(--font-sans, system-ui)',
    }}>
      <div style={{
        width: '100%', maxWidth: 680, borderRadius: 22, overflow: 'hidden', position: 'relative',
        backgroundImage: `linear-gradient(rgba(2,14,60,0.82), rgba(3,20,75,0.88)), url('/images/modules/republique.jpg')`,
        backgroundSize: 'cover', backgroundPosition: 'center 62%',
        padding: '52px 36px 48px', display: 'flex', flexDirection: 'column',
        alignItems: 'center', textAlign: 'center', color: '#fff',
        boxShadow: '0 24px 64px rgba(3,30,108,0.28)',
      }}>
        {showLogo && (
          <PFLogoLight width={150} style={{ marginBottom: 40, opacity: 0.97 }} />
        )}
        {children}
      </div>
    </div>
  );
}

function PillButton({ onClick, children, disabled = false, variant = 'white' }: {
  onClick: () => void; children: React.ReactNode; disabled?: boolean; variant?: 'white' | 'ghost';
}) {
  return (
    <button onClick={onClick} disabled={disabled} style={{
      padding: '14px 48px', borderRadius: 100,
      border: variant === 'ghost' ? '2px solid rgba(255,255,255,0.5)' : 'none',
      background: disabled ? 'rgba(255,255,255,0.25)' : variant === 'white' ? '#fff' : 'transparent',
      color: disabled ? 'rgba(255,255,255,0.5)' : variant === 'white' ? '#031E6C' : '#fff',
      fontSize: 15, fontWeight: 700, cursor: disabled ? 'default' : 'pointer',
      letterSpacing: '0.01em', transition: 'opacity 150ms', marginTop: 8,
    }}>
      {children}
    </button>
  );
}

// ─── Page principale ──────────────────────────────────────────────────────────

type Phase = 'welcome' | 'before' | 'quiz' | 'result' | 'form' | 'done';

type SituationPro = 'cdi-cdd' | 'chef-entreprise' | 'autre' | '';

interface LeadForm {
  nom: string;
  prenom: string;
  telephone: string;
  email: string;
  situationPro: SituationPro;
  clientId: string;
  rgpd: boolean;
}

export default function TestCiviquePage() {
  const [phase, setPhase] = useState<Phase>('welcome');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(QUIZ_SIZE).fill(null));
  const [selected, setSelected] = useState<number | null>(null);
  const [result, setResult] = useState<Result | null>(null);
  const [lead, setLead] = useState<LeadForm>({ nom: '', prenom: '', telephone: '', email: '', situationPro: '', clientId: '', rgpd: false });
  const [submitting, setSubmitting] = useState(false);
  const [rgpdOpen, setRgpdOpen] = useState(false);

  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    const nom      = p.get('nom');
    const prenom   = p.get('prenom');
    const email    = p.get('email');
    const tel      = p.get('tel');
    const clientId = p.get('clientId');
    if (nom || prenom || email || tel || clientId) {
      setLead(prev => ({
        ...prev,
        nom:       nom      ?? prev.nom,
        prenom:    prenom   ?? prev.prenom,
        email:     email    ?? prev.email,
        telephone: tel      ?? prev.telephone,
        clientId:  clientId ?? prev.clientId,
      }));
    }
  }, []);

  useEffect(() => { window.scrollTo(0, 0); }, [phase]);

  function startQuiz() {
    const quiz = buildQuiz();
    setQuestions(quiz);
    setCurrentIndex(0);
    setAnswers(Array(quiz.length).fill(null));
    setSelected(null);
    setPhase('quiz');
  }

  function handleNext() {
    if (selected === null) return;
    const newAnswers = [...answers];
    newAnswers[currentIndex] = selected;
    setAnswers(newAnswers);
    setSelected(null);
    if (currentIndex === questions.length - 1) {
      setResult(calculateResult(newAnswers, questions));
      setPhase('result');
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }

  async function handleFormSubmit() {
    if (!lead.nom || !lead.prenom || !lead.email || !lead.telephone || !lead.situationPro || !lead.rgpd) return;
    setSubmitting(true);
    await fetch('/api/lead/pf', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        source: 'test-civique',
        nom: lead.nom,
        prenom: lead.prenom,
        email: lead.email,
        telephone: lead.telephone,
        clientId: lead.clientId || undefined,
        situationPro: lead.situationPro,
        score: result ? `${result.correct}/${result.total}` : undefined,
      }),
    }).catch(() => {});
    setSubmitting(false);
    setPhase('done');
  }

  // ── Bienvenue ────────────────────────────────────────────────────────────────

  if (phase === 'welcome') {
    return (
      <RedCard>
        <h1 style={{ fontSize: 28, fontWeight: 800, margin: '0 0 16px', lineHeight: 1.25, color: '#fff' }}>
          Bienvenue sur le test civique
        </h1>
        <p style={{ fontSize: 15, lineHeight: 1.7, opacity: 0.9, margin: '0 0 40px', maxWidth: 440 }}>
          Un conseiller va bientôt vous accueillir.<br />
          En attendant, ce test rapide vous permet d&apos;évaluer vos connaissances sur la vie en France et les institutions.
        </p>
        <PillButton onClick={() => setPhase('before')}>suivant</PillButton>
      </RedCard>
    );
  }

  // ── Avant de commencer ───────────────────────────────────────────────────────

  if (phase === 'before') {
    return (
      <RedCard>
        <h2 style={{ fontSize: 26, fontWeight: 800, margin: '0 0 16px', lineHeight: 1.25, color: '#fff' }}>
          Avant de commencer
        </h2>
        <p style={{ fontSize: 15, lineHeight: 1.75, opacity: 0.9, margin: '0 0 32px', maxWidth: 420 }}>
          Ce test explore ce que la France attend de vous en tant que résident.<br />
          Il couvre les <strong>institutions</strong>, les <strong>valeurs républicaines</strong> et les <strong>démarches d&apos;intégration</strong>.
        </p>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 40 }}>
          {[
            { num: '15', label: 'questions' },
            { num: '~8', label: 'minutes' },
            { num: '3', label: 'thèmes' },
          ].map(({ num, label }) => (
            <div key={label} style={{
              background: 'rgba(255,255,255,0.12)', borderRadius: 12,
              padding: '12px 24px', minWidth: 80,
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

  // ── Quiz ─────────────────────────────────────────────────────────────────────

  if (phase === 'quiz') {
    const question = questions[currentIndex];
    if (!question) return null;
    const sectionColor = SECTION_COLORS[question.section];

    return (
      <div style={{ maxWidth: 600, margin: '0 auto', padding: '28px 20px 80px', fontFamily: 'var(--font-sans, system-ui)' }}>
        {/* Progression */}
        <div style={{ marginBottom: 28 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: sectionColor, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              {question.section}
            </span>
            <span style={{ fontSize: 12, color: '#94A3B8', fontWeight: 600 }}>
              {currentIndex + 1} / {questions.length}
            </span>
          </div>
          <div style={{ height: 5, borderRadius: 100, background: '#E2E8F0', overflow: 'hidden' }}>
            <div style={{
              height: '100%', borderRadius: 100, background: sectionColor,
              width: `${((currentIndex + 1) / questions.length) * 100}%`,
              transition: 'width 300ms ease-out',
            }} />
          </div>
        </div>

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
            background: selected !== null ? '#031E6C' : '#E2E8F0',
            color: selected !== null ? '#fff' : '#94A3B8',
            fontSize: 15, fontWeight: 700,
            cursor: selected !== null ? 'pointer' : 'default',
            transition: 'background 150ms, color 150ms',
          }}
        >
          {currentIndex === questions.length - 1 ? 'Voir mon résultat →' : 'Question suivante →'}
        </button>
      </div>
    );
  }

  // ── Résultat ──────────────────────────────────────────────────────────────────

  if (phase === 'result' && result) {
    const levelConfig: Record<CivicLevel, { label: string; desc: string }> = {
      'Solide':      { label: '✓ Solide',      desc: "Votre connaissance de la France et de ses institutions est bien établie. Votre dossier d'intégration est bien engagé." },
      'Correct':     { label: '~ Correct',     desc: "Des acquis sont là, mais quelques points méritent d'être consolidés. Une formation civique vous aidera." },
      'À renforcer': { label: '! À renforcer', desc: "Une formation civique est recommandée pour préparer votre parcours d'intégration et renforcer votre dossier." },
    };
    const cfg = levelConfig[result.level];

    const barStyle = (rate: number, color: string) => (
      <div style={{ marginBottom: 10 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4, fontSize: 11, opacity: 0.75 }}>
          <span>{color === '#1D4ED8' ? 'Institutions' : color === '#7C3AED' ? 'Valeurs & Histoire' : 'Intégration & Droits'}</span>
          <span>{Math.round(rate * 100)} %</span>
        </div>
        <div style={{ height: 6, borderRadius: 100, background: 'rgba(255,255,255,0.2)' }}>
          <div style={{ height: '100%', borderRadius: 100, background: '#fff', width: `${rate * 100}%`, opacity: 0.85 }} />
        </div>
      </div>
    );

    return (
      <RedCard>
        <div style={{ background: 'rgba(255,255,255,0.12)', borderRadius: 16, padding: '20px 32px', marginBottom: 24, width: '100%', maxWidth: 440 }}>
          <p style={{ margin: '0 0 4px', fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', opacity: 0.75 }}>
            {result.correct} / {result.total} BONNES RÉPONSES
          </p>
          <p style={{ margin: '0 0 20px', fontSize: 26, fontWeight: 800, color: '#fff' }}>
            Niveau : <span style={{ fontSize: 30 }}>{cfg.label}</span>
          </p>
          {barStyle(result.institutionsRate, '#1D4ED8')}
          {barStyle(result.valeursRate, '#7C3AED')}
          {barStyle(result.integrationRate, '#065F46')}
        </div>
        <p style={{ fontSize: 14, opacity: 0.88, lineHeight: 1.65, margin: '0 0 40px', maxWidth: 420 }}>
          {cfg.desc}
        </p>
        <PillButton onClick={() => setPhase('form')}>suivant</PillButton>
      </RedCard>
    );
  }

  // ── Formulaire ────────────────────────────────────────────────────────────────

  if (phase === 'form') {
    const isValid = lead.nom && lead.prenom && lead.email && lead.telephone && lead.situationPro && lead.rgpd;

    const inputStyle: React.CSSProperties = {
      width: '100%', padding: '12px 16px', borderRadius: 10,
      border: '1.5px solid rgba(255,255,255,0.35)', background: 'rgba(255,255,255,0.12)',
      color: '#fff', fontSize: 15, outline: 'none', boxSizing: 'border-box',
    };

    const labelStyle: React.CSSProperties = {
      fontSize: 12, fontWeight: 700, letterSpacing: '0.04em', opacity: 0.75,
      marginBottom: 6, display: 'block', textAlign: 'left',
    };

    const proOpt = (val: SituationPro, label: string) => (
      <button
        key={val}
        type="button"
        onClick={() => setLead(l => ({ ...l, situationPro: val }))}
        style={{
          flex: 1, padding: '10px 8px', borderRadius: 10, border: 'none',
          background: lead.situationPro === val ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.12)',
          color: lead.situationPro === val ? '#031E6C' : '#fff',
          fontSize: 13, fontWeight: 700, cursor: 'pointer',
          transition: 'background 120ms, color 120ms',
        }}
      >
        {label}
      </button>
    );

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
              <input type="text" placeholder="Dupont" value={lead.nom}
                onChange={e => setLead(l => ({ ...l, nom: e.target.value }))} style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>PRÉNOM</label>
              <input type="text" placeholder="Marie" value={lead.prenom}
                onChange={e => setLead(l => ({ ...l, prenom: e.target.value }))} style={inputStyle} />
            </div>
          </div>

          <div>
            <label style={labelStyle}>TÉLÉPHONE</label>
            <input type="tel" placeholder="+33 6 12 34 56 78" value={lead.telephone}
              onChange={e => setLead(l => ({ ...l, telephone: e.target.value }))} style={inputStyle} />
          </div>

          <div>
            <label style={labelStyle}>EMAIL</label>
            <input type="email" placeholder="marie.dupont@email.com" value={lead.email}
              onChange={e => setLead(l => ({ ...l, email: e.target.value }))} style={inputStyle} />
          </div>

          {/* Situation professionnelle */}
          <div>
            <label style={labelStyle}>VOTRE SITUATION PROFESSIONNELLE</label>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {proOpt('cdi-cdd', 'CDD / CDI')}
              {proOpt('chef-entreprise', 'Chef d\'entreprise')}
              {proOpt('autre', 'Autre')}
            </div>
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
                  cursor: 'pointer', transition: 'background 120ms',
                }}
              >
                {lead.rgpd && (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="#031E6C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
                    textDecoration: 'underline', cursor: 'pointer', fontWeight: 600,
                  }}
                >
                  {rgpdOpen ? 'Masquer' : 'En savoir plus'}
                </button>

                {rgpdOpen && (
                  <div style={{
                    marginTop: 10, background: 'rgba(0,0,0,0.25)', borderRadius: 10,
                    padding: '14px 16px', fontSize: 11, lineHeight: 1.7,
                    color: 'rgba(255,255,255,0.85)', textAlign: 'left',
                  }}>
                    <p style={{ margin: '0 0 8px', fontWeight: 700, fontSize: 12 }}>Politique de confidentialité — Collecte de données</p>
                    <p style={{ margin: '0 0 6px' }}><strong>Responsable du traitement :</strong> Papiers Français, cabinet d&apos;expertise en droit des étrangers.</p>
                    <p style={{ margin: '0 0 6px' }}><strong>Données collectées :</strong> nom, prénom, adresse email, numéro de téléphone, résultat du test civique, situation professionnelle.</p>
                    <p style={{ margin: '0 0 6px' }}><strong>Finalité :</strong> prise de contact pour vous proposer un accompagnement administratif et civique adapté à votre situation.</p>
                    <p style={{ margin: '0 0 6px' }}><strong>Durée de conservation :</strong> 3 ans à compter de votre dernier contact avec notre cabinet.</p>
                    <p style={{ margin: '0 0 6px' }}><strong>Vos droits :</strong> conformément au RGPD (Règlement UE 2016/679), vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement et de portabilité de vos données. Pour exercer ces droits, contactez-nous par email.</p>
                    <p style={{ margin: 0 }}><strong>Partage des données :</strong> vos données ne sont pas transmises à des tiers sans votre consentement explicite.</p>
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

  // ── Confirmation ──────────────────────────────────────────────────────────────

  if (phase === 'done') {
    return (
      <RedCard>
        <div style={{ marginBottom: 20 }}>
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="28" cy="28" r="28" fill="rgba(255,255,255,0.2)" />
            <path d="M18 28l8 8 12-14" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 style={{ fontSize: 24, fontWeight: 800, margin: '0 0 12px', color: '#fff' }}>
          Merci !
        </h2>
        <p style={{ fontSize: 15, opacity: 0.88, lineHeight: 1.7, margin: '0 0 12px', maxWidth: 380 }}>
          Votre évaluation a bien été enregistrée.<br />
          Votre conseiller prendra contact avec vous prochainement.
        </p>
        <p style={{ fontSize: 13, opacity: 0.65, margin: 0 }}>
          Vous pouvez refermer cette page.
        </p>
      </RedCard>
    );
  }

  return null;
}

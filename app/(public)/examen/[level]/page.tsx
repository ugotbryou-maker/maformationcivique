'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  ChevronRight, ChevronLeft, Clock, CheckCircle, XCircle,
  Trophy, AlertCircle, Mail, ArrowRight, RotateCcw, Home,
  Shield, Star, Award, Zap,
} from 'lucide-react';
import { getExamQuestions, type Question, type ExamLevel } from '@/data/questions';
import { BADGES } from '@/lib/gamification';

// ── Config niveaux ────────────────────────────────────────────────────────────
const LEVEL_CONFIG: Record<ExamLevel, {
  label: string;
  color: string;
  bg: string;
  gradient: string;
  description: string;
  duration: number; // minutes
  passScore: number; // %
  icon: typeof Shield;
}> = {
  CSP: {
    label: 'Carte de séjour pluriannuelle',
    color: '#002395',
    bg: '#E6EEF9',
    gradient: 'linear-gradient(135deg, #001A70 0%, #002395 100%)',
    description: 'Questions de niveau 1 — définitions et repères fondamentaux',
    duration: 30,
    passScore: 80,
    icon: Shield,
  },
  CR: {
    label: 'Carte de résident',
    color: '#0057A8',
    bg: '#EFF6FF',
    gradient: 'linear-gradient(135deg, #002395 0%, #0057A8 100%)',
    description: 'Questions de niveau 2 — application et compréhension des mécanismes',
    duration: 30,
    passScore: 80,
    icon: Star,
  },
  NAT: {
    label: 'Naturalisation',
    color: '#CC1A1A',
    bg: '#FEF2F2',
    gradient: 'linear-gradient(135deg, #9F1239 0%, #CC1A1A 100%)',
    description: 'Questions de niveau 3 — culture générale et histoire approfondie',
    duration: 30,
    passScore: 80,
    icon: Award,
  },
};

type Phase = 'intro' | 'exam' | 'result' | 'lead';

export default function ExamPage() {
  const params = useParams();
  const router = useRouter();
  const level = (params.level as string)?.toUpperCase() as ExamLevel;
  const config = LEVEL_CONFIG[level];

  const [phase, setPhase] = useState<Phase>('intro');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<Record<number, 'A' | 'B' | 'C' | 'D'>>({});
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [xpEarned, setXpEarned] = useState<number | null>(null);
  const [newBadges, setNewBadges] = useState<string[]>([]);
  const examResultSent = useRef(false);

  // Charger les questions
  useEffect(() => {
    if (config) {
      const qs = getExamQuestions(level, 40);
      setQuestions(qs);
      setTimeLeft(config.duration * 60);
    }
  }, [level, config]);

  // Timer
  useEffect(() => {
    if (!timerActive || timeLeft <= 0) return;
    const t = setInterval(() => {
      setTimeLeft((v) => {
        if (v <= 1) { clearInterval(t); handleFinish(); return 0; }
        return v - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [timerActive, timeLeft]);

  const handleFinish = useCallback(() => {
    setTimerActive(false);
    setPhase('result');
  }, []);

  const startExam = () => {
    setPhase('exam');
    setTimerActive(true);
  };

  const handleSelect = (opt: 'A' | 'B' | 'C' | 'D') => {
    if (revealed[current]) return;
    setSelected((s) => ({ ...s, [current]: opt }));
    setRevealed((r) => ({ ...r, [current]: true }));
  };

  const next = () => {
    if (current < questions.length - 1) setCurrent((c) => c + 1);
    else handleFinish();
  };

  const prev = () => { if (current > 0) setCurrent((c) => c - 1); };

  // Score
  const score = questions.reduce((acc, q, i) => acc + (selected[i] === q.answer ? 1 : 0), 0);
  const pct = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;
  const passed = pct >= (config?.passScore ?? 80);

  // Crédite l'XP de l'examen (utilisateurs connectés uniquement — silencieux
  // et sans erreur visible pour les visiteurs anonymes, idempotent côté
  // serveur : un seul crédit par niveau d'examen et par utilisateur)
  useEffect(() => {
    if (phase !== 'result' || examResultSent.current || questions.length === 0) return;
    examResultSent.current = true;
    fetch('/api/exam/result', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ level, score, total: questions.length }),
    })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data && !data.alreadyAwarded) {
          setXpEarned(data.xpEarned);
          setNewBadges(data.newBadges ?? []);
        }
      })
      .catch(() => { /* non bloquant */ });
  }, [phase, level, score, questions.length]);

  const formatTime = (s: number) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
  const timeWarning = timeLeft < 300; // 5 min

  if (!config) return (
    <div style={{ padding: '4rem', textAlign: 'center' }}>
      <p>Niveau inconnu. <Link href="/modulesciviques">Retour aux modules</Link></p>
    </div>
  );

  const LevelIcon = config.icon;

  // ── INTRO ──────────────────────────────────────────────────────────────────
  if (phase === 'intro') return (
    <div style={{ minHeight: '100vh', background: 'var(--color-off-white)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div style={{ maxWidth: 560, width: '100%' }}>

        {/* Badge niveau */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
          <div style={{
            width: 80, height: 80, borderRadius: '50%',
            background: config.gradient,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
          }}>
            <LevelIcon size={36} color="#fff" />
          </div>
        </div>

        <div style={{
          background: '#fff', borderRadius: 20,
          padding: '2.5rem',
          boxShadow: '0 4px 24px rgba(0,0,35,0.08)',
          textAlign: 'center',
        }}>
          <div style={{
            display: 'inline-block',
            background: config.bg, color: config.color,
            fontWeight: 700, fontSize: 13, letterSpacing: '.06em',
            padding: '4px 14px', borderRadius: 100, marginBottom: '1rem',
          }}>{level}</div>

          <h1 style={{ fontSize: 26, fontWeight: 800, color: 'var(--color-blue-night)', margin: '0 0 .5rem' }}>
            Examen blanc
          </h1>
          <p style={{ color: '#64748B', fontSize: 15, margin: '0 0 2rem', lineHeight: 1.6 }}>
            {config.label}
          </p>

          {/* Infos */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
            {[
              { label: 'Questions', value: '40' },
              { label: 'Durée', value: '30 min' },
              { label: 'Score requis', value: '80%' },
            ].map(({ label, value }) => (
              <div key={label} style={{ background: 'var(--color-off-white)', borderRadius: 12, padding: '1rem' }}>
                <div style={{ fontSize: 22, fontWeight: 800, color: 'var(--color-blue-france)' }}>{value}</div>
                <div style={{ fontSize: 12, color: '#64748B', marginTop: 2 }}>{label}</div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 13, color: '#94A3B8', marginBottom: '2rem', lineHeight: 1.6 }}>
            {config.description}.<br />
            Le timer démarre dès que vous cliquez sur Commencer.
          </p>

          <button
            onClick={startExam}
            style={{
              width: '100%', padding: '1rem', borderRadius: 12, border: 'none',
              background: config.gradient, color: '#fff',
              fontSize: 16, fontWeight: 700, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            }}
          >
            Commencer l'examen <ArrowRight size={18} />
          </button>

          <Link href="/modulesciviques" style={{ display: 'block', marginTop: '1rem', color: '#94A3B8', fontSize: 13, textDecoration: 'none' }}>
            ← Retour aux modules
          </Link>
        </div>
      </div>
    </div>
  );

  // ── EXAM ───────────────────────────────────────────────────────────────────
  if (phase === 'exam') {
    const q = questions[current];
    const answeredCount = Object.keys(selected).length;
    const progressPct = (answeredCount / questions.length) * 100;

    return (
      <div style={{ minHeight: '100vh', background: 'var(--color-off-white)' }}>

        {/* Header fixe */}
        <div style={{
          position: 'sticky', top: 0, zIndex: 50,
          background: '#fff', borderBottom: '1px solid #E2E8F0',
          padding: '0 1.5rem',
          display: 'flex', alignItems: 'center', gap: '1rem', height: 60,
        }}>
          {/* Badge niveau */}
          <div style={{
            padding: '4px 12px', borderRadius: 100,
            background: config.bg, color: config.color,
            fontWeight: 700, fontSize: 12, whiteSpace: 'nowrap',
          }}>{level}</div>

          {/* Progress bar */}
          <div style={{ flex: 1, height: 6, background: '#E2E8F0', borderRadius: 100, overflow: 'hidden' }}>
            <div style={{
              height: '100%', borderRadius: 100,
              background: config.gradient,
              width: `${progressPct}%`,
              transition: 'width .3s',
            }} />
          </div>

          <span style={{ fontSize: 13, color: '#64748B', whiteSpace: 'nowrap' }}>
            {current + 1} / {questions.length}
          </span>

          {/* Timer */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 6,
            padding: '6px 12px', borderRadius: 100,
            background: timeWarning ? '#FEF2F2' : '#F1F5F9',
            color: timeWarning ? '#DC2626' : '#374151',
            fontWeight: 700, fontSize: 14, fontVariantNumeric: 'tabular-nums',
          }}>
            <Clock size={14} />
            {formatTime(timeLeft)}
          </div>
        </div>

        {/* Question */}
        <div style={{ maxWidth: 720, margin: '0 auto', padding: '2rem 1.5rem' }}>
          <div style={{ background: '#fff', borderRadius: 20, padding: '2rem', boxShadow: '0 2px 16px rgba(0,0,35,0.06)', marginBottom: '1.5rem' }}>

            {/* Numéro */}
            <div style={{ fontSize: 12, fontWeight: 700, color: '#94A3B8', letterSpacing: '.08em', marginBottom: '1rem', textTransform: 'uppercase' }}>
              Question {current + 1}
            </div>

            <h2 style={{ fontSize: 20, fontWeight: 700, color: 'var(--color-blue-night)', margin: '0 0 2rem', lineHeight: 1.5 }}>
              {q.question}
            </h2>

            {/* Options */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {(['A', 'B', 'C', 'D'] as const).map((opt) => {
                const isSelected = selected[current] === opt;
                const isRevealed = revealed[current];
                const isCorrect = q.answer === opt;
                const isWrong = isSelected && !isCorrect;

                let bg = '#F8FAFC';
                let border = '2px solid #E2E8F0';
                let color = '#374151';

                if (isRevealed) {
                  if (isCorrect) { bg = '#F0FDF4'; border = '2px solid #22C55E'; color = '#15803D'; }
                  else if (isWrong) { bg = '#FEF2F2'; border = '2px solid #EF4444'; color = '#DC2626'; }
                  else { bg = '#F8FAFC'; border = '2px solid #E2E8F0'; color = '#9CA3AF'; }
                } else if (isSelected) {
                  bg = config.bg; border = `2px solid ${config.color}`; color = config.color;
                }

                return (
                  <button
                    key={opt}
                    onClick={() => handleSelect(opt)}
                    disabled={isRevealed}
                    style={{
                      width: '100%', padding: '1rem 1.25rem', borderRadius: 12,
                      background: bg, border, color,
                      display: 'flex', alignItems: 'center', gap: '1rem',
                      textAlign: 'left', cursor: isRevealed ? 'default' : 'pointer',
                      transition: 'all .15s', fontWeight: isSelected || isRevealed ? 600 : 400,
                      fontSize: 15,
                    }}
                  >
                    <span style={{
                      width: 30, height: 30, borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: isRevealed && isCorrect ? '#22C55E' : isWrong ? '#EF4444' : border.replace('2px solid ', ''),
                      color: isRevealed && (isCorrect || isWrong) ? '#fff' : color,
                      fontWeight: 700, fontSize: 13, flexShrink: 0,
                      border: `1.5px solid ${isRevealed && isCorrect ? '#22C55E' : isWrong ? '#EF4444' : '#D1D5DB'}`,
                    }}>
                      {isRevealed && isCorrect ? <CheckCircle size={16} /> : isWrong ? <XCircle size={16} /> : opt}
                    </span>
                    {q.options[opt]}
                  </button>
                );
              })}
            </div>

            {/* Explication */}
            {revealed[current] && (
              <div style={{
                marginTop: '1.25rem', padding: '1rem 1.25rem',
                background: '#FFFBEB', borderRadius: 12,
                borderLeft: '4px solid #F59E0B',
                fontSize: 14, color: '#78350F', lineHeight: 1.6,
              }}>
                <strong>Explication :</strong> {q.explanation}
              </div>
            )}
          </div>

          {/* Navigation */}
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'space-between' }}>
            <button
              onClick={prev}
              disabled={current === 0}
              style={{
                padding: '.75rem 1.5rem', borderRadius: 10, border: '2px solid #E2E8F0',
                background: '#fff', color: current === 0 ? '#D1D5DB' : '#374151',
                cursor: current === 0 ? 'not-allowed' : 'pointer',
                display: 'flex', alignItems: 'center', gap: 6, fontWeight: 600, fontSize: 14,
              }}
            >
              <ChevronLeft size={16} /> Précédente
            </button>

            <button
              onClick={current === questions.length - 1 ? handleFinish : next}
              style={{
                padding: '.75rem 1.75rem', borderRadius: 10, border: 'none',
                background: config.gradient, color: '#fff',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: 6, fontWeight: 700, fontSize: 14,
              }}
            >
              {current === questions.length - 1 ? 'Terminer l\'examen' : 'Suivante'}
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Bouton terminer anticipé */}
          {answeredCount >= 10 && (
            <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
              <button
                onClick={handleFinish}
                style={{ background: 'none', border: 'none', color: '#94A3B8', fontSize: 13, cursor: 'pointer', textDecoration: 'underline' }}
              >
                Terminer et voir les résultats ({answeredCount}/{questions.length} réponses)
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ── RÉSULTATS ──────────────────────────────────────────────────────────────
  if (phase === 'result') return (
    <div style={{ minHeight: '100vh', background: 'var(--color-off-white)', padding: '2rem 1.5rem' }}>
      <div style={{ maxWidth: 640, margin: '0 auto' }}>

        {/* Score card */}
        <div style={{
          position: 'relative', overflow: 'hidden',
          borderRadius: 24, padding: '2.5rem',
          textAlign: 'center', marginBottom: '1.5rem',
          color: '#fff',
        }}>
          {/* Filigrane */}
          <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${level === 'NAT' ? '/images/modules/palais-elysee.jpg' : level === 'CR' ? '/images/modules/hemicycle-parlement-europeen.jpg' : '/images/modules/Mairie-de-Paris-l-hotel-de-toutes-les-batailles.jpg'})`, backgroundSize: 'cover', backgroundPosition: 'center 30%' }} />
          <div style={{ position: 'absolute', inset: 0, background: passed ? 'linear-gradient(135deg, #064E3BE8 0%, #065F46D0 100%)' : 'linear-gradient(135deg, #7F1D1DE8 0%, #991B1BD0 100%)' }} />
          <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ fontSize: 72, fontWeight: 900, marginBottom: '.25rem' }}>{pct}%</div>
          <div style={{ fontSize: 18, fontWeight: 700, marginBottom: '.5rem', opacity: .95 }}>
            {passed ? 'Examen réussi' : 'Examen non validé'}
          </div>
          <div style={{ fontSize: 14, opacity: .8 }}>
            {score} bonnes réponses sur {questions.length} · Score requis : {config.passScore}%
          </div>

          {xpEarned !== null && xpEarned > 0 && (
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              marginTop: 14, padding: '6px 14px',
              borderRadius: 100,
              background: 'rgba(255,255,255,0.18)',
              color: '#fff', fontSize: 13, fontWeight: 700,
            }}>
              <Zap size={14} color="#FACC15" fill="#FACC15" />
              +{xpEarned} XP
            </div>
          )}

          {newBadges.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center', marginTop: 10 }}>
              {newBadges.map((slug) => {
                const badge = BADGES.find((b) => b.slug === slug);
                if (!badge) return null;
                return (
                  <div key={slug} style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    padding: '6px 12px', borderRadius: 100,
                    background: 'rgba(255,255,255,0.18)',
                    color: '#fff', fontSize: 12, fontWeight: 600,
                  }}>
                    <span style={{ fontSize: 14 }}>{badge.icon}</span> {badge.label}
                  </div>
                );
              })}
            </div>
          )}
          </div>
        </div>

        {/* Lead gen card */}
        <div style={{
          background: '#fff', borderRadius: 20, padding: '2rem',
          boxShadow: '0 4px 24px rgba(0,0,35,0.08)', marginBottom: '1.5rem',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1rem' }}>
            <div style={{
              width: 36, height: 36, borderRadius: '50%',
              background: config.gradient,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Mail size={18} color="#fff" />
            </div>
            <div>
              <div style={{ fontWeight: 700, color: 'var(--color-blue-night)', fontSize: 15 }}>
                Vous préparez votre {level === 'CSP' ? 'carte de séjour pluriannuelle' : level === 'CR' ? 'carte de résident' : 'naturalisation'} ?
              </div>
              <div style={{ fontSize: 12, color: '#64748B' }}>Recevez votre bilan personnalisé + conseils</div>
            </div>
          </div>

          {!emailSent ? (
            <>
              <p style={{ fontSize: 14, color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
                Laissez votre email pour recevoir votre résultat détaillé et être contacté par
                un conseiller spécialisé <strong>{level === 'CSP' ? 'titres de séjour' : level === 'CR' ? 'carte de résident' : 'naturalisation'}</strong>.
              </p>
              <div style={{ display: 'flex', gap: '.75rem' }}>
                <input
                  type="email"
                  placeholder="votre@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    flex: 1, padding: '.75rem 1rem', borderRadius: 10,
                    border: '2px solid #E2E8F0', fontSize: 14, outline: 'none',
                  }}
                />
                <button
                  onClick={() => {
                    if (email.includes('@')) setEmailSent(true);
                  }}
                  style={{
                    padding: '.75rem 1.25rem', borderRadius: 10, border: 'none',
                    background: config.gradient, color: '#fff',
                    fontWeight: 700, fontSize: 14, cursor: 'pointer',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Envoyer <ArrowRight size={14} style={{ display: 'inline' }} />
                </button>
              </div>
            </>
          ) : (
            <div style={{ background: '#F0FDF4', padding: '1rem', borderRadius: 10, color: '#15803D', fontWeight: 600, fontSize: 14 }}>
              <CheckCircle size={16} style={{ display: 'inline', marginRight: 6 }} />
              Parfait ! Vous serez contacté sous 24h par un conseiller spécialisé.
            </div>
          )}
        </div>

        {/* Détail par question */}
        <div style={{ background: '#fff', borderRadius: 20, padding: '1.5rem', boxShadow: '0 2px 16px rgba(0,0,35,0.06)', marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--color-blue-night)', margin: '0 0 1rem' }}>
            Détail des réponses
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
            {questions.map((q, i) => {
              const userAnswer = selected[i];
              const correct = userAnswer === q.answer;
              return (
                <div key={q.id} style={{
                  display: 'flex', gap: '0.75rem', alignItems: 'flex-start',
                  padding: '.75rem', borderRadius: 10,
                  background: !userAnswer ? '#F8FAFC' : correct ? '#F0FDF4' : '#FEF2F2',
                }}>
                  <div style={{ flexShrink: 0, marginTop: 2 }}>
                    {!userAnswer
                      ? <AlertCircle size={16} color="#94A3B8" />
                      : correct
                        ? <CheckCircle size={16} color="#22C55E" />
                        : <XCircle size={16} color="#EF4444" />}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: '#1E293B', lineHeight: 1.4 }}>{q.question}</div>
                    {!correct && userAnswer && (
                      <div style={{ fontSize: 12, color: '#64748B', marginTop: 4 }}>
                        Votre réponse : <span style={{ color: '#EF4444' }}>{q.options[userAnswer]}</span>
                        {' · '}Bonne réponse : <span style={{ color: '#22C55E' }}>{q.options[q.answer]}</span>
                      </div>
                    )}
                    {!userAnswer && (
                      <div style={{ fontSize: 12, color: '#94A3B8', marginTop: 2 }}>Non répondue</div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button
            onClick={() => {
              setPhase('intro');
              setSelected({});
              setRevealed({});
              setCurrent(0);
              setEmail('');
              setEmailSent(false);
              setXpEarned(null);
              setNewBadges([]);
              examResultSent.current = false;
              const qs = getExamQuestions(level, 40);
              setQuestions(qs);
            }}
            style={{
              flex: 1, padding: '1rem', borderRadius: 12,
              border: '2px solid #E2E8F0', background: '#fff',
              color: '#374151', fontWeight: 700, fontSize: 14, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
            }}
          >
            <RotateCcw size={16} /> Recommencer
          </button>
          <Link
            href="/modulesciviques"
            style={{
              flex: 1, padding: '1rem', borderRadius: 12,
              background: config.gradient, color: '#fff',
              fontWeight: 700, fontSize: 14, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
              textDecoration: 'none',
            }}
          >
            <Home size={16} /> Retour aux modules
          </Link>
        </div>
      </div>
    </div>
  );

  return null;
}

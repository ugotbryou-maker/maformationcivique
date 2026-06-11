'use client';

import { useState } from 'react';
import { CheckCircle, XCircle, ChevronRight, RotateCcw, Trophy, HelpCircle } from 'lucide-react';

export interface QuizQuestion {
  id: string;
  question: string;
  options: { A: string; B: string; C: string; D: string };
  answer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
}

interface Props {
  questions: QuizQuestion[];
  lessonTitle: string;
}

const LABELS: Record<string, string> = { A: 'A', B: 'B', C: 'C', D: 'D' };

export function LessonEndQuiz({ questions, lessonTitle }: Props) {
  const [idx, setIdx]           = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore]       = useState(0);
  const [phase, setPhase]       = useState<'quiz' | 'results'>('quiz');

  const q      = questions[idx];
  const isLast = idx === questions.length - 1;
  const total  = questions.length;

  const handleSelect = (opt: string) => {
    if (selected) return;
    setSelected(opt);
    if (opt === q.answer) setScore((s) => s + 1);
  };

  const handleNext = () => {
    if (isLast) { setPhase('results'); return; }
    setIdx((i) => i + 1);
    setSelected(null);
  };

  const handleRestart = () => {
    setIdx(0);
    setSelected(null);
    setScore(0);
    setPhase('quiz');
  };

  // ── Écran résultats ──────────────────────────────────────────────────────
  if (phase === 'results') {
    const passed = score >= Math.round(total * 0.8);
    return (
      <div style={{
        background: '#fff',
        borderRadius: 'var(--radius-xl)',
        border: 'var(--border-default)',
        boxShadow: 'var(--shadow-card)',
        overflow: 'hidden',
        marginTop: '32px',
      }}>
        {/* Header */}
        <div style={{
          background: passed
            ? 'linear-gradient(135deg,#16A34A,#15803D)'
            : 'linear-gradient(135deg,#002395,#CC1A1A)',
          padding: '28px 28px 24px',
          textAlign: 'center',
        }}>
          <div style={{
            width: 64, height: 64,
            background: 'rgba(255,255,255,0.2)',
            borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 14px',
          }}>
            <Trophy size={30} color="#fff" />
          </div>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 'var(--font-size-xs)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>
            Quiz de fin de leçon
          </p>
          <h3 style={{ color: '#fff', fontSize: 'var(--font-size-lg)', fontWeight: 700, marginBottom: '8px' }}>
            {score}/{total} réponses correctes
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 'var(--font-size-sm)' }}>
            {passed
              ? '✅ Leçon maîtrisée — bien joué !'
              : '📖 Relisez la leçon et réessayez !'}
          </p>
        </div>

        {/* Score bar */}
        <div style={{ padding: '20px 28px' }}>
          <div style={{ height: 8, background: '#F3F4F6', borderRadius: 4, overflow: 'hidden', marginBottom: '20px' }}>
            <div style={{
              height: '100%',
              width: `${(score / total) * 100}%`,
              background: passed ? '#16A34A' : 'var(--color-red-france)',
              borderRadius: 4,
              transition: 'width 600ms ease-out',
            }} />
          </div>

          {/* Récap questions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
            {questions.map((question, i) => {
              // We don't track individual answers in results — just show pass/fail
              return null; // Simplified: just show CTA
            })}
          </div>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <button
              onClick={handleRestart}
              style={{
                display: 'flex', alignItems: 'center', gap: '7px',
                padding: '11px 20px',
                borderRadius: 'var(--radius-md)',
                background: 'var(--color-off-white)',
                color: 'var(--color-text-secondary)',
                border: 'var(--border-default)',
                fontSize: 'var(--font-size-sm)', fontWeight: 500,
                cursor: 'pointer', fontFamily: 'var(--font-sans)',
                minHeight: '44px',
              }}
            >
              <RotateCcw size={14} /> Recommencer
            </button>
            {passed && (
              <div style={{
                display: 'flex', alignItems: 'center', gap: '7px',
                padding: '11px 20px',
                borderRadius: 'var(--radius-md)',
                background: '#F0FDF4',
                color: '#16A34A',
                border: '1px solid #BBF7D0',
                fontSize: 'var(--font-size-sm)', fontWeight: 600,
                minHeight: '44px',
              }}>
                <CheckCircle size={14} /> Leçon validée
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // ── Écran question ───────────────────────────────────────────────────────
  const answered   = selected !== null;
  const isCorrect  = selected === q.answer;

  return (
    <div style={{
      background: '#fff',
      borderRadius: 'var(--radius-xl)',
      border: 'var(--border-default)',
      boxShadow: 'var(--shadow-card)',
      overflow: 'hidden',
      marginTop: '32px',
    }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg,#002395 0%,#CC1A1A 100%)',
        padding: '18px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '12px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: 30, height: 30, background: 'rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <HelpCircle size={15} color="#fff" />
          </div>
          <span style={{ color: '#fff', fontSize: 'var(--font-size-sm)', fontWeight: 600 }}>
            Quiz de fin de leçon
          </span>
        </div>
        <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: 'var(--font-size-xs)', fontWeight: 500 }}>
          {idx + 1} / {total}
        </span>
      </div>

      {/* Barre de progression */}
      <div style={{ height: 4, background: '#F3F4F6' }}>
        <div style={{
          height: '100%',
          width: `${((idx + (answered ? 1 : 0)) / total) * 100}%`,
          background: 'linear-gradient(90deg,#002395,#CC1A1A)',
          transition: 'width 300ms ease-out',
        }} />
      </div>

      <div style={{ padding: '24px 28px' }}>
        {/* Question */}
        <p style={{
          fontSize: 'var(--font-size-base)',
          fontWeight: 600,
          color: 'var(--color-text-primary)',
          lineHeight: 1.5,
          marginBottom: '20px',
        }}>
          {q.question}
        </p>

        {/* Options */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: answered ? '20px' : '0' }}>
          {(Object.entries(q.options) as [string, string][]).map(([key, val]) => {
            const isThisSelected = selected === key;
            const isThisCorrect  = key === q.answer;
            let bg = 'var(--color-off-white)';
            let border = 'var(--border-default)';
            let color = 'var(--color-text-secondary)';
            let keyBg = '#e5e7eb';
            let keyColor = 'var(--color-text-muted)';

            if (answered) {
              if (isThisCorrect) {
                bg = '#F0FDF4'; border = '1.5px solid #16A34A'; color = '#15803D';
                keyBg = '#16A34A'; keyColor = '#fff';
              } else if (isThisSelected && !isThisCorrect) {
                bg = '#FEF2F2'; border = '1.5px solid #DC2626'; color = '#B91C1C';
                keyBg = '#DC2626'; keyColor = '#fff';
              } else {
                color = 'var(--color-text-muted)';
              }
            }

            return (
              <button
                key={key}
                onClick={() => handleSelect(key)}
                disabled={answered}
                style={{
                  display: 'flex', alignItems: 'flex-start', gap: '12px',
                  padding: '12px 14px',
                  borderRadius: 'var(--radius-md)',
                  background: bg,
                  border,
                  color,
                  fontSize: 'var(--font-size-sm)',
                  fontFamily: 'var(--font-sans)',
                  textAlign: 'left',
                  cursor: answered ? 'default' : 'pointer',
                  transition: 'all 150ms ease-out',
                  minHeight: '44px',
                  width: '100%',
                }}
              >
                <span style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: 24, height: 24, borderRadius: '50%',
                  background: keyBg, color: keyColor,
                  fontSize: '12px', fontWeight: 700, flexShrink: 0, marginTop: '1px',
                  transition: 'all 150ms ease-out',
                }}>
                  {LABELS[key]}
                </span>
                <span style={{ lineHeight: 1.5, paddingTop: '3px' }}>{val}</span>
                {answered && isThisCorrect && (
                  <CheckCircle size={16} color="#16A34A" style={{ marginLeft: 'auto', flexShrink: 0, marginTop: '3px' }} />
                )}
                {answered && isThisSelected && !isThisCorrect && (
                  <XCircle size={16} color="#DC2626" style={{ marginLeft: 'auto', flexShrink: 0, marginTop: '3px' }} />
                )}
              </button>
            );
          })}
        </div>

        {/* Explication + bouton suivant */}
        {answered && (
          <div style={{
            borderRadius: 'var(--radius-md)',
            background: isCorrect ? '#F0FDF4' : '#EFF6FF',
            border: `1px solid ${isCorrect ? '#BBF7D0' : '#BFDBFE'}`,
            padding: '14px 16px',
            marginTop: '16px',
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <div style={{ flexShrink: 0, marginTop: '1px' }}>
                {isCorrect
                  ? <CheckCircle size={16} color="#16A34A" />
                  : <HelpCircle size={16} color="#2563EB" />
                }
              </div>
              <div>
                <p style={{ fontSize: 'var(--font-size-xs)', fontWeight: 600, color: isCorrect ? '#15803D' : '#1D4ED8', marginBottom: '4px' }}>
                  {isCorrect ? 'Bonne réponse !' : `La bonne réponse était : ${q.answer}. ${q.options[q.answer]}`}
                </p>
                <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  {q.explanation}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer bouton */}
      {answered && (
        <div style={{ padding: '0 28px 24px', display: 'flex', justifyContent: 'flex-end' }}>
          <button
            onClick={handleNext}
            style={{
              display: 'flex', alignItems: 'center', gap: '7px',
              padding: '11px 22px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--gradient-primary)',
              color: '#fff',
              border: 'none',
              fontSize: 'var(--font-size-sm)', fontWeight: 600,
              cursor: 'pointer',
              fontFamily: 'var(--font-sans)',
              minHeight: '44px',
            }}
          >
            {isLast ? 'Voir mon score' : 'Question suivante'}
            <ChevronRight size={14} />
          </button>
        </div>
      )}
    </div>
  );
}

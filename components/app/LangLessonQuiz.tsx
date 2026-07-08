'use client';

import { useState } from 'react';
import { CheckCircle, XCircle, RotateCcw, Trophy } from 'lucide-react';
import type { LangExercise } from '@/data/langue/types';

interface Props {
  exercises: LangExercise[];
  accent?: string;
  lessonSlug?: string;
}

export function LangLessonQuiz({ exercises, accent = 'var(--color-blue-france)', lessonSlug }: Props) {
  const [selected, setSelected] = useState<Record<number, number>>({});
  const [showResult, setShowResult] = useState(false);
  const [xpAwarded, setXpAwarded] = useState(false);

  const answeredCount = Object.keys(selected).length;
  const score = exercises.reduce((acc, ex, i) => acc + (selected[i] === ex.correctIndex ? 1 : 0), 0);
  const pct = exercises.length > 0 ? Math.round((score / exercises.length) * 100) : 0;

  const handleSelect = (qIndex: number, optIndex: number) => {
    if (selected[qIndex] !== undefined) return;
    setSelected((s) => ({ ...s, [qIndex]: optIndex }));
  };

  const reset = () => { setSelected({}); setShowResult(false); };

  if (exercises.length === 0) return null;

  return (
    <div>
      {/* Barre de progression + score */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px',
        background: '#fff', borderRadius: 'var(--radius-lg)', padding: '14px 18px',
        border: 'var(--border-default)', boxShadow: 'var(--shadow-card)',
        position: 'sticky', top: '8px', zIndex: 5,
      }}>
        <div style={{ flex: 1, height: 8, background: 'var(--color-off-white)', borderRadius: 100, overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${(answeredCount / exercises.length) * 100}%`, background: accent, borderRadius: 100, transition: 'width 0.25s' }} />
        </div>
        <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--color-text-secondary)', whiteSpace: 'nowrap' }}>
          {answeredCount} / {exercises.length}
        </span>
        {answeredCount === exercises.length && !showResult && (
          <button
            onClick={async () => {
              setShowResult(true);
              if (lessonSlug && !xpAwarded) {
                setXpAwarded(true);
                fetch('/api/progress/complete', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ lessonSlug }),
                }).catch(() => {});
              }
            }}
            style={{ background: accent, color: '#fff', border: 'none', borderRadius: 'var(--radius-md)', padding: '8px 16px', fontSize: 'var(--font-size-sm)', fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap' }}
          >
            Voir mon score
          </button>
        )}
      </div>

      {showResult && (
        <div style={{
          background: pct >= 80 ? '#F0FDF4' : '#FFFBEB',
          border: `1px solid ${pct >= 80 ? '#86EFAC' : '#FDE68A'}`,
          borderRadius: 'var(--radius-lg)', padding: '20px', marginBottom: '20px',
          display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap',
        }}>
          <Trophy size={28} color={pct >= 80 ? '#16A34A' : '#D97706'} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 'var(--font-size-lg)', fontWeight: 700, color: pct >= 80 ? '#15803D' : '#92400E' }}>
              {score} / {exercises.length} ({pct}%)
            </div>
            <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
              {pct >= 80 ? 'Excellent ! Vous maîtrisez cette leçon.' : 'Continuez à vous entraîner — relisez les explications ci-dessous.'}
            </div>
          </div>
          <button
            onClick={reset}
            style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#fff', border: 'var(--border-default)', borderRadius: 'var(--radius-md)', padding: '8px 14px', fontSize: 'var(--font-size-sm)', fontWeight: 600, cursor: 'pointer', color: 'var(--color-text-secondary)' }}
          >
            <RotateCcw size={14} /> Refaire
          </button>
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {exercises.map((ex, qIndex) => {
          const userAnswer = selected[qIndex];
          const isAnswered = userAnswer !== undefined;

          return (
            <div key={ex.id} style={{ background: '#fff', borderRadius: 'var(--radius-lg)', padding: '18px 20px', border: 'var(--border-default)', boxShadow: 'var(--shadow-card)' }}>
              <div style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px' }}>
                Question {qIndex + 1}
              </div>
              <p style={{ fontSize: 'var(--font-size-base)', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '14px', lineHeight: 1.5 }}>
                {ex.question}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {ex.options.map((opt, optIndex) => {
                  const isCorrect = optIndex === ex.correctIndex;
                  const isSelected = userAnswer === optIndex;
                  let bg = 'var(--color-off-white)';
                  let border = 'var(--border-default)';
                  let color = 'var(--color-text-secondary)';

                  if (isAnswered) {
                    if (isCorrect) { bg = '#F0FDF4'; border = '1.5px solid #22C55E'; color = '#15803D'; }
                    else if (isSelected) { bg = '#FEF2F2'; border = '1.5px solid #EF4444'; color = '#DC2626'; }
                  }

                  return (
                    <button
                      key={optIndex}
                      onClick={() => handleSelect(qIndex, optIndex)}
                      disabled={isAnswered}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '10px', textAlign: 'left',
                        width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-md)',
                        background: bg, border, color,
                        fontSize: 'var(--font-size-sm)', fontWeight: isSelected || (isAnswered && isCorrect) ? 600 : 400,
                        cursor: isAnswered ? 'default' : 'pointer',
                      }}
                    >
                      {isAnswered && isCorrect && <CheckCircle size={16} color="#22C55E" style={{ flexShrink: 0 }} />}
                      {isAnswered && isSelected && !isCorrect && <XCircle size={16} color="#EF4444" style={{ flexShrink: 0 }} />}
                      {(!isAnswered || (!isCorrect && !isSelected)) && (
                        <span style={{ width: 16, flexShrink: 0, textAlign: 'center', fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                          {String.fromCharCode(65 + optIndex)}
                        </span>
                      )}
                      <span>{opt}</span>
                    </button>
                  );
                })}
              </div>

              {isAnswered && (
                <div style={{ marginTop: '12px', padding: '12px 14px', background: '#FFFBEB', borderRadius: 'var(--radius-md)', borderLeft: '3px solid #F59E0B', fontSize: 'var(--font-size-sm)', color: '#78350F', lineHeight: 1.6 }}>
                  <strong>Explication :</strong> {ex.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

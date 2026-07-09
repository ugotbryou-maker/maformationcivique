'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, XCircle } from 'lucide-react';
import { renderLangMarkdown } from '@/lib/langue-markdown';
import type { LangLesson, LangExercise } from '@/data/langue/types';

type Step = 'dialogue' | 'point' | 'exercises' | 'score';

interface Props {
  lesson: LangLesson;
  accent: string;
  bg: string;
  modTitle: string;
  modIndex: number;
  modTotal: number;
  lessonSlug?: string;
}

export function LangLessonReader({ lesson, accent, bg, modTitle, modIndex, modTotal, lessonSlug }: Props) {
  const [step, setStep] = useState<Step>('dialogue');
  const [qIndex, setQIndex] = useState(0);
  const [selected, setSelected] = useState<Record<number, number>>({});
  const [xpAwarded, setXpAwarded] = useState(false);

  const exercises = lesson.exercises;
  const totalQ = exercises.length;
  const currentQ: LangExercise | undefined = exercises[qIndex];
  const hasSelected = selected[qIndex] !== undefined;
  const isCorrect = hasSelected && selected[qIndex] === currentQ?.correctIndex;

  const score = exercises.reduce((acc, _, i) => {
    return selected[i] === exercises[i].correctIndex ? acc + 1 : acc;
  }, 0);

  const stepIndex = step === 'dialogue' ? 0 : step === 'point' ? 1 : 2;

  return (
    <div style={{ minWidth: 0 }}>
      {/* Stepper */}
      <div style={{ overflowX: 'auto', maxWidth: '100%', marginBottom: '24px', paddingBottom: '4px' }}>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', minWidth: 'max-content' }}>
          {['Dialogue', 'Leçon', 'Exercices'].map((label, i) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
              <button
                onClick={() => {
                  if (i === 0) setStep('dialogue');
                  else if (i === 1) setStep('point');
                  else { setStep('exercises'); setQIndex(0); }
                }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '6px',
                  padding: '6px 14px', borderRadius: '100px',
                  fontSize: '13px', fontWeight: 600, cursor: 'pointer',
                  border: 'none', flexShrink: 0,
                  background: i === stepIndex ? accent : 'var(--color-off-white)',
                  color: i === stepIndex ? '#fff' : 'var(--color-text-muted)',
                  transition: 'all 150ms',
                }}
              >
                <span style={{
                  width: 20, height: 20, borderRadius: '50%', display: 'flex',
                  alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700,
                  background: i === stepIndex ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.08)',
                }}>{i + 1}</span>
                {label}
              </button>
              {i < 2 && <div style={{ width: 24, height: 1, background: 'var(--color-border)', flexShrink: 0 }} />}
            </div>
          ))}
        </div>
      </div>

      {/* ── STEP: Dialogue ──────────────────────────────────────────── */}
      {step === 'dialogue' && (
        <div>
          <div style={{ background: '#fff', borderRadius: 'var(--radius-xl)', border: 'var(--border-default)', boxShadow: 'var(--shadow-card)', overflow: 'hidden' }}>
            <div style={{ padding: '14px 22px', borderBottom: 'var(--border-default)', display: 'flex', alignItems: 'center', gap: '8px', background: bg }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: accent }}>
                Module {modIndex + 1}/{modTotal} — {modTitle}
              </span>
            </div>
            <div style={{ padding: '26px 28px' }}>
              {renderLangMarkdown(lesson.dialogue, accent)}
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
            <button onClick={() => setStep('point')} style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              background: accent, color: '#fff', padding: '11px 24px',
              borderRadius: 'var(--radius-md)', fontSize: '14px', fontWeight: 600,
              border: 'none', cursor: 'pointer',
            }}>
              Suivante <ChevronRight size={15} />
            </button>
          </div>
        </div>
      )}

      {/* ── STEP: Point linguistique ─────────────────────────────────── */}
      {step === 'point' && (
        <div>
          <div style={{ background: '#fff', borderRadius: 'var(--radius-xl)', border: 'var(--border-default)', boxShadow: 'var(--shadow-card)', overflow: 'hidden' }}>
            <div style={{ padding: '14px 22px', borderBottom: 'var(--border-default)', display: 'flex', alignItems: 'center', gap: '8px', background: bg }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: accent }}>Point linguistique</span>
            </div>
            <div style={{ padding: '26px 28px' }}>
              {renderLangMarkdown(lesson.linguisticPoint, accent)}
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
            <button onClick={() => setStep('dialogue')} style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              background: '#fff', color: 'var(--color-text-secondary)', padding: '11px 20px',
              borderRadius: 'var(--radius-md)', fontSize: '14px', fontWeight: 500,
              border: 'var(--border-default)', cursor: 'pointer', boxShadow: 'var(--shadow-card)',
            }}>
              <ChevronLeft size={15} /> Précédente
            </button>
            <button onClick={() => { setStep('exercises'); setQIndex(0); }} style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              background: accent, color: '#fff', padding: '11px 24px',
              borderRadius: 'var(--radius-md)', fontSize: '14px', fontWeight: 600,
              border: 'none', cursor: 'pointer',
            }}>
              Passer aux exercices <ChevronRight size={15} />
            </button>
          </div>
        </div>
      )}

      {/* ── STEP: Exercices (1 par 1) ─────────────────────────────────── */}
      {step === 'exercises' && currentQ && (
        <div>
          {/* Progress bar */}
          <div style={{ marginBottom: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
              <span style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>
                Question {qIndex + 1} / {totalQ}
              </span>
              <span style={{ fontSize: 12, fontWeight: 600, color: accent }}>
                {Math.round(((qIndex) / totalQ) * 100)}%
              </span>
            </div>
            <div style={{ height: 4, background: 'var(--color-off-white)', borderRadius: 100, overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${(qIndex / totalQ) * 100}%`, background: accent, borderRadius: 100, transition: 'width 300ms ease-out' }} />
            </div>
          </div>

          <div style={{ background: '#fff', borderRadius: 'var(--radius-xl)', border: 'var(--border-default)', boxShadow: 'var(--shadow-card)', padding: '28px 28px 24px' }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--color-text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 12px' }}>
              Question {qIndex + 1}
            </p>
            <p style={{ fontSize: 17, fontWeight: 700, color: 'var(--color-text-primary)', margin: '0 0 22px', lineHeight: 1.4 }}>
              {currentQ.question}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {currentQ.options.map((opt, i) => {
                const isSelected = selected[qIndex] === i;
                const revealed = hasSelected;
                const optCorrect = i === currentQ.correctIndex;
                let bg2 = '#fff';
                let border = '1.5px solid var(--color-border)';
                let color = 'var(--color-text-primary)';
                if (revealed) {
                  if (optCorrect) { bg2 = '#F0FDF4'; border = `1.5px solid #16A34A`; color = '#15803D'; }
                  else if (isSelected && !optCorrect) { bg2 = '#FEF2F2'; border = `1.5px solid #DC2626`; color = '#DC2626'; }
                } else if (isSelected) {
                  bg2 = bg; border = `1.5px solid ${accent}`; color = accent;
                }

                return (
                  <button
                    key={i}
                    onClick={() => { if (!hasSelected) setSelected((s) => ({ ...s, [qIndex]: i })); }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '12px',
                      padding: '13px 16px', borderRadius: 'var(--radius-md)',
                      background: bg2, border, color, cursor: hasSelected ? 'default' : 'pointer',
                      textAlign: 'left', transition: 'all 120ms', fontFamily: 'var(--font-sans)',
                      fontSize: '14px', fontWeight: isSelected || (revealed && optCorrect) ? 600 : 400,
                    }}
                  >
                    <span style={{
                      width: 28, height: 28, borderRadius: '50%', display: 'flex',
                      alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700,
                      flexShrink: 0, background: isSelected || (revealed && optCorrect) ? (revealed && optCorrect ? '#16A34A' : revealed ? '#DC2626' : accent) : 'var(--color-off-white)',
                      color: isSelected || (revealed && optCorrect) ? '#fff' : 'var(--color-text-muted)',
                      transition: 'all 120ms',
                    }}>
                      {['A', 'B', 'C', 'D'][i]}
                    </span>
                    {opt}
                    {revealed && optCorrect && <CheckCircle size={16} color="#16A34A" style={{ marginLeft: 'auto', flexShrink: 0 }} />}
                    {revealed && isSelected && !optCorrect && <XCircle size={16} color="#DC2626" style={{ marginLeft: 'auto', flexShrink: 0 }} />}
                  </button>
                );
              })}
            </div>

            {/* Explication */}
            {hasSelected && currentQ.explanation && (
              <div style={{ marginTop: '16px', padding: '12px 16px', background: isCorrect ? '#F0FDF4' : '#FEF2F2', borderRadius: 'var(--radius-md)', borderLeft: `3px solid ${isCorrect ? '#16A34A' : '#DC2626'}` }}>
                <p style={{ fontSize: 13, color: isCorrect ? '#166534' : '#991B1B', margin: 0, lineHeight: 1.5 }}>{currentQ.explanation}</p>
              </div>
            )}
          </div>

          {/* Nav buttons */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
            <button
              onClick={() => { if (qIndex > 0) setQIndex(q => q - 1); else setStep('point'); }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                background: '#fff', color: 'var(--color-text-secondary)', padding: '11px 20px',
                borderRadius: 'var(--radius-md)', fontSize: '14px', fontWeight: 500,
                border: 'var(--border-default)', cursor: 'pointer', boxShadow: 'var(--shadow-card)',
              }}
            >
              <ChevronLeft size={15} /> Précédente
            </button>
            {qIndex < totalQ - 1 ? (
              <button
                onClick={() => setQIndex(q => q + 1)}
                disabled={!hasSelected}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  background: hasSelected ? accent : 'var(--color-text-muted)', color: '#fff', padding: '11px 24px',
                  borderRadius: 'var(--radius-md)', fontSize: '14px', fontWeight: 600,
                  border: 'none', cursor: hasSelected ? 'pointer' : 'not-allowed', opacity: hasSelected ? 1 : 0.5,
                }}
              >
                Suivante <ChevronRight size={15} />
              </button>
            ) : (
              <button
                onClick={() => {
                  setStep('score');
                  if (lessonSlug && !xpAwarded) {
                    setXpAwarded(true);
                    fetch('/api/progress/complete', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ lessonSlug }),
                    }).catch(() => {});
                  }
                }}
                disabled={!hasSelected}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  background: hasSelected ? '#16A34A' : 'var(--color-text-muted)', color: '#fff', padding: '11px 24px',
                  borderRadius: 'var(--radius-md)', fontSize: '14px', fontWeight: 600,
                  border: 'none', cursor: hasSelected ? 'pointer' : 'not-allowed', opacity: hasSelected ? 1 : 0.5,
                }}
              >
                Voir mon score ✓
              </button>
            )}
          </div>
        </div>
      )}

      {/* ── STEP: Score ──────────────────────────────────────────────── */}
      {step === 'score' && (
        <div style={{ background: '#fff', borderRadius: 'var(--radius-xl)', border: 'var(--border-default)', boxShadow: 'var(--shadow-card)', padding: '40px 32px', textAlign: 'center' }}>
          <div style={{ fontSize: 56, marginBottom: '16px' }}>
            {score / totalQ >= 0.8 ? '🎉' : score / totalQ >= 0.5 ? '👍' : '💪'}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '8px' }}>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: 'var(--color-text-primary)', margin: 0 }}>
              {score} / {totalQ}
            </h2>
            {xpAwarded && (
              <span style={{
                background: accent, color: '#fff',
                fontSize: '13px', fontWeight: 700, padding: '4px 12px',
                borderRadius: '100px', letterSpacing: '0.02em',
              }}>+ 50 XP</span>
            )}
          </div>
          <p style={{ fontSize: 15, color: 'var(--color-text-muted)', marginBottom: '28px' }}>
            {score / totalQ >= 0.8
              ? 'Excellent ! Vous maîtrisez cette leçon.'
              : score / totalQ >= 0.5
                ? 'Bien ! Vous pouvez encore progresser.'
                : 'Continuez à pratiquer — relisez la leçon.'}
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => { setStep('dialogue'); setQIndex(0); setSelected({}); }}
              style={{
                padding: '11px 22px', borderRadius: 'var(--radius-md)', fontSize: '14px', fontWeight: 600,
                background: '#fff', color: 'var(--color-text-secondary)', border: 'var(--border-default)',
                cursor: 'pointer', boxShadow: 'var(--shadow-card)',
              }}
            >
              Recommencer la leçon
            </button>
            <button
              onClick={() => { setStep('exercises'); setQIndex(0); setSelected({}); }}
              style={{
                padding: '11px 22px', borderRadius: 'var(--radius-md)', fontSize: '14px', fontWeight: 600,
                background: accent, color: '#fff', border: 'none', cursor: 'pointer',
              }}
            >
              Refaire les exercices
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

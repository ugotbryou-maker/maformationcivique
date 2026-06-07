'use client';

import { useState } from 'react';
import { CheckCircle, XCircle, Lightbulb } from 'lucide-react';
import type { Exercise } from '@/data/exercises';

interface Props {
  exercise: Exercise;
}

export function LessonExercise({ exercise }: Props) {
  const [selected, setSelected] = useState<number | null>(null);
  const answered = selected !== null;
  const isCorrect = selected === exercise.correctIndex;

  return (
    <div style={{
      background: '#FFFDF5',
      border: '1.5px solid #F59E0B',
      borderRadius: 'var(--radius-lg)',
      padding: '20px 22px',
      margin: '24px 0',
    }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
        <div style={{
          width: 28, height: 28,
          background: '#FEF3C7', borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          <Lightbulb size={14} color="#D97706" />
        </div>
        <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700, color: '#D97706', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
          Testez-vous
        </span>
      </div>

      {/* Question */}
      <p style={{ fontSize: 'var(--font-size-base)', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '14px', lineHeight: 1.4 }}>
        {exercise.question}
      </p>

      {/* Options */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {exercise.options.map((option, i) => {
          let bg = '#fff';
          let border = '1px solid var(--color-border)';
          let textColor = 'var(--color-text-secondary)';

          if (answered) {
            if (i === exercise.correctIndex) {
              bg = '#F0FDF4'; border = '1.5px solid #16A34A'; textColor = '#15803D';
            } else if (i === selected && !isCorrect) {
              bg = '#FEF2F2'; border = '1.5px solid #DC2626'; textColor = '#B91C1C';
            }
          }

          return (
            <button
              key={i}
              disabled={answered}
              onClick={() => setSelected(i)}
              style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                background: bg, border, borderRadius: 'var(--radius-md)',
                padding: '10px 14px', cursor: answered ? 'default' : 'pointer',
                textAlign: 'left', transition: 'all 150ms', fontFamily: 'var(--font-sans)',
              }}
              onMouseEnter={(e) => {
                if (!answered) (e.currentTarget as HTMLButtonElement).style.borderColor = '#F59E0B';
              }}
              onMouseLeave={(e) => {
                if (!answered) (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--color-border)';
              }}
            >
              <span style={{
                width: 22, height: 22, borderRadius: '50%', flexShrink: 0,
                background: answered && i === exercise.correctIndex ? '#16A34A' :
                             answered && i === selected ? '#DC2626' : '#F3F4F6',
                color: answered && (i === exercise.correctIndex || i === selected) ? '#fff' : 'var(--color-text-muted)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '11px', fontWeight: 700,
              }}>
                {answered && i === exercise.correctIndex ? <CheckCircle size={13} /> :
                 answered && i === selected && !isCorrect ? <XCircle size={13} /> :
                 String.fromCharCode(65 + i)}
              </span>
              <span style={{ fontSize: 'var(--font-size-sm)', color: textColor, fontWeight: answered && i === exercise.correctIndex ? 600 : 400 }}>
                {option}
              </span>
            </button>
          );
        })}
      </div>

      {/* Explication */}
      {answered && (
        <div style={{
          marginTop: '14px', padding: '12px 14px',
          background: isCorrect ? '#F0FDF4' : '#FEF2F2',
          borderRadius: 'var(--radius-md)',
          borderLeft: `3px solid ${isCorrect ? '#16A34A' : '#DC2626'}`,
        }}>
          <p style={{ fontSize: 'var(--font-size-sm)', color: isCorrect ? '#15803D' : '#B91C1C', fontWeight: 600, marginBottom: '4px' }}>
            {isCorrect ? '✓ Bonne réponse !' : '✗ Pas tout à fait…'}
          </p>
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
            {exercise.explanation}
          </p>
        </div>
      )}
    </div>
  );
}

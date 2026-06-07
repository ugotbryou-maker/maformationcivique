'use client';

import { useState } from 'react';
import { CheckCircle, XCircle, Brain } from 'lucide-react';
import type { Question } from '@/data/questions';

type AnswerState = 'idle' | 'correct' | 'wrong';

interface QuizQuestionProps {
  question: Question;
  questionNum: number;
  total: number;
  onAnswer: (correct: boolean) => void;
  isPremium?: boolean;
  showTimer?: boolean;
}

const optionKeys = ['A', 'B', 'C', 'D'] as const;

export function QuizQuestion({ question, questionNum, total, onAnswer, isPremium }: QuizQuestionProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [state, setState] = useState<AnswerState>('idle');
  const [aiExplanation, setAiExplanation] = useState<string | null>(null);
  const [loadingAI, setLoadingAI] = useState(false);


  const handleSelect = async (key: string) => {
    if (state !== 'idle') return;
    setSelected(key);
    const correct = key === question.answer;
    setState(correct ? 'correct' : 'wrong');
    onAnswer(correct);

    if (!correct && isPremium) {
      setLoadingAI(true);
      try {
        const res = await fetch('/api/ai/explain', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            question: question.question,
            correctAnswer: question.options[question.answer],
            userAnswer: question.options[key as keyof typeof question.options],
            explanation: question.explanation,
            lang: 'fr',
          }),
        });
        const data = await res.json();
        setAiExplanation(data.explanation);
      } catch {
        setAiExplanation(null);
      } finally {
        setLoadingAI(false);
      }
    }
  };

  const getOptionStyle = (key: string): React.CSSProperties => {
    const base: React.CSSProperties = {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px',
      padding: '14px 16px',
      borderRadius: 'var(--radius-md)',
      border: '1.5px solid var(--color-border)',
      background: 'var(--color-surface)',
      cursor: state === 'idle' ? 'pointer' : 'default',
      transition: 'all 150ms ease-out',
      textAlign: 'left',
      width: '100%',
      fontFamily: 'var(--font-sans)',
      minHeight: '52px',
    };

    if (state === 'idle') return base;

    if (key === question.answer) {
      return { ...base, background: '#E1F5EE', borderColor: '#1D9E75', cursor: 'default' };
    }
    if (key === selected && state === 'wrong') {
      return { ...base, background: 'var(--color-red-light)', borderColor: 'var(--color-red-france)', cursor: 'default' };
    }
    return { ...base, opacity: 0.5, cursor: 'default' };
  };

  return (
    <div>
      {/* Progress */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
        <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
          Question {questionNum} / {total}
        </span>
        <span
          style={{
            fontSize: 'var(--font-size-xs)',
            padding: '2px 8px',
            borderRadius: 'var(--radius-pill)',
            background: 'var(--color-blue-light)',
            color: 'var(--color-blue-france)',
            fontWeight: 500,
          }}
        >
          {question.difficulty}
        </span>
      </div>

      {/* Question */}
      <h3
        style={{
          fontSize: 'var(--font-size-md)',
          fontWeight: 500,
          color: 'var(--color-text-primary)',
          lineHeight: 1.4,
          marginBottom: '28px',
        }}
      >
        {question.question}
      </h3>

      {/* Options */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
        {optionKeys.map((key) => (
          <button key={key} style={getOptionStyle(key)} onClick={() => handleSelect(key)}>
            {/* Key label */}
            <span
              style={{
                width: '28px',
                height: '28px',
                borderRadius: 'var(--radius-sm)',
                background: state === 'idle'
                  ? 'var(--color-blue-light)'
                  : key === question.answer
                  ? '#1D9E75'
                  : key === selected && state === 'wrong'
                  ? 'var(--color-red-france)'
                  : 'var(--color-border)',
                color: state !== 'idle' && (key === question.answer || (key === selected && state === 'wrong'))
                  ? '#FFFFFF'
                  : 'var(--color-blue-france)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 'var(--font-size-xs)',
                fontWeight: 500,
                flexShrink: 0,
                transition: 'all 150ms ease-out',
              }}
            >
              {key}
            </span>
            <span
              style={{
                fontSize: 'var(--font-size-base)',
                color: state !== 'idle' && key === question.answer
                  ? '#0D6E51'
                  : state !== 'idle' && key === selected && state === 'wrong'
                  ? 'var(--color-red-france)'
                  : 'var(--color-text-secondary)',
                lineHeight: 1.4,
                flex: 1,
              }}
            >
              {question.options[key]}
            </span>
            {state !== 'idle' && key === question.answer && (
              <CheckCircle size={18} color="#1D9E75" style={{ flexShrink: 0 }} />
            )}
            {key === selected && state === 'wrong' && (
              <XCircle size={18} color="var(--color-red-france)" style={{ flexShrink: 0 }} />
            )}
          </button>
        ))}
      </div>

      {/* Explanation (always shown after answer) */}
      {state !== 'idle' && (
        <div
          style={{
            padding: '16px',
            borderRadius: 'var(--radius-md)',
            background: state === 'correct' ? '#E1F5EE' : 'var(--color-blue-light)',
            border: `1px solid ${state === 'correct' ? '#1D9E7530' : 'var(--color-border)'}`,
            fontSize: 'var(--font-size-sm)',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.65,
          }}
        >
          <p style={{ fontWeight: 500, color: 'var(--color-text-primary)', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            {state === 'correct' ? <CheckCircle size={15} color="#1D9E75" /> : <XCircle size={15} color="var(--color-red-france)" />}
            {state === 'correct' ? 'Bonne réponse !' : 'Pas tout à fait…'}
          </p>
          {question.explanation}

          {/* IA explanation */}
          {isPremium && state === 'wrong' && (
            <div
              style={{
                marginTop: '12px',
                paddingTop: '12px',
                borderTop: '0.5px solid var(--color-border)',
                display: 'flex',
                gap: '8px',
                alignItems: 'flex-start',
              }}
            >
              <Brain size={15} color="var(--color-blue-france)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: 500, color: 'var(--color-blue-france)', display: 'block', marginBottom: '4px' }}>
                  Explication IA
                </span>
                {loadingAI ? (
                  <span style={{ color: 'var(--color-text-muted)' }}>Génération en cours…</span>
                ) : (
                  <span>{aiExplanation}</span>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

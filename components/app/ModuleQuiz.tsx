'use client';

import { useState } from 'react';
import { CheckCircle, XCircle, ChevronRight, Trophy, RotateCcw } from 'lucide-react';
import Link from 'next/link';
import type { Exercise } from '@/data/exercises';

interface Props {
  questions: Exercise[];
  moduleTitle: string;
  moduleSlug: string;
}

export function ModuleQuiz({ questions, moduleTitle, moduleSlug }: Props) {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null));
  const [showResult, setShowResult] = useState(false);

  const question = questions[currentQ];
  const answered = selected !== null;
  const isCorrect = selected === question?.correctIndex;
  const score = answers.filter((a, i) => a === questions[i]?.correctIndex).length;
  const percent = Math.round((score / questions.length) * 100);
  const passed = percent >= 80;

  function handleSelect(i: number) {
    if (answered) return;
    setSelected(i);
    const newAnswers = [...answers];
    newAnswers[currentQ] = i;
    setAnswers(newAnswers);
  }

  function handleNext() {
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
      setSelected(answers[currentQ + 1]);
    } else {
      setShowResult(true);
    }
  }

  function handleReset() {
    setCurrentQ(0);
    setSelected(null);
    setAnswers(new Array(questions.length).fill(null));
    setShowResult(false);
  }

  // ── Résultats ──────────────────────────────────────────────────────────────
  if (showResult) {
    return (
      <div style={{ padding: '48px 24px', textAlign: 'center', maxWidth: '560px', margin: '0 auto' }}>
        {/* Trophée */}
        <div style={{
          width: 72, height: 72,
          background: passed ? '#F0FDF4' : '#FEF2F2',
          borderRadius: '50%', margin: '0 auto 20px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Trophy size={32} color={passed ? '#16A34A' : '#DC2626'} />
        </div>

        <h2 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '8px' }}>
          {passed ? 'Félicitations !' : 'Continuez à vous entraîner'}
        </h2>
        <p style={{ fontSize: 'var(--font-size-base)', color: 'var(--color-text-secondary)', marginBottom: '32px' }}>
          {passed
            ? `Vous avez maîtrisé le module "${moduleTitle}".`
            : `Révisez les leçons du module "${moduleTitle}" et retentez votre chance.`}
        </p>

        {/* Score */}
        <div style={{
          background: passed ? '#F0FDF4' : '#FEF2F2',
          borderRadius: 'var(--radius-lg)',
          padding: '24px 32px', marginBottom: '32px',
          border: `1.5px solid ${passed ? '#16A34A' : '#DC2626'}`,
        }}>
          <div style={{ fontSize: '56px', fontWeight: 800, color: passed ? '#15803D' : '#B91C1C', lineHeight: 1 }}>
            {percent}%
          </div>
          <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginTop: '6px' }}>
            {score} bonne{score > 1 ? 's' : ''} réponse{score > 1 ? 's' : ''} sur {questions.length}
          </div>
          <div style={{
            marginTop: '12px',
            background: passed ? '#DCFCE7' : '#FEE2E2',
            borderRadius: 'var(--radius-sm)', padding: '4px 12px',
            display: 'inline-block',
            fontSize: 'var(--font-size-xs)', fontWeight: 600,
            color: passed ? '#15803D' : '#B91C1C',
          }}>
            {passed ? '✓ Seuil de 80% atteint' : '✗ Seuil de 80% non atteint'}
          </div>
        </div>

        {/* Détail par question */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '32px', textAlign: 'left' }}>
          {questions.map((q, i) => {
            const correct = answers[i] === q.correctIndex;
            return (
              <div key={q.id} style={{
                display: 'flex', alignItems: 'flex-start', gap: '10px',
                padding: '10px 14px', borderRadius: 'var(--radius-md)',
                background: correct ? '#F0FDF4' : '#FEF2F2',
                border: `0.5px solid ${correct ? '#16A34A' : '#DC2626'}`,
              }}>
                {correct
                  ? <CheckCircle size={16} color="#16A34A" style={{ flexShrink: 0, marginTop: 2 }} />
                  : <XCircle size={16} color="#DC2626" style={{ flexShrink: 0, marginTop: 2 }} />}
                <div>
                  <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 500, color: 'var(--color-text-primary)' }}>
                    Q{i + 1}. {q.question}
                  </div>
                  {!correct && (
                    <div style={{ fontSize: 'var(--font-size-xs)', color: '#15803D', marginTop: '3px' }}>
                      ✓ {q.options[q.correctIndex]}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={handleReset}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#fff', border: 'var(--border-default)',
              color: 'var(--color-text-secondary)',
              padding: '12px 24px', borderRadius: 'var(--radius-md)',
              fontWeight: 500, fontSize: 'var(--font-size-base)',
              cursor: 'pointer', fontFamily: 'var(--font-sans)',
            }}
          >
            <RotateCcw size={15} /> Recommencer
          </button>
          <Link href={`/module/${moduleSlug}`} style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'var(--color-blue-france)', color: '#fff',
            padding: '12px 24px', borderRadius: 'var(--radius-md)',
            fontWeight: 600, fontSize: 'var(--font-size-base)',
            textDecoration: 'none',
          }}>
            Retour au module <ChevronRight size={15} />
          </Link>
        </div>
      </div>
    );
  }

  // ── Question ───────────────────────────────────────────────────────────────
  return (
    <div style={{ maxWidth: '680px', margin: '0 auto', padding: '40px 24px 64px' }}>

      {/* Progression */}
      <div style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
            Question {currentQ + 1} / {questions.length}
          </span>
          <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--color-blue-france)' }}>
            {Math.round(((currentQ) / questions.length) * 100)}%
          </span>
        </div>
        <div style={{ height: 6, background: 'var(--color-blue-light)', borderRadius: 'var(--radius-pill)' }}>
          <div style={{
            height: '100%', borderRadius: 'var(--radius-pill)',
            background: 'var(--gradient-primary)',
            width: `${((currentQ) / questions.length) * 100}%`,
            transition: 'width 300ms ease-out',
          }} />
        </div>
      </div>

      {/* Carte question */}
      <div style={{
        background: '#fff', borderRadius: 'var(--radius-xl)',
        border: 'var(--border-default)', boxShadow: 'var(--shadow-card)',
        padding: '28px 28px 24px', marginBottom: '20px',
      }}>
        <p style={{
          fontSize: 'var(--font-size-md)', fontWeight: 600,
          color: 'var(--color-text-primary)', lineHeight: 1.4, marginBottom: '24px',
        }}>
          {question.question}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {question.options.map((opt, i) => {
            let bg = '#fff', border = '1.5px solid var(--color-border)', textColor = 'var(--color-text-secondary)';
            if (answered) {
              if (i === question.correctIndex) { bg = '#F0FDF4'; border = '1.5px solid #16A34A'; textColor = '#15803D'; }
              else if (i === selected) { bg = '#FEF2F2'; border = '1.5px solid #DC2626'; textColor = '#B91C1C'; }
              else { bg = '#FAFAFA'; textColor = 'var(--color-text-muted)'; }
            }
            return (
              <button
                key={i}
                disabled={answered}
                onClick={() => handleSelect(i)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  background: bg, border, borderRadius: 'var(--radius-md)',
                  padding: '14px 16px', cursor: answered ? 'default' : 'pointer',
                  textAlign: 'left', transition: 'all 150ms', fontFamily: 'var(--font-sans)',
                  minHeight: '52px',
                }}
                onMouseEnter={(e) => { if (!answered) (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--color-blue-france)'; }}
                onMouseLeave={(e) => { if (!answered) (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--color-border)'; }}
              >
                <span style={{
                  width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                  background: answered && i === question.correctIndex ? '#16A34A' :
                               answered && i === selected && !isCorrect ? '#DC2626' :
                               'var(--color-blue-light)',
                  color: answered && (i === question.correctIndex || (i === selected && !isCorrect)) ? '#fff' :
                         'var(--color-blue-france)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '12px', fontWeight: 700,
                }}>
                  {answered && i === question.correctIndex ? <CheckCircle size={14} /> :
                   answered && i === selected && !isCorrect ? <XCircle size={14} /> :
                   String.fromCharCode(65 + i)}
                </span>
                <span style={{ fontSize: 'var(--font-size-base)', color: textColor, fontWeight: answered && i === question.correctIndex ? 600 : 400, flex: 1 }}>
                  {opt}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Explication */}
      {answered && (
        <div style={{
          padding: '16px 18px', borderRadius: 'var(--radius-lg)',
          background: isCorrect ? '#F0FDF4' : '#FEF2F2',
          borderLeft: `4px solid ${isCorrect ? '#16A34A' : '#DC2626'}`,
          marginBottom: '20px',
        }}>
          <p style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: isCorrect ? '#15803D' : '#B91C1C', marginBottom: '6px' }}>
            {isCorrect ? '✓ Bonne réponse !' : '✗ Pas tout à fait…'}
          </p>
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>
            {question.explanation}
          </p>
        </div>
      )}

      {/* Bouton Suivant */}
      {answered && (
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button
            onClick={handleNext}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'var(--color-blue-night)', color: '#fff',
              padding: '14px 28px', borderRadius: 'var(--radius-md)',
              fontWeight: 600, fontSize: 'var(--font-size-base)',
              cursor: 'pointer', border: 'none',
              fontFamily: 'var(--font-sans)', minHeight: '52px',
            }}
          >
            {currentQ < questions.length - 1 ? <>Question suivante <ChevronRight size={16} /></> : <>Voir mes résultats <Trophy size={16} /></>}
          </button>
        </div>
      )}
    </div>
  );
}

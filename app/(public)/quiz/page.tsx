'use client';

import { useState, useCallback } from 'react';
import { QuizQuestion } from '@/components/app/QuizQuestion';
import { ProgressBar } from '@/components/app/ProgressBar';
import { getFreeQuestions } from '@/data/questions';
import { RotateCcw, Trophy, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const QUIZ_SIZE = 10;

export default function QuizPage() {
  const [questions] = useState(() => getFreeQuestions(QUIZ_SIZE));
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [done, setDone] = useState(false);

  const handleAnswer = useCallback(
    (correct: boolean) => {
      if (answered) return;
      setAnswered(true);
      if (correct) setScore((s) => s + 1);
    },
    [answered]
  );

  const handleNext = () => {
    if (current + 1 >= questions.length) {
      setDone(true);
    } else {
      setCurrent((c) => c + 1);
      setAnswered(false);
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setScore(0);
    setAnswered(false);
    setDone(false);
  };

  const percent = Math.round((current / questions.length) * 100);
  const finalPercent = Math.round((score / questions.length) * 100);
  const passed = finalPercent >= 80;

  return (
    <div style={{ minHeight: '80vh', padding: '48px 0 80px' }}>
      <div className="container" style={{ maxWidth: '640px' }}>
        {!done ? (
          <>
            {/* Header */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <h1 style={{ fontSize: 'var(--font-size-md)', color: 'var(--color-text-primary)' }}>
                  Entraînement libre
                </h1>
                <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
                  {score} bonne{score > 1 ? 's' : ''} / {current} répondue{current > 1 ? 's' : ''}
                </span>
              </div>
              <ProgressBar value={percent} showPercent />
            </div>

            {/* Question card */}
            <div
              style={{
                background: 'var(--color-surface)',
                borderRadius: 'var(--radius-xl)',
                border: 'var(--border-default)',
                boxShadow: 'var(--shadow-card)',
                padding: '32px',
              }}
            >
              <QuizQuestion
                question={questions[current]}
                questionNum={current + 1}
                total={questions.length}
                onAnswer={handleAnswer}
                isPremium={false}
              />

              {answered && (
                <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'flex-end' }}>
                  <button
                    onClick={handleNext}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '12px 24px',
                      borderRadius: 'var(--radius-pill)',
                      background: 'var(--gradient-primary)',
                      color: '#FFFFFF',
                      border: 'none',
                      fontSize: 'var(--font-size-base)',
                      fontWeight: 500,
                      cursor: 'pointer',
                      minHeight: '48px',
                      fontFamily: 'var(--font-sans)',
                    }}
                  >
                    {current + 1 >= questions.length ? 'Voir mes résultats' : 'Question suivante'}
                    <ArrowRight size={16} />
                  </button>
                </div>
              )}
            </div>

            {/* Upsell subtil */}
            <p style={{ textAlign: 'center', marginTop: '24px', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
              Accès gratuit limité à 20 questions ·{' '}
              <Link href="/inscription?plan=premium" style={{ color: 'var(--color-blue-france)', textDecoration: 'underline' }}>
                Passer Premium pour les 177 →
              </Link>
            </p>
          </>
        ) : (
          /* Results */
          <div
            style={{
              background: 'var(--color-surface)',
              borderRadius: 'var(--radius-xl)',
              border: 'var(--border-default)',
              boxShadow: 'var(--shadow-lg)',
              padding: '48px 32px',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: passed ? '#E1F5EE' : 'var(--color-red-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
              }}
            >
              <Trophy size={36} color={passed ? '#1D9E75' : 'var(--color-red-france)'} />
            </div>

            <h2 style={{ fontSize: 'var(--font-size-xl)', color: 'var(--color-text-primary)', marginBottom: '8px' }}>
              {finalPercent}%
            </h2>
            <p style={{ fontSize: 'var(--font-size-md)', color: passed ? '#1D9E75' : 'var(--color-red-france)', fontWeight: 500, marginBottom: '8px' }}>
              {passed ? 'Excellent ! Vous avez la moyenne requise.' : "Pas encore à 80% — continuez l'entraînement !"}
            </p>
            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginBottom: '32px' }}>
              {score} bonne{score > 1 ? 's' : ''} réponse{score > 1 ? 's' : ''} sur {questions.length} questions
            </p>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={handleRestart}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 24px',
                  borderRadius: 'var(--radius-pill)',
                  background: 'transparent',
                  color: 'var(--color-blue-france)',
                  border: '1.5px solid var(--color-blue-france)',
                  fontSize: 'var(--font-size-base)',
                  fontWeight: 500,
                  cursor: 'pointer',
                  minHeight: '48px',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                <RotateCcw size={16} />
                Rejouer
              </button>
              <Link href="/inscription">
                <button
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 24px',
                    borderRadius: 'var(--radius-pill)',
                    background: 'var(--gradient-primary)',
                    color: '#FFFFFF',
                    border: 'none',
                    fontSize: 'var(--font-size-base)',
                    fontWeight: 500,
                    cursor: 'pointer',
                    minHeight: '48px',
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  Accéder aux 177 questions
                  <ArrowRight size={16} />
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

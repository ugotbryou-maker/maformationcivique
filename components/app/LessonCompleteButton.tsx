'use client';

import { useState, useEffect } from 'react';
import { CheckCircle, Star, Zap } from 'lucide-react';

interface Props {
  lessonSlug: string;
  nextSlug?: string | null;
  moduleSlug?: string;
}

interface CompletionResult {
  alreadyCompleted: boolean;
  xpEarned: number;
  totalXp: number;
  newBadges?: string[];
  streakDays?: number;
}

export function LessonCompleteButton({ lessonSlug, nextSlug, moduleSlug }: Props) {
  const [state, setState] = useState<'idle' | 'loading' | 'done'>('idle');
  const [result, setResult] = useState<CompletionResult | null>(null);
  const [showToast, setShowToast] = useState(false);

  // Vérifier si déjà complétée au chargement
  useEffect(() => {
    async function check() {
      try {
        const res = await fetch('/api/progress/summary');
        if (!res.ok) return;
        const data = await res.json();
        // Si ce module a une progression, on re-vérifie via complete (alreadyCompleted=true)
        const modData = moduleSlug ? data[moduleSlug] : null;
        if (modData && modData.completed > 0) {
          // Vérification rapide : est-ce que cette leçon précise est done ?
          // On laisse l'état idle — le bouton restera disponible
        }
      } catch { /* silencieux */ }
    }
    check();
  }, [lessonSlug, moduleSlug]);

  const handleComplete = async () => {
    if (state === 'loading') return;
    setState('loading');
    try {
      const res = await fetch('/api/progress/complete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lessonSlug }),
      });

      if (res.status === 401) {
        // Non connecté → rediriger
        window.location.href = `/connexion?redirect=/lecon/${lessonSlug}`;
        return;
      }

      const data: CompletionResult = await res.json();
      setResult(data);
      setState('done');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 4000);
    } catch {
      setState('idle');
    }
  };

  const alreadyDone = result?.alreadyCompleted === true;
  const justCompleted = state === 'done' && !alreadyDone;

  return (
    <div style={{ position: 'relative' }}>
      {/* Toast XP */}
      {showToast && !alreadyDone && (
        <div
          style={{
            position: 'fixed',
            bottom: '100px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 999,
            background: '#0F172A',
            color: '#fff',
            padding: '14px 24px',
            borderRadius: '100px',
            fontSize: '15px',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.35)',
            animation: 'slideUp 0.3s ease-out',
          }}
        >
          <Zap size={18} color="#FACC15" fill="#FACC15" />
          <span>+{result?.xpEarned} XP</span>
          <span style={{ opacity: 0.5 }}>·</span>
          <span style={{ opacity: 0.75 }}>{result?.totalXp} XP total</span>
          {result?.newBadges && result.newBadges.length > 0 && (
            <>
              <span style={{ opacity: 0.5 }}>·</span>
              <Star size={15} color="#FACC15" fill="#FACC15" />
              <span>Badge débloqué !</span>
            </>
          )}
        </div>
      )}

      {/* Bouton principal */}
      <div style={{
        display: 'flex',
        gap: '12px',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'flex-end',
      }}>
        {/* Si déjà complétée */}
        {(state === 'done' && alreadyDone) ? (
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '12px 24px', borderRadius: '100px',
            background: '#F0FDF4', color: '#16A34A',
            fontSize: '15px', fontWeight: 600,
            border: '1.5px solid #BBF7D0',
          }}>
            <CheckCircle size={17} />
            Leçon déjà complétée
          </div>
        ) : justCompleted ? (
          /* Juste complétée → bouton "Leçon suivante" ou retour module */
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '12px 20px', borderRadius: '100px',
              background: '#F0FDF4', color: '#16A34A',
              fontSize: '14px', fontWeight: 600,
              border: '1.5px solid #BBF7D0',
            }}>
              <CheckCircle size={16} />
              Complétée !
            </div>
            {nextSlug ? (
              <a
                href={`/lecon/${nextSlug}`}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '12px 28px', borderRadius: '100px',
                  background: 'linear-gradient(135deg, #002395 0%, #EF4135 100%)',
                  color: '#fff', fontSize: '15px', fontWeight: 600,
                  textDecoration: 'none',
                  boxShadow: '0 4px 16px rgba(0,35,149,0.3)',
                }}
              >
                Leçon suivante →
              </a>
            ) : (
              <a
                href={moduleSlug ? `/module/${moduleSlug}` : '/modules'}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '12px 28px', borderRadius: '100px',
                  background: 'linear-gradient(135deg, #002395 0%, #EF4135 100%)',
                  color: '#fff', fontSize: '15px', fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                Retour au module →
              </a>
            )}
          </div>
        ) : (
          /* Bouton "Terminer" */
          <button
            onClick={handleComplete}
            disabled={state === 'loading'}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              padding: '14px 32px', borderRadius: '100px',
              background: state === 'loading'
                ? '#E2E8F0'
                : 'linear-gradient(135deg, #002395 0%, #EF4135 100%)',
              color: state === 'loading' ? '#94A3B8' : '#fff',
              fontSize: '15px', fontWeight: 700,
              border: 'none', cursor: state === 'loading' ? 'wait' : 'pointer',
              fontFamily: 'var(--font-sans)',
              boxShadow: state === 'loading' ? 'none' : '0 4px 20px rgba(0,35,149,0.25)',
              transition: 'all 200ms ease-out',
              minHeight: '52px',
            }}
          >
            {state === 'loading' ? (
              <>
                <span style={{
                  width: 16, height: 16,
                  border: '2px solid #CBD5E1',
                  borderTopColor: '#64748B',
                  borderRadius: '50%',
                  display: 'inline-block',
                  animation: 'spin 0.6s linear infinite',
                }} />
                Enregistrement…
              </>
            ) : (
              <>
                <CheckCircle size={18} />
                Terminer la leçon &nbsp;·&nbsp; +50 XP
              </>
            )}
          </button>
        )}
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translate(-50%, 12px); }
          to   { opacity: 1; transform: translate(-50%, 0); }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

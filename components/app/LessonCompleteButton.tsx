'use client';

import { useState, useEffect } from 'react';
import { CheckCircle, Star, Zap } from 'lucide-react';

interface Props {
  lessonSlug: string;
  nextSlug?: string | null;
  moduleSlug?: string;
  // Surcharge pour les leçons langue (chemins différents de /lecon/ et /module/)
  nextHref?: string | null;
  moduleHref?: string;
  accentColor?: string;
}

interface CompletionResult {
  alreadyCompleted: boolean;
  xpEarned: number;
  totalXp: number;
  newBadges?: string[];
  streakDays?: number;
}

export function LessonCompleteButton({ lessonSlug, nextSlug, moduleSlug, nextHref, moduleHref, accentColor }: Props) {
  const [state, setState] = useState<'idle' | 'loading' | 'done'>('idle');
  const [result, setResult] = useState<CompletionResult | null>(null);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    // Vérifier si déjà complétée (silencieux, pour info seulement)
    fetch('/api/progress/summary').catch(() => {});
  }, [lessonSlug, moduleSlug]);

  const resolvedNextHref = nextHref ?? (nextSlug ? `/lecon/${nextSlug}` : null);
  const resolvedModuleHref = moduleHref ?? (moduleSlug ? `/module/${moduleSlug}` : '/modulesciviques');
  const btnGradient = accentColor
    ? `linear-gradient(135deg, ${accentColor} 0%, #EF4135 100%)`
    : 'linear-gradient(135deg, #002395 0%, #EF4135 100%)';

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
        window.location.href = `/connexion`;
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
            {resolvedNextHref ? (
              <a
                href={resolvedNextHref}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '12px 28px', borderRadius: '100px',
                  background: btnGradient,
                  color: '#fff', fontSize: '15px', fontWeight: 600,
                  textDecoration: 'none',
                  boxShadow: '0 4px 16px rgba(0,35,149,0.3)',
                }}
              >
                Leçon suivante →
              </a>
            ) : (
              <a
                href={resolvedModuleHref}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '12px 28px', borderRadius: '100px',
                  background: btnGradient,
                  color: '#fff', fontSize: '15px', fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                Retour au module →
              </a>
            )}
          </div>
        ) : (
          <button
            onClick={handleComplete}
            disabled={state === 'loading'}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              padding: '14px 32px', borderRadius: '100px',
              background: state === 'loading' ? '#E2E8F0' : btnGradient,
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

'use client';

import {
  BookOpen, GraduationCap, CheckCircle, Banknote,
  Globe, Timer, Trophy, Building2, FileText, Shield,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const items: { icon: LucideIcon; text: string }[] = [
  { icon: Shield,        text: '177 questions officielles' },
  { icon: BookOpen,      text: '2 700+ exercices de français' },
  { icon: GraduationCap, text: 'Cours A2 → B1 → B2' },
  { icon: CheckCircle,   text: 'Taux de réussite 80%+' },
  { icon: Banknote,      text: 'Gratuit pour commencer' },
  { icon: Globe,         text: '4 langues disponibles' },
  { icon: Timer,         text: 'Examens blancs chronométrés' },
  { icon: Trophy,        text: 'Badges & gamification' },
  { icon: Building2,     text: 'Accès Cabinet & associations' },
  { icon: FileText,      text: 'Attestation de suivi PDF' },
];

const ticker = [...items, ...items];

export function TrustBar() {
  return (
    <div style={{
      background: 'var(--color-blue-night)',
      borderTop: '2px solid rgba(255,255,255,0.06)',
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* Tricolor stripe */}
      <div style={{ height: '2px', background: 'linear-gradient(90deg, #002395 33.3%, #fff 33.3% 66.6%, #EF4135 66.6%)' }} />

      {/* Fade edges */}
      <div style={{ position: 'absolute', left: 0, top: '2px', bottom: 0, width: 80, background: 'linear-gradient(to right, var(--color-blue-night), transparent)', zIndex: 2, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', right: 0, top: '2px', bottom: 0, width: 80, background: 'linear-gradient(to left, var(--color-blue-night), transparent)', zIndex: 2, pointerEvents: 'none' }} />

      <div style={{ padding: '14px 0', display: 'flex', alignItems: 'center' }}>
        <div className="ticker-track">
          {ticker.map(({ icon: Icon, text }, i) => (
            <span key={i} className="ticker-item">
              <Icon size={13} style={{ flexShrink: 0 }} />
              {text}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .ticker-track {
          display: flex;
          align-items: center;
          white-space: nowrap;
          animation: ticker-scroll 36s linear infinite;
          will-change: transform;
        }
        .ticker-track:hover { animation-play-state: paused; }
        .ticker-item {
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 500;
          color: rgba(255,255,255,0.72);
          padding: 0 32px;
          letter-spacing: 0.01em;
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        @keyframes ticker-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .ticker-track { animation: none; }
        }
      `}</style>
    </div>
  );
}

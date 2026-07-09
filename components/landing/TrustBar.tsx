'use client';

const items = [
  '🇫🇷  177 questions officielles',
  '📚  2 700+ exercices de français',
  '🎓  Cours A2 → B1 → B2',
  '✅  Taux de réussite 80%+',
  '💶  Gratuit pour commencer',
  '🌍  4 langues disponibles',
  '⏱️  Examens blancs chronométrés',
  '🏆  Badges & gamification',
  '🤝  Accès Cabinet & associations',
  '📝  Attestation de suivi PDF',
];

// Double the list so the loop is seamless
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
          {ticker.map((item, i) => (
            <span key={i} className="ticker-item">
              {item}
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
          padding: 0 40px;
          letter-spacing: 0.01em;
          flex-shrink: 0;
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

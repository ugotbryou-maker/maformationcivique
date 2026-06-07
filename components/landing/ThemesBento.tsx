'use client';

import Link from 'next/link';
import { modules } from '@/data/modules';
import { ArrowRight } from 'lucide-react';

export function ThemesBento() {
  return (
    <section style={{ padding: '96px 0', background: 'var(--color-off-white)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '48px' }}>
          <span
            style={{
              fontSize: 'var(--font-size-xs)',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--color-blue-france)',
              display: 'block',
              marginBottom: '12px',
            }}
          >
            Programme complet
          </span>
          <h2
            style={{
              fontSize: 'var(--font-size-xl)',
              color: 'var(--color-text-primary)',
              marginBottom: '12px',
            }}
          >
            5 modules pour maîtriser l'essentiel
          </h2>
          <p style={{ fontSize: 'var(--font-size-base)', color: 'var(--color-text-secondary)', maxWidth: '480px' }}>
            Chaque module couvre un thème clé de l'examen civique, avec des leçons structurées et des quiz ciblés.
          </p>
        </div>

        {/* Bento grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '16px',
          }}
        >
          {modules.map((mod, i) => (
            <BentoTile key={mod.slug} module={mod} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BentoTile({ module: mod, index }: { module: typeof modules[0]; index: number }) {
  const bgColors = [
    'linear-gradient(160deg, #001A70 0%, #002395 100%)',
    'linear-gradient(160deg, #002395 0%, #0057A8 100%)',
    'linear-gradient(160deg, #8B1A2B 0%, #CC1A1A 100%)',
    'linear-gradient(160deg, #CC1A1A 0%, #EF4135 100%)',
    'linear-gradient(135deg, #001A70 0%, #CC1A1A 100%)',
  ];

  const isWide = mod.wide;
  const isLocked = !mod.freeAccess;

  return (
    <Link
      href={`/module/${mod.slug}`}
      style={{
        gridColumn: isWide ? '1 / -1' : 'auto',
        position: 'relative',
        display: 'block',
        borderRadius: 'var(--radius-xl)',
        overflow: 'hidden',
        aspectRatio: isWide ? '3/1' : '4/3',
        background: bgColors[index % bgColors.length],
        cursor: 'pointer',
        textDecoration: 'none',
      }}
      className="bento-tile"
    >
      {/* Overlay dégradé sombre bas→haut */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 100%)',
          zIndex: 1,
        }}
      />

      {/* Pattern géométrique subtil */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 50%)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '20px',
        }}
      >
        {/* Top: numéro + badge */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <span
            style={{
              fontSize: '32px',
              fontWeight: 500,
              color: 'rgba(255,255,255,0.25)',
              lineHeight: 1,
              fontVariantNumeric: 'tabular-nums',
            }}
          >
            {mod.num}
          </span>
          <div style={{ display: 'flex', gap: '6px' }}>
            {isLocked && (
              <span
                style={{
                  padding: '3px 10px',
                  borderRadius: 'var(--radius-pill)',
                  background: 'rgba(0,0,0,0.4)',
                  border: '0.5px solid rgba(255,255,255,0.2)',
                  fontSize: 'var(--font-size-xs)',
                  color: 'rgba(255,255,255,0.7)',
                }}
              >
                Premium
              </span>
            )}
            {mod.freeAccess && (
              <span
                style={{
                  padding: '3px 10px',
                  borderRadius: 'var(--radius-pill)',
                  background: 'rgba(29,158,117,0.3)',
                  border: '0.5px solid rgba(29,158,117,0.5)',
                  fontSize: 'var(--font-size-xs)',
                  color: '#6BDFB8',
                }}
              >
                Gratuit
              </span>
            )}
          </div>
        </div>

        {/* Bottom: title + stats */}
        <div>
          <p style={{ fontSize: 'var(--font-size-xs)', color: 'rgba(255,255,255,0.55)', marginBottom: '6px' }}>
            {mod.subtitle}
          </p>
          <h3
            style={{
              fontSize: isWide ? 'var(--font-size-lg)' : 'var(--font-size-md)',
              fontWeight: 500,
              color: '#FFFFFF',
              lineHeight: 1.2,
              marginBottom: '12px',
            }}
          >
            {mod.title}
          </h3>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', gap: '16px' }}>
              <span style={{ fontSize: 'var(--font-size-xs)', color: 'rgba(255,255,255,0.55)' }}>
                {mod.questionCount} questions
              </span>
              <span style={{ fontSize: 'var(--font-size-xs)', color: 'rgba(255,255,255,0.55)' }}>
                {mod.lessons.length} leçons
              </span>
            </div>
            <ArrowRight size={16} color="rgba(255,255,255,0.5)" />
          </div>
        </div>
      </div>

      {/* Barre tricolore hover */}
      <div
        className="bento-bar"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'var(--gradient-tricolor)',
          transform: 'scaleX(0)',
          transformOrigin: 'left',
          transition: 'transform 250ms ease-out',
          zIndex: 3,
        }}
      />

      <style>{`
        .bento-tile:hover .bento-bar { transform: scaleX(1) !important; }
        .bento-tile { transition: transform 250ms ease-out; }
        .bento-tile:hover { transform: scale(1.015); }
        @media (max-width: 640px) {
          .bento-tile { aspect-ratio: 3/2 !important; }
        }
      `}</style>
    </Link>
  );
}

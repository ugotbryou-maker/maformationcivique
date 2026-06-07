import { Star, Flame, Trophy, Award } from 'lucide-react';

interface XPBadgeProps {
  xp: number;
  streak?: number;
  size?: 'sm' | 'md';
}

function getLevel(xp: number): { label: string; color: string } {
  if (xp >= 2000) return { label: 'Expert', color: '#EF4135' };
  if (xp >= 1000) return { label: 'Avancé', color: '#D97706' };
  if (xp >= 400)  return { label: 'Intermédiaire', color: '#7C3AED' };
  if (xp >= 100)  return { label: 'Débutant+', color: 'var(--color-blue-france)' };
  return { label: 'Débutant', color: 'var(--color-text-muted)' };
}

export function XPBadge({ xp, streak, size = 'md' }: XPBadgeProps) {
  const level = getLevel(xp);
  const isSmall = size === 'sm';

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: isSmall ? '8px' : '12px' }}>
      {/* XP */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          padding: isSmall ? '4px 10px' : '6px 14px',
          borderRadius: 'var(--radius-pill)',
          background: 'var(--color-blue-light)',
          border: '1px solid rgba(0,35,149,0.15)',
        }}
      >
        <Star size={isSmall ? 12 : 14} color="var(--color-blue-france)" fill="var(--color-blue-france)" />
        <span
          style={{
            fontSize: isSmall ? 'var(--font-size-xs)' : 'var(--font-size-sm)',
            fontWeight: 500,
            color: 'var(--color-blue-night)',
          }}
        >
          {xp.toLocaleString()} XP
        </span>
      </div>

      {/* Level */}
      <span
        style={{
          fontSize: isSmall ? 'var(--font-size-xs)' : 'var(--font-size-sm)',
          fontWeight: 500,
          color: level.color,
        }}
      >
        {level.label}
      </span>

      {/* Streak */}
      {streak !== undefined && streak > 0 && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            padding: isSmall ? '4px 8px' : '6px 12px',
            borderRadius: 'var(--radius-pill)',
            background: 'rgba(239,65,53,0.08)',
            border: '1px solid rgba(239,65,53,0.2)',
          }}
        >
          <Flame size={isSmall ? 12 : 14} color="var(--color-red-france)" />
          <span
            style={{
              fontSize: isSmall ? 'var(--font-size-xs)' : 'var(--font-size-sm)',
              fontWeight: 500,
              color: 'var(--color-red-france)',
            }}
          >
            {streak}j
          </span>
        </div>
      )}
    </div>
  );
}

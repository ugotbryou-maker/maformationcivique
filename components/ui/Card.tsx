'use client';

interface CardProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  hover?: boolean;
  gradient?: boolean;
  onClick?: () => void;
  className?: string;
}

export function Card({ children, style, hover, gradient, onClick, className }: CardProps) {
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        background: gradient ? 'var(--gradient-card)' : 'var(--color-surface)',
        border: gradient ? 'none' : 'var(--border-default)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-card)',
        transition: hover ? 'all 250ms ease-out' : undefined,
        cursor: onClick ? 'pointer' : undefined,
        ...style,
      }}
      onMouseEnter={
        hover
          ? (e) => {
              (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)';
              (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow-lg)';
              (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--color-border-hover)';
            }
          : undefined
      }
      onMouseLeave={
        hover
          ? (e) => {
              (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow-card)';
              (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--color-border)';
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}

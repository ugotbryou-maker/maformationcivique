type BadgeVariant = 'default' | 'blue' | 'red' | 'green' | 'outline';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: 'sm' | 'md';
  style?: React.CSSProperties;
}

const variantStyles: Record<BadgeVariant, React.CSSProperties> = {
  default: {
    background: 'var(--color-blue-light)',
    color: 'var(--color-blue-night)',
  },
  blue: {
    background: 'var(--color-blue-france)',
    color: '#FFFFFF',
  },
  red: {
    background: 'var(--color-red-light)',
    color: 'var(--color-red-france)',
  },
  green: {
    background: '#E1F5EE',
    color: '#1D9E75',
  },
  outline: {
    background: 'transparent',
    color: 'var(--color-blue-france)',
    border: '1px solid var(--color-blue-france)',
  },
};

export function Badge({ children, variant = 'default', size = 'md', style }: BadgeProps) {
  const sizeStyle: React.CSSProperties =
    size === 'sm'
      ? { padding: '2px 8px', fontSize: 'var(--font-size-xs)' }
      : { padding: '4px 12px', fontSize: 'var(--font-size-sm)' };

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        borderRadius: 'var(--radius-pill)',
        fontWeight: 'var(--font-weight-medium)',
        fontFamily: 'var(--font-sans)',
        lineHeight: 1.4,
        ...variantStyles[variant],
        ...sizeStyle,
        ...style,
      }}
    >
      {children}
    </span>
  );
}

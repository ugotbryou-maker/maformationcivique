'use client';

import { forwardRef } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
  href?: string;
}

const styles: Record<ButtonVariant, React.CSSProperties> = {
  primary: {
    background: 'var(--gradient-primary)',
    color: '#FFFFFF',
    border: 'none',
  },
  secondary: {
    background: 'transparent',
    color: 'var(--color-blue-france)',
    border: '1.5px solid var(--color-blue-france)',
  },
  accent: {
    background: 'var(--gradient-accent)',
    color: '#FFFFFF',
    border: 'none',
  },
  ghost: {
    background: 'transparent',
    color: 'var(--color-text-secondary)',
    border: '1px solid var(--color-border)',
  },
};

const sizes: Record<ButtonSize, React.CSSProperties> = {
  sm: { padding: '8px 16px', fontSize: 'var(--font-size-sm)', minHeight: '36px' },
  md: { padding: '12px 24px', fontSize: 'var(--font-size-base)', minHeight: '44px' },
  lg: { padding: '14px 32px', fontSize: 'var(--font-size-md)', minHeight: '52px' },
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', fullWidth, loading, children, style, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        style={{
          ...styles[variant],
          ...sizes[size],
          width: fullWidth ? '100%' : 'auto',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          borderRadius: 'var(--radius-pill)',
          fontFamily: 'var(--font-sans)',
          fontWeight: 'var(--font-weight-medium)',
          cursor: disabled || loading ? 'not-allowed' : 'pointer',
          opacity: disabled || loading ? 0.6 : 1,
          transition: 'all 200ms ease-out',
          whiteSpace: 'nowrap',
          ...style,
        }}
        onMouseEnter={(e) => {
          if (!disabled && !loading) {
            (e.currentTarget as HTMLButtonElement).style.opacity = '0.88';
            (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)';
          }
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.opacity = '1';
          (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
        }}
        {...props}
      >
        {loading ? <span style={{ display: 'inline-block', width: 16, height: 16, border: '2px solid currentColor', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} /> : null}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

interface ProgressBarProps {
  value: number; // 0-100
  color?: string;
  height?: number;
  label?: string;
  showPercent?: boolean;
  style?: React.CSSProperties;
}

export function ProgressBar({
  value,
  color = 'var(--gradient-primary)',
  height = 6,
  label,
  showPercent,
  style,
}: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, value));

  return (
    <div style={style}>
      {(label || showPercent) && (
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
          {label && (
            <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>{label}</span>
          )}
          {showPercent && (
            <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: 500, color: 'var(--color-text-primary)' }}>
              {clamped}%
            </span>
          )}
        </div>
      )}
      <div
        style={{
          width: '100%',
          height,
          borderRadius: 'var(--radius-pill)',
          background: 'var(--color-blue-light)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: `${clamped}%`,
            height: '100%',
            background: color,
            borderRadius: 'var(--radius-pill)',
            transition: 'width 500ms ease-out',
          }}
        />
      </div>
    </div>
  );
}

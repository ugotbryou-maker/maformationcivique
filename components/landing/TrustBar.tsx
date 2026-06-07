const stats = [
  { value: '177', label: 'Questions officielles' },
  { value: '5', label: 'Modules thématiques' },
  { value: '80%', label: 'Taux de réussite moyen' },
  { value: '4', label: 'Langues disponibles' },
  { value: '0 €', label: 'Pour commencer' },
];

export function TrustBar() {
  return (
    <div style={{
      background: 'var(--color-blue-night)',
      borderTop: '1px solid rgba(255,255,255,0.06)',
    }}>
      {/* Barre tricolore 2px */}
      <div style={{ height: '2px', background: 'var(--gradient-tricolor)' }} />

      <div className="container" style={{ padding: '0 24px' }}>
        <div className="trustbar-inner" style={{
          display: 'flex', alignItems: 'stretch',
          justifyContent: 'center', flexWrap: 'wrap',
        }}>
          {stats.map(({ value, label }, i) => (
            <div
              key={label}
              style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                padding: '20px 32px',
                borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
              }}
              className="trustbar-item"
            >
              <span style={{ fontSize: '22px', fontWeight: 700, color: '#fff', lineHeight: 1 }}>
                {value}
              </span>
              <span style={{
                fontSize: 'var(--font-size-sm)', color: 'rgba(255,255,255,0.48)',
                maxWidth: '90px', lineHeight: 1.3,
              }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .trustbar-inner { justify-content: flex-start; overflow-x: auto; flex-wrap: nowrap; }
          .trustbar-item { flex-shrink: 0; }
        }
      `}</style>
    </div>
  );
}

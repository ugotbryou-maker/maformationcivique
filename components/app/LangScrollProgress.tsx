'use client';

import { useEffect, useState } from 'react';

interface Props {
  color?: string;
}

export function LangScrollProgress({ color = '#CC1A1A' }: Props) {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop || document.body.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setPct(total > 0 ? Math.min(100, (scrolled / total) * 100) : 0);
    };
    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '3px',
      zIndex: 1000,
      background: 'rgba(0,0,0,0.08)',
    }}>
      <div style={{
        height: '100%',
        width: `${pct}%`,
        background: color,
        transition: 'width 80ms linear',
      }} />
    </div>
  );
}

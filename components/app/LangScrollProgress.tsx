'use client';

import { useEffect, useState } from 'react';

interface Props {
  color?: string;
  stopAtId?: string; // id of the element where bar should reach 100%
}

export function LangScrollProgress({ color = '#CC1A1A', stopAtId }: Props) {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrolled = document.documentElement.scrollTop || document.body.scrollTop;
      let total: number;
      if (stopAtId) {
        const stopEl = document.getElementById(stopAtId);
        if (stopEl) {
          // 100% when the top of the stop element reaches the viewport top
          total = stopEl.getBoundingClientRect().top + scrolled - 80;
        } else {
          total = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        }
      } else {
        total = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      }
      setPct(total > 0 ? Math.min(100, (scrolled / total) * 100) : 0);
    };
    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, [stopAtId]);

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

'use client';

import { useEffect, useState } from 'react';

export function ArticleReadingProgress({ color = '#EF4135' }: { color?: string }) {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById('article-body');
      if (!el) {
        const doc = document.documentElement;
        const scrolled = doc.scrollTop || document.body.scrollTop;
        const total = doc.scrollHeight - doc.clientHeight;
        setPct(total > 0 ? Math.min(100, (scrolled / total) * 100) : 0);
        return;
      }
      const rect = el.getBoundingClientRect();
      const elHeight = el.offsetHeight;
      const scrolled = Math.max(0, -rect.top);
      setPct(Math.min(100, (scrolled / (elHeight - window.innerHeight)) * 100));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      height: 3, background: 'rgba(0,0,0,0.06)',
      pointerEvents: 'none',
    }}>
      <div style={{
        height: '100%',
        width: `${pct}%`,
        background: color,
        transition: 'width 80ms linear',
        borderRadius: '0 2px 2px 0',
      }} />
    </div>
  );
}

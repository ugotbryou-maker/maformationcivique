'use client';

import { useState, useEffect } from 'react';

const WORDS = [
  'titre de séjour',
  'naturalisation',
  'carte de résident',
  'renouvellement',
];

export function HeroAnimatedTitle() {
  const [idx, setIdx]         = useState(0);
  const [entering, setEntering] = useState(true);

  useEffect(() => {
    const tick = setInterval(() => {
      setEntering(false);
      setTimeout(() => {
        setIdx(i => (i + 1) % WORDS.length);
        setEntering(true);
      }, 320);
    }, 2600);
    return () => clearInterval(tick);
  }, []);

  return (
    <h1 style={{
      fontSize: 'clamp(28px, 4vw, 52px)',
      fontWeight: 800,
      lineHeight: 1.12,
      marginBottom: 24,
      color: '#fff',
      textShadow: '0 2px 20px rgba(0,0,0,0.25)',
    }}>
      Aidez vos clients à obtenir<br />
      leur{' '}
      <span
        key={idx}
        style={{
          display: 'inline-block',
          color: '#BFCFFF',
          opacity: entering ? 1 : 0,
          transform: entering ? 'translateY(0)' : 'translateY(-10px)',
          transition: 'opacity 320ms ease, transform 320ms ease',
          whiteSpace: 'nowrap',
        }}
      >
        {WORDS[idx]}
      </span>
    </h1>
  );
}

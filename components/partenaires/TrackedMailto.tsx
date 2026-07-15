'use client';

import { type ReactNode, type CSSProperties } from 'react';

interface Props {
  href: string;
  event: string;
  label: string;
  data?: Record<string, string>;
  style?: CSSProperties;
  className?: string;
  children: ReactNode;
}

export function TrackedMailto({ href, event, label, data, style, className, children }: Props) {
  function handleClick() {
    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ event, label, data }),
    }).catch(() => {});
  }

  return (
    <a href={href} onClick={handleClick} style={style} className={className}>
      {children}
    </a>
  );
}

'use client';

import { useState, useEffect, useCallback } from 'react';
import { Clock } from 'lucide-react';

interface ExamTimerProps {
  durationSeconds: number;
  onExpire: () => void;
  running: boolean;
}

export function ExamTimer({ durationSeconds, onExpire, running }: ExamTimerProps) {
  const [remaining, setRemaining] = useState(durationSeconds);

  useEffect(() => {
    if (!running) return;
    const interval = setInterval(() => {
      setRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          onExpire();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [running, onExpire]);

  const minutes = Math.floor(remaining / 60);
  const seconds = remaining % 60;
  const percent = (remaining / durationSeconds) * 100;
  const isWarning = remaining <= 300; // 5 minutes

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 16px',
        borderRadius: 'var(--radius-pill)',
        background: isWarning ? 'var(--color-red-light)' : 'var(--color-blue-light)',
        border: `1px solid ${isWarning ? 'rgba(204,26,26,0.2)' : 'var(--color-border)'}`,
        transition: 'all 500ms ease-out',
      }}
    >
      <Clock size={15} color={isWarning ? 'var(--color-red-france)' : 'var(--color-blue-france)'} />
      <span
        style={{
          fontSize: 'var(--font-size-base)',
          fontWeight: 500,
          color: isWarning ? 'var(--color-red-france)' : 'var(--color-blue-france)',
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </span>
    </div>
  );
}

'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, Globe, Loader2 } from 'lucide-react';

const STEPS = [
  'Résolution du domaine…',
  "Récupération de l'identité visuelle…",
  'Extraction du logo et des couleurs…',
  'Composition de votre espace…',
];

interface Props {
  accent?: string;
}

export function ApercuWidget({ accent = '#002395' }: Props) {
  const router = useRouter();
  const [url,   setUrl]   = useState('');
  const [phase, setPhase] = useState<'idle' | 'loading' | 'error'>('idle');
  const [msg,   setMsg]   = useState(STEPS[0]);
  const [error, setError] = useState('');
  const timer = useRef<NodeJS.Timeout | null>(null);

  async function generate() {
    const raw = url.trim();
    if (!raw || phase === 'loading') return;

    setPhase('loading');
    setError('');

    let idx = 0;
    setMsg(STEPS[0]);
    timer.current = setInterval(() => {
      idx = Math.min(idx + 1, STEPS.length - 1);
      setMsg(STEPS[idx]);
    }, 900);

    try {
      const res = await fetch('/api/apercu/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: raw }),
      });
      clearInterval(timer.current!);

      if (!res.ok) {
        const d = await res.json() as { error?: string };
        setError(d.error ?? 'Une erreur est survenue.');
        setPhase('error');
        return;
      }

      const d = await res.json() as { slug: string };
      router.push(`/apercu/${d.slug}`);
    } catch {
      clearInterval(timer.current!);
      setError('Connexion impossible. Vérifiez votre connexion internet.');
      setPhase('error');
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{
        display: 'flex', alignItems: 'center',
        border: '1.5px solid rgba(0,35,149,0.18)', borderRadius: 14,
        background: '#fff', boxShadow: '0 2px 16px rgba(0,35,149,0.10)',
        overflow: 'hidden',
      }}>
        <Globe size={18} color="#94a3b8" style={{ flexShrink: 0, marginLeft: 16 }} />
        <input
          type="text"
          value={url}
          onChange={e => setUrl(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && generate()}
          placeholder="cabinet-dupont.fr"
          disabled={phase === 'loading'}
          style={{
            flex: 1, padding: '16px 12px', fontSize: 16,
            border: 'none', outline: 'none', background: 'transparent',
            color: 'var(--color-text-primary)',
          }}
        />
        <button
          onClick={generate}
          disabled={phase === 'loading' || !url.trim()}
          style={{
            display: 'flex', alignItems: 'center', gap: 8,
            background: accent, color: '#fff',
            padding: '13px 20px', margin: 4, borderRadius: 10,
            border: 'none', cursor: phase === 'loading' ? 'wait' : 'pointer',
            fontWeight: 700, fontSize: 15, whiteSpace: 'nowrap',
            opacity: !url.trim() || phase === 'loading' ? 0.55 : 1,
            transition: 'opacity 200ms',
          }}
        >
          {phase === 'loading'
            ? <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} />
            : <ArrowRight size={18} />}
          Générer mon espace
        </button>
      </div>

      {phase === 'loading' && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center', padding: '4px 0' }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: accent, display: 'inline-block', animation: 'pulse 1s ease-in-out infinite' }} />
          <span style={{ fontSize: 14, color: 'var(--color-text-secondary)', fontStyle: 'italic' }}>{msg}</span>
        </div>
      )}

      {phase === 'error' && (
        <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: 10, padding: '12px 16px' }}>
          <p style={{ fontSize: 14, color: '#B91C1C', margin: '0 0 6px' }}>{error}</p>
          <button onClick={() => setPhase('idle')} style={{ fontSize: 13, color: accent, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
            Réessayer →
          </button>
        </div>
      )}

      <style>{`
        @keyframes spin  { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
      `}</style>
    </div>
  );
}

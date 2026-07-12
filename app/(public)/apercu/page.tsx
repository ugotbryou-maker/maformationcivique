'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, Globe, Building2, Loader2 } from 'lucide-react';

const STEPS = [
  'Résolution du domaine…',
  'Récupération de l\'identité visuelle…',
  'Extraction du logo et des couleurs…',
  'Composition de votre espace…',
];

export default function ApercuEntryPage() {
  const router   = useRouter();
  const [url, setUrl]           = useState('');
  const [phase, setPhase]       = useState<'idle' | 'loading' | 'error'>('idle');
  const [msg, setMsg]           = useState(STEPS[0]);
  const [error, setError]       = useState('');
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  async function generate() {
    const raw = url.trim();
    if (!raw || phase === 'loading') return;

    setPhase('loading');
    setError('');

    let idx = 0;
    setMsg(STEPS[0]);
    timerRef.current = setInterval(() => {
      idx = Math.min(idx + 1, STEPS.length - 1);
      setMsg(STEPS[idx]);
    }, 900);

    try {
      const res  = await fetch('/api/apercu/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: raw }),
      });
      clearInterval(timerRef.current!);

      if (!res.ok) {
        const data = await res.json() as { error?: string };
        setError(data.error ?? 'Une erreur est survenue.');
        setPhase('error');
        return;
      }

      const data = await res.json() as { slug: string };
      router.push(`/apercu/${data.slug}`);
    } catch {
      clearInterval(timerRef.current!);
      setError('Connexion impossible. Vérifiez votre connexion internet.');
      setPhase('error');
    }
  }

  return (
    <main style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px 20px' }}>
      <div style={{ maxWidth: 560, width: '100%', textAlign: 'center' }}>

        {/* Badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#EEF4FF', borderRadius: 100, padding: '6px 16px', marginBottom: 28 }}>
          <Building2 size={14} color="#002395" />
          <span style={{ fontSize: 12, fontWeight: 700, color: '#002395', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Cabinets partenaires
          </span>
        </div>

        <h1 style={{ fontSize: 'clamp(26px, 5vw, 42px)', fontWeight: 800, color: 'var(--color-text-primary)', lineHeight: 1.15, marginBottom: 16, letterSpacing: '-0.02em' }}>
          Votre espace cabinet,<br />
          <span style={{ color: '#002395' }}>en 10 secondes.</span>
        </h1>

        <p style={{ fontSize: 16, color: 'var(--color-text-secondary)', lineHeight: 1.7, maxWidth: 440, margin: '0 auto 40px' }}>
          Saisissez l&apos;URL de votre cabinet — nous générons instantanément une simulation personnalisée à vos couleurs et avec votre logo.
        </p>

        {/* Input block */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{
            display: 'flex', alignItems: 'center',
            border: '1.5px solid var(--color-border)', borderRadius: 14,
            background: '#fff', boxShadow: '0 2px 12px rgba(0,35,149,0.08)',
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
                background: '#002395', color: '#fff',
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
              Générer
            </button>
          </div>

          {/* Loading message */}
          {phase === 'loading' && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center', padding: '6px 0' }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#002395', display: 'inline-block', animation: 'pulse 1s ease-in-out infinite' }} />
              <span style={{ fontSize: 14, color: 'var(--color-text-secondary)', fontStyle: 'italic' }}>{msg}</span>
            </div>
          )}

          {/* Error */}
          {phase === 'error' && (
            <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: 10, padding: '12px 16px', textAlign: 'left' }}>
              <p style={{ fontSize: 14, color: '#B91C1C', margin: '0 0 6px' }}>{error}</p>
              <button onClick={() => setPhase('idle')} style={{ fontSize: 13, color: '#002395', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                Réessayer →
              </button>
            </div>
          )}
        </div>

        {/* Social proof */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 32, marginTop: 44 }}>
          {[
            { num: '< 10 s', label: 'pour voir votre espace' },
            { num: '100 %', label: 'personnalisé' },
            { num: '0 €', label: 'pour essayer' },
          ].map(({ num, label }) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <p style={{ fontSize: 18, fontWeight: 800, color: '#002395', margin: '0 0 2px' }}>{num}</p>
              <p style={{ fontSize: 12, color: 'var(--color-text-muted)', margin: 0 }}>{label}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes spin  { from { transform: rotate(0deg);  } to { transform: rotate(360deg); } }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
      `}</style>
    </main>
  );
}

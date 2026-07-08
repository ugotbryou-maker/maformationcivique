'use client';

import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

export function CabinetGmbForm({ current }: { current?: string | null }) {
  const [url, setUrl] = useState(current ?? '');
  const [status, setStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
  const [errMsg, setErrMsg] = useState('');

  async function handleSave() {
    setStatus('saving');
    setErrMsg('');
    try {
      const res = await fetch('/api/cabinet/gmb-link', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ google_review_link: url.trim() }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? 'Erreur serveur');
      }
      setStatus('saved');
      setTimeout(() => setStatus('idle'), 3000);
    } catch (e) {
      setErrMsg(e instanceof Error ? e.message : 'Erreur');
      setStatus('error');
    }
  }

  return (
    <div>
      <div style={{ display: 'flex', gap: 10, alignItems: 'stretch' }}>
        <input
          type="url"
          value={url}
          onChange={(e) => { setUrl(e.target.value); setStatus('idle'); }}
          placeholder="https://g.page/r/votre-cabinet/review"
          style={{
            flex: 1, padding: '10px 14px',
            borderRadius: 'var(--radius-md)',
            border: '1.5px solid var(--color-border)',
            fontSize: 'var(--font-size-sm)',
            fontFamily: 'var(--font-sans)',
            color: 'var(--color-text-primary)',
            background: 'var(--color-off-white)',
            outline: 'none',
          }}
        />
        <button
          onClick={handleSave}
          disabled={status === 'saving'}
          style={{
            padding: '10px 20px',
            borderRadius: 'var(--radius-md)',
            background: status === 'saved' ? '#1D9E75' : 'var(--color-blue-france)',
            color: '#fff', border: 'none', cursor: 'pointer',
            fontSize: 'var(--font-size-sm)', fontWeight: 600,
            fontFamily: 'var(--font-sans)',
            opacity: status === 'saving' ? 0.7 : 1,
            transition: 'all 200ms ease-out',
            whiteSpace: 'nowrap',
          }}
        >
          {status === 'saving' ? 'Enregistrement…' : status === 'saved' ? '✓ Enregistré' : 'Enregistrer'}
        </button>
      </div>

      {status === 'error' && (
        <p style={{ fontSize: 12, color: '#B91C1C', marginTop: 6 }}>{errMsg}</p>
      )}

      {url && status === 'idle' && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 5,
            fontSize: 12, color: 'var(--color-blue-france)',
            marginTop: 8, textDecoration: 'none',
          }}
        >
          <ExternalLink size={11} /> Tester le lien
        </a>
      )}
    </div>
  );
}

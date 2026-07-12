'use client';

import { useState } from 'react';
import { ExternalLink, Camera } from 'lucide-react';

const PALETTES = [
  { slug: 'tricolore', label: 'Tricolore',  primary: '#002395', accent: '#CC1A1A' },
  { slug: 'marine',    label: 'Marine',     primary: '#003882', accent: '#0057A8' },
  { slug: 'or',        label: 'Or',         primary: '#002395', accent: '#B8860B' },
  { slug: 'emeraude',  label: 'Émeraude',   primary: '#0A5F38', accent: '#1D9E75' },
  { slug: 'bordeaux',  label: 'Bordeaux',   primary: '#6B0A2D', accent: '#8B1A2B' },
  { slug: 'ardoise',   label: 'Ardoise',    primary: '#374151', accent: '#6B7280' },
];

interface Props {
  currentName: string;
  currentPalette: string;
  currentGmbLink: string | null;
  cabinetInitial: string;
}

export function CabinetParamsForm({ currentName, currentPalette, currentGmbLink, cabinetInitial }: Props) {
  const [name, setName]         = useState(currentName);
  const [palette, setPalette]   = useState(currentPalette || 'tricolore');
  const [gmbLink, setGmbLink]   = useState(currentGmbLink ?? '');
  const [status, setStatus]     = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
  const [errMsg, setErrMsg]     = useState('');

  const selectedPalette = PALETTES.find((p) => p.slug === palette) ?? PALETTES[0];

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setStatus('saving');
    setErrMsg('');
    try {
      const res = await fetch('/api/cabinet/parametres', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), palette_slug: palette, google_review_link: gmbLink.trim() || null }),
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

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '11px 14px',
    borderRadius: 'var(--radius-md)', border: 'var(--border-default)',
    fontSize: 'var(--font-size-base)', color: 'var(--color-text-primary)',
    background: 'var(--color-off-white)', fontFamily: 'var(--font-sans)', outline: 'none',
    boxSizing: 'border-box',
  };

  return (
    <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>

      {/* ── Photo de profil ────────────────────────────────────────────────── */}
      <section>
        <h2 style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 16 }}>
          Photo du cabinet
        </h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{
            width: 72, height: 72, borderRadius: '50%', flexShrink: 0,
            background: 'var(--gradient-primary)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 26, fontWeight: 800, color: '#fff',
          }}>
            {cabinetInitial}
          </div>
          <div>
            <button
              type="button"
              onClick={() => alert('Upload de logo — disponible prochainement.')}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 7,
                padding: '9px 16px', borderRadius: 'var(--radius-md)',
                border: 'var(--border-default)', background: 'var(--color-off-white)',
                color: 'var(--color-text-secondary)', fontSize: 13, fontWeight: 500,
                cursor: 'pointer', fontFamily: 'var(--font-sans)',
              }}
            >
              <Camera size={14} />
              Changer la photo
            </button>
            <p style={{ fontSize: 12, color: 'var(--color-text-muted)', marginTop: 6 }}>
              PNG ou SVG recommandé · format carré
            </p>
          </div>
        </div>
      </section>

      {/* ── Nom du cabinet ─────────────────────────────────────────────────── */}
      <section>
        <h2 style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 12 }}>
          Nom du cabinet
        </h2>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => { setName(e.target.value); setStatus('idle'); }}
          placeholder="Cabinet Dupont Immigration"
          style={inputStyle}
        />
      </section>

      {/* ── Palette de couleurs ────────────────────────────────────────────── */}
      <section>
        <h2 style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 4 }}>
          Palette de couleurs
        </h2>
        <p style={{ fontSize: 13, color: 'var(--color-text-muted)', marginBottom: 16 }}>
          Définit les couleurs de l&apos;espace de vos clients invités.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: 10 }}>
          {PALETTES.map((p) => {
            const selected = palette === p.slug;
            return (
              <button
                key={p.slug}
                type="button"
                onClick={() => { setPalette(p.slug); setStatus('idle'); }}
                style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  padding: '12px 14px',
                  borderRadius: 'var(--radius-md)',
                  border: selected
                    ? `2px solid ${p.primary}`
                    : 'var(--border-default)',
                  background: selected ? `${p.primary}0D` : 'var(--color-surface)',
                  cursor: 'pointer', fontFamily: 'var(--font-sans)', textAlign: 'left',
                  transition: 'border-color 150ms ease',
                }}
              >
                <div style={{ display: 'flex', gap: 4, flexShrink: 0 }}>
                  <div style={{ width: 18, height: 18, borderRadius: 4, background: p.primary }} />
                  <div style={{ width: 18, height: 18, borderRadius: 4, background: p.accent }} />
                </div>
                <span style={{
                  fontSize: 13, fontWeight: selected ? 600 : 400,
                  color: selected ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                }}>
                  {p.label}
                </span>
              </button>
            );
          })}
        </div>
        {/* Preview live */}
        <div style={{
          marginTop: 14, padding: '14px 18px',
          borderRadius: 'var(--radius-md)', border: 'var(--border-default)',
          background: 'var(--color-off-white)',
          display: 'flex', alignItems: 'center', gap: 12,
        }}>
          <div style={{
            width: 36, height: 36, borderRadius: 8,
            background: `linear-gradient(135deg, ${selectedPalette.primary}, ${selectedPalette.accent})`,
            flexShrink: 0,
          }} />
          <div>
            <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text-primary)', margin: 0 }}>
              Aperçu — {selectedPalette.label}
            </p>
            <p style={{ fontSize: 12, color: 'var(--color-text-muted)', margin: 0 }}>
              {selectedPalette.primary} · {selectedPalette.accent}
            </p>
          </div>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: 6 }}>
            {[selectedPalette.primary, selectedPalette.accent, '#fff'].map((c, i) => (
              <div key={i} style={{
                width: 22, height: 22, borderRadius: '50%',
                background: c, border: '1.5px solid rgba(0,0,0,0.1)',
              }} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Google My Business ─────────────────────────────────────────────── */}
      <section>
        <h2 style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 4 }}>
          Avis Google My Business
        </h2>
        <p style={{ fontSize: 13, color: 'var(--color-text-muted)', marginBottom: 12, lineHeight: 1.5 }}>
          Vos clients reçoivent un email les invitant à laisser un avis dès 80 % de complétion.
        </p>
        <input
          type="url"
          value={gmbLink}
          onChange={(e) => { setGmbLink(e.target.value); setStatus('idle'); }}
          placeholder="https://g.page/r/votre-cabinet/review"
          style={inputStyle}
        />
        {gmbLink && (
          <a
            href={gmbLink}
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
      </section>

      {/* ── Actions ────────────────────────────────────────────────────────── */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <button
          type="submit"
          disabled={status === 'saving'}
          style={{
            padding: '12px 28px', borderRadius: 'var(--radius-pill)',
            background: status === 'saved' ? '#1D9E75' : 'var(--gradient-primary)',
            color: '#fff', border: 'none', fontSize: 14, fontWeight: 600,
            cursor: status === 'saving' ? 'wait' : 'pointer',
            fontFamily: 'var(--font-sans)',
            opacity: status === 'saving' ? 0.7 : 1,
            transition: 'all 200ms ease-out',
          }}
        >
          {status === 'saving' ? 'Enregistrement…' : status === 'saved' ? '✓ Enregistré' : 'Enregistrer les modifications'}
        </button>
        {status === 'error' && (
          <p style={{ fontSize: 13, color: '#B91C1C', margin: 0 }}>{errMsg}</p>
        )}
      </div>
    </form>
  );
}

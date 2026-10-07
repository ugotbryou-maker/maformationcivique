import Link from 'next/link';
import type { ReactNode } from 'react';

export type Teinte = 'violet' | 'mint' | 'cream' | 'sky' | 'rose';

/** Indicateur principal, sur fond pastel. */
export function Kpi({
  icon, label, value, sub, teinte,
}: { icon: ReactNode; label: string; value: string; sub?: string; teinte: Teinte }) {
  return (
    <div className={`adm-kpi adm-kpi-${teinte}`}>
      <div className="adm-kpi-head">
        <span className="adm-kpi-label">{label}</span>
        <span className="adm-kpi-icon">{icon}</span>
      </div>
      <div>
        <p className="adm-kpi-value">{value}</p>
        {sub && <p className="adm-kpi-sub">{sub}</p>}
      </div>
    </div>
  );
}

export function Carte({
  titre, indice, action, children, flush, tight,
}: {
  titre?: string; indice?: string; action?: ReactNode;
  children: ReactNode; flush?: boolean; tight?: boolean;
}) {
  return (
    <div className={`adm-card${flush ? ' adm-card-flush' : ''}${tight ? ' adm-card-tight' : ''}`}>
      {(titre || action) && (
        <div className="adm-card-head">
          <div>
            {titre && <p className="adm-card-title">{titre}</p>}
            {indice && <p className="adm-card-hint">{indice}</p>}
          </div>
          {action}
        </div>
      )}
      {children}
    </div>
  );
}

export function Stat({ n, l }: { n: string | number; l: string }) {
  return (
    <div>
      <p className="adm-stat-n">{n}</p>
      <p className="adm-stat-l">{l}</p>
    </div>
  );
}

/** Pastille d'identité : initiale colorée dérivée du libellé. */
export function Identite({
  principal, secondaire, href,
}: { principal: string; secondaire?: string | null; href?: string }) {
  const corps = (
    <div className="adm-id">
      <span className="adm-av" style={{ background: degradeDe(principal) }}>
        {(principal.trim()[0] ?? '?').toUpperCase()}
      </span>
      <div style={{ minWidth: 0 }}>
        <p className="adm-id-main">{principal}</p>
        {secondaire && <p className="adm-id-sub">{secondaire}</p>}
      </div>
    </div>
  );
  return href ? <Link href={href} style={{ textDecoration: 'none', color: 'inherit' }}>{corps}</Link> : corps;
}

const PALETTE = [
  'linear-gradient(135deg,#6D8CF5,#4A63D6)',
  'linear-gradient(135deg,#F59E8C,#E0674F)',
  'linear-gradient(135deg,#5FC8A4,#22916C)',
  'linear-gradient(135deg,#B79BF0,#8B5FD6)',
  'linear-gradient(135deg,#F2C14E,#D99A1B)',
  'linear-gradient(135deg,#7FB5E8,#3D7FC4)',
];

export function degradeDe(s: string): string {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) % 997;
  return PALETTE[h % PALETTE.length];
}

export function Jauge({ pct, couleur }: { pct: number; couleur?: string }) {
  return (
    <div className="adm-bar">
      <div
        className="adm-bar-fill"
        style={{
          width: `${Math.min(100, Math.max(0, pct))}%`,
          background: couleur ?? (pct >= 80 ? '#0E7A58' : '#1D5FD1'),
        }}
      />
    </div>
  );
}

/** Répartition empilée + légende, à la place d'une liste de barres isolées. */
export function Repartition({
  parts,
}: { parts: { label: string; n: number; couleur: string }[] }) {
  const total = parts.reduce((a, p) => a + p.n, 0) || 1;
  return (
    <>
      <div className="adm-split">
        {parts.filter((p) => p.n > 0).map((p) => (
          <div
            key={p.label}
            className="adm-split-seg"
            style={{ width: `${(p.n / total) * 100}%`, background: p.couleur }}
            title={`${p.label} — ${p.n}`}
          />
        ))}
      </div>
      <div className="adm-legend">
        {parts.map((p) => (
          <div key={p.label} className="adm-legend-item">
            <span className="adm-dot" style={{ background: p.couleur }} />
            <span style={{ color: 'var(--adm-ink-soft)' }}>{p.label}</span>
            <strong style={{ fontVariantNumeric: 'tabular-nums' }}>{p.n}</strong>
            <span className="adm-dim">{Math.round((p.n / total) * 100)} %</span>
          </div>
        ))}
      </div>
    </>
  );
}

export function Vide({ texte }: { texte: string }) {
  return <p className="adm-empty">{texte}</p>;
}

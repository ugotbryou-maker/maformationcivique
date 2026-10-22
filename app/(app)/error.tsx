'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, RotateCw, Home } from 'lucide-react';

/**
 * Garde-fou de l'espace connecté.
 *
 * Sans lui, la moindre erreur d'une page remontait jusqu'à global-error, qui
 * remplace tout le document : plus de navigation, plus de contexte, et une
 * référence sans indication de ce qu'il faut en faire. Ici on garde le cadre
 * de l'application, on nomme la page concernée et on dit où retrouver la
 * trace complète.
 */
export default function ErreurEspace({
  error, reset,
}: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Visible dans les journaux Vercel, rattaché au digest affiché.
    console.error('[espace] erreur de rendu', {
      message: error.message,
      digest: error.digest,
      chemin: typeof window !== 'undefined' ? window.location.pathname : null,
    });
  }, [error]);

  const chemin = typeof window !== 'undefined' ? window.location.pathname : '';

  return (
    <div style={{
      maxWidth: 560, margin: '48px auto', padding: '32px 28px',
      background: 'var(--color-surface)', border: 'var(--border-default)',
      borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-card)',
    }}>
      <div style={{
        width: 42, height: 42, borderRadius: 13, background: '#FEF2F2',
        display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16,
      }}>
        <AlertTriangle size={20} color="#B91C1C" />
      </div>

      <h1 style={{ fontSize: 21, fontWeight: 800, margin: '0 0 8px', color: 'var(--color-text-primary)' }}>
        Cette page n&apos;a pas pu s&apos;afficher
      </h1>
      <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--color-text-secondary)', margin: '0 0 18px' }}>
        Le reste de votre espace fonctionne normalement. Vous pouvez réessayer —
        certaines erreurs sont passagères.
      </p>

      <div style={{
        background: 'var(--color-off-white)', borderRadius: 12, padding: '13px 16px',
        fontSize: 12.5, lineHeight: 1.7, color: 'var(--color-text-muted)', marginBottom: 20,
      }}>
        {chemin && <p style={{ margin: 0 }}>Page : <code>{chemin}</code></p>}
        {error.digest && <p style={{ margin: 0 }}>Référence : <code>{error.digest}</code></p>}
        {error.message && (
          <p style={{ margin: '6px 0 0', color: 'var(--color-text-secondary)' }}>{error.message}</p>
        )}
      </div>

      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        <button onClick={reset} style={bouton}>
          <RotateCw size={15} /> Réessayer
        </button>
        <Link href="/dashboard" style={{ ...bouton, background: 'var(--color-surface)', color: 'var(--color-text-secondary)', border: 'var(--border-default)' }}>
          <Home size={15} /> Tableau de bord
        </Link>
      </div>
    </div>
  );
}

const bouton: React.CSSProperties = {
  display: 'inline-flex', alignItems: 'center', gap: 8,
  padding: '11px 18px', borderRadius: 12, border: 'none',
  background: 'var(--color-blue-france)', color: '#fff',
  fontSize: 13.5, fontWeight: 700, cursor: 'pointer',
  textDecoration: 'none', fontFamily: 'inherit',
};

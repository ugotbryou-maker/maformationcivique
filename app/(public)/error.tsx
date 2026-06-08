'use client';

import Link from 'next/link';

export default function PublicError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div style={{
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '64px 24px',
      textAlign: 'center',
    }}>
      <div style={{ fontSize: '48px', marginBottom: '20px' }}>🔧</div>
      <h1 style={{
        fontSize: '22px', fontWeight: 600,
        color: 'var(--color-text-primary)', marginBottom: '10px',
      }}>
        Oups, une erreur est survenue
      </h1>
      <p style={{
        fontSize: '14px', color: 'var(--color-text-secondary)',
        maxWidth: '380px', lineHeight: 1.6, marginBottom: '28px',
      }}>
        Un problème inattendu s'est produit. Vous pouvez réessayer ou revenir à l'accueil.
      </p>
      {error?.digest && (
        <p style={{ fontSize: '11px', color: 'var(--color-text-muted)', marginBottom: '20px', fontFamily: 'monospace' }}>
          Réf. {error.digest}
        </p>
      )}
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <button
          onClick={reset}
          style={{
            padding: '10px 24px', borderRadius: '100px',
            background: 'var(--color-blue-france)', color: '#fff',
            border: 'none', fontSize: '14px', fontWeight: 500, cursor: 'pointer',
          }}
        >
          Réessayer
        </button>
        <Link
          href="/"
          style={{
            padding: '10px 24px', borderRadius: '100px',
            background: 'transparent', color: 'var(--color-blue-france)',
            border: '1.5px solid var(--color-blue-france)',
            fontSize: '14px', fontWeight: 500, textDecoration: 'none',
          }}
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}

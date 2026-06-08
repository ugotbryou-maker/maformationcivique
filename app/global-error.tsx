'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif', background: '#F7F7F8' }}>
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '32px 24px',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: '40px', marginBottom: '16px' }}>⚠️</div>
          <h1 style={{ fontSize: '22px', fontWeight: 600, color: '#111', marginBottom: '8px' }}>
            Une erreur est survenue
          </h1>
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '24px', maxWidth: '400px' }}>
            Nous avons rencontré un problème inattendu. Cliquez ci-dessous pour réessayer.
          </p>
          {error?.digest && (
            <p style={{ fontSize: '11px', color: '#aaa', marginBottom: '20px', fontFamily: 'monospace' }}>
              Référence : {error.digest}
            </p>
          )}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button
              onClick={reset}
              style={{
                padding: '10px 24px', borderRadius: '100px',
                background: '#002395', color: '#fff', border: 'none',
                fontSize: '14px', fontWeight: 500, cursor: 'pointer',
              }}
            >
              Réessayer
            </button>
            <a
              href="/"
              style={{
                padding: '10px 24px', borderRadius: '100px',
                background: '#fff', color: '#002395',
                border: '1.5px solid #002395',
                fontSize: '14px', fontWeight: 500, textDecoration: 'none',
              }}
            >
              Retour à l'accueil
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}

import Link from 'next/link';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--color-off-white)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Minimal header */}
      <header style={{ padding: '20px 24px' }}>
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--font-size-base)',
            fontWeight: 500,
            color: 'var(--color-text-primary)',
          }}
        >
          ma<span style={{ color: 'var(--color-blue-france)' }}>formation</span>civique.fr
        </Link>
      </header>

      <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px 24px' }}>
        {children}
      </main>

      <footer style={{ padding: '16px 24px', textAlign: 'center' }}>
        <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
          © {new Date().getFullYear()} maformationcivique.fr
        </p>
      </footer>
    </div>
  );
}

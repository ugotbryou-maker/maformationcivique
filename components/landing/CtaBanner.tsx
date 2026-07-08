import Link from 'next/link';

export function CtaBanner() {
  return (
    <section style={{ background: 'var(--color-off-white)', padding: '0 24px 64px' }}>
      <div className="container" style={{ padding: '0 24px' }}>
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(159,18,57,0.88) 0%, rgba(204,26,26,0.85) 40%, rgba(239,65,53,0.82) 75%, rgba(255,96,64,0.88) 100%), url("/images/modules/visa-france.jpg") center/cover no-repeat',
            borderRadius: '20px',
            padding: 'clamp(40px, 6vw, 64px) clamp(24px, 5vw, 56px)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Blobs décoratifs */}
          <div style={{
            position: 'absolute', inset: 0, zIndex: 0,
            backgroundImage: [
              'radial-gradient(circle at 15% 60%, rgba(255,255,255,0.10) 0%, transparent 45%)',
              'radial-gradient(circle at 85% 20%, rgba(255,140,60,0.35) 0%, transparent 45%)',
              'radial-gradient(circle at 50% 90%, rgba(159,18,57,0.4) 0%, transparent 40%)',
            ].join(', '),
          }} />

          <div style={{ position: 'relative', zIndex: 1, maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: 'clamp(22px, 4vw, 34px)',
              fontWeight: 700, color: '#fff',
              lineHeight: 1.2, marginBottom: '14px',
            }}>
              Vous souhaitez obtenir votre titre de séjour ou la nationalité française&nbsp;?
            </h2>
            <p style={{
              fontSize: 'var(--font-size-base)',
              color: 'rgba(255,255,255,0.8)',
              lineHeight: 1.65, marginBottom: '32px',
            }}>
              La formation civique est obligatoire quel que soit votre niveau — A2, B1 ou B2.
              Commencez gratuitement dès aujourd&apos;hui et préparez-vous en toute confiance.
            </p>
            <Link
              href="/inscription"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: '#fff', color: 'var(--color-red-france)',
                padding: '13px 32px', borderRadius: 'var(--radius-pill)',
                fontWeight: 700, fontSize: 'var(--font-size-base)',
                textDecoration: 'none', fontFamily: 'var(--font-sans)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                transition: 'transform 150ms ease-out, box-shadow 150ms ease-out',
              }}
            >
              M&apos;inscrire gratuitement →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

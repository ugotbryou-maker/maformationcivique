import type { Metadata } from 'next';
import { fiches } from '@/data/fiches';
import { FicheCard } from '@/components/app/FicheCard';

export const metadata: Metadata = {
  title: 'Fiches — Grandes figures et grands lieux de France | maformationcivique.fr',
  description:
    'Fiches bonus sur les grandes figures et les grands lieux de France au programme de la formation civique : Marianne, Marie Curie, Victor Hugo, la Tour Eiffel, Versailles et bien d\'autres.',
};

export default function FichesPage() {
  const figures = fiches.filter((f) => f.category === 'figure');
  const lieux = fiches.filter((f) => f.category === 'lieu');

  return (
    <div style={{ minHeight: '80vh' }}>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/modules/daumier-la-republique.jpg)', backgroundSize: 'cover', backgroundPosition: 'center 30%' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,26,112,0.92) 0%, rgba(0,35,149,0.90) 60%, rgba(204,26,26,0.88) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 1, padding: '64px 0 56px' }}>
        <div className="container">
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            padding: '4px 12px', borderRadius: '100px',
            background: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.9)',
            fontSize: '12px', fontWeight: 500, letterSpacing: '0.04em',
            marginBottom: '16px',
          }}>
            🇫🇷 {fiches.length} fiches bonus
          </span>
          <h1 style={{
            fontSize: 'clamp(26px, 5vw, 40px)',
            fontWeight: 700,
            color: '#fff',
            marginBottom: '14px',
            lineHeight: 1.2,
            maxWidth: '600px',
          }}>
            Grandes figures &amp; grands lieux de France
          </h1>
          <p style={{
            fontSize: '16px',
            color: 'rgba(255,255,255,0.80)',
            maxWidth: '560px',
            lineHeight: 1.65,
          }}>
            Des fiches courtes pour découvrir les personnalités et les monuments qui font l&apos;histoire et l&apos;identité françaises — avec les dates et points clés à retenir.
          </p>
        </div>
        </div>
      </div>

      {/* ── Figures ──────────────────────────────────────────────────── */}
      <div className="container" style={{ padding: '48px 24px' }}>
        <h2 style={{
          fontSize: 'var(--font-size-lg)',
          fontWeight: 700,
          color: 'var(--color-text-primary)',
          marginBottom: '20px',
        }}>
          Grandes figures françaises
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '18px',
          marginBottom: '48px',
        }}>
          {figures.map((f) => <FicheCard key={f.slug} fiche={f} />)}
        </div>

        <h2 style={{
          fontSize: 'var(--font-size-lg)',
          fontWeight: 700,
          color: 'var(--color-text-primary)',
          marginBottom: '20px',
        }}>
          Grands lieux de France
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '18px',
        }}>
          {lieux.map((f) => <FicheCard key={f.slug} fiche={f} />)}
        </div>
      </div>
    </div>
  );
}

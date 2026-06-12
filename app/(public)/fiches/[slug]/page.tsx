import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { fiches, getFiche } from '@/data/fiches';
import { renderInline } from '@/lib/markdown';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return fiches.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const fiche = getFiche(slug);
  if (!fiche) return {};
  return {
    title: `${fiche.name} — Fiches | maformationcivique.fr`,
    description: fiche.paragraph.replace(/\*\*/g, '').slice(0, 155),
  };
}

export default async function FichePage({ params }: Props) {
  const { slug } = await params;
  const fiche = getFiche(slug);
  if (!fiche) notFound();

  const idx = fiches.findIndex((f) => f.slug === slug);
  const next = fiches[(idx + 1) % fiches.length];

  return (
    <div style={{ minHeight: '80vh' }}>
      {/* ── Hero horizontal — image en filigrane (soft-light) ──────────── */}
      <div style={{
        position: 'relative',
        overflow: 'hidden',
        background: `linear-gradient(135deg, ${fiche.color} 0%, ${fiche.colorEnd} 100%)`,
        padding: '40px 0',
      }}>
        {fiche.image && (
          <img
            src={fiche.image}
            alt={fiche.imageAlt}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 25%',
              mixBlendMode: 'soft-light',
              opacity: 0.9,
            }}
          />
        )}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 55%, transparent 100%)' }} />

        <div className="container" style={{ position: 'relative', zIndex: 2, padding: '24px 24px 16px' }}>
          <Link href="/fiches" style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            color: 'rgba(255,255,255,0.85)', fontSize: '13px', textDecoration: 'none',
            marginBottom: '24px',
          }}>
            <ArrowLeft size={14} /> Toutes les fiches
          </Link>

          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            padding: '4px 12px', borderRadius: '100px',
            background: 'rgba(255,255,255,0.18)', color: '#fff',
            fontSize: '11px', fontWeight: 600, letterSpacing: '0.06em',
            textTransform: 'uppercase', marginBottom: '14px',
            backdropFilter: 'blur(4px)',
          }}>
            <Sparkles size={12} /> {fiche.tag}
          </span>

          <h1 style={{
            fontSize: 'clamp(28px, 6vw, 52px)',
            fontWeight: 700,
            color: '#fff',
            marginBottom: '8px',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            maxWidth: '640px',
          }}>
            {fiche.name}
          </h1>
          <p style={{
            fontSize: '15px',
            color: 'rgba(255,255,255,0.85)',
            maxWidth: '520px',
          }}>
            {fiche.subtitle}
          </p>
        </div>
      </div>

      {/* ── Contenu ──────────────────────────────────────────────────── */}
      <div className="container" style={{ padding: '40px 24px 64px' }}>
        <div className="fiche-grid" style={{ display: 'grid', gap: '32px', gridTemplateColumns: '1.6fr 1fr', alignItems: 'start' }}>

          {/* Paragraphe */}
          <div style={{
            background: '#fff',
            borderRadius: 'var(--radius-xl)',
            border: 'var(--border-default)',
            boxShadow: 'var(--shadow-card)',
            padding: '28px',
          }}>
            <p style={{
              fontSize: 'var(--font-size-base)',
              lineHeight: 1.8,
              color: 'var(--color-text-secondary)',
            }}>
              {renderInline(fiche.paragraph, fiche.color, 'fiche-p')}
            </p>
            <p style={{ marginTop: '20px', fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
              📷 {fiche.credit}
            </p>
          </div>

          {/* Points clés / dates à retenir */}
          <div style={{
            background: '#fff',
            borderRadius: 'var(--radius-xl)',
            border: 'var(--border-default)',
            boxShadow: 'var(--shadow-card)',
            padding: '24px',
          }}>
            <h2 style={{
              fontSize: 'var(--font-size-sm)',
              fontWeight: 700,
              color: 'var(--color-text-primary)',
              marginBottom: '16px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
              À retenir
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {fiche.keyPoints.map((kp, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <span style={{
                    flexShrink: 0,
                    width: 24, height: 24,
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${fiche.color}, ${fiche.colorEnd})`,
                    color: '#fff',
                    fontSize: '12px', fontWeight: 700,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    {i + 1}
                  </span>
                  <p style={{ fontSize: 'var(--font-size-sm)', lineHeight: 1.6, color: 'var(--color-text-secondary)' }}>
                    {kp}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Suivant */}
        <Link href={`/fiches/${next.slug}`} style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          marginTop: '32px', padding: '18px 24px',
          borderRadius: 'var(--radius-lg)',
          background: 'var(--color-off-white)',
          border: 'var(--border-default)',
          textDecoration: 'none',
        }}>
          <div>
            <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginBottom: '4px' }}>
              Fiche suivante
            </p>
            <p style={{ fontSize: 'var(--font-size-base)', fontWeight: 600, color: 'var(--color-text-primary)' }}>
              {next.name}
            </p>
          </div>
          <ArrowRight size={18} color="var(--color-blue-france)" />
        </Link>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .fiche-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

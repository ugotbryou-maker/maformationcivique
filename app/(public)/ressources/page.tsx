export const dynamic = 'force-dynamic';

import Link from 'next/link';
import type { Metadata } from 'next';
import { Library } from 'lucide-react';
import { getAllPosts, POST_CATEGORIES } from '@/lib/sanity/queries';
import { CATEGORY_ICONS } from '@/components/app/PostUI';
import RessourcesGrid from './RessourcesGrid';

export const metadata: Metadata = {
  title: 'Ressources — maformationcivique.fr',
  description:
    'Guides pratiques, articles et actualités pour préparer votre formation civique : démarches administratives, vie en France, examens, dernières actualités.',
};

export default async function RessourcesPage() {
  const posts = await getAllPosts();

  const catStats = Object.entries(POST_CATEGORIES).map(([key, cat]) => ({
    key,
    label: cat.label,
    Icon: CATEGORY_ICONS[key as keyof typeof CATEGORY_ICONS],
    color: cat.color,
    bg: cat.bg,
    count: posts.filter((p) => p.category === key).length,
  }));

  return (
    <div style={{ minHeight: '80vh' }}>

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/modules/Blv-haussmann-lafayette.jpg)', backgroundSize: 'cover', backgroundPosition: 'center 40%' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,35,149,0.90) 0%, rgba(0,58,178,0.88) 60%, rgba(26,86,200,0.85) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 1, padding: '64px 0 56px' }}>
        <div className="container">
          <div style={{ marginBottom: '16px' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              padding: '4px 12px', borderRadius: '100px',
              background: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.9)',
              fontSize: '12px', fontWeight: 500, letterSpacing: '0.04em',
            }}>
              <Library size={13} /> {posts.length} ressources disponibles
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(26px, 5vw, 40px)',
            fontWeight: 700,
            color: '#fff',
            marginBottom: '14px',
            lineHeight: 1.2,
            maxWidth: '580px',
          }}>
            Ressources & guides pratiques
          </h1>
          <p style={{
            fontSize: '16px',
            color: 'rgba(255,255,255,0.80)',
            maxWidth: '520px',
            lineHeight: 1.65,
            marginBottom: '36px',
          }}>
            Articles de fond, guides étape par étape et actualités pour vous accompagner
            dans votre parcours d&apos;intégration en France.
          </p>

          {/* Tuiles catégories */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
            gap: '12px',
            maxWidth: '760px',
          }}>
            {catStats.map(({ key, label, Icon, count }) => (
              <div key={key} style={{
                background: 'rgba(255,255,255,0.10)',
                border: '1px solid rgba(255,255,255,0.18)',
                borderRadius: '10px',
                padding: '14px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}>
                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: '34px', height: '34px', borderRadius: '8px', flexShrink: 0,
                  background: 'rgba(255,255,255,0.12)',
                }}>
                  <Icon size={17} color="#fff" />
                </div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: '#fff', lineHeight: 1.3 }}>
                    {label}
                  </div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.55)' }}>
                    {count} ressource{count > 1 ? 's' : ''}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>

      {/* ── Grille filtrée ──────────────────────────────────────────── */}
      <div style={{ padding: '48px 0 80px' }}>
        <div className="container">
          <RessourcesGrid posts={posts} />
        </div>
      </div>

      {/* ── CTA bas de page ─────────────────────────────────────────── */}
      <div style={{ padding: '0 0 80px' }}>
        <div className="container">
          <div style={{
            padding: '32px',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, #002395 0%, #CC1A1A 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            flexWrap: 'wrap',
          }}>
            <div>
              <div style={{ fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '6px' }}>
                Testez votre niveau maintenant
              </div>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.75)' }}>
                Examen blanc adapté à votre démarche · Résultats immédiats
              </div>
            </div>
            <Link href="/examen" style={{
              padding: '12px 28px', borderRadius: '100px',
              background: '#fff', color: 'var(--color-blue-france)',
              fontWeight: 600, fontSize: '14px', textDecoration: 'none',
              whiteSpace: 'nowrap', flexShrink: 0,
            }}>
              Passer un examen blanc →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

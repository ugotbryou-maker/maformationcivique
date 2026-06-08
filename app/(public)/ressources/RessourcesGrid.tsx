'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { SanityPost, POST_CATEGORIES } from '@/lib/sanity/queries';

// ── Helpers ────────────────────────────────────────────────────────────────
function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
}

// ── Badge type de contenu ──────────────────────────────────────────────────
function ContentBadge({ type }: { type?: 'article' | 'guide' }) {
  const isGuide = type === 'guide';
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      padding: '2px 8px',
      borderRadius: '4px',
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      background: isGuide ? '#FFF7E6' : '#F0F9FF',
      color: isGuide ? '#B45309' : '#0369A1',
      border: `1px solid ${isGuide ? '#FCD34D' : '#BAE6FD'}`,
    }}>
      {isGuide ? '📖 Guide pratique' : '📄 Article'}
    </span>
  );
}

// ── Carte individuelle ─────────────────────────────────────────────────────
function PostCard({ post }: { post: SanityPost }) {
  const cat = POST_CATEGORIES[post.category];

  return (
    <Link
      href={`/ressources/${post.slug.current}`}
      style={{ textDecoration: 'none', color: 'inherit', display: 'flex' }}
    >
      <article style={{
        background: '#fff',
        border: 'var(--border-default)',
        borderRadius: '12px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        transition: 'box-shadow 0.18s, transform 0.18s',
        cursor: 'pointer',
        width: '100%',
      }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 24px rgba(0,0,0,0.10)';
          (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.boxShadow = 'none';
          (e.currentTarget as HTMLElement).style.transform = 'none';
        }}
      >
        {/* Header : badge catégorie + type */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            padding: '2px 8px',
            borderRadius: '4px',
            fontSize: '11px',
            fontWeight: 600,
            background: cat.bg,
            color: cat.color,
          }}>
            {cat.icon} {cat.label}
          </span>
          <ContentBadge type={post.contentType} />
        </div>

        {/* Titre */}
        <h3 style={{
          fontSize: '15px',
          fontWeight: 600,
          color: 'var(--color-text-primary)',
          lineHeight: 1.4,
          margin: 0,
        }}>
          {post.title}
        </h3>

        {/* Excerpt */}
        <p style={{
          fontSize: '13px',
          color: 'var(--color-text-secondary)',
          lineHeight: 1.6,
          margin: 0,
          flexGrow: 1,
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        } as React.CSSProperties}>
          {post.excerpt}
        </p>

        {/* Footer */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '8px',
          borderTop: '1px solid var(--color-border)',
        }}>
          <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
            {formatDate(post.publishedAt)}
          </span>
          <span style={{
            fontSize: '12px',
            color: 'var(--color-text-muted)',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }}>
            ⏱ {post.readingTime} min
          </span>
        </div>
      </article>
    </Link>
  );
}

// ── Section par type (guides / articles) ──────────────────────────────────
function Section({ label, posts, emptyLabel }: {
  label: string;
  posts: SanityPost[];
  emptyLabel?: string;
}) {
  if (posts.length === 0) return emptyLabel ? (
    <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', margin: 0 }}>{emptyLabel}</p>
  ) : null;

  return (
    <div>
      <h2 style={{
        fontSize: '13px',
        fontWeight: 700,
        color: 'var(--color-text-muted)',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        margin: '0 0 16px 0',
      }}>
        {label} <span style={{ fontWeight: 400, color: 'var(--color-text-muted)' }}>({posts.length})</span>
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '16px',
      }}>
        {posts.map((post) => <PostCard key={post._id} post={post} />)}
      </div>
    </div>
  );
}

// ── Composant principal ────────────────────────────────────────────────────
export default function RessourcesGrid({ posts }: { posts: SanityPost[] }) {
  const [activeCategory, setActiveCategory] = useState<string>('tous');

  const filtered = useMemo(() => {
    if (activeCategory === 'tous') return posts;
    return posts.filter((p) => p.category === activeCategory);
  }, [posts, activeCategory]);

  const guides  = filtered.filter((p) => p.contentType === 'guide');
  const articles = filtered.filter((p) => p.contentType !== 'guide'); // article ou non défini

  // Compteur par catégorie
  const counts = useMemo(() => {
    const c: Record<string, number> = { tous: posts.length };
    posts.forEach((p) => { c[p.category] = (c[p.category] ?? 0) + 1; });
    return c;
  }, [posts]);

  const FILTERS = [
    { key: 'tous', label: 'Tout voir', icon: '✦' },
    ...Object.entries(POST_CATEGORIES).map(([key, val]) => ({
      key,
      label: val.label,
      icon: val.icon,
    })),
  ];

  return (
    <div>
      {/* ── Filtres ── */}
      <div style={{
        display: 'flex',
        gap: '8px',
        flexWrap: 'wrap',
        marginBottom: '40px',
      }}>
        {FILTERS.map(({ key, label, icon }) => {
          const isActive = activeCategory === key;
          const count = counts[key] ?? 0;
          if (count === 0 && key !== 'tous') return null;
          return (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '7px 16px',
                borderRadius: '100px',
                border: isActive ? '2px solid var(--color-blue-france)' : '1.5px solid var(--color-border)',
                background: isActive ? 'var(--color-blue-france)' : '#fff',
                color: isActive ? '#fff' : 'var(--color-text-secondary)',
                fontSize: '13px',
                fontWeight: isActive ? 600 : 400,
                cursor: 'pointer',
                transition: 'all 0.15s',
              }}
            >
              <span>{icon}</span>
              <span>{label}</span>
              <span style={{
                fontSize: '11px',
                padding: '1px 6px',
                borderRadius: '100px',
                background: isActive ? 'rgba(255,255,255,0.22)' : 'var(--color-border)',
                color: isActive ? '#fff' : 'var(--color-text-muted)',
                fontWeight: 500,
              }}>{count}</span>
            </button>
          );
        })}
      </div>

      {/* ── Résultats ── */}
      {filtered.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '64px 24px',
          color: 'var(--color-text-muted)',
          fontSize: '15px',
        }}>
          Aucun contenu dans cette catégorie pour le moment.
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          <Section label="Guides pratiques" posts={guides} />
          <Section label="Articles" posts={articles} />
        </div>
      )}
    </div>
  );
}

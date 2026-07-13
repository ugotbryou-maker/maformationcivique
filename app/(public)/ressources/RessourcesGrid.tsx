'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Clock } from 'lucide-react';
import { SanityPost, POST_CATEGORIES } from '@/lib/sanity/queries';
import { CategoryTag, PostVisual, formatDate } from '@/components/app/PostUI';

// ── Article vedette (le plus récent) ───────────────────────────────────────
function FeaturedPost({ post }: { post: SanityPost }) {
  return (
    <Link
      href={`/ressources/${post.slug.current}`}
      style={{ textDecoration: 'none', display: 'block', height: '100%' }}
    >
      <article style={{
        position: 'relative',
        borderRadius: '20px',
        overflow: 'hidden',
        height: '100%',
        minHeight: '380px',
        background: '#F3F4F6',
      }}>
        <PostVisual post={post} sizes="(max-width: 860px) 100vw, 60vw" priority />

        {/* Overlay dégradé pour la lisibilité du texte */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0,12,46,0.88) 0%, rgba(0,12,46,0.35) 45%, transparent 75%)',
        }} />

        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '28px',
        }}>
          <div style={{ marginBottom: '14px' }}>
            <CategoryTag category={post.category} variant="solid" />
          </div>
          <h2 style={{
            fontSize: 'clamp(20px, 3vw, 28px)',
            fontWeight: 700,
            color: '#fff',
            margin: '0 0 12px',
            lineHeight: 1.3,
          }}>
            {post.title}
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: 'rgba(255,255,255,0.75)' }}>
            <span>{formatDate(post.publishedAt)}</span>
            <span>·</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Clock size={12} /> {post.readingTime} min
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

// ── Item de la liste "Derniers articles" ───────────────────────────────────
function RecentPostItem({ post }: { post: SanityPost }) {
  return (
    <Link
      href={`/ressources/${post.slug.current}`}
      style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', textDecoration: 'none' }}
    >
      <div style={{
        position: 'relative',
        width: '64px',
        height: '64px',
        borderRadius: '10px',
        overflow: 'hidden',
        flexShrink: 0,
        background: '#F3F4F6',
      }}>
        <PostVisual post={post} sizes="64px" />
      </div>
      <div style={{ minWidth: 0 }}>
        <h4 style={{
          fontSize: '13px',
          fontWeight: 600,
          color: 'var(--color-text-primary)',
          margin: '0 0 6px',
          lineHeight: 1.4,
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        } as React.CSSProperties}>
          {post.title}
        </h4>
        <div style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
          {formatDate(post.publishedAt)} · {post.readingTime} min
        </div>
      </div>
    </Link>
  );
}

// ── Carte de la grille "Tous les articles" ─────────────────────────────────
function PostCard({ post }: { post: SanityPost }) {
  return (
    <Link
      href={`/ressources/${post.slug.current}`}
      style={{ textDecoration: 'none', color: 'inherit', display: 'flex' }}
    >
      <article
        className="transition-default"
        style={{
          background: '#fff',
          border: 'var(--border-default)',
          borderRadius: '14px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          cursor: 'pointer',
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
        <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 10', background: '#F3F4F6' }}>
          <PostVisual post={post} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
        </div>

        <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px', flexGrow: 1 }}>
          <div>
            <CategoryTag category={post.category} />
          </div>

          <h3 style={{
            fontSize: '15px',
            fontWeight: 700,
            color: 'var(--color-text-primary)',
            lineHeight: 1.4,
            margin: 0,
          }}>
            {post.title}
          </h3>

          <p style={{
            fontSize: '13px',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.6,
            margin: 0,
            flexGrow: 1,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          } as React.CSSProperties}>
            {post.excerpt}
          </p>

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
              <Clock size={12} /> {post.readingTime} min
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

// ── Composant principal ────────────────────────────────────────────────────
export default function RessourcesGrid({ posts }: { posts: SanityPost[] }) {
  const [activeCategory, setActiveCategory] = useState<string>('tous');

  const [featured, ...rest] = posts;
  const sidebarPosts = rest.slice(0, 4);

  const counts = useMemo(() => {
    const c: Record<string, number> = { tous: posts.length };
    posts.forEach((p) => { c[p.category] = (c[p.category] ?? 0) + 1; });
    return c;
  }, [posts]);

  const filtered = useMemo(() => {
    if (activeCategory === 'tous') return posts;
    return posts.filter((p) => p.category === activeCategory);
  }, [posts, activeCategory]);

  const FILTERS = [
    { key: 'tous', label: 'Tout voir' },
    ...Object.entries(POST_CATEGORIES).map(([key, val]) => ({ key, label: val.label })),
  ];

  if (!featured) {
    return (
      <div style={{
        textAlign: 'center',
        padding: '64px 24px',
        color: 'var(--color-text-muted)',
        fontSize: '15px',
      }}>
        Aucun contenu disponible pour le moment.
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
      {/* ── Article vedette + derniers articles ── */}
      {rest.length > 0 ? (
        <div className="blog-featured-grid">
          <FeaturedPost post={featured} />
          <div>
            <h2 style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--color-text-muted)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              margin: '0 0 16px',
            }}>
              Derniers articles
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {sidebarPosts.map((post) => <RecentPostItem key={post._id} post={post} />)}
            </div>
          </div>
        </div>
      ) : (
        <FeaturedPost post={featured} />
      )}

      {/* ── Tous les articles ── */}
      {rest.length > 0 && (
        <div>
          <h2 style={{
            fontSize: '13px',
            fontWeight: 700,
            color: 'var(--color-text-muted)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            margin: '0 0 16px',
          }}>
            Tous les articles
          </h2>

          {/* Filtres */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
            {FILTERS.map(({ key, label }) => {
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
            <div className="blog-grid">
              {filtered.map((post) => <PostCard key={post._id} post={post} />)}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

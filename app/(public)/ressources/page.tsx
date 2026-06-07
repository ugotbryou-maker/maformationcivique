import Link from 'next/link';
import { getAllPosts, POST_CATEGORIES, type SanityPost } from '@/lib/sanity/queries';
import { Clock, ArrowRight, BookOpen, Search } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ressources & Guide — maformationcivique.fr',
  description: 'Guides pratiques, conseils et actualités pour préparer votre examen civique : titre de séjour, carte de résident, naturalisation.',
};

// Revalidate toutes les heures
export const revalidate = 3600;

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
}

function PostCard({ post, featured = false }: { post: SanityPost; featured?: boolean }) {
  const cat = POST_CATEGORIES[post.category];

  return (
    <Link href={`/ressources/${post.slug.current}`} style={{ textDecoration: 'none' }}>
      <article style={{
        background: '#fff',
        borderRadius: featured ? 20 : 16,
        border: '1.5px solid #E2E8F0',
        overflow: 'hidden',
        transition: 'box-shadow 200ms ease-out, transform 200ms ease-out',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(0,0,35,0.10)';
          (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = 'none';
          (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
        }}
      >
        {/* Cover image placeholder */}
        <div style={{
          height: featured ? 200 : 140,
          background: `linear-gradient(135deg, ${cat.color}22 0%, ${cat.color}44 100%)`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          <BookOpen size={featured ? 40 : 28} color={cat.color} style={{ opacity: 0.5 }} />
        </div>

        {/* Content */}
        <div style={{ padding: featured ? '1.5rem' : '1.25rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
          {/* Cat + date */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '0.75rem' }}>
            <span style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '.06em',
              background: cat.bg, color: cat.color,
              padding: '3px 10px', borderRadius: 100,
            }}>{cat.label}</span>
            <span style={{ fontSize: 12, color: '#94A3B8' }}>{formatDate(post.publishedAt)}</span>
          </div>

          <h2 style={{
            fontSize: featured ? 18 : 15,
            fontWeight: 700,
            color: 'var(--color-blue-night)',
            lineHeight: 1.4,
            margin: '0 0 0.6rem',
            flex: 1,
          }}>
            {post.title}
          </h2>

          <p style={{
            fontSize: 13, color: '#64748B', lineHeight: 1.6,
            margin: '0 0 1rem',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical' as const,
            overflow: 'hidden',
          }}>
            {post.excerpt}
          </p>

          {/* Footer */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#94A3B8', fontSize: 12 }}>
              <Clock size={12} />
              {post.readingTime} min de lecture
            </div>
            <span style={{ fontSize: 13, fontWeight: 600, color: cat.color, display: 'flex', alignItems: 'center', gap: 4 }}>
              Lire <ArrowRight size={13} />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default async function RessourcesPage() {
  const posts = await getAllPosts();

  const featured = posts[0];
  const rest = posts.slice(1);

  const categories = [
    { key: 'tous', label: 'Tous les articles' },
    ...Object.entries(POST_CATEGORIES).map(([key, val]) => ({ key, label: val.label })),
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-off-white)' }}>

      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, #001A70 0%, #002395 60%, #0057A8 100%)',
        padding: '3.5rem 1.5rem 3rem',
      }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(255,255,255,0.12)', borderRadius: 100,
            padding: '5px 14px', marginBottom: '1.25rem',
            fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.8)',
          }}>
            <BookOpen size={13} /> Guides & ressources
          </div>
          <h1 style={{ fontSize: 34, fontWeight: 900, color: '#fff', margin: '0 0 .75rem', lineHeight: 1.2 }}>
            Tout ce qu'il faut savoir pour réussir votre démarche
          </h1>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.72)', margin: 0, lineHeight: 1.7, maxWidth: 540 }}>
            Guides pratiques, décryptages officiels et conseils d'experts pour préparer votre examen civique et vos démarches de titre de séjour, carte de résident ou naturalisation.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '2.5rem 1.5rem 5rem' }}>

        {/* Filtres catégories */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem', overflowX: 'auto' }}>
          {categories.map(({ key, label }) => (
            <span key={key} style={{
              padding: '6px 16px', borderRadius: 100,
              background: key === 'tous' ? 'var(--color-blue-france)' : '#fff',
              color: key === 'tous' ? '#fff' : '#374151',
              border: '1.5px solid',
              borderColor: key === 'tous' ? 'var(--color-blue-france)' : '#E2E8F0',
              fontSize: 13, fontWeight: 600, cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}>{label}</span>
          ))}
        </div>

        {/* Article featured */}
        {featured && (
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.1em', color: '#94A3B8', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              À la une
            </div>
            <PostCard post={featured} featured />
          </div>
        )}

        {/* Grille articles */}
        {rest.length > 0 && (
          <>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.1em', color: '#94A3B8', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              Tous les articles — {posts.length} guides
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1.25rem',
            }}>
              {rest.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          </>
        )}

        {/* CTA lead gen */}
        <div style={{
          marginTop: '3rem',
          padding: '2rem',
          borderRadius: 20,
          background: 'linear-gradient(135deg, #001A70 0%, #CC1A1A 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: '1.5rem', flexWrap: 'wrap',
        }}>
          <div>
            <div style={{ fontSize: 18, fontWeight: 800, color: '#fff', marginBottom: 6 }}>
              Testez votre niveau maintenant
            </div>
            <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)' }}>
              Examen blanc adapté à votre démarche · Résultats immédiats
            </div>
          </div>
          <Link href="/examen" style={{
            padding: '0.875rem 1.75rem', borderRadius: 12,
            background: '#fff', color: 'var(--color-blue-france)',
            fontWeight: 700, fontSize: 15, textDecoration: 'none',
            whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: 6,
          }}>
            Passer un examen blanc <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}

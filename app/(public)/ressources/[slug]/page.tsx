import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, getAllPostSlugs, POST_CATEGORIES } from '@/lib/sanity/queries';
import { urlFor } from '@/lib/sanity/client';
import { CategoryTag, PostVisual, formatDate } from '@/components/app/PostUI';
import { ArticleBody } from '@/components/app/ArticleBody';
import { Clock, ArrowLeft, ArrowRight, Tag, HelpCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const revalidate = 3600;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.seo?.metaTitle ?? `${post.title} — maformationcivique.fr`,
    description: post.seo?.metaDescription ?? post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
    },
  };
}

const metaLabelStyle: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: '.08em',
  color: '#94A3B8',
  textTransform: 'uppercase',
};

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const cat = POST_CATEGORIES[post.category];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-off-white)' }}>
      <div className="container" style={{ padding: '2.5rem 0 5rem' }}>

        {/* Retour */}
        <Link href="/ressources" style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          color: 'var(--color-text-muted)', fontSize: 13, textDecoration: 'none',
          marginBottom: '1.5rem',
        }}>
          <ArrowLeft size={14} /> Retour aux ressources
        </Link>

        {/* En-tête */}
        <div style={{ maxWidth: 760 }}>
          <div style={{ marginBottom: '1rem' }}>
            <CategoryTag category={post.category} size="md" />
          </div>
          <h1 style={{
            fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800,
            color: 'var(--color-text-primary)', margin: '0 0 0.875rem', lineHeight: 1.25,
          }}>
            {post.title}
          </h1>
          <p style={{ fontSize: 17, color: 'var(--color-text-secondary)', lineHeight: 1.7, margin: 0 }}>
            {post.excerpt}
          </p>
        </div>

        {/* Image de couverture + colonne méta */}
        <div className="article-media-row" style={{ marginTop: '2rem' }}>
          <div style={{
            position: 'relative', borderRadius: 20, overflow: 'hidden',
            aspectRatio: '16 / 9', background: '#F3F4F6',
          }}>
            <PostVisual post={post} sizes="(max-width: 860px) 100vw, 65vw" priority />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {/* Catégorie */}
            <div className="article-meta-card">
              <div style={metaLabelStyle}>Catégorie</div>
              <div style={{ marginTop: 10 }}>
                <CategoryTag category={post.category} />
              </div>
            </div>

            {/* Auteur */}
            {post.author?.name && (
              <div className="article-meta-card">
                <div style={metaLabelStyle}>Écrit par</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 10 }}>
                  {post.author.avatar ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={(urlFor(post.author.avatar) as { width?: (n: number) => { url: () => string } })?.width?.(48)?.url?.() ?? ''}
                      alt={post.author.name}
                      style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
                    />
                  ) : (
                    <div style={{
                      width: 40, height: 40, borderRadius: '50%', flexShrink: 0,
                      background: 'var(--gradient-primary)', color: '#fff',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 15, fontWeight: 700,
                    }}>
                      {post.author.name[0]?.toUpperCase()}
                    </div>
                  )}
                  <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-text-primary)' }}>
                    {post.author.name}
                  </div>
                </div>
                {post.author.bio && (
                  <p style={{ margin: '8px 0 0', fontSize: 12, color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                    {post.author.bio}
                  </p>
                )}
              </div>
            )}

            {/* Date / temps de lecture */}
            <div className="article-meta-card">
              <div style={metaLabelStyle}>Publié le</div>
              <div style={{ marginTop: 10, fontSize: 14, fontWeight: 700, color: 'var(--color-text-primary)' }}>
                {formatDate(post.publishedAt)}
              </div>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 4,
                marginTop: 6, fontSize: 13, color: 'var(--color-text-muted)',
              }}>
                <Clock size={12} /> {post.readingTime} min de lecture
              </div>
            </div>
          </div>
        </div>

        {/* Corps de l'article */}
        <div style={{ maxWidth: 720, margin: '2.5rem auto 0' }}>
          {post.body ? (
            <div style={{ fontSize: 16, lineHeight: 1.8, color: '#374151' }}>
              <ArticleBody value={post.body} accentColor={cat.color} />
            </div>
          ) : (
            <div style={{ fontSize: 16, lineHeight: 1.8, color: '#374151' }}>
              <p>{post.excerpt}</p>
              <div style={{
                margin: '2rem 0', padding: '1.5rem',
                background: '#F0F9FF', borderRadius: 12,
                borderLeft: '4px solid #0057A8',
              }}>
                <p style={{ margin: 0, fontWeight: 600, color: '#0057A8', fontSize: 14 }}>
                  Cet article sera disponible dans son intégralité après connexion de Sanity CMS.
                </p>
              </div>
              <p>
                En attendant, vous pouvez vous entraîner directement avec nos examens blancs adaptés à votre démarche.
              </p>
            </div>
          )}

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #E2E8F0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: '0.75rem', color: '#94A3B8', fontSize: 12, fontWeight: 700 }}>
                <Tag size={12} /> TAGS
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {post.tags.map((tag) => (
                  <span key={tag} style={{
                    fontSize: 12, fontWeight: 500,
                    background: cat.bg, color: cat.color,
                    padding: '4px 12px', borderRadius: 100,
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          )}

          {/* FAQ — signal E-E-A-T / rich snippet Google */}
          {post.faq && post.faq.length > 0 && (
            <div style={{ marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid #E2E8F0' }}>
              <h2 style={{
                display: 'flex', alignItems: 'center', gap: 8,
                fontSize: 20, fontWeight: 800, color: '#1A1A2E', margin: '0 0 1.25rem',
              }}>
                <HelpCircle size={20} color={cat.color} />
                Questions fréquentes
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {post.faq.map((item, i) => (
                  <div key={i}>
                    <p style={{ margin: '0 0 4px', fontSize: 15, fontWeight: 700, color: '#1A1A2E' }}>
                      {item.question}
                    </p>
                    <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, color: '#64748B' }}>
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* CTA examen blanc */}
        <div style={{
          maxWidth: 720, margin: '3rem auto 0',
          background: 'linear-gradient(135deg, #001A70 0%, #002395 60%, #CC1A1A 100%)',
          borderRadius: 20, padding: '1.75rem 2rem',
        }}>
          <div style={{ fontSize: 17, fontWeight: 800, color: '#fff', marginBottom: 6 }}>
            Testez vos connaissances
          </div>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, margin: '0 0 1.25rem' }}>
            Examen blanc adapté à votre démarche · 40 questions · 30 min
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {(['CSP', 'CR', 'NAT'] as const).map((lvl) => (
              <Link key={lvl} href={`/examen/${lvl}`} style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '10px 18px', borderRadius: 10,
                background: 'rgba(255,255,255,0.12)',
                color: '#fff', textDecoration: 'none',
                fontSize: 13, fontWeight: 600,
              }}>
                <span>{lvl === 'CSP' ? 'Titre de séjour' : lvl === 'CR' ? 'Carte de résident' : 'Naturalisation'}</span>
                <ArrowRight size={13} />
              </Link>
            ))}
          </div>
        </div>

        {/* Retour */}
        <div style={{ maxWidth: 720, margin: '2rem auto 0', textAlign: 'center' }}>
          <Link href="/ressources" style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6,
            padding: '0.875rem 1.5rem', borderRadius: 12,
            border: '1.5px solid var(--color-border)', background: '#fff',
            color: 'var(--color-text-secondary)', textDecoration: 'none',
            fontSize: 13, fontWeight: 600,
          }}>
            <ArrowLeft size={14} /> Tous les articles
          </Link>
        </div>
      </div>

      {/* Rich snippet FAQ — Google Search */}
      {post.faq && post.faq.length > 0 && (
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: post.faq.map((item) => ({
                '@type': 'Question',
                name: item.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: item.answer,
                },
              })),
            }),
          }}
        />
      )}
    </div>
  );
}

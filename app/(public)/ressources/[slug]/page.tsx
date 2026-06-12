import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, getAllPostSlugs, POST_CATEGORIES } from '@/lib/sanity/queries';
import { urlFor } from '@/lib/sanity/client';
import { ArticleBody } from '@/components/app/ArticleBody';
import { Clock, ArrowLeft, ArrowRight, Tag, BookOpen, HelpCircle } from 'lucide-react';
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

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const cat = POST_CATEGORIES[post.category];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-off-white)' }}>

      {/* Hero article */}
      <div style={{
        background: `linear-gradient(135deg, #001A70 0%, ${cat.color} 100%)`,
        padding: '3rem 1.5rem 2.5rem',
      }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <Link href="/ressources" style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            color: 'rgba(255,255,255,0.7)', fontSize: 13, textDecoration: 'none',
            marginBottom: '1.5rem',
          }}>
            <ArrowLeft size={14} /> Retour aux ressources
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: '1rem' }}>
            <span style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '.06em',
              background: 'rgba(255,255,255,0.2)', color: '#fff',
              padding: '3px 12px', borderRadius: 100,
            }}>{cat.icon} {cat.label}</span>
            {post.contentType && (
              <span style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '.06em',
                background: post.contentType === 'guide' ? 'rgba(251,191,36,0.25)' : 'rgba(255,255,255,0.15)',
                color: post.contentType === 'guide' ? '#FDE68A' : 'rgba(255,255,255,0.85)',
                padding: '3px 12px', borderRadius: 100,
              }}>
                {post.contentType === 'guide' ? '📖 Guide pratique' : '📄 Article'}
              </span>
            )}
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)' }}>{formatDate(post.publishedAt)}</span>
            <span style={{ color: 'rgba(255,255,255,0.4)' }}>·</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'rgba(255,255,255,0.65)', fontSize: 13 }}>
              <Clock size={12} /> {post.readingTime} min
            </div>
          </div>

          <h1 style={{ fontSize: 30, fontWeight: 900, color: '#fff', margin: '0 0 1rem', lineHeight: 1.3 }}>
            {post.title}
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.75)', margin: 0, lineHeight: 1.7 }}>
            {post.excerpt}
          </p>
        </div>
      </div>

      {/* Contenu */}
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '2.5rem 1.5rem 5rem', display: 'grid', gridTemplateColumns: '1fr 280px', gap: '2.5rem', alignItems: 'start' }}>

        {/* Corps de l'article */}
        <div>
          <div style={{
            background: '#fff', borderRadius: 20,
            border: '1.5px solid #E2E8F0',
            padding: '2.5rem',
          }}>
            {/* Si article Sanity avec PortableText */}
            {post.body ? (
              <div style={{ fontSize: 16, lineHeight: 1.8, color: '#374151' }}>
                <ArticleBody value={post.body} accentColor={cat.color} />
              </div>
            ) : (
              /* Fallback pour articles de démo */
              <div style={{ fontSize: 16, lineHeight: 1.8, color: '#374151' }}>
                <p>{post.excerpt}</p>
                <div style={{
                  margin: '2rem 0', padding: '1.5rem',
                  background: '#F0F9FF', borderRadius: 12,
                  borderLeft: '4px solid #0057A8',
                }}>
                  <p style={{ margin: 0, fontWeight: 600, color: '#0057A8', fontSize: 14 }}>
                    📝 Cet article sera disponible dans son intégralité après connexion de Sanity CMS.
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

            {/* Auteur — signal E-E-A-T (Expertise/Authority) */}
            {post.author?.name && (
              <div style={{
                marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #E2E8F0',
                display: 'flex', alignItems: 'flex-start', gap: 12,
              }}>
                {post.author.avatar ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={(urlFor(post.author.avatar) as { width?: (n: number) => { url: () => string } })?.width?.(48)?.url?.() ?? ''}
                    alt={post.author.name}
                    style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
                  />
                ) : (
                  <div style={{
                    width: 44, height: 44, borderRadius: '50%', flexShrink: 0,
                    background: 'var(--gradient-primary)', color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 16, fontWeight: 700,
                  }}>
                    {post.author.name[0]?.toUpperCase()}
                  </div>
                )}
                <div>
                  <p style={{ margin: 0, fontSize: 13, color: '#94A3B8' }}>Écrit par</p>
                  <p style={{ margin: '2px 0 4px', fontSize: 15, fontWeight: 700, color: '#1A1A2E' }}>{post.author.name}</p>
                  {post.author.bio && (
                    <p style={{ margin: 0, fontSize: 13, color: '#64748B', lineHeight: 1.6 }}>{post.author.bio}</p>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* FAQ — signal E-E-A-T / rich snippet Google */}
          {post.faq && post.faq.length > 0 && (
            <div style={{
              marginTop: '1.5rem',
              background: '#fff', borderRadius: 20,
              border: '1.5px solid #E2E8F0',
              padding: '2.5rem',
            }}>
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

        {/* Sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', position: 'sticky', top: '1.5rem' }}>

          {/* CTA examen blanc */}
          <div style={{
            background: 'linear-gradient(135deg, #001A70 0%, #002395 100%)',
            borderRadius: 16, padding: '1.5rem',
            color: '#fff',
          }}>
            <div style={{ fontSize: 15, fontWeight: 800, marginBottom: 8 }}>
              Testez vos connaissances
            </div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, marginBottom: '1rem' }}>
              Examen blanc adapté à votre démarche · 40Q · 30 min
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {(['CSP', 'CR', 'NAT'] as const).map((lvl) => (
                <Link key={lvl} href={`/examen/${lvl}`} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '10px 14px', borderRadius: 10,
                  background: 'rgba(255,255,255,0.12)',
                  color: '#fff', textDecoration: 'none',
                  fontSize: 13, fontWeight: 600,
                  transition: 'background 150ms',
                }}>
                  <span>{lvl === 'CSP' ? 'Titre de séjour' : lvl === 'CR' ? 'Carte de résident' : 'Naturalisation'}</span>
                  <ArrowRight size={13} />
                </Link>
              ))}
            </div>
          </div>

          {/* Catégorie */}
          <div style={{ background: '#fff', borderRadius: 16, padding: '1.25rem', border: '1.5px solid #E2E8F0' }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.08em', color: '#94A3B8', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              Catégorie
            </div>
            <Link href="/ressources" style={{ textDecoration: 'none' }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                background: cat.bg, color: cat.color,
                padding: '6px 14px', borderRadius: 100,
                fontSize: 13, fontWeight: 700,
              }}>
                <BookOpen size={13} /> {cat.label}
              </span>
            </Link>
          </div>

          {/* Retour */}
          <Link href="/ressources" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
            padding: '0.875rem', borderRadius: 12,
            border: '1.5px solid #E2E8F0', background: '#fff',
            color: '#374151', textDecoration: 'none',
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

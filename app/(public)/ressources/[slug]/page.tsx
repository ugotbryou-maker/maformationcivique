import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, getAllPostSlugs, getAllPosts, POST_CATEGORIES } from '@/lib/sanity/queries';
import { urlFor } from '@/lib/sanity/client';
import { CategoryTag, PostVisual, formatDate } from '@/components/app/PostUI';
import { ArticleBody } from '@/components/app/ArticleBody';
import { ArticleReadingProgress } from '@/components/app/ArticleReadingProgress';
import { ArticleContactForm } from '@/components/app/ArticleContactForm';
import { Clock, ArrowLeft, ArrowRight, Tag, HelpCircle, BookOpen } from 'lucide-react';
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
  const canonical = `https://www.maformationcivique.fr/ressources/${post.slug?.current ?? slug}`;
  return {
    title: post.seo?.metaTitle ?? `${post.title} — maformationcivique.fr`,
    description: post.seo?.metaDescription ?? post.excerpt,
    alternates: { canonical },
    openGraph: {
      title: post.seo?.metaTitle ?? post.title,
      description: post.seo?.metaDescription ?? post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      url: canonical,
      siteName: 'maformationcivique.fr',
      locale: 'fr_FR',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seo?.metaTitle ?? post.title,
      description: post.seo?.metaDescription ?? post.excerpt,
    },
  };
}

// Extrait les h2/h3 du corps Sanity pour la table des matières
function extractToc(body: unknown): { id: string; text: string; level: 2 | 3 }[] {
  if (!Array.isArray(body)) return [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (body as any[])
    .filter((b) => b._type === 'block' && (b.style === 'h2' || b.style === 'h3'))
    .map((b) => {
      const text = (b.children ?? []).map((c: { text?: string }) => c.text ?? '').join('');
      const id = text.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      return { id, text, level: b.style === 'h2' ? 2 : 3 } as { id: string; text: string; level: 2 | 3 };
    });
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const [post, allPosts] = await Promise.all([getPostBySlug(slug), getAllPosts()]);
  if (!post) notFound();

  const cat = POST_CATEGORIES[post.category];
  const toc = extractToc(post.body);
  const canonicalSlug = post.slug?.current ?? slug;

  // Articles liés : même catégorie d'abord, sinon les plus récents — max 3
  const related = [
    ...allPosts.filter((p) => p.slug?.current !== canonicalSlug && p.category === post.category),
    ...allPosts.filter((p) => p.slug?.current !== canonicalSlug && p.category !== post.category),
  ].slice(0, 3);

  const canonical = `https://www.maformationcivique.fr/ressources/${canonicalSlug}`;
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: post.title.slice(0, 110),
        description: post.seo?.metaDescription ?? post.excerpt,
        datePublished: post.publishedAt,
        inLanguage: 'fr',
        url: canonical,
        author: { '@type': 'Organization', name: 'maformationcivique.fr' },
        publisher: {
          '@type': 'Organization',
          name: 'maformationcivique.fr',
          url: 'https://www.maformationcivique.fr',
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.maformationcivique.fr/' },
          { '@type': 'ListItem', position: 2, name: 'Ressources', item: 'https://www.maformationcivique.fr/ressources' },
          { '@type': 'ListItem', position: 3, name: post.title },
        ],
      },
    ],
  };

  return (
    <div style={{ minHeight: '100vh', background: '#F8F9FC' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      {/* Barre de lecture */}
      <ArticleReadingProgress color={cat.color} />

      {/* ── Hero plein format ── */}
      <div style={{
        position: 'relative',
        minHeight: 'max(520px, 60vh)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        overflow: 'hidden',
        background: '#001A70',
        borderRadius: '0 0 28px 28px',
        WebkitMaskImage: '-webkit-radial-gradient(white, black)',
      }}>
        {/* Image de couverture — plein fond */}
        {post.coverImage && (
          <div style={{ position: 'absolute', inset: 0, animation: 'article-hero-img-in 350ms ease both' }}>
            <PostVisual post={post} sizes="100vw" priority />
          </div>
        )}
        {/* Gradient sombre ancré en bas pour lisibilité */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(0,10,60,0.96) 0%, rgba(0,20,90,0.75) 40%, rgba(0,20,90,0.25) 75%, rgba(0,20,90,0.08) 100%)',
        }} />

        {/* Contenu — ancré en bas */}
        <div className="container" style={{ position: 'relative', zIndex: 1, padding: '0 24px 3rem' }}>
          <Link href="/ressources" style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            color: 'rgba(255,255,255,0.6)', fontSize: 13, textDecoration: 'none',
            marginBottom: '1.25rem',
          }}>
            <ArrowLeft size={13} /> Retour aux ressources
          </Link>

          <div style={{ marginBottom: '0.75rem' }}>
            <CategoryTag category={post.category} size="md" />
          </div>

          <h1 style={{
            fontSize: 'clamp(28px, 4.5vw, 48px)', fontWeight: 900,
            color: '#fff', margin: '0 0 0.875rem', lineHeight: 1.15,
            maxWidth: 780, textShadow: '0 2px 12px rgba(0,0,0,0.35)',
          }}>
            {post.title}
          </h1>

          <p style={{
            fontSize: 17, color: 'rgba(255,255,255,0.82)',
            lineHeight: 1.65, margin: '0 0 1.25rem', maxWidth: 640,
          }}>
            {post.excerpt}
          </p>

          {/* Meta strip */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
            {post.author?.name && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                {post.author.avatar ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={(urlFor(post.author.avatar) as { width?: (n: number) => { url: () => string } })?.width?.(32)?.url?.() ?? ''}
                    alt={post.author.name}
                    style={{ width: 30, height: 30, borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(255,255,255,0.4)' }}
                  />
                ) : (
                  <div style={{
                    width: 30, height: 30, borderRadius: '50%',
                    background: 'rgba(255,255,255,0.2)', color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 13, fontWeight: 700,
                  }}>
                    {post.author.name[0]?.toUpperCase()}
                  </div>
                )}
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.9)', fontWeight: 600 }}>{post.author.name}</span>
              </div>
            )}
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>·</span>
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)' }}>
              {formatDate(post.publishedAt)}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 13, color: 'rgba(255,255,255,0.65)' }}>
              <Clock size={12} /> {post.readingTime} min de lecture
            </span>
          </div>
        </div>
      </div>

      {/* Contenu principal — 2 colonnes */}
      <div className="container" style={{ padding: '2.5rem 24px 5rem' }}>
        <div className="article-layout">

          {/* ── Colonne gauche : corps de l'article ── */}
          <main id="article-body">

            {/* Corps */}
            <div style={{ fontSize: 16, lineHeight: 1.85, color: '#374151' }}>
              {post.body ? (
                <ArticleBody value={post.body} accentColor={cat.color} />
              ) : (
                <div>
                  <p>{post.excerpt}</p>
                  <div style={{
                    margin: '2rem 0', padding: '1.25rem 1.5rem',
                    background: '#F0F9FF', borderRadius: 12, borderLeft: `4px solid ${cat.color}`,
                  }}>
                    <p style={{ margin: 0, fontWeight: 600, color: cat.color, fontSize: 14 }}>
                      Contenu disponible après connexion à Sanity CMS.
                    </p>
                  </div>
                </div>
              )}
            </div>

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

            {/* FAQ accordéon */}
            {post.faq && post.faq.length > 0 && (
              <div style={{ marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid #E2E8F0' }}>
                <h2 style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  fontSize: 20, fontWeight: 800, color: '#1A1A2E', margin: '0 0 1.25rem',
                }}>
                  <HelpCircle size={20} color={cat.color} />
                  Questions fréquentes
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {post.faq.map((item, i) => (
                    <details key={i} className="faq-item" style={{
                      borderRadius: 12, border: '1px solid #E2E8F0',
                      background: '#fff', overflow: 'hidden',
                    }}>
                      <summary style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
                        padding: '14px 18px', cursor: 'pointer', listStyle: 'none',
                        fontSize: 15, fontWeight: 700, color: '#1A1A2E', userSelect: 'none',
                      }}>
                        <span>{item.question}</span>
                        <span className="faq-chevron" style={{
                          flexShrink: 0, width: 22, height: 22, borderRadius: '50%',
                          background: cat.bg, color: cat.color,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: 13, fontWeight: 900, transition: 'transform 200ms',
                        }}>+</span>
                      </summary>
                      <div style={{ padding: '0 18px 16px', fontSize: 14, lineHeight: 1.75, color: '#64748B', borderTop: '1px solid #F1F5F9' }}>
                        <div style={{ paddingTop: 12 }}>{item.answer}</div>
                      </div>
                    </details>
                  ))}
                </div>
                <style>{`
                  .faq-item[open] > summary .faq-chevron { transform: rotate(45deg); }
                  .faq-item > summary::-webkit-details-marker { display: none; }
                  .faq-item[open] { border-color: ${cat.color}44; }
                  .faq-item[open] > summary { color: ${cat.color}; }
                `}</style>
              </div>
            )}

            {/* CTA examen */}
            <div style={{
              marginTop: '3rem',
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

            {/* Articles liés */}
            {related.length > 0 && (
              <div style={{ marginTop: '3rem', paddingTop: '2.5rem', borderTop: '1px solid #E2E8F0' }}>
                <h2 style={{ fontSize: 18, fontWeight: 800, color: '#1A1A2E', margin: '0 0 1.25rem' }}>
                  À lire aussi
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {related.map((rel) => {
                    const relCat = POST_CATEGORIES[rel.category];
                    const relSlug = rel.slug?.current ?? '';
                    return (
                      <Link key={relSlug} href={`/ressources/${relSlug}`} style={{ textDecoration: 'none' }} className="related-card">
                        <article style={{
                          display: 'flex', gap: '14px', alignItems: 'flex-start',
                          background: '#fff', borderRadius: '14px',
                          border: '1px solid #E2E8F0', padding: '14px',
                          transition: 'box-shadow 200ms, transform 200ms',
                        }}>
                          {/* Vignette */}
                          {rel.coverImage && (
                            <div style={{
                              position: 'relative',
                              width: 80, height: 64, borderRadius: 10, overflow: 'hidden',
                              flexShrink: 0, background: '#E2E8F0',
                            }}>
                              <PostVisual post={rel} sizes="80px" />
                            </div>
                          )}
                          <div style={{ minWidth: 0 }}>
                            <div style={{ marginBottom: 4 }}>
                              <CategoryTag category={rel.category} />
                            </div>
                            <p style={{
                              fontSize: 14, fontWeight: 700, color: '#1A1A2E',
                              margin: '0 0 4px', lineHeight: 1.4,
                              display: '-webkit-box', WebkitLineClamp: 2,
                              WebkitBoxOrient: 'vertical', overflow: 'hidden',
                            }}>
                              {rel.title}
                            </p>
                            <span style={{ fontSize: 12, color: '#94A3B8', display: 'flex', alignItems: 'center', gap: 4 }}>
                              <Clock size={11} color={relCat.color} /> {rel.readingTime} min · {formatDate(rel.publishedAt)}
                            </span>
                          </div>
                        </article>
                      </Link>
                    );
                  })}
                </div>
                <style>{`
                  .related-card article { transition: box-shadow 200ms, transform 200ms; }
                  .related-card:hover article { box-shadow: 0 4px 20px rgba(0,0,0,0.1); transform: translateY(-1px); }
                `}</style>
              </div>
            )}

            <div style={{ marginTop: '2rem' }}>
              <Link href="/ressources" style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '0.875rem 1.5rem', borderRadius: 12,
                border: '1.5px solid #E2E8F0', background: '#fff',
                color: '#64748B', textDecoration: 'none',
                fontSize: 13, fontWeight: 600,
              }}>
                <ArrowLeft size={14} /> Tous les articles
              </Link>
            </div>
          </main>

          {/* ── Colonne droite : sidebar ── */}
          <aside className="article-sidebar">

            {/* Table des matières */}
            {toc.length > 0 && (
              <div className="sidebar-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '1rem' }}>
                  <BookOpen size={15} color={cat.color} />
                  <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: '.08em', textTransform: 'uppercase', color: '#94A3B8' }}>
                    Dans cet article
                  </span>
                </div>
                <nav>
                  {toc.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="toc-link"
                      style={{
                        display: 'block',
                        padding: '6px 0 6px 12px',
                        fontSize: item.level === 2 ? 13 : 12,
                        fontWeight: item.level === 2 ? 600 : 400,
                        color: '#64748B',
                        textDecoration: 'none',
                        borderLeft: `2px solid #E2E8F0`,
                        marginLeft: item.level === 3 ? 10 : 0,
                        lineHeight: 1.4,
                        transition: 'color 120ms, border-color 120ms',
                      }}
                    >
                      {item.text}
                    </a>
                  ))}
                </nav>
                <style>{`
                  .toc-link:hover { color: ${cat.color} !important; border-left-color: ${cat.color} !important; }
                `}</style>
              </div>
            )}

            {/* Meta compact */}
            <div className="sidebar-card">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {post.author?.name && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, paddingBottom: '10px', borderBottom: '1px solid #F1F5F9' }}>
                    {post.author.avatar ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={(urlFor(post.author.avatar) as { width?: (n: number) => { url: () => string } })?.width?.(40)?.url?.() ?? ''}
                        alt={post.author.name}
                        style={{ width: 36, height: 36, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
                      />
                    ) : (
                      <div style={{
                        width: 36, height: 36, borderRadius: '50%', flexShrink: 0,
                        background: 'var(--gradient-primary)', color: '#fff',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 15, fontWeight: 700,
                      }}>
                        {post.author.name[0]?.toUpperCase()}
                      </div>
                    )}
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: '#1A1A2E' }}>{post.author.name}</div>
                      {post.author.bio && (
                        <p style={{ margin: 0, fontSize: 11, color: '#94A3B8', lineHeight: 1.4 }}>{post.author.bio}</p>
                      )}
                    </div>
                  </div>
                )}
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: '#64748B' }}>
                  <span>{formatDate(post.publishedAt)}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <Clock size={12} color={cat.color} /> {post.readingTime} min
                  </span>
                </div>
                <CategoryTag category={post.category} />
              </div>
            </div>

            {/* Mini CTA examen */}
            <div style={{
              background: 'linear-gradient(135deg, #001A70 0%, #002395 100%)',
              borderRadius: 16, padding: '1.1rem',
            }}>
              <div style={{ fontSize: 13, fontWeight: 800, color: '#fff', marginBottom: 4 }}>Testez vos connaissances</div>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', margin: '0 0 0.875rem', lineHeight: 1.6 }}>
                Examen blanc · 40 questions · Résultats immédiats
              </p>
              <Link href="/examen" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                background: '#fff', color: '#002395',
                padding: '9px 14px', borderRadius: 10,
                fontSize: 13, fontWeight: 700, textDecoration: 'none',
              }}>
                Commencer <ArrowRight size={13} />
              </Link>
            </div>

            {/* Formulaire "Besoin d'aide" — dernier élément, sticky */}
            <div style={{ position: 'sticky', top: '24px' }}>
              <ArticleContactForm />
            </div>

          </aside>
        </div>
      </div>

      {/* JSON-LD Article */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.title,
            description: post.excerpt,
            datePublished: post.publishedAt,
            dateModified: post.publishedAt,
            url: `https://www.maformationcivique.fr/ressources/${canonicalSlug}`,
            inLanguage: 'fr',
            author: post.author?.name
              ? { '@type': 'Person', name: post.author.name }
              : { '@type': 'Organization', name: 'maformationcivique.fr', url: 'https://www.maformationcivique.fr' },
            publisher: {
              '@type': 'Organization',
              name: 'maformationcivique.fr',
              url: 'https://www.maformationcivique.fr',
              logo: { '@type': 'ImageObject', url: 'https://www.maformationcivique.fr/brand-icon-color.svg' },
            },
            image: `https://www.maformationcivique.fr/ressources/${canonicalSlug}/opengraph-image`,
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://www.maformationcivique.fr/ressources/${canonicalSlug}`,
            },
          }),
        }}
      />

      {/* JSON-LD FAQ */}
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
                acceptedAnswer: { '@type': 'Answer', text: item.answer },
              })),
            }),
          }}
        />
      )}

      <style>{`
        @keyframes article-hero-img-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .article-layout {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 3rem;
          align-items: start;
          max-width: 1100px;
          margin: 0 auto;
        }
        .article-sidebar {
          position: sticky;
          top: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .sidebar-card {
          background: #fff;
          border-radius: 16px;
          padding: 1.25rem;
          border: 1px solid #E2E8F0;
          box-shadow: 0 1px 4px rgba(0,0,0,0.05);
        }
        @media (max-width: 860px) {
          .article-layout {
            grid-template-columns: 1fr;
          }
          .article-sidebar {
            position: static;
            order: -1;
          }
        }
      `}</style>
    </div>
  );
}

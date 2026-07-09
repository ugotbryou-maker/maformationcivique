import { ImageResponse } from 'next/og';
import { getPostBySlug } from '@/lib/sanity/queries';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

interface Props {
  params: Promise<{ slug: string }>;
}

const CAT_COLORS: Record<string, string> = {
  demarches: '#002395',
  'vie-en-france': '#0057A8',
  examen: '#CC1A1A',
  actualites: '#7C3AED',
};
const CAT_LABELS: Record<string, string> = {
  demarches: 'Démarches',
  'vie-en-france': 'Vie en France',
  examen: 'Examens & formation',
  actualites: 'Actualités',
};

export default async function ArticleOgImage({ params }: Props) {
  const { slug } = await params;
  let title = 'Guide pratique';
  let excerpt = 'maformationcivique.fr';
  let category = 'demarches';

  try {
    const post = await getPostBySlug(slug);
    if (post) {
      title = post.title ?? title;
      excerpt = post.excerpt ?? excerpt;
      category = post.category ?? category;
    }
  } catch { /* Sanity indisponible */ }

  const accent = CAT_COLORS[category] ?? '#002395';
  const catLabel = CAT_LABELS[category] ?? '';

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: 'flex',
          background: '#F8F9FC',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Bande colorée gauche */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: 16,
          background: accent, display: 'flex',
        }} />

        {/* Bandeau décoratif haut */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 8,
          display: 'flex',
        }}>
          <div style={{ flex: 1, background: '#002395', display: 'flex' }} />
          <div style={{ flex: 1, background: '#FFFFFF', display: 'flex' }} />
          <div style={{ flex: 1, background: '#EF4135', display: 'flex' }} />
        </div>

        {/* Cercle déco */}
        <div style={{
          position: 'absolute', bottom: -100, right: -100,
          width: 400, height: 400, borderRadius: '50%',
          background: accent,
          opacity: 0.07,
          display: 'flex',
        }} />

        {/* Contenu */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '72px 80px 60px 96px',
          flex: 1,
          justifyContent: 'space-between',
        }}>
          {/* Badge catégorie */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            background: `${accent}18`,
            border: `2px solid ${accent}40`,
            borderRadius: 32,
            padding: '8px 20px',
            width: 'fit-content',
          }}>
            <span style={{ color: accent, fontSize: 20, fontWeight: 700, letterSpacing: '0.04em' }}>
              {catLabel}
            </span>
          </div>

          {/* Titre */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            justifyContent: 'center',
            paddingTop: 24,
            paddingBottom: 24,
          }}>
            <span style={{
              fontSize: title.length > 60 ? 48 : 60,
              fontWeight: 900,
              color: '#0A0F2C',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              maxWidth: 900,
            }}>
              {title}
            </span>
            {excerpt && (
              <span style={{
                fontSize: 24,
                color: '#64748B',
                lineHeight: 1.5,
                marginTop: 20,
                maxWidth: 800,
              }}>
                {excerpt.length > 120 ? `${excerpt.slice(0, 120)}…` : excerpt}
              </span>
            )}
          </div>

          {/* Footer */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <span style={{
              fontSize: 24,
              fontWeight: 700,
              color: '#94A3B8',
            }}>
              maformationcivique.fr
            </span>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              background: accent,
              borderRadius: 24,
              padding: '10px 24px',
            }}>
              <span style={{ fontSize: 20, fontWeight: 700, color: '#fff' }}>
                Lire l'article →
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

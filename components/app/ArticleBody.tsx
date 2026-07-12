import { PortableText, type PortableTextComponents } from '@portabletext/react';
import { urlFor } from '@/lib/sanity/client';

const SITE = 'https://www.maformationcivique.fr';

// Chemins à corriger (/modules → /modulesciviques suite à renommage de route)
const PATH_REMAP: Record<string, string> = { '/modules': '/modulesciviques' };

function fixPath(p: string): string {
  for (const [from, to] of Object.entries(PATH_REMAP)) {
    if (p === from || p.startsWith(from + '/')) return to + p.slice(from.length);
  }
  return p;
}

function sanitizeHref(href: string | undefined): string {
  if (!href) return '#';
  // claude.ai/... → maformationcivique.fr/... (+ correction de chemin)
  if (/^https?:\/\/claude\.ai/.test(href)) {
    try {
      const url = new URL(href);
      return SITE + fixPath(url.pathname) + url.search + url.hash;
    } catch { return SITE; }
  }
  // Chemins relatifs : correction de route uniquement
  if (href.startsWith('/')) return fixPath(href);
  return href;
}

function isInternalHref(href: string): boolean {
  return href.startsWith('/') || href.includes('maformationcivique.fr');
}

export function ArticleBody({ value, accentColor = 'var(--color-blue-france)' }: { value: unknown; accentColor?: string }) {
  const components: PortableTextComponents = {
    types: {
      image: ({ value: img }) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const src = (urlFor(img) as any)?.width?.(760)?.url?.() ?? '';
        if (!src) return null;
        return (
          <figure style={{ margin: '2rem 0' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={img?.alt ?? ''}
              style={{ width: '100%', borderRadius: 12, display: 'block' }}
              loading="lazy"
            />
            {img?.alt && (
              <figcaption style={{ fontSize: 13, color: '#94A3B8', marginTop: 8, textAlign: 'center' }}>
                {img.alt}
              </figcaption>
            )}
          </figure>
        );
      },
    },
    block: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      h2: ({ children, value }: any) => {
        const text = (value?.children ?? []).map((c: { text?: string }) => c.text ?? '').join('');
        const id = text.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
        return (
          <h2 id={id} style={{ fontSize: 22, fontWeight: 800, color: '#1A1A2E', margin: '2rem 0 1rem', lineHeight: 1.3, scrollMarginTop: '80px' }}>
            {children}
          </h2>
        );
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      h3: ({ children, value }: any) => {
        const text = (value?.children ?? []).map((c: { text?: string }) => c.text ?? '').join('');
        const id = text.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
        return (
          <h3 id={id} style={{ fontSize: 18, fontWeight: 700, color: '#1A1A2E', margin: '1.5rem 0 0.75rem', lineHeight: 1.3, scrollMarginTop: '80px' }}>
            {children}
          </h3>
        );
      },
      normal: ({ children }) => (
        <p style={{ fontSize: 16, lineHeight: 1.8, color: '#374151', margin: '0 0 1rem' }}>{children}</p>
      ),
      blockquote: ({ children }) => (
        <blockquote style={{
          margin: '1.5rem 0', padding: '1rem 1.25rem',
          background: '#F8FAFC', borderLeft: `4px solid ${accentColor}`,
          borderRadius: 8, fontStyle: 'italic', color: '#475569',
        }}>
          {children}
        </blockquote>
      ),
    },
    list: {
      bullet: ({ children }) => (
        <ul style={{ margin: '0 0 1rem', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: 6 }}>
          {children}
        </ul>
      ),
      number: ({ children }) => (
        <ol style={{ margin: '0 0 1rem', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: 6 }}>
          {children}
        </ol>
      ),
    },
    listItem: {
      bullet: ({ children }) => <li style={{ fontSize: 16, lineHeight: 1.7, color: '#374151' }}>{children}</li>,
      number: ({ children }) => <li style={{ fontSize: 16, lineHeight: 1.7, color: '#374151' }}>{children}</li>,
    },
    marks: {
      strong: ({ children }) => <strong style={{ fontWeight: 700, color: accentColor }}>{children}</strong>,
      link: ({ value: link, children }) => {
        const href = sanitizeHref(link?.href);
        const external = !isInternalHref(href);
        return (
          <a
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            style={{ color: accentColor, textDecoration: 'underline' }}
          >
            {children}
          </a>
        );
      },
    },
  };

  return <PortableText value={value as Parameters<typeof PortableText>[0]['value']} components={components} />;
}

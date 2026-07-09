import { PortableText, type PortableTextComponents } from '@portabletext/react';
import { urlFor } from '@/lib/sanity/client';

/**
 * Rendu du corps d'article Sanity (Portable Text) avec un style cohérent
 * avec le reste du site (cf. lib/markdown.tsx pour le rendu des leçons).
 */
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
      link: ({ value: link, children }) => (
        <a
          href={link?.href}
          target={link?.href?.startsWith('http') ? '_blank' : undefined}
          rel={link?.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
          style={{ color: accentColor, textDecoration: 'underline' }}
        >
          {children}
        </a>
      ),
    },
  };

  return <PortableText value={value as Parameters<typeof PortableText>[0]['value']} components={components} />;
}

import Image from 'next/image';
import { FileText, Home, GraduationCap, Newspaper, type LucideIcon } from 'lucide-react';
import { urlFor } from '@/lib/sanity/client';
import { POST_CATEGORIES, type SanityPost } from '@/lib/sanity/queries';

/**
 * Éléments UI partagés pour les pages /ressources (liste + article) :
 * icônes de catégorie (lucide, pas d'emoji), badge catégorie, visuel
 * de couverture avec fallback dégradé quand l'article n'a pas d'image.
 */

export const CATEGORY_ICONS: Record<SanityPost['category'], LucideIcon> = {
  demarches: FileText,
  'vie-en-france': Home,
  examen: GraduationCap,
  actualites: Newspaper,
};

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
}

interface CategoryTagProps {
  category: SanityPost['category'];
  size?: 'sm' | 'md';
  /** "soft" = pastille colorée (sur fond clair) · "solid" = fond blanc (sur image/fond foncé) */
  variant?: 'soft' | 'solid';
}

export function CategoryTag({ category, size = 'sm', variant = 'soft' }: CategoryTagProps) {
  const cat = POST_CATEGORIES[category];
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: size === 'md' ? '6px 14px' : '4px 10px',
      borderRadius: 100,
      background: variant === 'solid' ? '#fff' : cat.bg,
      color: cat.color,
      fontSize: size === 'md' ? 12 : 11,
      fontWeight: 600,
      lineHeight: 1.4,
      whiteSpace: 'nowrap',
    }}>
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: cat.color, flexShrink: 0 }} />
      {cat.label}
    </span>
  );
}

interface PostVisualProps {
  post: SanityPost;
  sizes: string;
  priority?: boolean;
}

/** Image de couverture Sanity (next/image), ou fallback dégradé + icône catégorie si absente. */
export function PostVisual({ post, sizes, priority }: PostVisualProps) {
  const cat = POST_CATEGORIES[post.category];
  const Icon = CATEGORY_ICONS[post.category];

  if (post.coverImage?.asset) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const src = (urlFor(post.coverImage) as any)?.width?.(1200)?.height?.(800)?.fit?.('crop')?.url?.() ?? '';
    if (src) {
      return (
        <Image
          src={src}
          alt={post.coverImage.alt ?? ''}
          fill
          sizes={sizes}
          priority={priority}
          style={{ objectFit: 'cover' }}
        />
      );
    }
  }

  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      background: `linear-gradient(135deg, ${cat.bg} 0%, ${cat.color}26 100%)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Icon size={36} color={cat.color} style={{ opacity: 0.45 }} />
    </div>
  );
}

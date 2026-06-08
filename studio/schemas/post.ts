import { defineType } from 'sanity';

export const postSchema = defineType({
  name: 'post',
  title: 'Article',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
      
    },
    {
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      
    },
    {
      name: 'excerpt',
      title: 'Résumé (méta description)',
      type: 'text',
      rows: 3,
      description: 'Affiché dans la liste et utilisé pour le SEO (150–160 caractères idéalement)',
    },
    {
      name: 'publishedAt',
      title: 'Date de publication',
      type: 'datetime',
    },
    {
      name: 'readingTime',
      title: 'Temps de lecture (minutes)',
      type: 'number',
    },
    {
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: [
          { title: '📋 Démarches', value: 'demarches' },
          { title: '🇫🇷 Vie en France', value: 'vie-en-france' },
          { title: '🎓 Examens & formation', value: 'examen' },
          { title: '📰 Actualités', value: 'actualites' },
        ],
        layout: 'radio',
      },
    },
    {
      name: 'contentType',
      title: 'Type de contenu',
      type: 'string',
      options: {
        list: [
          { title: '📄 Article', value: 'article' },
          { title: '📖 Guide pratique', value: 'guide' },
        ],
        layout: 'radio',
      },
      description: 'Un guide pratique est un contenu structuré étape par étape. Un article est un décryptage ou une actualité.',
    },
    {
      name: 'coverImage',
      title: 'Image de couverture',
      type: 'image',
      options: { hotspot: true },
      fields: [
        { name: 'alt', title: 'Texte alternatif (accessibilité)', type: 'string' },
      ],
    },
    {
      name: 'author',
      title: 'Auteur',
      type: 'reference',
      to: [{ type: 'author' }],
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    },
    {
      name: 'body',
      title: 'Contenu',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [{ name: 'alt', title: 'Texte alternatif', type: 'string' }],
        },
      ],
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        { name: 'metaTitle', title: 'Titre SEO', type: 'string' },
        { name: 'metaDescription', title: 'Description SEO', type: 'text', rows: 2 },
      ],
    },
  ],
  preview: {
    select: { title: 'title', category: 'category', contentType: 'contentType', media: 'coverImage' },
    prepare({ title, category, contentType, media }: { title: string; category: string; contentType: string; media: unknown }) {
      const catLabels: Record<string, string> = {
        'demarches': 'Démarches',
        'vie-en-france': 'Vie en France',
        'examen': 'Examens & formation',
        'actualites': 'Actualités',
      };
      const typeLabel = contentType === 'guide' ? 'Guide' : 'Article';
      return { title, subtitle: `${catLabels[category] ?? category} · ${typeLabel}`, media };
    },
  },
});

export const authorSchema = {
  name: 'author',
  title: 'Auteur',
  type: 'document',
  fields: [
    { name: 'name', title: 'Nom', type: 'string' },
    { name: 'avatar', title: 'Photo', type: 'image' },
    { name: 'bio', title: 'Bio courte', type: 'text', rows: 2 },
  ],
};

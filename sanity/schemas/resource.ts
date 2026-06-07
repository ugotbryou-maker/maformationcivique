// Schéma Sanity — Ressource / Guide pratique
export const resourceSchema = {
  name: 'resource',
  title: 'Ressource / Guide',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (R: { required: () => unknown }) => R.required(),
    },
    {
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (R: { required: () => unknown }) => R.required(),
    },
    {
      name: 'excerpt',
      title: 'Résumé',
      type: 'text',
      rows: 2,
    },
    {
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: [
          { title: 'Titre de séjour (CSP)', value: 'titre-sejour' },
          { title: 'Carte de résident (CR)', value: 'carte-resident' },
          { title: 'Naturalisation', value: 'naturalisation' },
          { title: 'Vivre en France', value: 'vie-en-france' },
          { title: 'Actualités', value: 'actualites' },
        ],
      },
    },
    {
      name: 'icon',
      title: 'Emoji icône',
      type: 'string',
      description: 'Ex: 📄 🏛️ 🇫🇷',
    },
    {
      name: 'downloadUrl',
      title: 'Lien de téléchargement (PDF)',
      type: 'url',
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
          fields: [{ name: 'alt', title: 'Texte alt', type: 'string' }],
        },
      ],
    },
    {
      name: 'publishedAt',
      title: 'Date de publication',
      type: 'datetime',
    },
    {
      name: 'featured',
      title: 'Mis en avant ?',
      type: 'boolean',
      initialValue: false,
    },
  ],
  preview: {
    select: { title: 'title', category: 'category' },
    prepare({ title, category }: { title: string; category: string }) {
      return { title, subtitle: category };
    },
  },
};

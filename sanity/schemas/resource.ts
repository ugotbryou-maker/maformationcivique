import { defineType, defineField } from 'sanity';

export const resourceSchema = defineType({
  name: 'resource',
  title: 'Ressource / Guide',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Titre', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug (URL)', type: 'slug', options: { source: 'title', maxLength: 96 } }),
    defineField({ name: 'excerpt', title: 'Résumé', type: 'text', rows: 2 }),
    defineField({
      name: 'category', title: 'Catégorie', type: 'string',
      options: {
        list: [
          { title: 'Titre de séjour (CSP)', value: 'titre-sejour' },
          { title: 'Carte de résident (CR)', value: 'carte-resident' },
          { title: 'Naturalisation', value: 'naturalisation' },
          { title: 'Vivre en France', value: 'vie-en-france' },
          { title: 'Actualités', value: 'actualites' },
        ],
      },
    }),
    defineField({ name: 'icon', title: 'Emoji icône (ex: 📄 🏛️)', type: 'string' }),
    defineField({ name: 'downloadUrl', title: 'Lien de téléchargement (PDF)', type: 'url' }),
    defineField({
      name: 'body', title: 'Contenu', type: 'array',
      of: [
        { type: 'block' },
        { type: 'image', options: { hotspot: true }, fields: [defineField({ name: 'alt', title: 'Texte alt', type: 'string' })] },
      ],
    }),
    defineField({ name: 'publishedAt', title: 'Date de publication', type: 'datetime' }),
    defineField({ name: 'featured', title: 'Mis en avant ?', type: 'boolean', initialValue: false }),
  ],
});

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
          { title: 'Titre de séjour (CSP)', value: 'titre-sejour' },
          { title: 'Carte de résident (CR)', value: 'carte-resident' },
          { title: 'Naturalisation (NAT)', value: 'naturalisation' },
          { title: 'Vivre en France', value: 'vie-en-france' },
          { title: 'Actualités', value: 'actualites' },
        ],
      },
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
      name: 'faq',
      title: 'FAQ (questions fréquentes)',
      description:
        "Pour le SEO et le E-E-A-T Google : 3 à 6 questions que se posent vos lecteurs sur ce sujet. " +
        "Affichées en bas de l'article et éligibles au rich snippet FAQ dans les résultats Google.",
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'faqItem',
          title: 'Question',
          fields: [
            { name: 'question', title: 'Question', type: 'string' },
            { name: 'answer', title: 'Réponse', type: 'text', rows: 4 },
          ],
          preview: {
            select: { title: 'question', subtitle: 'answer' },
          },
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
    select: { title: 'title', subtitle: 'category', media: 'coverImage' },
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

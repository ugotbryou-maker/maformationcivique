import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { postSchema, authorSchema } from './sanity/schemas/post';

export default defineConfig({
  // Studio embarqué dans Next.js, servi sur /studio (cf. app/studio/[[...tool]])
  basePath: '/studio',
  name: 'maformationcivique',
  title: 'maformationcivique.fr — CMS',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? 'eqz8pjt2',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Contenu')
          .items([
            S.listItem()
              .title('📝 Articles de blog')
              .child(S.documentTypeList('post').title('Articles')),
            S.listItem()
              .title('👤 Auteurs')
              .child(S.documentTypeList('author').title('Auteurs')),
          ]),
    }),
    // visionTool() retiré : @sanity/vision^5 nécessite sanity^4/5 + React 19,
    // incompatibles avec sanity@3.99 / React 18 utilisés ici. Le desk tool
    // (édition des articles) ne nécessite pas Vision (playground GROQ).
  ],

  schema: {
    types: [postSchema, authorSchema],
  },
});

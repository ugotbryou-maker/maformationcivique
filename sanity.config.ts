import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { postSchema } from './sanity/schemas/post';
import { resourceSchema } from './sanity/schemas/resource';

export default defineConfig({
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
              .title('📚 Ressources & guides')
              .child(S.documentTypeList('resource').title('Ressources')),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: [postSchema, resourceSchema],
  },
});

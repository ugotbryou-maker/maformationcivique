import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { postSchema } from './sanity/schemas/post';
import { resourceSchema } from './sanity/schemas/resource';

export default defineConfig({
  name: 'maformationcivique',
  title: 'maformationcivique.fr — CMS',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',

  plugins: [
    structureTool({
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

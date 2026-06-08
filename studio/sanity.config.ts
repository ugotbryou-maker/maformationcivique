import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { postSchema, authorSchema } from './schemas/post';
import { resourceSchema } from './schemas/resource';

export default defineConfig({
  name: 'maformationcivique',
  title: 'maformationcivique.fr — CMS',
  projectId: 'eqz8pjt2',
  dataset: 'production',

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
            S.listItem()
              .title('👤 Auteurs')
              .child(S.documentTypeList('author').title('Auteurs')),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: [postSchema, authorSchema, resourceSchema],
  },
});

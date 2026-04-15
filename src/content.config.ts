import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { rssSchema } from '@astrojs/rss';

const blog = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/blog',
    generateId: ({ entry }) => {
      return entry.replace(/\.md$/, '').replaceAll(' ', '-');
    },
  }),
  schema: rssSchema,
});

export const collections = { blog };

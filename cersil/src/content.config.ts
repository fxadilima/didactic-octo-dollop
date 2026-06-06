import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const book = defineCollection({
  loader: glob({ base: './src/content/book', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
	title: z.string(),
	description: z.string(),
	chapter: z.number().optional(),
	book: z.number().optional(),
	image: z.string().optional()
  }),
});

export const collections = { book: book };


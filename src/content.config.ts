import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const artikel = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx,mdoc}", base: "./src/content/artikel" }),
  schema: z.object({
    title: z.string(),
    category: z.string().optional(),
    date: z.string().optional(),
    thumbnail: z.string().optional(),
    isEditorChoice: z.boolean().optional(),
  }),
});

export const collections = {
  artikel,
};

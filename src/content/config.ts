import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.string(),
    revisions: z.number(),
    draft: z.boolean().optional(),
    // Add other frontmatter fields as needed
  }),
});

export const collections = {
  blog: blogCollection,
};

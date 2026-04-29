import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date().optional(),
    date: z.coerce.date().optional(),
    category: z.string().optional(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([])
  }).refine((data) => data.publishDate || data.date, {
    message: 'Provide either `date` or `publishDate` in frontmatter.'
  })
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    location: z.string(),
    scope: z.string(),
    challenge: z.string(),
    solution: z.string(),
    featured: z.boolean().default(false)
  })
});

export const collections = {
  blog,
  projects
};

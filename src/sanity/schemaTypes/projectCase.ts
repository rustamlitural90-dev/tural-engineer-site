import { defineField, defineType } from 'sanity';

export const projectCase = defineType({
  name: 'projectCase',
  title: 'Project case study',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string'
    }),
    defineField({
      name: 'problem',
      title: 'Problem',
      type: 'text'
    }),
    defineField({
      name: 'analysis',
      title: 'Analysis',
      type: 'text'
    }),
    defineField({
      name: 'solution',
      title: 'Solution',
      type: 'text'
    }),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: { hotspot: true }
    })
  ]
});


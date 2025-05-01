import { blogType } from './blogType';
import { eventType } from './eventType';

export const pageType = {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'contentModules',
      title: 'Content Modules',
      type: 'array',
      of: [blogType, eventType],
    }, 
  ],
}
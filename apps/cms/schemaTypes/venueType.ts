import { defineType, defineField } from "sanity";

export const venueType = defineType({
  name: 'venue',
  title: 'Venue',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string'
    }),
    defineField({
      name: 'city',
      type: 'text',
      title: 'City'
    }),
    defineField({
      name: 'country',
      type: 'text',
      title: 'Country',
    }),
  ]
});
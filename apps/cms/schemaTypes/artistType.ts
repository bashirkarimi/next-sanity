import { defineType, defineField } from "sanity";

export const artistType = defineType({
  name: 'artist',
  title: 'Artist',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    defineField({
      name: 'description',
      type: 'text',
      title: 'ArtistDescription'
    }),
    defineField({
      name: 'photo',
      type: 'image',
      title: 'Artist Photo',
      options: {
        hotspot: true
      }
    })
  ]
});
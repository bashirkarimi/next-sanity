import { defineType } from "sanity";
import { doorsOpenInput } from "./components/doorsOpenInput";

export const eventType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  groups: [
    {name: 'eventDetails', title: 'Event Details'},
    {name: 'editorial', title: 'editorial'}
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule: any) => rule
      .required()
      .error('Title is required'),
      group: 'eventDetails'
    },
    {
      name: 'date',
      title: 'Date',
      type: 'datetime',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: (rule: any) => rule.required().error('Slug is required'),
      hidden: ({document}: any) => !document?.title,
      group: 'eventDetails'
    },
    {
      name: 'eventType',
      title: 'Event Type',
      type: 'string',
      options: {
        list: [
          {title: 'Live', value: 'live'},
          {title: 'Onsite', value: 'onsite'}
        ],
        layout: 'radio',
      },
      group: 'eventDetails'
    },
    {
      name: 'doorsOpen',
      title: 'Doors Open',
      type: 'number',
      group: 'eventDetails',
      components: {
        input: doorsOpenInput
      }
    },
    {
      name: 'venue',
      title: 'Venue',
      type: 'reference',
      to: {
        type: 'venue'
      }
    },
    {
      name: 'headLine',
      title: 'Head line',
      type: 'reference',
      to: {
        type: 'artist'
      }
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'details',
      title: 'Details',
      type: 'array',
      of:[
        {type: 'block'},
        {type: 'image'}
      ]
    },
    {
      name: 'tickets',
      title: 'Tickets',
      type: 'url'
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      eventType: 'eventType',
      venue: 'venue.name'
    },
    prepare(selection: any) {
      const {title, media, eventType, venue } = selection;
      const onSite = eventType === 'onsite' ? 'Onsite' : '';
      const subtitle = onSite ? `${eventType} at ${venue}` : eventType;

      return {
        title,
        subtitle,
        media
      }
    }
  },
});
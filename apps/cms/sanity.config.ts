import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { media } from 'sanity-plugin-media'
import { documentInternationalization } from '@sanity/document-internationalization'

export default defineConfig({
  name: 'default',
  title: 'next sanity',

  projectId: 'lyam3oa7',
  dataset: 'production',

  plugins: [
    documentInternationalization({
      supportedLanguages: [
        {id: 'de', title: 'German'},
        {id: 'en', title: 'English'}
      ],
      schemaTypes: schemaTypes.map(type => type.name),
    }),
    structureTool(),
    visionTool(),
    media()
  ],

  schema: {
    types: schemaTypes,
  },
})

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import recurso from './sanity/schemas/recurso'
import imagenSitio from './sanity/schemas/imagen'
import hero from './sanity/schemas/hero'

export default defineConfig({
  name: 'lead-pro',
  title: 'Lead Pro',
  projectId: 'hoq99nai',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: [recurso, imagenSitio, hero],
  },
})

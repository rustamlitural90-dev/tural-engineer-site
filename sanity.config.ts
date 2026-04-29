import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

import { schemaTypes } from './src/sanity/schemaTypes';

export default defineConfig({
  name: 'default',
  title: 'turalengineer.com',

  projectId: '87ejco9o',
  dataset: 'production',
  apiVersion: '2024-01-01',

  plugins: [deskTool()],

  schema: {
    types: schemaTypes
  }
});


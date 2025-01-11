const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');
const config = require('../../dist/cds-styles/tailwind.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...config,
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ]
};

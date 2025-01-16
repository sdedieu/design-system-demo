/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  corePlugins: [
    'display',
    'padding',
    'margin',
    'gap',
    'flex',
    'flexBasis',
    'flexDirection',
    'flexGrow',
    'flexShrink',
    'flexWrap',
    'gridTemplateColumns',
    'alignItems',
    'justifyContent',
    'position',
    'placeSelf',
    'inset',
    'zIndex',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function({ addComponents }) {
      addComponents({
        '.divider': {
          '--mat-divider-width': '1px',
          '--mat-divider-color': '#cbcdd2',
        },
        '.btn': {
          padding: '.5rem 1rem',
          borderRadius: '.25rem',
          fontWeight: '600',
        },
        '.btn-blue': {
          backgroundColor: '#3490dc',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#2779bd',
          },
        },
        '.btn-red': {
          backgroundColor: '#e3342f',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#cc1f1a',
          },
        },
      });
    })
  ],
  prefix: 'cds-',
  important: true,
};


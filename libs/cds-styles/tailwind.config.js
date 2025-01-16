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
          '--mat-divider-color': 'red'
        }
      });
    })
  ],
  prefix: 'cds-',
  important: true,
};


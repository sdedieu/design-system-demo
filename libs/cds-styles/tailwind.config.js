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
        // '.chip': {
        //   '--mdc-chip-elevated-container-color': 'var(--announcement-3)',
        //   '--mdc-chip-elevated-selected-container-color': 'var(--announcement-7)',
        //   '--mdc-chip-outline-width': 0,
        //   '--mdc-chip-label-text-color': 'var(--announcement-7)',
        //   '--mdc-chip-selected-label-text-color': 'var(--primary-0)',
        //   '--mdc-chip-container-height': 'var(--height-3)',
        //   '--mdc-chip-label-text-font': 'var(--font-level-p2-bold-font-family)',
        //   '--mdc-chip-label-text-line-height': 'var(--font-level-p2-bold-line-height)',
        //   '--mdc-chip-label-text-size': 'var(--font-level-p2-bold-font-size)',
        //   '--mdc-chip-label-text-weight': 'var(--font-level-p2-bold-font-weight)',
        // },
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


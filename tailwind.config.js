/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./layouts/**/*.html', './content/**/*.md', './assets/**/*.js'],
  future: {
    hoverOnlyWhenSupported: true
  },
  theme: {
    extend: {
      lineHeight: {
        '2': '0.50rem',
      },
      zIndex: {
        '60': '60',
      },
      colors: {
        'pink': '#e33c72',
        'semilightblack': '#323232',
        'black': '#141414',
        'white': '#FFFFFF',
        'grey': '#a5a5a5',
        'dark-grey': '#444444',
        'light-black': '#262626',
        'transp-black': '#2424243d',
        'less-transp-black': '#141414b6',
        'transp-grey': '#e2e2e21f',
        'overlay-color': '#000000b3',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'mono': ['Roboto Mono', 'monospace'],
        'fjalla': ['Fjalla One', 'sans-serif']
      },
      dropShadow: {
        'user-md': '1px 1px 4px #000000',
      },
      boxShadow: {
        'user-xsm': '0.5px 0.5px 2px rgba(0, 0, 0, 0.185)',
        'user-sm': '0.5px 0.5px 2px rgba(0, 0, 0, 0.575)',
        'user-md': '1px 1px 4px #0000008c',
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '1px 2px 4px var(--tw-shadow-color)',
        md: '1px 2px 8px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      scale: {
        '101': '1.01',
        '102': '1.02',
      },
      transitionDuration: {
        '2000': '2000ms',
      },
      gridTemplateRows: {
        '0fr': '0fr',
        '1fr': '1fr',
      },
      keyframes: {
        display_fadein: {
          '0%': { opacity: '0'},
          '100%': { opacity: '1' },
        },
        display_fadeout: {
          '0%': { opacity: '1'},
          '100%': { opacity: '0' },
        },
        slide_right: {
          '0%': { transform: 'translateX(-100%)'},
          '100%': { transform: 'translateX(0)'},
        },
        slide_left: {
          '0%': { transform: 'translateX(0)'},
          '100%': { transform: 'translateX(-100%)'},
        },
        expand: {
          '0%': { gridTemplateRows: '0fr'},
          '100%': { gridTemplateRows: '1fr'},
        },
        collapse: {
          '0%': { gridTemplateRows: '1fr'},
          '100%': { gridTemplateRows: '0fr'},
        },
      },
      animation: {
        fadein: 'display_fadein 1s forwards',
        fadeout: 'display_fadeout 1s forwards',
        slidein: 'slide_right 500ms forwards',
        slideout: 'slide_left 500ms forwards',
        expand: 'expand forwards',
        collapse: 'collapse forwards',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}
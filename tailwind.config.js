/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./layouts/**/*.html', './content/**/*.md', './assets/**/*.js'],
  theme: {
    extend: {
      colors: {
        'pink': '#e33c72',
        'black': '#141414',
        'white': '#FFFFFF',
        'grey': '#a5a5a5',
        'dark-grey': '#444444',
        'light-black': '#262626',
        'transp-black': '#2424243d',
        'less-transp-black': '#141414b6',
        'transp-grey': '#e2e2e21f',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'mono': ['Roboto Mono', 'monospace'],
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        md: '1px 2px 8px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      scale: {
        '102': '1.02',
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
      },
      animation: {
        fadein: 'display_fadein 2s forwards',
        fadeout: 'display_fadeout 2s forwards',
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
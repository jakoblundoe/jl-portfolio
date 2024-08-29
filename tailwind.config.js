/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./layouts/**/*.html', './content/**/*.md'],
  theme: {
    colors: {
      'pink': '#e33c72',
      'black': '#141414',
      'white': '#FFFFFF',
      'grey': '#a5a5a5',
      'light-black': '#262626',
    },
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
      'mono': ['Roboto Mono', 'monospace'],
    },
    extend: {
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        md: '1px 2px 8px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
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
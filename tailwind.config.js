/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./layouts/**/*.html', './content/**/*.md'],
  theme: {
    colors: {
      'pink': '#e33c72',
      'black': '#141414',
      'white': '#FFFFFF',
    },
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
      'mono': ['Roboto Mono', 'monospace'],
    },
    extend: {},
  },
  plugins: [],
}
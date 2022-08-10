/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{svelte,js,ts,jsx,tsx}',
    './src/index.css',
  ],
  theme: {
    extend: {
      colors: {
        'black-lexis': '#191919',
        'red-lexis': '#FF0F0E',
        'white-lexis': 'rgba(242, 242, 242, 0.7)',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
      },
    },
  },
  plugins: [],
}

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
        'black-lexis': 'hsl(0, 0%, 10%)',
        'gray-lexis': 'hsl(0, 0%, 5%)',
        'red-lexis': 'hsl(0, 100%, 53%)',
        'white-lexis': 'rgba(242, 242, 242, 0.7)',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
      },
      height: {
        remain: 'calc(100vh - 6rem)',
      },
    },
    boxShadow: {
      DEFAULT: `0.3px 0.5px 0.7px hsl(0deg 0% 2% / 0.36),
    0.8px 1.6px 2px -0.8px hsl(0deg 0% 2% / 0.36),
    2.1px 4.1px 5.2px -1.7px hsl(0deg 0% 2% / 0.36),
    5px 10px 12.6px -2.5px hsl(0deg 0% 2% / 0.36);`,
      lg: `0.3px 0.5px 0.7px hsl(0deg 0% 2% / 0.34),
    1.5px 2.9px 3.7px -0.4px hsl(0deg 0% 2% / 0.34),
    2.7px 5.4px 6.8px -0.7px hsl(0deg 0% 2% / 0.34),
    4.5px 8.9px 11.2px -1.1px hsl(0deg 0% 2% / 0.34),
    7.1px 14.3px 18px -1.4px hsl(0deg 0% 2% / 0.34),
    11.2px 22.3px 28.1px -1.8px hsl(0deg 0% 2% / 0.34),
    17px 33.9px 42.7px -2.1px hsl(0deg 0% 2% / 0.34),
    25px 50px 62.9px -2.5px hsl(0deg 0% 2% / 0.34);`,
    },
  },
  plugins: [],
}

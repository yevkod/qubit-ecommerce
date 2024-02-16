// @ts-nocheck
/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'ui-sans-serif', 'system-ui', '-apple-system'],
      },
      backgroundImage: {
        'demo': "url('/src/assets/img/book-bg.png')",
        'main': "url('/src/assets/img/bg-main.png')",
      }
    },
  },
  plugins: [],
}
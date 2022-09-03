const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
    fontFamily: {
      body: '"Roboto", sans-serif',
      display: '"Rubik", serif',
      mono: '"Source Code Pro", monospace',
    },
    colors: {
      transparent: colors.transparent,
      white: colors.white,
      black: colors.black,
      background: '#13111c',
      blue: {
        1: '#81b8d9',
        2: '#62a6d0',
        3: '#4394c7',
        4: '#347ead',
        5: '#2a678d',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

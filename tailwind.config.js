/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#fbf5ff',
          '100': '#f3e0ff',
          '200': '#e9c7ff',
          '300': '#d89eff',
          '400': '#c261ff',
          '500': '#ad29ff',
          '600': '#9f0fff',
          '700': '#7b0cc0',
          '800': '#5e0e90',
          '900': '#470c6a',
          '950': '#26003d',
        },
        secondary: {
          '50': '#fffaeb',
          '100': '#fff4cc',
          '200': '#ffe799',
          '300': '#ffd35c',
          '400': '#ffb41f',
          '500': '#f09800',
          '600': '#e07b00',
          '700': '#a85400',
          '800': '#853c00',
          '900': '#612d00',
          '950': '#1a0b00',
        },
        tertiary: colors.neutral,
        success: colors.lime,
        danger: colors.red,
        info: colors.amber,
      }
    },
  },
  plugins: [],
}

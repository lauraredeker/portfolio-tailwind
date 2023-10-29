// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  prefix: 'tw-',
  content: ['./index.html', './src/**/*.vue', './src/**/*.ts'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        indigo: colors.indigo,
        blue: '#110dff',
        beige: '#F7F7F1',
        purple: '#fa0b7b',
        orange: '#ffc400',
        green: '#00de9c',
        yellow: '#ffc82c',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    }, 
    fontFamily: {
      sans: ['Roboto Mono', ...defaultTheme.fontFamily.sans],
      serif: ['Bungee Shade', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
  ],
}

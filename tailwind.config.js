// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  prefix: 'tw-', // add this as a prefix to all tailwind classes
  content: ['./index.html', './src/**/*.vue', './src/**/*.ts'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        gray: colors.gray,
        white: colors.white,
        emerald: colors.emerald,
        indigo: colors.indigo,
        red: colors.red,
        green: colors.green,
        beige: '#F7F7F1',
        'blue': {
          DEFAULT: '#110DFF',
          50: '#C6C5FF',
          100: '#B2B0FF',
          200: '#8987FF',
          300: '#615FFF',
          400: '#3936FF',
          500: '#110DFF',
          600: '#0400D4',
          700: '#03009C',
          800: '#020064',
          900: '#01002C',
          950: '#000010',
        },
        'purple': {
          DEFAULT: '#FA0B7B',
          50: '#FEBFDC',
          100: '#FDABD2',
          200: '#FC83BC',
          300: '#FC5BA6',
          400: '#FB3391',
          500: '#FA0B7B',
          600: '#C90460',
          700: '#920346',
          800: '#5B022C',
          900: '#240111',
          950: '#080004',
        },
        'amber': {
          DEFAULT: '#FFC400',
          50: '#FFEEB8',
          100: '#FFEAA3',
          200: '#FFE07A',
          300: '#FFD752',
          400: '#FFCD29',
          500: '#FFC400',
          600: '#C79900',
          700: '#8F6E00',
          800: '#574300',
          900: '#1F1800',
          950: '#030200',
        },
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

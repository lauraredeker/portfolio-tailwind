// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  prefix: 'tw-', // add this as a prefix to all tailwind classes
  content: ['./index.html', './src/**/*.vue', './src/**/*.ts'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 200s linear infinite',
      },
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
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.5rem',
      '2xl': ['1.875rem', {
      }],
      '3xl': ['2.25rem', {
      }],
      '5xl': ['3rem', {
        lineHeight: '3.25rem',
      }],
      '6xl': ['4.5rem', {
        lineHeight: '4.75rem',
      }],
      '7xl': ['6rem', {
        lineHeight: '0.9',
      }],
      '8xl': ['8rem', {
        lineHeight: '0.9',
      }],
      '9xl': ['9.875rem', {
        lineHeight: '0.9',
      }],
    },
    fontFamily: {
      sans: ['Roboto Mono', ...defaultTheme.fontFamily.sans],
      display: ['Bungee Shade', ...defaultTheme.fontFamily.sans],
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
  ],
}

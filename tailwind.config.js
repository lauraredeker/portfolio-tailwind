// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const { iconsPlugin, getIconCollections } = require('@egoist/tailwindcss-icons')

module.exports = {
  plugins: [
    require('@tailwindcss/typography'),
    // require('@tailwindcss/forms'),
    iconsPlugin({
      collections: getIconCollections(['ph']),
    })
  ],
  darkMode: 'class',
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
        indigo: colors.indigo,
        red: colors.red,
        beige: '#fffefa',
        'blue': {
          '50': '#f3f1ff',
          '100': '#eae5ff',
          '200': '#d7cfff',
          '300': '#b9a9ff',
          '400': '#9878ff',
          '500': '#7942ff',
          '600': '#6b1bff',
          '700': '#5c0af7',
          '800': '#4d07d0',
          '900': '#36078d',
          '950': '#250174',
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
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
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
      sm: '.875rem',
      base: '1rem',
      l: '1.25rem',
      xl: '1.5rem',
      '2xl': ['1.875rem', {
      }],
      '3xl': ['2.25rem', {
      }],
      '4xl': ['2.875rem', {
      }],
      '5xl': ['3.25rem', {
        lineHeight: '3.25rem',
      }],
      '6xl': ['4.5rem', {
        lineHeight: '4.75rem',
      }],
      '7xl': ['6rem', {
        lineHeight: '1',
      }],
      '8xl': ['8rem', {
        lineHeight: '1',
      }],
      '9xl': ['9.875rem', {
        lineHeight: '1',
      }],
    },
    fontFamily: {
      sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      display: ['Bungee Shade', ...defaultTheme.fontFamily.sans],
    },
    container: {
      padding: {
        DEFAULT: '1.8rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
}

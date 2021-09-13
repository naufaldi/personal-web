/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        service: ' 0px 6px 26px rgba(0, 0, 0, 0.05)',
        qualification: '0px 8px 24px rgba(0, 0, 0, 0.04)',
      },
      fontFamily: {
        primary: ['DM Sans', ...fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: '#793AFF',
          400: '#00E0F3',
          500: '#00c4fd',
        },
        plum: {
          500: '#8A2387',
        },
        amaranth: {
          DEFAULT: '#E94057',
          50: '#FFFFFF',
          100: '#FEF7F8',
          200: '#F9C9D0',
          300: '#F49BA7',
          400: '#EE6E7F',
          500: '#E94057',
          600: '#DD1934',
          700: '#AF1429',
          800: '#810F1E',
          900: '#530A14',
        },
        tango: {
          DEFAULT: '#F27121',
          50: '#FFFCFA',
          100: '#FDECE2',
          200: '#FACDB2',
          300: '#F8AF81',
          400: '#F59051',
          500: '#F27121',
          600: '#D4590C',
          700: '#A3440A',
          800: '#733007',
          900: '#431C04',
        },
        orange: {
          DEFAULT: '#ED8670',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FEF9F8',
          300: '#F8D3CB',
          400: '#F3AC9D',
          500: '#ED8670',
          600: '#E76043',
          700: '#DB3D1C',
          800: '#AE3116',
          900: '#812410',
        },
        gradient: {
          pink: '#FF0D6A',
          blue: '#0500FF',
          ocean: '#00FFE0',
        },
        dark: '#222222',
        black: '#110A21',
        gray: {
          100: '#96A0B5',
        },
      },

      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: 0.99,
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: 0.4,
            filter: 'none',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};

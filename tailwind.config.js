/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#172B4D",
        accent: "#E2B203",
        'darkPeach': '#BA9B88',
        'textColor': '#2F2F2F',
        'lightGray': '#EDEEF2',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
        },
        screens: {
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
          '2xl': '1536px',
          '3xl': '1600px'
        } 
      }
    },
    fontFamily: {
      'poppins': ["Poppins", "serif"],
      'display': ["Oswald", "serif"],
    },

    fontSize: {
      xs: '0.7rem',
      sm: '0.8rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.5rem',
      '2xl': '1.938rem',
      '3xl': '2.438rem',
      '4xl': '3rem',
      '5xl': '3.875rem',
      '6xl': '4rem',
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
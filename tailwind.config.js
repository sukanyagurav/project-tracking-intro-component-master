/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    screens: {
      sm: '30em',
      md: '50em',
      lg: '63.25em',
      xl: '90em',
    },
    extend: {
      colors: {
        darkBlue: 'hsl(230, 29%, 20%)',
        darkGrayishBlue: 'hsl(230, 11%, 40%)',
        grayishBlue: 'hsl(231, 7%, 65%)',
        lightGrayishBlue: 'hsl(207, 33%, 95%)',
        red: 'hsl(0, 100%, 68%)'
      },
      fontFamily: {
        sans: ['Barlow Condensed', 'sans-serif'],
        barlow: ['Barlow']
      },
      letterSpacing: {
        widest: '0.3em',

      }
    },

  },
  plugins: [],
}


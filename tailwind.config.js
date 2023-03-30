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

      },
      keyframes:{
        'grow':{
          '0%':{
            opacity: 0,
            transform: 'scale(0)'
          },
          '100%':{
            opacity: 1,
            transform: 'scale(1)'
          }
        }
      },
      animation:{
        grow: 'grow 2s ease-in',
      }
    },

  },
  plugins: [],
  
}


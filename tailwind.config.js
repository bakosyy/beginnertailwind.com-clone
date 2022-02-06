const colors = require('tailwindcss/colors')

module.exports = {
  purge: ["./index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      lineClamp: {
        7: '7',
        8: '8',
        9: '9',
        10: '10',
      },
      colors: {
        orange: colors.orange,
        teal: colors.teal,
        sky: colors.sky,
        'fake-red': '#ff0000',
      },
      fontFamily: {
        fun: ['Varela Round', 'sans-serif',]
      },
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/*.html"],
  theme: {
    extend: {

      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'mdpr': '#f0e9db',

      },
      fontFamily: {
        sarabun: ['Sarabun'],
        ipmsanthai: ['IBM Plex Sans Thai']
      },

    },
  },
  plugins: [],
}

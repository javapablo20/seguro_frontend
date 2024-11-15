/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#141517',
        'blue': '#3C37FF',
        'gray': '#717784'
      },
      backgroundColor: {
        'infobg': '#F2F4F8'
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}


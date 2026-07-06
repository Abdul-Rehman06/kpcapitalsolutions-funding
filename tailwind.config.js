/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0B132B',
          800: '#142144',
          700: '#1e3061',
        },
        gold: {
          500: '#C59D5F',
          400: '#d9b37a',
          600: '#a37f47',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

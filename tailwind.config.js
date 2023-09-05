import data from './src/data.json'
/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html",
    "./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#070724",
        divcolor: data.color
      },
      fontFamily: {
        sans: ['League Spartan', 'sans-serif'],
        serif: ['Antonio', 'sans-serif']
      }
    },
  },
  plugins: [],
}


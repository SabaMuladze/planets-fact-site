/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html",
    "./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#070724",
      },
      fontFamily: {
        sans: ['League Spartan', 'sans-serif'],
        serif: ['Antonio', 'sans-serif']
      }
    },
  },
  plugins: [],
}


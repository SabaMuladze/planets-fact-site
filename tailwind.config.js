/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html",
    "./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#070724",
      },
      fonts: {
        spartan: 'League Spartan',
        antonio: 'Antonio'
      }
    },
  },
  plugins: [],
}


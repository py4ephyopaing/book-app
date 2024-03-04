/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'mukta': ['Mukta', 'cursive', 'sans-serif'],
      'josefin': ['Josefin Sans', 'cursive', 'sans-serif'],
      'dosis': ['Dosis', 'cursive', 'sans-serif'],
      'nunito': ['Nunito', 'cursive', 'sans-serif'],
    }
  },
  plugins: [],
}
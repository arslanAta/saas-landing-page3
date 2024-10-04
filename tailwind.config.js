/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '3-fixed': 'repeat(3, 390px)',
      },
      colors:{
        primary:"#1361F5",
        text:"#223140"
      }
    },
    container:{
      center:true
    }
  },
  plugins: [],
}
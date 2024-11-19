/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily:{
        nunito:["Nunito", "sans-serif"]
      },
      screens:{
        "sm":"480px"
      },
      spacing:{
        "big":"36rem"
      }
    },
  },
  plugins: [],
}


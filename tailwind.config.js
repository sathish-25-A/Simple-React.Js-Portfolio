/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {},
    fontFamily :{
      'google-font':'Honk'
    } 
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}


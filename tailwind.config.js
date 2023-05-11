/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend:{
      colors: {
        purpely: '#4e54c8', 
        lightPurpely: '#E6E7FC',
        darkPurpely: '#1A1F78'
      },
      boxShadow: {
        'block': '2px 3px 0px #000000',
        'block-xl': '3px 4px 0px #000000'
      }
    }
  },

  plugins: [],
}


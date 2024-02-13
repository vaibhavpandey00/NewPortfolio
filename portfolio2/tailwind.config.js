/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#F6F1F1',
      'secondary': '#06223F',
      'ternary': '#2d4155'
    },
    extend: {},
    fontFamily: {
      logo: ["Great Vibes"]
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
    function ({ addUtilities }) {
      const newUtilities = {
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none'
        }
      };
      addUtilities(newUtilities);
    }
  ],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'xmas': {
          spruce: '#113D00',
          green: '#58B424',
          tree: '#474B41',
          green2: '#4D5D45',
          green3: '#667256',
          darkerred: '#7A231D',
          lighterred: '#B43B2B'
        },
        'xmasgreen': { 
          100: '#53643F',
          200: '#455D3C',
          300: '#374B30',
          400: '#253D29',
          500: '#162418'
        }
      },
      fontFamily: {
        berkshire: "Berkshire Swash",
        codystar: "Codystar"
      }
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}


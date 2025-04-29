// tailwind.config.js
/** @type {import('tailwindcss').Config} */
const aspectRatio = require('@tailwindcss/aspect-ratio')
const lineClamp   = require('@tailwindcss/line-clamp')

module.exports = {
  content: [
    './components/**/*.{vue,js,ts,jsx,tsx}',
    './layouts/**/*.{vue,js,ts,jsx,tsx}',
    './pages/**/*.{vue,js,ts,jsx,tsx}',
    './composables/**/*.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        enaBlack:  '#000000',
        enaWhite:  '#FFFFFF',
        enaYellow: '#FFD600',
        enaBlue:   '#00BFFF',
        enaGreen:  '#00FF00',
        enaPurple: '#800080',
        enaRed:    '#FF0000',
      },
      fontFamily: {
        ena: ['Orbitron', 'sans-serif']
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      }
    }
  },
  plugins: [
    aspectRatio,
    lineClamp,
    // outros plugins...
  ]
}

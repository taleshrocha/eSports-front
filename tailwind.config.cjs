/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        galaxy: "url('/background-galaxy.svg')",
        'nlw-gradient': 'linear-gradient(45deg, #9572FC 20%, #43E7AD 65%, #E1D55D 15%)',
        'game-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 65%)',
      },
    },
  },
  plugins: [],
}

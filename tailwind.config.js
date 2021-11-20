module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "dark-pink": "url('img/photo-dark-pink-unsplash.jpg')"
      },
      fontFamily: {
        'display': ['Comforter Brush'],
        'tech': ['IBM Plex Mono']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}

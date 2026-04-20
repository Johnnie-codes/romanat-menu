/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        brand: {
          bg: '#FAF7F2',
          card: '#FFFFFF',
          gold: '#C49A6C',
          'gold-light': '#D4A574',
          'gold-dark': '#A67C52',
          wine: '#722F37',
          'wine-light': '#8B3A3A',
          cream: '#F5EDE3',
          charcoal: '#2D2A26',
        },
      },
    },
  },
  plugins: [],
}

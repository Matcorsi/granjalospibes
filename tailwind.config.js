
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#2D5016',
          light: '#3E6B22',
          dark: '#1F3A0F',
        },
        bark: {
          DEFAULT: '#5D4037',
          light: '#795548',
          dark: '#3E2723',
        },
        sunset: {
          DEFAULT: '#D2691E',
          light: '#E68A45',
        },
        cream: {
          DEFAULT: '#FDF8F0',
          dark: '#F5E6D3',
        },
        earth: {
          DEFAULT: '#2B2B2B',
          light: '#4E342E',
        },
      },
      fontFamily: {
        // serif: ['Bebas Neue', 'sans-serif'],
        // serif: ['"Playfair Display"', 'serif'],
        serif: ['Anton SC', 'sans-serif'],
        sans: ['system-ui', 'sans-serif'],
        font: ['Bebas Neue', 'sans-serif'],
      },
      backgroundImage: {
        'nature-gradient': 'linear-gradient(to bottom, #2D5016, #1F3A0F)',
      }
    },
  },
  plugins: [],
}

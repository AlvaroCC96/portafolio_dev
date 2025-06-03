/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#4A4A4A',    // Dark gray
        secondary: '#1A1A1A',  // Very dark gray
        accent: '#2D2D2D',     // Medium dark gray
      }
    },
  },
  plugins: [],
};
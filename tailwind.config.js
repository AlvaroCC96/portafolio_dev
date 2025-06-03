/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#404040',    // Medium gray
        secondary: '#1a1a1a',  // Dark gray/almost black
        accent: '#666666',     // Light-medium gray
      }
    },
  },
  plugins: [],
};
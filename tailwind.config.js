/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#00ff00',    // Matrix green
        secondary: '#000000',  // Pure black
        accent: '#008000',     // Darker green
      }
    },
  },
  plugins: [],
};
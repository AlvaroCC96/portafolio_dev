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
        secondary: '#0a0a0a',  // Almost black
        accent: '#1a1a1a',     // Dark gray
      }
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#FF6B2B',    // Charizard's vibrant orange flame
        secondary: '#1A237E',  // Deep blue for contrast
        accent: '#D84315',     // Darker orange-red for wing highlights
      }
    },
  },
  plugins: [],
};
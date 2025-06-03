/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: 'rgb(47, 50, 63)',
        secondary: 'rgb(100, 100, 124)',
        accent: 'rgb(196, 159, 59)',
      }
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: 'rgb(227, 175, 139)',
        secondary: 'rgb(54, 42, 28)',
        accent: 'rgb(196, 84, 92)',
      }
    },
  },
  plugins: [],
};
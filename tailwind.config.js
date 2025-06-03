/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: 'rgb(40, 80, 70)',
        secondary: 'rgb(220, 142, 87)',
        accent: 'rgb(52, 196, 164)',
      }
    },
  },
  plugins: [],
};
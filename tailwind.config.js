/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: 'rgb(73, 61, 56)',
        secondary: 'rgb(221, 177, 102)',
        accent: 'rgb(148, 148, 164)',
      }
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 12s linear infinite',
      },
      fontFamily: {
        Ubuntu: [ 'Ubuntu', "sans-serif"]
      }
    },
  },
  plugins: [],
}
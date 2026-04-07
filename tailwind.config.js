/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'huda-green': '#16a34a',
        'huda-yellow': '#facc15',
        'huda-dark': '#064e3b'
      }
    },
  },
  plugins: [],
}
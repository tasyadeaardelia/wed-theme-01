/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./layouts/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          galada: ['var(--font-galada)'],
          nunito: ['var(--font-nunito)'],
          inter: ['var(--font-inter)'],
        },
      },
    },
    plugins: [],
  }
  
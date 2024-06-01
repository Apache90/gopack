/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '50': '12rem',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
      animation: {
        'move': 'move 15s linear infinite',
      },
      keyframes: {
        move: {
          '0%': { transform: 'translateX(-20%)' },
          '100%': { transform: 'translateX(150%)' },
        },
      },
    },
  },
  plugins: [],
}

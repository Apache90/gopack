/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '1': '8px',
        '2': '16px',
        '3': '60px',
      },
      height: {
        '2': '10rem',
        '3': '10.5rem',
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
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(120%)' },
        },
      },
      screens: {
        'sm': '360px',
        'md': '640px',
        'lg': '1240px',
        'xl': '1300px',
        '2xl': '1920px',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        josefin: ['Josefin Slab'],
        quicksand: ['Quicksand'],
      },
      height: {
        '128': '32rem',
        '150': '38rem',
      },
    },
  },
  plugins: [],
}


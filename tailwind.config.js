/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "froggy-green": "#009688",
        "froggy-green-dark": "#00786c",
      },
    },
  },
  plugins: [],
};

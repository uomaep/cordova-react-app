/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx, ts, tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mplus: ["'M PLUS Rounded 1c'", "Verdana", "sans-serif"],
      },
    },
  },
  plugins: [],
};


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,tsx,jsx}"],
  theme: {
    extend: {
      fontSize: {
        "10xl": "102px",
      },
      fontFamily: {
        mono: "Popins",
      },
    },
  },
  plugins: [],
};
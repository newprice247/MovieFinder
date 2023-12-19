/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        // Sets the custom breakpoints for the project
        xxs: "320px",
        xs: "375px",
        sm: "412px"
      },
      colors: {
        // Sets the custom colors for the project
        myColor: {
          1: "#264653",
          2: "#2a9d8f",
          3: "#e9c46a",
          4: "#f4a261",
          5: "#e76f51",
          black: "#000000",
        },
      },
    },
  },
  darkMode: 'class',
});
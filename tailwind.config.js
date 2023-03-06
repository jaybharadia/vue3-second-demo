/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

console.log("colors-->", colors);
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

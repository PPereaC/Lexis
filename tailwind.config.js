const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
        'sm': '510px',
        'md': '767px',
        'lg': '990px',
        'xl': '1280px',
        '2xl': '1920px',
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
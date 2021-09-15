const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: "hsl(220, 98%, 61%)",
          "very-dark-blue": "hsl(235, 21%, 11%)",
          "very-dark-desaturated-blue": "hsl(235, 24%, 19%)",
          "very-dark-desaturated-blue-hover": "hsl(235, 24%, 15%)",
          "light-gray-blue": "hsl(234, 39%, 85%)",
          "light-gray-blue-hover": "hsl(236, 33%, 92%)",
          "very-dark-gray-blue": "hsl(233, 14%, 35%)",
          "very-dark-gray-blue-2": "hsl(237, 14%, 26%)",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

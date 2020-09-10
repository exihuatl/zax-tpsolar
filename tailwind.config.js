const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    container: {
      center: true,
    },
    colors: {
      ...colors,
      primary: {
        100: "#1F3F68",
        200: "#316099",
        300: "#356EAD",
        400: "#5A98D0",
        500: "#98C3E8",
      },
    },
    extend: {},
  },
  variants: {},
  plugins: [],
};

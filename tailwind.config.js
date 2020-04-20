const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    container: {
      center: true,
    },
    colors: {
      ...colors,
      primary: colors.indigo,
    },
    extend: {},
  },
  variants: {},
  plugins: [],
};

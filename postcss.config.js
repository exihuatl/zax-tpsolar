const production = process.env.NODE_ENV === "production";
const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    require("postcss-import")(),
    require("tailwindcss"),
    require("autoprefixer"),
    production && require("cssnano"),
    // Only purge css on production
    production &&
      purgecss({
        content: ["./**/*.html", "./**/*.svelte"],
        defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
      }),
  ],
};

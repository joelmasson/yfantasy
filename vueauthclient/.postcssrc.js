var tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    require('postcss-import'),
    require("tailwindcss")(),
    require("autoprefixer")()
  ]
}
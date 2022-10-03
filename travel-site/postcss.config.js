module.exports = {
    plugins: [
    require("postcss-import"),
    require("postcss-mixins"),
    require("postcss-preset-env"),
    require("postcss-nested"),
    require("postcss-simple-vars"),
    require("autoprefixer"),
    require("postcss-hexrgba"),
    require('cssnano')({preset: 'default' }),
  ],
};
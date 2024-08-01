const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

// Minification: CSS
module.exports = {
  minimizer: [
    "...", // Default minimizers
    new CssMinimizerPlugin(),
  ],
};

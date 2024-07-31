const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: { home: "./src/js/home.js" },
  mode: "production", // development or production
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.min.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin({ filename: "[name].bundle.min.css" })],
};

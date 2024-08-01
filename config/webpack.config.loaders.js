const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// babel-loader, mini-css-extract-plugin and css-loader
// assets-resource and html-loader

module.exports = {
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
    {
      test: /\.svg$/,
      type: "asset/resource",
      generator: {
        filename: "assets/icons/[name][ext]",
      },
    },
    {
      test: /\.html$/,
      use: [
        {
          loader: "html-loader",
          options: {
            sources: {
              list: [
                {
                  tag: "img",
                  attribute: "src",
                  type: "src",
                },
                {
                  tag: "img",
                  attribute: "srcset",
                  type: "srcset",
                },
                {
                  tag: "use",
                  attribute: "xlink:href",
                  type: "src",
                },
              ],
            },
            minimize: false,
          },
        },
      ],
    },
  ],
}
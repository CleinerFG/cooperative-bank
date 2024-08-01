const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const pages = [
  { dir: "", files: ["index"] },
  {
    dir: "wallet",
    files: ["debtors"],
  },
];

function createHtmlPlugins({ pages }) {
  return pages.flatMap(({ dir, files }) =>
    files.map(
      (file) =>
        new HtmlWebpackPlugin({
          template: `./src/pages/${dir}/${file}.html`,
          filename: `${file}.html`,
          minify: {
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true,
          },
        })
    )
  );
}

module.exports = {
  // Webpack base configs
  entry: { home: "./src/js/home.js", debtors: "./src/js/debtors.js" },
  mode: "production", // development or production
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.min.js",
  },
  // Loaders: babel-loader and mini-css-extract-plugin
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
              minimize: true,
            },
          },
        ],
      },
    ],
  },
  // Minification: CSS
  optimization: {
    minimizer: [
      "...", // Default minimizers
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].bundle.min.css" }),
    ...createHtmlPlugins({ pages }),
  ],
};

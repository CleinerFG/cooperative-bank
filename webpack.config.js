const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const pages = [
  { dir: "", files: ["home"] },
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
          filename: `pages/${dir}/${file}.html`,
          chunks: [file], // Only add CSS and JS that name is equal file
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
    filename: "js/[name].bundle.min.js",
    clean: true,
  },
  // Loaders: babel-loader, mini-css-extract-plugin and css-loader
  // assets-resource and html-loader
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
              minimize: false,
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
    new MiniCssExtractPlugin({ filename: "css/[name].bundle.min.css" }),
    ...createHtmlPlugins({ pages }),
  ],
};

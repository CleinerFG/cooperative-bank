const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const pages = [
  { dir: "", files: ["home"] },
  {
    dir: "wallet",
    files: ["debtors"],
  },
];

// Return a array of the HtmlWebpackPlugin objects
function createHtmlPlugins(pages) {
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

 // HtmlWebpackPlugin: generate HTML files with updated links to CSS and JS.
// MiniCssExtractPlugin: extract CSS into separate files from JavaScript.
module.exports = [
  new MiniCssExtractPlugin({ filename: "css/[name].bundle.min.css" }),
  ...createHtmlPlugins(pages),
];

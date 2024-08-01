const webpackEntry = require("./config/webpack.config.entry");
const webpackOutput = require("./config/webpack.config.output");
const webpackLoaders = require("./config/webpack.config.loaders");
const webpackOptimization = require("./config/webpack.config.optimization");
const webpackPlugins = require("./config/webpack.config.plugins");

module.exports = {
  entry: webpackEntry,
  mode: "production", // development or production
  output: webpackOutput,
  module: webpackLoaders,
  optimization: webpackOptimization,
  plugins: webpackPlugins,
};

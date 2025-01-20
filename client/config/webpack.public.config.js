const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, '../src/public/js/index.js'),

  output: {
    path: path.resolve(__dirname, '../dist/public'),
    filename: 'static/js/[name].[contenthash].js',
    chunkFilename: 'static/js/[name].[contenthash].js',
    publicPath: '/public/',
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    minimize: true,
    usedExports: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/public/index.html'),
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../src/public/css'),
          to: path.resolve(__dirname, '../dist/public/static/css'),
        },
        {
          from: path.resolve(__dirname, '../src/public/assets'),
          to: path.resolve(__dirname, '../dist/public/static/assets'),
        },
      ],
    }),
  ],
  resolve: {
    extensions: ['.js'],
  },
};

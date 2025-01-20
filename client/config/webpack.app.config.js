const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, '../src/app/js/index.js'),

  output: {
    path: path.resolve(__dirname, '../dist/app'),
    filename: 'static/js/[name].[contenthash].js',
    chunkFilename: 'static/js/[name].[contenthash].js',
    publicPath: '/app/',
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
      template: path.resolve(__dirname, '../src/app/index.html'),
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../src/app/css'),
          to: path.resolve(__dirname, '../dist/app/static/css'),
        },
        {
          from: path.resolve(__dirname, '../src/app/assets'),
          to: path.resolve(__dirname, '../dist/app/static/assets'),
        },
      ],
    }),
  ],
  resolve: {
    extensions: ['.js'],
  },
};

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

/**
 * @param {'app'|'public'} spaType
 */
module.exports = (spaType) => {
  return {
    mode: 'production',
    entry: path.resolve(__dirname, `../src/${spaType}/js/index.js`),
    output: {
      path: path.resolve(__dirname, `../dist/${spaType}`),
      filename: 'static/js/[name].[contenthash].js',
      chunkFilename: 'static/js/[name].[contenthash].js',
      publicPath: `/${spaType}/`,
      clean: true,
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            mangle: true,
            compress: true,
          },
        }),
        new CssMinimizerPlugin(),
      ],
      usedExports: true,
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
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
        template: path.resolve(__dirname, `../src/${spaType}/index.html`),
        filename: 'index.html',
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, `../src/${spaType}/css`),
            to: path.resolve(__dirname, `../dist/${spaType}/static/css`),
          },
          {
            from: path.resolve(__dirname, `../src/${spaType}/assets`),
            to: path.resolve(__dirname, `../dist/${spaType}/static/assets`),
          },
        ],
      }),
      new MiniCssExtractPlugin({
        filename: 'static/css/[name].[contenthash].css',
        chunkFilename: 'static/css/[name].[contenthash].css',
      }),
    ],
    resolve: {
      extensions: ['.js'],
    },
  };
};

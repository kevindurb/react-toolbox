const merge = require('webpack-merge');
const base = require('./webpack.config.base.js');

const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

module.exports = (paths) => {
  const port = require('../utils/devServerPort')();
  const url = `http://localhost:${port}/`;

  return merge(base(paths), {
    entry: [
      'webpack-dev-server/client',
      'babel-polyfill',
      './index.js'
    ],
    output: {
      filename: '[name].[hash].js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: paths.indexTemplate,
        inject: true,
      }),
      new Dotenv(),
      new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Project running at ${url}`],
        },
        clearConsole: true,
      }),
      new webpack.HotModuleReplacementPlugin(),
    ],
    devtool: 'inline-source-map',
    devServer: {
      contentBase: paths.dist,
      overlay: true,
      quiet: true,
    },
  });
};

const merge = require('webpack-merge');
const base = require('./webpack.config.base.js');

const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

module.exports = (paths) => {
  const port = require('../utils/devServerPort')();
  const url = `http://0.0.0.0:${port}/`;

  return merge(base(paths), {
    output: {
      filename: '[name].[hash].js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: paths.indexTemplate,
        chunks: ['main'],
      }),
      new Dotenv(),
      new webpack.HotModuleReplacementPlugin(),
      new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Project running at ${url}`],
        },
        clearConsole: true,
      }),
    ],
    devServer: {
      quiet: true,
      compress: true,
      contentBase: paths.dist,
      historyApiFallback: true,
      host: '0.0.0.0',
      hot: true,
      open: false,
      openPage: 'demo',
      overlay: true,
    },
  });
};

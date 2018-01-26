const path = require('path');
const merge = require('webpack-merge');
const base = require('./webpack.config.base.js');

const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = merge(base, {
  plugins: [
    new Dotenv(),
    new webpack.HotModuleReplacementPlugin(),
    new WebpackNotifierPlugin({ alwaysNotify: true }),
  ],
  devServer: {
    compress: true,
    contentBase: path.join(__dirname, './dist'),
    historyApiFallback: true,
    host: '0.0.0.0',
    hot: true,
    open: false,
    openPage: 'demo',
    overlay: true,
  },
});

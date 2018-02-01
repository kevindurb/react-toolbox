const path = require('path');
const merge = require('webpack-merge');
const base = require('./webpack.config.base.js');

const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');

module.exports = (projectDir, baseDir, config) => (
  merge(base(projectDir, baseDir, config), {
    plugins: [
      new Dotenv(),
      new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
      quiet: true,
      compress: true,
      contentBase: path.join(projectDir, './dist'),
      historyApiFallback: true,
      host: '0.0.0.0',
      hot: true,
      open: false,
      openPage: 'demo',
      overlay: true,
    },
  })
);

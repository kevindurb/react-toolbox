const path = require('path');
const merge = require('webpack-merge');
const base = require('./webpack.config.base.js');

const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

module.exports = (paths) => (
  merge(base(paths), {
    output: {
      filename: '[name].[hash].js',
    },
    plugins: [
      // new webpack.optimize.CommonsChunkPlugin({
      //   name: 'manifest',
      // }),
      new StaticSiteGeneratorPlugin({
        crawl: true,
      }),
      new webpack.HashedModuleIdsPlugin(),
      new UglifyJSPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: ['Successfully built to ./dist !'],
        },
        clearConsole: false,
      }),
    ],
  })
);

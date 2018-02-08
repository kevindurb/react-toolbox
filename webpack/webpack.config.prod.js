const path = require('path');
const merge = require('webpack-merge');
const base = require('./webpack.config.base.js');

const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

module.exports = (paths) => {
  const projectPackage = require(paths.projectPackage);

  return merge(base(paths), {
    output: {
      filename: '[name].[hash].js',
    },
    plugins: [
      new SWPrecacheWebpackPlugin({ cacheId: projectPackage.name }),
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
  });
};

const path = require('path');
const merge = require('webpack-merge');
const base = require('./webpack.config.base.js');

const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

const redirectsFilePath = path.resolve(__dirname, './src/_redirects');

module.exports = merge(base, {
  plugins: [
    new CopyWebpackPlugin([{ from: redirectsFilePath }]),
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.API_BASE': JSON.stringify(process.env.API_BASE),
    }),
    new SWPrecacheWebpackPlugin({
      cacheId: 'prayerloft',
      staticFileGlobsIgnorePatterns: [/_redirects/],
    }),
  ],
});

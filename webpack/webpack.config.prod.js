const path = require('path');
const merge = require('webpack-merge');
const base = require('./webpack.config.base.js');

const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

module.exports = (projectDir, baseDir, config) => (
  merge(base(projectDir, baseDir, config), {
    plugins: [
      new StaticSiteGeneratorPlugin({
        crawl: true,
      }),
      new UglifyJSPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),
        'process.env.API_BASE': JSON.stringify(process.env.API_BASE),
      }),
    ],
  })
);

const path = require('path');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (projectDir, baseDir, config) => ({
  context: path.resolve(projectDir, './'),
  entry: {
    main: ['babel-polyfill', './index.js'],
  },
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(projectDir, './dist'),
    publicPath: '/',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.ejs$/,
        loader: 'ejs-compiled-loader',
      },
      {
        test: /\.js(x?)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'env',
              'stage-0',
              'react'
            ],
          }
        },
      },
    ],
  },
  plugins: [
    new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: config.messages,
      },
      clearConsole: config.clearConsole,
    }),
    new CopyWebpackPlugin([
      { from: path.join(projectDir, './public'), to: path.join(projectDir, './dist') },
    ]),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.join(baseDir, './node_modules'),
      path.join(projectDir, './node_modules'),
    ],
  },
  resolveLoader: {
    modules: [
      path.join(baseDir, './node_modules'),
      path.join(projectDir, './node_modules'),
    ],
  },
  devtool: 'cheap-source-map',
});

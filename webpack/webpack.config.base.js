const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

module.exports = (projectDir, baseDir, config) => ({
  context: path.resolve(projectDir, './'),
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(projectDir, './dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        exclude: /(node_modules)/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: config.messages,
      },
      clearConsole: config.clearConsole,
    }),
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
    ],
  },
  devtool: 'cheap-source-map',
});

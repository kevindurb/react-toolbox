const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');

const indexTemplatePath = path.resolve(__dirname, './src/templates/index.ejs');

const htmlIndexConfig = {
  title: 'PRAYERLOFT',
  template: indexTemplatePath,
};

module.exports = {
  context: path.resolve(__dirname, './'),
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /(node_modules)/,
        use: ['awesome-typescript-loader'],
      },
      {
        test: /\.js(x?)$/,
        exclude: /(node_modules)/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin(htmlIndexConfig), new CheckerPlugin()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  devtool: 'cheap-source-map',
};

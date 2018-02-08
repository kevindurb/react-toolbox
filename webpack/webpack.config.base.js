const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = (paths) => ({
  context: paths.project,
  entry: {
    main: ['babel-polyfill', './index.js'],
  },
  output: {
    path: paths.dist,
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
        exclude: /node_modules\/(?!(@kevindurb\/react-toolbox))/,
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
    new CleanWebpackPlugin(
      ['./dist'],
      { root: paths.project }
    ),
    new CopyWebpackPlugin([
      { from: paths.public, to: paths.dist },
    ]),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      paths.toolboxNodeModules,
      paths.projectNodeModules,
    ],
  },
  resolveLoader: {
    modules: [
      paths.toolboxNodeModules,
      paths.projectNodeModules,
    ],
  },
  devtool: 'cheap-source-map',
});

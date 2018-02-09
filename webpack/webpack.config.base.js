const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (paths) => ({
  context: paths.project,
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

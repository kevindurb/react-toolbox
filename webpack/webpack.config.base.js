const fs = require('fs');
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
        test: /\.(svg|png|jpg|gif|eot|woff|woff2|ttf)$/,
        use: 'file-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
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
      fs.existsSync(paths.public) ? { from: paths.public, to: paths.dist } : null,
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

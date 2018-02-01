const path = require('path');

module.exports = (projectDir, baseDir) => ({
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

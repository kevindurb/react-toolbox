module.exports = () => {
  const webpack = require('webpack');
  const WebpackDevServer = require('webpack-dev-server');
  const chalk = require('chalk');
  const makePaths = require('../utils/makePaths');
  const devConfig = require('../webpack/webpack.config.dev.js');
  const port = require('../utils/devServerPort')();

  const config = devConfig(makePaths());
  const compiler = webpack(config);
  const server = new WebpackDevServer(compiler, config.devServer);

  server.listen(port, () =>  {
    console.log(chalk.green(`Starting dev server on port ${port}`));
  });
};

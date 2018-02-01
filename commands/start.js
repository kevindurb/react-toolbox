module.exports = () => {
  const path = require('path');
  const webpack = require('webpack');
  const WebpackDevServer = require('webpack-dev-server');
  const chalk = require('chalk');


  const port = process.env.PORT || 8080;
  const projectDir = process.cwd();
  const baseDir = path.join(__dirname, '../');
  const config = {
    messages: [
      `Running at http://localhost:${port}/`,
    ],
    clearConsole: true,
  };
  const webpackConfig = require('../webpack/webpack.config.dev.js')(projectDir, baseDir, config);
  const compiler = webpack(webpackConfig);
  const server = new WebpackDevServer(compiler, webpackConfig.devServer);

  server.listen(port, () =>  {
    console.log(chalk.green(`Starting dev server on port ${port}`));
  });
};

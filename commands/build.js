const path = require('path');

module.exports = () => {
  const webpack = require('webpack');
  const chalk = require('chalk');

  console.log(chalk.green('Building for production...'));

  const config = {
    messages: ['Successfully built to ./dist !'],
    clearConsole: false,
  };
  const productionConfig = require('../webpack/webpack.config.prod.js');
  const projectDir = process.cwd();
  const baseDir = path.join(__dirname, '../');
  const compiler = webpack(productionConfig(projectDir, baseDir, config));

  compiler.run((err, stats) => {
    if (err || stats.hasErrors()) {
      console.log(
        stats.toString({
          colors: true,
        })
      );
      process.exit(1);
    }

    process.exit(0);
  });
};

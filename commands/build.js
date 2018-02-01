const path = require('path');

module.exports = () => {
  const webpack = require('webpack');
  const chalk = require('chalk');

  console.log(chalk.green('Building for production...'));

  const productionConfig = require('../webpack/webpack.config.prod.js');
  const projectDir = process.cwd();
  const baseDir = path.join(__dirname, '../');
  const compiler = webpack(productionConfig(projectDir, baseDir));

  compiler.run((err, stats) => {
    if (err || stats.hasErrors()) {
      console.log(stats.toString({ colors: true }));
      console.log(chalk.red('Something bad happened!!'));
      process.exit(1);
    }

    console.log(stats.toString({ colors: true }));
    console.log(chalk.green('All done!'));
    process.exit(0);
  });
};

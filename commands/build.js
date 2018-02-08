module.exports = () => {
  const webpack = require('webpack');
  const chalk = require('chalk');
  const makePaths = require('../utils/makePaths');
  const productionConfig = require('../webpack/webpack.config.prod.js');

  const paths = makePaths();
  const config = productionConfig(paths);
  const compiler = webpack(config);

  console.log(chalk.green(`Building for production into ${paths.dist}`));

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

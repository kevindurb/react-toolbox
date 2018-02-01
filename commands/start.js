module.exports = () => {
  const webpack = require('webpack');
  const { green } = require('chalk');

  const baseDir = process.cwd();
  console.log(green('Starting dev server...'));
};

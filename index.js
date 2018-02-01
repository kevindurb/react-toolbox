#! /usr/bin/env node

const app = require('commander');
const package = require('./package.json');

app
  .version(package.version)
  .usage('[command] <arguments>');

app
  .command('start')
  .description('start a dev server')
  .action(require('./commands/start'));

app
  .command('build')
  .description('build for production')
  .action(require('./commands/build'));

app.parse(process.argv);

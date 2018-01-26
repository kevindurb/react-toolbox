#! /usr/bin/env node

const app = require('commander');
const package = require('./package.json');

const startDevServer = require('./commands/devServer');

app
  .version(package.version)
  .usage('[command] <arguments>');

app
  .command('start')
  .description('start a dev server')
  .action(startDevServer);

app.parse(process.argv);

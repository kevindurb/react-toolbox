const path = require('path');
const findRoot = require('find-root');
const projectRoot = findRoot(process.cwd());
const toolboxRoot = path.join(__dirname, '../');

module.exports = () => ({
  project: projectRoot,
  dist: path.resolve(projectRoot, './dist'),
  public: path.resolve(projectRoot, './public'),
  projectNodeModules: path.resolve(projectRoot, './node_modules'),
  toolboxNodeModules: path.resolve(toolboxRoot, './node_modules'),
  indexTemplate: path.resolve(toolboxRoot, './templates/index.ejs'),
});

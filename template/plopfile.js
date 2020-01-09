const promptDirectory = require('inquirer-directory');

const addReduxModuleGenerator = require('./plop/reduxModule');
const addReactComponentGenerator = require('./plop/reactComponent');
const addReactContainerGenerator = require('./plop/reactContainer');
const addReactHookGenerator = require('./plop/reactHook');

module.exports = function(plop) {
  plop.setPrompt('directory', promptDirectory);

  addReduxModuleGenerator(plop);
  addReactComponentGenerator(plop);
  addReactContainerGenerator(plop);
  addReactHookGenerator(plop);
};

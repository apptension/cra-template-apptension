const path = require('path');

const templatesPath = path.join(__dirname, 'templates');

module.exports = (plop) => {
  const containerDirectory = 'src/{{ directory }}/{{ camelCase name }}';
  plop.setGenerator('component', {
    description: 'Generate a React component',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Name:',
    }, {
      type: 'directory',
      name: 'directory',
      basePath: 'src',
      message: 'Container\'s directory:',
    }],
    actions: [{
      type: 'add',
      path: `${containerDirectory}/index.js`,
      templateFile: path.join(templatesPath, 'index.hbs'),
    }, {
      type: 'add',
      path: `${containerDirectory}/{{ camelCase name }}.component.js`,
      templateFile: path.join(templatesPath, 'component.hbs'),
    }, {
      type: 'add',
      path: `${containerDirectory}/{{ camelCase name }}.styles.js`,
      templateFile: path.join(templatesPath, 'styles.hbs'),
    }, {
      type: 'add',
      path: `${containerDirectory}/{{ camelCase name }}.stories.js`,
      templateFile: path.join(templatesPath, 'stories.hbs'),
    }, {
      type: 'add',
      path: `${containerDirectory}/__tests__/{{ camelCase name }}.component.spec.js`,
      templateFile: path.join(templatesPath, '__tests__/component.spec.hbs'),
    }],
  });
};

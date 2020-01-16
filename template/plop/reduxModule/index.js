const path = require('path');

const templatesPath = path.join(__dirname, 'templates');

module.exports = (plop) => {
  plop.setGenerator('module', {
    description: 'Generate a Redux module',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Name:',
    }],
    actions: [{
      type: 'add',
      path: 'src/modules/{{ camelCase name }}/index.ts',
      templateFile: path.join(templatesPath, 'index.hbs'),
    }, {
      type: 'add',
      path: 'src/modules/{{ camelCase name }}/{{ camelCase name }}.actions.ts',
      templateFile: path.join(templatesPath, 'actions.hbs'),
    },{
      type: 'add',
      path: 'src/modules/{{ camelCase name }}/{{ camelCase name }}.redux.ts',
      templateFile: path.join(templatesPath, 'redux.hbs'),
    }, {
      type: 'add',
      path: 'src/modules/{{ camelCase name }}/{{ camelCase name }}.sagas.ts',
      templateFile: path.join(templatesPath, 'sagas.hbs'),
    }, {
      type: 'add',
      path: 'src/modules/{{ camelCase name }}/{{ camelCase name }}.selectors.ts',
      templateFile: path.join(templatesPath, 'selectors.hbs'),
    }, {
      type: 'add',
      path: 'src/modules/{{ camelCase name }}/__tests__/{{ camelCase name }}.redux.spec.ts',
      templateFile: path.join(templatesPath, '__tests__/redux.spec.hbs'),
    }, {
      type: 'add',
      path: 'src/modules/{{ camelCase name }}/__tests__/{{ camelCase name }}.sagas.spec.ts',
      templateFile: path.join(templatesPath, '__tests__/sagas.spec.hbs'),
    }, {
      type: 'add',
      path: 'src/modules/{{ camelCase name }}/__tests__/{{ camelCase name }}.selectors.spec.ts',
      templateFile: path.join(templatesPath, '__tests__/selectors.spec.hbs'),
    }, {
      type: 'modify',
      path: 'src/modules/reducers.ts',
      pattern: /(\/\/<-- IMPORT MODULE REDUX -->)/g,
      template: 'import { reducer as {{ camelCase name }}Reducer, {{ pascalCase name }}State } from \'./{{ camelCase name }}/{{ camelCase name }}.redux\';\n$1',
    }, {
      type: 'modify',
      path: 'src/modules/reducers.ts',
      pattern: /(\/\/<-- INJECT MODULE REDUCER -->)/g,
      template: '{{ camelCase name }}: {{ camelCase name }}Reducer,\n    $1',
    },  {
      type: 'modify',
      path: 'src/modules/reducers.ts',
      pattern: /(\/\/<-- INJECT MODULE STATE TYPE -->)/g,
      template: '{{ camelCase name }}: {{ pascalCase name }}State;\n  $1',
    }, {
      type: 'modify',
      path: 'src/modules/sagas.ts',
      pattern: /(\/\/<-- IMPORT MODULE SAGA -->)/g,
      template: 'import { watch{{ pascalCase name }} } from \'./{{ camelCase name }}/{{ camelCase name }}.sagas\';\n$1',
    }, {
      type: 'modify',
      path: 'src/modules/sagas.ts',
      pattern: /(\/\/<-- INJECT MODULE SAGA -->)/g,
      template: 'fork(watch{{ pascalCase name }}),\n    $1',
    }, {
      type: 'modify',
      path: 'src/shared/utils/testUtils.tsx',
      pattern: /(\/\/<-- IMPORT MODULE STATE -->)/g,
      template: 'import { {{ constantCase name }}_INITIAL_STATE } from \'../../modules/{{ camelCase name }}\';\n$1',
    }, {
      type: 'modify',
      path: 'src/shared/utils/testUtils.tsx',
      pattern: /(\/\/<-- INJECT MODULE STATE -->)/g,
      template: '{{ camelCase name }}: {{ constantCase name }}_INITIAL_STATE,\n  $1',
    }],
  });
};

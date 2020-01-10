# Create React App Template (by Apptension) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg)](https://github.com/apptension/react-scripts-apptension/pulls)

[create-react-app](https://github.com/facebook/create-react-app) scripts customised for Apptension projects.

<br/>
<div style="text-align:center"><img src="http://image.ibb.co/jhaXCn/logo_transitions_5.gif" /></div>

## Quick start

1. Run create-react-app with Apptension's scripts:

**npx**

```shell
$ npx create-react-app [app-name] --template apptension
```

**yarn**

```shell
yarn create react-app [app-name] --template apptension
```

2. Start application:

```shell
$ yarn start
```

## Features

**_Note:_** Most features are covered by [create-react-app](https://facebook.github.io/create-react-app/docs/getting-started) documentation so don't forget to check it out first!

### **_Storybook_**

Check out live examples to understand Apptension stack workflow. Interactively develop and test components in isolated environment by running `yarn storybook`.

### **_Plop_**

Use prepared [commands](#code-generation-commands) for repeatable actions like creating new components or modules.

### **_Ramda_**

Build complex logic through functional composition. For easier start with this library check out [Learn ramda](https://davesnx.github.io/learn-ramda/) and [What Function Should I Use](https://github.com/ramda/ramda/wiki/What-Function-Should-I-Use).

### **_Redux_**

Unidirectional data flow allows for change logging and time travel debugging. Used with **_Redux Sauce_**, **_Redux-Saga_**, **_Seamless immutable_**, **_Reselect_** and configured for **_Redux DevTools_** to speed up development.

### **_React Router_**

It's natural to want to add pages (e.g. `/about`) to your application, and routing makes this possible.

### **_Styled Components_**

Use the best bits of ES6 and CSS to style your apps without stress.

### **_React Intl_**

Scalable apps need to support multiple languages, easily add and support multiple languages with `react-intl`.

### **_Jest & React Testing Library_**

Use **_Jest_** for running tests, mocking, assertions and snapshots. Take advantage of **_React Testing Library_** for rendering and interacting with **_React_** components.

### **_Git pre-hooks_**

Automated processes executed before git actions.

## Commands

| Command                                       | Description                                                                                                          |
| --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| yarn start                                    | Runs the app in development mode.<br>Open [http://localhost:3000](http://localhost:3000) to view it in the browser.  |
| yarn test                                     | Runs the test watcher in an interactive mode. By default, runs tests related to files changed since the last commit. |
| yarn lint                                     | Lints your JavaScript.                                                                                               |
| yarn extract-intl language1, language2, [...] | Automatically generates `.json` files with messages gathered from application.                                       |
| yarn storybook                                | Runs storybook on localhost                                                                                          |

### Code generation commands

| Command             | Description                                                                             |
| ------------------- | --------------------------------------------------------------------------------------- |
| yarn plop           | Runs interactive code generator                                                         |
| yarn plop module    | Generate Redux module (reducer, saga, selectors, action types, action creators, tests): |
| yarn plop container | Generate Redux container and its react component in specified path:                     |
| yarn plop component | Generate React class component or function component in specified path                  |

## Files structure

```
app-name
├── .editorconfig
├── .env
├── .eslintignore
├── .eslintrc
├── .gitattributes
├── .gitignore
├── .prettierrc
├── .stylelintrc
├── README.md
├── package.json
├── plopfile.js
├── yarn.lock
├── .git
│   └── ...
├── public
│   └── ...
└── src
    ├── i18n.js
    ├── index.js
    ├── setupTests.js
    ├── support.js
    ├── support.messages.js
    ├── .storybook
    │   └── ...
    ├── images
    │   └── ...
    ├── modules
    │   └── ...
    ├── routes
    │   └── ...
    ├── shared
    │   ├── components
    │   │   └── ...
    │   ├── services
    │   │   └── ...
    │   └── utils
    │       └── ...
    ├── theme
    │   └── ...
    └── translations
        └── ...
```

## Guidelines

- Use [commands](#commands) for code generation
- Create **_Redux_** related code in `modules` directory
- Style components with **_Styled components_** and use global theme rules located in `theme` directory
- Try to write less code with **_Ramda_**
- Make use of **_React-Intl_** for any text
- Use `routes` as a location of code that is unique for a given route
- Use `shared` for reusable:
  - **_React_** `components`
  - `services` (e.g. API connection)
  - `utils` - helpers for other elements
- Write tests to make application bulletproof

## Modules

A single module can be generated by using `yarn plop module`. It will be placed in `modules` directory. It consists of 3 main files:

- `*.redux.js` - defining state, actions, types and reducers
- `*.sagas.js` - implement dispatch side-effects
- `*.selectors.js` - create selectors for app state

## Components and containers

By using code generation commands there is possibility to generate dumb components (components) and smart components (containers) connected with redux.

Both of them contains two main files. The first one is for react component (`*.component.js`) and second one for styled components (`*.styles.js`) to use in this component. By choosing `class` option generator creates component by extending class **_PureComponent_** due to better performance.

When creating container, there will be a third file named `*.container.js` which handles connection with redux. For usage in tests, container is also exported as component without redux connection from `*.component.js`.

## Text and translations

Any text should be stored in `*.messages.js` file for given component with use of react-intl:

```javascript
import { defineMessages } from 'react-intl';

export default defineMessages({
  firstMessage: {
    id: 'someComponent.firstMessage',
    defaultMessage: 'First Message',
  },
  secondMessage: {
    id: 'someComponent.firstMessage',
    defaultMessage: 'Second Message with counter: {count}',
  },
});
```

Usage in component:

```javascript
import { FormattedMessage } from 'react-intl';
import messages from './someComponent.messages';

...

<FormattedMessage {...messages.firstMessage} />
<FormattedMessage
  {...messages.secondMessage}
  values={{ count: this.state.count }}
/>

...
```

## Tests

Modules and components are generated with `__tests__` directory for tests.

Modules should contain tests for reducers, sagas and selectors.

Components should be based on snapshot testing checking if everything renders correctly base on given props.

## Environment

Environment variables are stored in `.env` file.

## Dependencies

All project dependencies are stored as `dependencies` in `package.json`. No packages should be stored as `devDependencies` because it could lead to some issues with deployment ([Dan Abramov's comment on this topic](https://github.com/facebook/create-react-app/issues/4342#issuecomment-383432122)).

## Tech stack

Here's a curated list of packages that you should have knowledge of, before starting your awesome project.

### Core

- [ ] [React 16.8](https://facebook.github.io/react/)
- [ ] [React Router 4](https://github.com/ReactTraining/react-router)
- [ ] [React Intl](https://github.com/yahoo/react-intl)
- [ ] [React Helmet](https://github.com/nfl/react-helmet)
- [ ] [Redux](http://redux.js.org/)
- [ ] [Redux Saga](https://redux-saga.github.io/redux-saga/)
- [ ] [Reselect](https://github.com/reactjs/reselect)
- [ ] [Immer](https://github.com/immerjs/immer)
- [ ] [Ramda](https://github.com/ramda/ramda)
- [ ] [Axios](https://github.com/axios/axios)

#### Development

- [ ] [Webpack 4](https://webpack.js.org/)
- [ ] [Redux Devtools](https://github.com/gaearon/redux-devtools/)
- [ ] [React Hot Loader 4](https://github.com/gaearon/react-hot-loader/)
- [ ] [Storybook](https://storybook.js.org/)
- [ ] [Husky](https://github.com/typicode/husky)

#### Styling

- [ ] [Styled components](https://www.styled-components.com/)
- [ ] [Normalize.css](https://necolas.github.io/normalize.css/)

#### Testing

- [ ] [Jest](https://facebook.github.io/jest/)
- [ ] [React Testing Library](https://github.com/testing-library/react-testing-library)
- [ ] [Redux Saga Test Plan](http://redux-saga-test-plan.jeremyfairbank.com/)

#### Linting

- [ ] [ESlint](http://eslint.org/)

### Code generation

- [ ] [Plop](https://github.com/amwmedia/plop)

## License

This project is licensed under the MIT license, Copyright (c) 2017 Apptension. For more information see LICENSE.md.

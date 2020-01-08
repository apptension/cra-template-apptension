'use strict';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';


const extractReactIntlMessages = require('extract-react-intl-messages');
const paths = require('../config/paths');

const languages = process.argv.slice(2);

extractReactIntlMessages(
  languages,
  paths.appSrc + '/**/*.messages.js',
  paths.translations,
  {
    format: 'json',
    flat: true,
  }
);

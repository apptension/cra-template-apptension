'use strict';

const fs = require('fs');
const path = require('path');
const { intersection, keys, pick, difference } = require('ramda');

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';


const extractReactIntlMessages = require('extract-react-intl-messages');
const languages = process.argv.slice(2);

const translationsPath = (lang, tmp = false) => {
  return path.join(__dirname, `../src/translations/${tmp ? '.tmp' : ''}`, `${lang}.json`)
};

const readJsonFile = path => {
  return fs.existsSync(path) ? JSON.parse(fs.readFileSync(path)) : {};
};

(async () => {
  await extractReactIntlMessages(
    languages,
    './src/**/*.messages.ts',
    './src/translations/.tmp',
    {
      format: 'json',
      flat: true,
    }
  );

  languages.forEach(lang => {
    const newLines = readJsonFile(translationsPath(lang, true));
    const oldLines = readJsonFile(translationsPath(lang));

    const retainedKeys = intersection(keys(newLines), keys(oldLines));
    const newKeys = difference(keys(newLines), keys(oldLines));

    const translation = {
      ...pick(retainedKeys, oldLines),
      ...pick(newKeys, newLines),
    };

    fs.writeFileSync(
      translationsPath(lang),
      JSON.stringify(translation, null, '  ')
    );

    fs.unlinkSync(translationsPath(lang, true));
  });

  fs.rmdirSync('./src/translations/.tmp');
})();

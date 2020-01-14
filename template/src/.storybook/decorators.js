import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { IntlProvider } from 'react-intl';
import { translationMessages, DEFAULT_LOCALE } from '../i18n';
import { identity } from 'ramda';
import { createStore } from 'redux';
export { default as withRouter } from 'storybook-react-router';

export const withTheme = theme => story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>;

export const withIntl = story => (
  <IntlProvider locale={DEFAULT_LOCALE} messages={translationMessages[DEFAULT_LOCALE]}>
    {story()}
  </IntlProvider>
);

export const withRedux = (initialStore = {}) => story => {
  const store = createStore(identity, initialStore);
  return <Provider store={store}>{story()}</Provider>;
};

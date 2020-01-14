import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { IntlProvider } from 'react-intl';
import { identity } from 'ramda';
import { createStore } from 'redux';
export { default as withRouter } from 'storybook-react-router';

import { GlobalStyle } from '../src/theme/global';
import { DEFAULT_LOCALE, translationMessages } from '../src/i18n';

export const withTheme = theme => story =>
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      {story()}
    </>
  </ThemeProvider>;

export const withIntl = story => (
  <IntlProvider locale={DEFAULT_LOCALE} messages={translationMessages[DEFAULT_LOCALE]}>
    {story()}
  </IntlProvider>
);

export const withRedux = (initialStore = {}) => story => {
  const store = createStore(identity, initialStore);
  return <Provider store={store}>{story()}</Provider>;
};

import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { IntlProvider } from 'react-intl';
export { default as withRouter } from 'storybook-react-router';

import { GlobalStyle } from '../src/theme/global';
import { DEFAULT_LOCALE, translationMessages } from '../src/i18n';
import initializeFontFace from '../src/theme/initializeFontFace';

export const withTheme = (theme) => (story) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      {story()}
    </>
  </ThemeProvider>
);

export const withIntl = (story) => (
  <IntlProvider locale={DEFAULT_LOCALE} messages={translationMessages[DEFAULT_LOCALE]}>
    {story()}
  </IntlProvider>
);

export const withFontFace = (story) => {
  useEffect(() => {
    initializeFontFace();
  }, []);

  return story();
};

import React, { FC, Fragment, ReactNode } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';

import { ResponsiveThemeProvider as ThemeProvider } from '../shared/components/responsiveThemeProvider';
import { translationMessages } from '../i18n';
import { GlobalStyle } from '../theme/global';
import messages from './app.messages';
import { theme } from '../theme/theme';
import { localesSelectors } from '../modules/locales';
import { useStartup } from './useStartup';
import { useLanguageFromParams } from './useLanguageFromParams';

export interface AppComponentProps {
  children?: ReactNode;
}

export const AppComponent: FC<AppComponentProps> = ({ children }) => {
  useStartup();
  useLanguageFromParams();

  const language = useSelector(localesSelectors.selectLocalesLanguage);

  if (!language) {
    return null;
  }

  return (
    <IntlProvider key={language} locale={language} messages={translationMessages[language]}>
      <HelmetProvider>
        <ThemeProvider theme={theme}>
          <Fragment>
            <FormattedMessage {...messages.pageTitle}>
              {pageTitle => <Helmet titleTemplate={`%s - ${pageTitle}`} defaultTitle={pageTitle} />}
            </FormattedMessage>

            <GlobalStyle />
            {React.Children.only(children)}
          </Fragment>
        </ThemeProvider>
      </HelmetProvider>
    </IntlProvider>
  );
};

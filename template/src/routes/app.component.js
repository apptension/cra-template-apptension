import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ResponsiveThemeProvider as ThemeProvider } from '../shared/components/responsiveThemeProvider';

import { translationMessages, DEFAULT_LOCALE } from '../i18n';
import { GlobalStyle } from '../theme/global';
import messages from './app.messages';
import { selectLocalesLanguage } from '../modules/locales';
import initializeFontFace from '../theme/initializeFontFace';
import theme from '../theme/theme';
import { startup } from '../modules/startup/startup.redux';
import { setLanguage } from '../modules/locales/locales.redux';

export const App = ({ children }) => {
  const language = useSelector(selectLocalesLanguage);
  const dispatch = useDispatch();
  const { lang } = useParams();

  useEffect(() => {
    dispatch(startup());
    initializeFontFace();
  }, [dispatch]);

  useEffect(() => {
    dispatch(setLanguage(lang || DEFAULT_LOCALE));
  }, [lang, dispatch]);

  if (!language) {
    return null;
  }

  return (
    <IntlProvider key={language} locale={language} messages={translationMessages[language]}>
      <ThemeProvider theme={theme}>
        <Fragment>
          <FormattedMessage {...messages.pageTitle}>
            {pageTitle => <Helmet titleTemplate={`%s - ${pageTitle}`} defaultTitle={pageTitle} />}
          </FormattedMessage>

          <GlobalStyle />
          {React.Children.only(children)}
        </Fragment>
      </ThemeProvider>
    </IntlProvider>
  );
};

App.propTypes = {
  children: PropTypes.node,
};

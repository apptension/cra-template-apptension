import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';

import { App } from './app.component';
import { DEFAULT_LOCALE, appLocales, translationMessages } from '../i18n';
import { Home } from './home';
import { NotFound } from './notFound';
import { ROUTES } from './app.constants';
//<-- IMPORT ROUTE -->

const MatchedLanguageComponent = ({ match }) => {
  return (
    <App>
      <Switch>
        <Route exact path={`${match.path}${ROUTES.home}`} component={Home} />
        {/* <-- INJECT ROUTE --> */}

        <Route component={NotFound} />
      </Switch>
    </App>
  );
};

export default () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to={DEFAULT_LOCALE} />} />

      <Route path={`/:lang(${appLocales.join('|')})`} component={MatchedLanguageComponent} />

      <IntlProvider locale={DEFAULT_LOCALE} messages={translationMessages[DEFAULT_LOCALE]}>
        <Route component={NotFound} />
      </IntlProvider>
    </Switch>
  );
};

MatchedLanguageComponent.propTypes = {
  match: PropTypes.object.isRequired,
};

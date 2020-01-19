import React from 'react';
import { Route, Switch, Redirect, useRouteMatch } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { hot } from 'react-hot-loader/root';

import { AppComponent as App } from './app.component';
import { DEFAULT_LOCALE, appLocales, translationMessages } from '../i18n';
import { ROUTES } from './app.constants';
import { asyncComponent } from '../shared/utils/asyncComponent';
//<-- IMPORT ROUTE -->

const Home = asyncComponent(() => import('./home'), 'Home');
const NotFound = asyncComponent(() => import('./notFound'), 'NotFound');

const MatchedLanguageComponent = () => {
  const match = useRouteMatch();
  return (
    <App>
      <Switch>
        <Route exact path={`${match.path}${ROUTES.home}`}>
          <Home />
        </Route>
        {/* <-- INJECT ROUTE --> */}

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </App>
  );
};

export default hot(() => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to={DEFAULT_LOCALE} />
      </Route>

      <Route path={`/:lang(${appLocales.join('|')})`}>
        <MatchedLanguageComponent />
      </Route>

      <IntlProvider locale={DEFAULT_LOCALE} messages={translationMessages[DEFAULT_LOCALE]}>
        <Route>
          <NotFound />
        </Route>
      </IntlProvider>
    </Switch>
  );
});

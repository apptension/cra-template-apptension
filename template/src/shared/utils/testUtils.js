import React from 'react';
import PropTypes from 'prop-types';
import { HelmetProvider } from 'react-helmet-async';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { identity } from 'ramda';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { Route, Router } from 'react-router';
import { IntlProvider } from 'react-intl';
import { DEFAULT_LOCALE, translationMessages } from '../../i18n';
import { store as fixturesStore } from '../../../fixtures/store';

export * from '@testing-library/react';

export const PLACEHOLDER_CONTENT = <span data-testid="content">content</span>;

export const spiedHistory = (route = '/') => {
  const history = createMemoryHistory({ initialEntries: [route] });
  const pushSpy = jest.spyOn(history, 'push');
  return {
    history,
    pushSpy,
  };
};

export const ProvidersWrapper = ({ children, context = {} }) => {
  const { router = {}, store = fixturesStore, messages } = context;
  const { url = `/${DEFAULT_LOCALE}`, routePath = '/:lang/', history } = router;

  const routerHistory = history ?? createMemoryHistory({ initialEntries: [url] });

  const intlProviderMockProps = {
    locale: DEFAULT_LOCALE,
    messages: messages ?? translationMessages[DEFAULT_LOCALE],
  };

  return (
    <Router history={routerHistory}>
      <HelmetProvider>
        <IntlProvider {...intlProviderMockProps}>
          <Provider store={createStore(identity, store)}>
            <Route path={routePath}>{children}</Route>
          </Provider>
        </IntlProvider>
      </HelmetProvider>
    </Router>
  );
};

ProvidersWrapper.propTypes = {
  context: PropTypes.shape({
    router: PropTypes.shape({
      url: PropTypes.string,
      routePath: PropTypes.string,
      history: PropTypes.object,
    }),
    store: PropTypes.object,
    messages: PropTypes.object,
  }),
};

export const makeContextRenderer = component => (props = {}, context = {}) =>
  render(component(props), {
    wrapper: ({ children }) => <ProvidersWrapper context={context}>{children}</ProvidersWrapper>,
  });

export const makePropsRenderer = component => (props = {}) => render(component(props));

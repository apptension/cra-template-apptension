import React, { ReactNode, ReactElement, FC } from 'react';
import PropTypes from 'prop-types';
import { HelmetProvider } from 'react-helmet-async';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { identity } from 'ramda';
import { Provider } from 'react-redux';
import { createMemoryHistory, MemoryHistory } from 'history';
import { Route, Router } from 'react-router';
import { IntlProvider } from 'react-intl';
import produce from 'immer';

import { DEFAULT_LOCALE, translationMessages, MessagesObject } from '../../i18n';
import { store as fixturesStore } from '../../../fixtures/store';
import { ResponsiveThemeProvider } from '../components/responsiveThemeProvider';
import * as defaultTheme from '../../theme/theme';
import { GlobalState } from '../../modules/reducers';
import { LOCALES_INITIAL_STATE } from '../../modules/locales';
import { STARTUP_INITIAL_STATE } from '../../modules/startup';
import { USERS_INITIAL_STATE } from '../../modules/users';
//<-- IMPORT MODULE STATE -->

const defaultGlobalState: GlobalState = {
  locales: LOCALES_INITIAL_STATE,
  startup: STARTUP_INITIAL_STATE,
  users: USERS_INITIAL_STATE,
  //<-- INJECT MODULE STATE -->
};

export const PLACEHOLDER_CONTENT = <span data-testid="content">content</span>;

export const spiedHistory = (route = '/') => {
  const history = createMemoryHistory({ initialEntries: [route] });
  const pushSpy = jest.spyOn(history, 'push');
  return {
    history,
    pushSpy,
  };
};

type ProvidersWrapperProps = {
  children: ReactNode;
  context: {
    router?: {
      url?: string;
      routePath?: string;
      history?: MemoryHistory;
    };
    store?: GlobalState;
    messages?: MessagesObject;
    theme?: object;
  };
};

export const ProvidersWrapper: FC<ProvidersWrapperProps> = ({ children, context = {} }) => {
  const { router = {}, store = fixturesStore, messages, theme = defaultTheme } = context;
  const { url = `/${DEFAULT_LOCALE}`, routePath = '/:lang/', history } = router;

  const routerHistory: MemoryHistory = history ?? createMemoryHistory({ initialEntries: [url] });

  const intlProviderMockProps = {
    locale: DEFAULT_LOCALE,
    messages: messages ?? translationMessages[DEFAULT_LOCALE],
  };

  return (
    <Router history={routerHistory}>
      <ResponsiveThemeProvider theme={theme}>
        <HelmetProvider>
          <IntlProvider {...intlProviderMockProps}>
            <Provider store={createStore(identity, store)}>
              <Route path={routePath}>{children}</Route>
            </Provider>
          </IntlProvider>
        </HelmetProvider>
      </ResponsiveThemeProvider>
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

export const makeContextRenderer = (component: (props: object) => ReactElement) => (props = {}, context = {}) =>
  render(component(props), {
    wrapper: ({ children }) => <ProvidersWrapper context={context}>{children}</ProvidersWrapper>,
  });

export const makePropsRenderer = (component: (props: object) => ReactElement) => (props = {}) =>
  render(component(props));

export const prepareState = (stateSetter: (draftState: GlobalState) => void) =>
  produce(defaultGlobalState, stateSetter);

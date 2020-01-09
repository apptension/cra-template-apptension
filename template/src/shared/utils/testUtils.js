import React from 'react';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { identity } from 'ramda';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import { IntlProvider } from 'react-intl';
import { DEFAULT_LOCALE, translationMessages } from '../../i18n';
import { store as fixturesStore } from '../../../fixtures/store';

export * from '@testing-library/react';

export const spiedHistory = (route = '/') => {
  const history = createMemoryHistory({ initialEntries: [route] });
  const pushSpy = jest.spyOn(history, 'push');
  return {
    history,
    pushSpy,
  };
};

export const makeContextRenderer = component => (props = {}, context = {}) => {
  const { history, store = fixturesStore, messages } = context;

  const routerHistory = history ?? createMemoryHistory({ initialEntries: ['/'] });

  const intlProviderMockProps = {
    locale: DEFAULT_LOCALE,
    messages: messages ?? translationMessages[DEFAULT_LOCALE],
  };

  const Wrapper = ({ children }) => (
    <Router history={routerHistory}>
      <IntlProvider {...intlProviderMockProps}>
        <Provider store={createStore(identity, store)}>{children}</Provider>
      </IntlProvider>
    </Router>
  );

  return render(component(props), {
    wrapper: Wrapper,
  });
};

export const makePropsRenderer = component => (props = {}) => render(component(props));

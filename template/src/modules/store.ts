import { createStore, applyMiddleware, compose, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import produce from 'immer';
import { identity } from 'ramda';
import createReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}): Store {
  const middlewares = [sagaMiddleware];

  const enhancers: any = [];

  // @ts-ignore
  if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    // @ts-ignore
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  } else if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { persistState } = require('redux-devtools');

    const getDebugSessionKey = () => {
      const matches = window.location.href.match(/[?&]debug_session=([^&#]+)\b/);
      return matches && matches.length > 0 ? matches[1] : null;
    };

    Array.prototype.push.apply(enhancers, [
      require('../shared/utils/devtools.component').default.instrument(),
      persistState(getDebugSessionKey(), produce(identity)),
    ]);
  }

  const store = createStore(
    createReducer(),
    produce(initialState, identity),
    compose(applyMiddleware(...middlewares), ...enhancers)
  );

  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const createReducers = require('./reducers').default;
      // @ts-ignore
      const nextReducers = createReducers(store.asyncReducers);

      store.replaceReducer(nextReducers);
    });
  }

  return store;
}

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import '@testing-library/jest-dom/extend-expect';
import 'isomorphic-fetch';
import 'jest-styled-components';
import nock from 'nock';

nock.disableNetConnect();

afterEach(() => {
  nock.cleanAll();
});

window.matchMedia =
  window.matchMedia ||
  function() {
    return {
      matches: false,
      addListener: function() {},
      removeListener: function() {},
    };
  };

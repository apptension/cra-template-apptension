import '@testing-library/jest-dom/extend-expect';
import 'isomorphic-fetch';
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

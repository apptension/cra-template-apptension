import 'core-js/stable';
import 'regenerator-runtime/runtime';
import '@testing-library/jest-dom/extend-expect';
import 'isomorphic-fetch';
import 'jest-styled-components';
import nock from 'nock';
import axios from 'axios';

axios.defaults.adapter = require('axios/lib/adapters/http');

nock.disableNetConnect();

beforeEach(() => {
  if (!nock.isActive()) {
    nock.activate();
  }
});

const nockCleanup = () => {
  nock.cleanAll();
  nock.restore();
};

afterEach(() => {
  if (!nock.isDone()) {
    nockCleanup();
    throw new Error('Not all nock interceptors were used!');
  }
  nockCleanup();
});

// @ts-ignore
window.matchMedia =
  window.matchMedia ||
  function() {
    return {
      matches: false,
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      addListener: function() {},
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      removeListener: function() {},
    };
  };

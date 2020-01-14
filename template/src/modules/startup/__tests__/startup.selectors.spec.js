import Immutable from 'seamless-immutable';

import { selectStartupDomain } from '../startup.selectors';

describe('Startup: selectors', () => {
  const defaultState = Immutable({
    startup: {},
  });

  describe('selectStartupDomain', () => {
    it('should select a domain', () => {
      expect(selectStartupDomain(defaultState)).toEqual(defaultState.startup);
    });
  });
});

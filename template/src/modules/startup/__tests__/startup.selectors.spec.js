import { selectStartupDomain } from '../startup.selectors';

describe('Startup: selectors', () => {
  const defaultState = {};

  describe('selectStartupDomain', () => {
    it('should select a domain', () => {
      expect(selectStartupDomain(defaultState)).toEqual(defaultState.startup);
    });
  });
});

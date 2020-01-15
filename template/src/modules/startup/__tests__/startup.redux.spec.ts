import { reducer as startupReducer } from '../startup.redux';

describe('Startup: redux', () => {
  const defaultState = {};

  describe('reducer', () => {
    it('should return initial state', () => {
      expect(startupReducer(undefined, { type: 'unknown-action' })).toEqual(defaultState);
    });

    it('should return state on unknown action', () => {
      expect(startupReducer(defaultState, { type: 'unknown-action' })).toEqual(defaultState);
    });
  });
});

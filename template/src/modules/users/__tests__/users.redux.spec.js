import { reducer as usersReducer, INITIAL_STATE } from '../users.redux';

describe('Users: redux', () => {
  const defaultState = INITIAL_STATE;

  describe('reducer', () => {
    it('should return initial state', () => {
      expect(usersReducer(undefined, {})).toEqual(defaultState);
    });

    it('should return state on unknown action', () => {
      expect(usersReducer(defaultState, { type: 'unknown-action' })).toEqual(defaultState);
    });
  });
});

import { reducer as usersReducer } from '../users.redux';
import { prepareState } from '../../../shared/utils/testUtils';

describe('Users: redux', () => {
  const defaultState = prepareState(state => {
    state.users.users = [];
  }).users;

  describe('reducer', () => {
    it('should return initial state', () => {
      expect(usersReducer(undefined, { type: 'unknown-action' })).toEqual(defaultState);
    });

    it('should return state on unknown action', () => {
      expect(usersReducer(defaultState, { type: 'unknown-action' })).toEqual(defaultState);
    });
  });
});

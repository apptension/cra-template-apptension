import { times } from 'ramda';

import { prepareState } from '../../../mocks/store';
import { userFactory } from '../../../mocks/factories';
import { reducer } from '../users.reducer';

describe('Users: reducer', () => {
  const defaultState = prepareState((state) => {
    state.users.users = times(() => userFactory(), 5);
  }).users;

  it('should return initial state', () => {
    expect(reducer(undefined, { type: 'unknown-action' })).toEqual(defaultState);
  });

  it('should return state on unknown action', () => {
    expect(reducer(defaultState, { type: 'unknown-action' })).toEqual(defaultState);
  });
});

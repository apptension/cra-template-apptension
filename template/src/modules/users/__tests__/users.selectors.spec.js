import { usersSelectors } from '..';
import { usersMock } from '../../../../fixtures/users';

describe('Users: selectors', () => {
  const defaultState = {};

  describe('selectUsersDomain', () => {
    it('should select a domain', () => {
      expect(usersSelectors.selectUsersDomain(defaultState)).toEqual(defaultState.users);
    });
  });

  describe('selectUsers', () => {
    it('should select users', () => {
      const state = {
        ...defaultState,
        users: {
          users: usersMock,
        },
      };
      expect(usersSelectors.selectUsers(state)).toEqual(state.users.users);
    });
  });
});

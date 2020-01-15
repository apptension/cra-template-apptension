import { expectSaga } from 'redux-saga-test-plan';

import { watchUsers, USERS_URL } from '../users.sagas';
import { usersActions } from '..';
import { mockApi } from '../../../shared/utils/mockApi';
import { usersMock } from '../../../../fixtures/users';

describe('Users: sagas', () => {
  const defaultState = {};

  it('should fetch users', async () => {
    mockApi.get(USERS_URL).reply(200, usersMock);

    await expectSaga(watchUsers)
      .withState(defaultState)
      .put(usersActions.fetchUsersSuccess(usersMock))
      .dispatch(usersActions.fetchUsers())
      .silentRun();
  });
});

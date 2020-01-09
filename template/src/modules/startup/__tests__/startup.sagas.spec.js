import { expectSaga } from 'redux-saga-test-plan';

import { watchStartup } from '../startup.sagas';
import { startup } from '../startup.redux';

describe('Startup: sagas', () => {
  const defaultState = {};

  it('should run successfully', async () => {
    await expectSaga(watchStartup)
      .withState(defaultState)
      .dispatch(startup())
      .silentRun();
  });
});

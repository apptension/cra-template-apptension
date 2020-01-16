import { all, fork } from 'redux-saga/effects';

import { watchStartup } from './startup/startup.sagas';
import { watchUsers } from './users/users.sagas';
//<-- IMPORT MODULE SAGA -->

export default function* rootSaga() {
  yield all([
    fork(watchStartup),
    fork(watchUsers),
    //<-- INJECT MODULE SAGA -->
  ]);
}

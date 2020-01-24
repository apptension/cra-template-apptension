import { all, fork } from 'redux-saga/effects';

import { watchStartup } from './startup/startup.sagas';
import { watchUsers } from './users/users.sagas';
import promiseWatcher from '../shared/utils/actionPromise/sagaWatcher';
//<-- IMPORT MODULE SAGA -->

export default function* rootSaga() {
  yield all([
    fork(watchStartup),
    fork(watchUsers),
    fork(promiseWatcher),
    //<-- INJECT MODULE SAGA -->
  ]);
}

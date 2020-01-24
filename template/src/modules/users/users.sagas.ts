import { all, put, takeLatest } from 'redux-saga/effects';

import reportError from '../../shared/utils/reportError';
import api from '../../shared/services/api';
import { usersActions } from '.';

export const USERS_URL = '/users';

function* fetchUsers() {
  try {
    const { data } = yield api.get(USERS_URL);
    yield put(usersActions.fetchUsers.success(data));
  } catch (error) {
    yield put(usersActions.fetchUsers.error(error.message));
    reportError(error);
  }
}

export function* watchUsers() {
  yield all([takeLatest(usersActions.fetchUsers.trigger, fetchUsers)]);
}

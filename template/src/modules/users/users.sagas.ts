import { all, put, takeLatest } from 'redux-saga/effects';

import reportError from '../../shared/utils/reportError';
import api from '../../shared/services/api';
import { usersActions } from '.';

export const USERS_URL = '/users';

function* fetchUsers() {
  try {
    const { data } = yield api.get(USERS_URL);
    yield put(usersActions.fetchUsersSuccess(data));
  } catch (error) {
    reportError(error);
  }
}

export function* watchUsers() {
  yield all([takeLatest(usersActions.fetchUsers, fetchUsers)]);
}

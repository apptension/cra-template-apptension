import { all, put, takeLatest } from 'redux-saga/effects';

import { reportError } from '../../shared/utils/reportError';
import { api } from '../../shared/services/api';
import { PromiseAction, rejectPromiseAction, resolvePromiseAction } from '../../shared/utils/reduxSagaPromise';
import * as actions from './users.actions';
import { User } from './users.types';

export const USERS_URL = '/users';

function* fetchUsers(action: PromiseAction<void, User[]>) {
  try {
    const { data }: { data: User[] } = yield api.get(USERS_URL);
    yield resolvePromiseAction(action, data);
  } catch (error) {
    reportError(error);
    yield rejectPromiseAction(action, error);
  }
}

export function* watchUsers() {
  yield all([takeLatest(actions.fetchUsers, fetchUsers)]);
}

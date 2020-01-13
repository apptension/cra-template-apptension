import { all, takeLatest } from 'redux-saga/effects';
import { startup } from './startup.redux';

// eslint-disable-next-line @typescript-eslint/no-empty-function
export function* handleStartup() {}

export function* watchStartup() {
  yield all([takeLatest(startup, handleStartup)]);
}

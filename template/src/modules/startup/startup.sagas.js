import { all, takeLatest } from 'redux-saga/effects';
import { startup } from './startup.redux';

export function* handleStartup() {}

export function* watchStartup() {
  yield all([takeLatest(startup, handleStartup)]);
}

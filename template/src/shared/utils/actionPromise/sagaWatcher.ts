import { all, call, put, race, take, takeEvery } from 'redux-saga/effects';
import { ActionPromiseRequest, promiseRequestAction } from './actions';
import { ReduxAction } from '../../../modules/helpers';

export function* handleRoutinePromiseAction({ payload: actionData }: ReduxAction<ActionPromiseRequest<any, any>>) {
  const { promiseDefinition, reject, resolve, payload } = actionData;

  const [{ success, error }] = yield all([
    race({
      success: take(promiseDefinition.success),
      error: take(promiseDefinition.error),
    }),
    put(promiseDefinition.trigger(payload)),
  ]);

  if (success) {
    yield call(resolve, success?.payload);
  } else {
    yield call(reject, error?.payload);
  }
}

export default function* routinePromiseWatcherSaga() {
  yield takeEvery(promiseRequestAction, handleRoutinePromiseAction);
}

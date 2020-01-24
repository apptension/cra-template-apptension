import { expectSaga } from 'redux-saga-test-plan';

import watchPromise from '../sagaWatcher';
import { createActionPromise } from '../../../../modules/helpers';
import { promiseRequest } from '../actions';

const prepareTestAction = () => {
  const action = createActionPromise<any, any>('TEST');
  const payload = { foo: 'bar' };
  const resolve = jest.fn();
  const reject = jest.fn();

  const promiseAction = promiseRequest({
    promiseDefinition: action,
    payload,
    resolve,
    reject,
  });

  return { promiseAction, action, payload, resolve, reject };
};

describe('Users: sagas', () => {
  it('should dispatch trigger action with proper payload', async () => {
    const { payload, promiseAction, action } = prepareTestAction();

    await expectSaga(watchPromise)
      .put(action.trigger(payload))
      .dispatch(promiseAction)
      .silentRun();
  });

  it('should resolve promise if success was dispatched', async () => {
    const { reject, resolve, promiseAction, action } = prepareTestAction();
    const resultData = { a: 'data' };

    await expectSaga(watchPromise)
      .dispatch(promiseAction)
      .dispatch(action.success(resultData))
      .silentRun();

    expect(resolve).toHaveBeenCalledWith(resultData);
    expect(reject).not.toHaveBeenCalledWith();
  });

  it('should reject promise if error was dispatched', async () => {
    const { reject, resolve, promiseAction, action } = prepareTestAction();
    const errorData = { a: 'data' };

    await expectSaga(watchPromise)
      .dispatch(promiseAction)
      .dispatch(action.error(errorData))
      .silentRun();

    expect(reject).toHaveBeenCalledWith(errorData);
    expect(resolve).not.toHaveBeenCalledWith();
  });
});

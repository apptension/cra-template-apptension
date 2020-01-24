import { useDispatch } from 'react-redux';
import { renderHook } from '@testing-library/react-hooks';
import { usePromiseDispatch } from '../usePromiseDispatch.hook';
import { createActionPromise } from '../../../../modules/helpers';
import { PROMISE_REQUEST } from '../../../utils/actionPromise/actions';

jest.mock('react-redux');

describe('usePromiseDispatch: Hook', () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    useDispatch.mockReturnValue(dispatch);
  });

  it('should dispatch promisifed version of the action', () => {
    const action = createActionPromise<object, object>('TEST');
    const { result } = renderHook(() => usePromiseDispatch(action));
    const MOCK_DATA = { foo: 'bar' };
    result.current(MOCK_DATA);

    expect(dispatch).toHaveBeenCalledWith({
      type: PROMISE_REQUEST,
      payload: {
        payload: MOCK_DATA,
        promiseDefinition: action,
        resolve: expect.any(Function),
        reject: expect.any(Function),
      },
    });
  });
});

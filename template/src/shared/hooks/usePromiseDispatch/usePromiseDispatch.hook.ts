import { useDispatch } from 'react-redux';
import { ActionPromise, promiseRequest } from '../../utils/actionPromise/actions';

type PromiseDispatcher<P, O> = (payload: P) => Promise<O>;

export const usePromiseDispatch = <P, O>(action: ActionPromise<P, O>): PromiseDispatcher<P, O> => {
  const dispatch = useDispatch();

  return (payload: P) =>
    new Promise((resolve, reject) => {
      dispatch(
        promiseRequest({
          promiseDefinition: action,
          payload,
          resolve,
          reject,
        })
      );
    });
};

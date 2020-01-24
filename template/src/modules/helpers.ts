import { createAction, PayloadActionCreator } from '@reduxjs/toolkit';
import { ActionPromise } from '../shared/utils/actionPromise/actions';

export interface ReduxAction<T> {
  type: string;
  payload: T;
}

export const actionPromiseCreator = (prefix: string) => <P = void, O = P>(actionName: string) =>
  createActionPromise<P, O>([prefix, actionName].join('/'));

export const createActionPromise = <P, O>(name: string): ActionPromise<P, O> => ({
  trigger: createAction<P>([name, 'TRIGGER'].join('/')),
  success: createAction<O>([name, 'SUCCESS'].join('/')),
  error: createAction<any>([name, 'ERROR'].join('/')),
});

export const actionCreator = (prefix: string) => <T>(actionName: string) =>
  createAction<T>([prefix, actionName].join('/'));

export const actionHandler = <P, S>(
  action: PayloadActionCreator<P>,
  handler: (state: S, action: ReduxAction<P>) => void
) => {
  return {
    [action.toString()]: handler,
  };
};

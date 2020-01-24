import { createAction, PayloadActionCreator } from '@reduxjs/toolkit';

export interface ActionPromise<P, O> {
  trigger: PayloadActionCreator<P>;
  success: PayloadActionCreator<O>;
  error: PayloadActionCreator<any>;
}

export interface ActionPromiseRequest<P, O> {
  promiseDefinition: ActionPromise<P, O>;
  payload: P;
  resolve: (data: O) => void;
  reject: (error: any) => void;
}

export const PROMISE_REQUEST = '__META__/PROMISE_REQUEST';
export const promiseRequestAction = createAction<ActionPromiseRequest<any, any>>(PROMISE_REQUEST);
export const promiseRequest = <P, O>(actionPromiseData: ActionPromiseRequest<P, O>) => {
  return promiseRequestAction(actionPromiseData);
};

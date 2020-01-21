import { createAction, PayloadActionCreator } from '@reduxjs/toolkit';

export interface ReduxAction<T> {
  type: string;
  payload: T;
}

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

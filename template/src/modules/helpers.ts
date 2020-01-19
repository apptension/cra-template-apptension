import produce from 'immer';
import { map } from 'ramda';
import { createAction, createReducer, PayloadActionCreator } from '@reduxjs/toolkit';

export interface ReduxAction<T> {
  type: string;
  payload: T;
}

export type Reducer<T> = (currentState: T, action: ReduxAction<any>) => void;

export const actionCreator = (prefix: string) => <T>(actionName: string) =>
  createAction<T>([prefix, actionName].join('/'));

export const createImmutableReducer = <T>(initialState: T, reducers: { [key: string]: Reducer<T> }) => {
  // @ts-ignore
  return createReducer(initialState, map(produce, reducers));
};

export const actionHandler = <P, S>(
  action: PayloadActionCreator<P>,
  handler: (state: S, action: ReduxAction<P>) => void
) => {
  return {
    [action.toString()]: handler,
  };
};

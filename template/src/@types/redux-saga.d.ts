declare module 'redux-saga/effects' {
  import { PayloadActionCreator } from '@reduxjs/toolkit';

  export {
    put,
    all,
    actionChannel,
    delay,
    throttle,
    cancel,
    call,
    apply,
    cancelled,
    cps,
    race,
    debounce,
    select,
    setContext,
    spawn,
    getContext,
    putResolve,
    retry,
    flush,
    fork,
    join,
    effectTypes,
  } from 'redux-saga/effects';

  type EffectHandlerBinding = <P>(
    actionCreator: PayloadActionCreator<P>,
    effectHandler: (action: { type: string; payload: P }) => void
  ) => any;

  export const takeMaybe: EffectHandlerBinding;
  export const takeLeading: EffectHandlerBinding;
  export const takeLatest: EffectHandlerBinding;
  export const takeEvery: EffectHandlerBinding;
  export const take: EffectHandlerBinding;
}

import produce from 'immer';
import { map } from 'ramda';
import { createAction, createReducer } from '@reduxjs/toolkit';

export const actionCreator = prefix => actionName => createAction([prefix, actionName].join('/'));

export const createImmutableReducer = (initialState, reducers) => createReducer(initialState, map(produce, reducers));

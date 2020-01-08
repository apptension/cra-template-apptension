import Immutable from 'seamless-immutable';
import { createReducer } from '@reduxjs/toolkit';
import { actionCreator } from '../helpers';

const createAction = actionCreator('STARTUP');

export const startup = createAction('STARTUP');

export const INITIAL_STATE = new Immutable({});

export const reducer = createReducer(INITIAL_STATE, {});

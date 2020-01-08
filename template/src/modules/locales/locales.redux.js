import Immutable from 'seamless-immutable';
import { createReducer } from '@reduxjs/toolkit';
import { actionCreator } from '../helpers';

const createAction = actionCreator('LOCALES');

export const setLanguage = createAction('SET_LANGUAGE');

const INITIAL_STATE = new Immutable({
  language: null,
});

export const setLanguageHandler = (state = INITIAL_STATE, { payload }) => state.set('language', payload);

export const HANDLERS = {
  [setLanguage]: setLanguageHandler,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);

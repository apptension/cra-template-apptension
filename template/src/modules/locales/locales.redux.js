import { actionCreator, createImmutableReducer } from '../helpers';

const createAction = actionCreator('LOCALES');

export const setLanguage = createAction('SET_LANGUAGE');

const INITIAL_STATE = {
  language: null,
};

const setLanguageHandler = (state, { payload }) => {
  state.language = payload;
};

const HANDLERS = {
  [setLanguage]: setLanguageHandler,
};

export const reducer = createImmutableReducer(INITIAL_STATE, HANDLERS);

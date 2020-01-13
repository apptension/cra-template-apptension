import { actionCreator, createImmutableReducer, ReduxAction } from '../helpers';

const createAction = actionCreator('LOCALES');

export const setLanguage = createAction<string>('SET_LANGUAGE');

export interface LocalesState {
  language: string;
}

const INITIAL_STATE: LocalesState = {
  language: null,
};

const handleSetLanguage = (state: LocalesState, { payload }: ReduxAction<string>) => {
  state.language = payload;
};

const HANDLERS = {
  [setLanguage.toString()]: handleSetLanguage,
};

export const reducer = createImmutableReducer(INITIAL_STATE, HANDLERS);

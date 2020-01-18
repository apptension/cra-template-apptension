import { actionHandler, createImmutableReducer, ReduxAction } from '../helpers';
import { localesActions } from '.';

export type LocalesState = {
  language: string;
};

export const INITIAL_STATE: LocalesState = {
  language: null,
};

const handleSetLanguage = (state: LocalesState, { payload }: ReduxAction<string>) => {
  state.language = payload;
};

const HANDLERS = {
  ...actionHandler(localesActions.setLanguage, handleSetLanguage),
};

export const reducer = createImmutableReducer(INITIAL_STATE, HANDLERS);

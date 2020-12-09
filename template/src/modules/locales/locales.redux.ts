import { createReducer, PayloadAction } from '@reduxjs/toolkit';

import * as localesActions from './locales.actions';

export type LocalesState = {
  language: string | null;
};

export const INITIAL_STATE: LocalesState = {
  language: null,
};

const handleSetLanguage = (state: LocalesState, { payload }: PayloadAction<string>) => {
  state.language = payload;
};

export const reducer = createReducer(INITIAL_STATE, (builder) => {
  builder.addCase(localesActions.setLanguage, handleSetLanguage);
});

import { prop } from 'ramda';
import { createSelector } from '@reduxjs/toolkit';

import { LocalesState } from './locales.redux';
import { GlobalState } from '../reducers';

const selectLocalesDomain = prop<string, any>('locales');

export const selectLocalesLanguage = createSelector<GlobalState, LocalesState, string>(
  selectLocalesDomain,
  prop('language')
);

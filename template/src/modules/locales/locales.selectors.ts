import { prop } from 'ramda';
import { createSelector } from '@reduxjs/toolkit';

import { GlobalState } from '../reducers';

const selectLocalesDomain = (state: GlobalState) => state.locales;

export const selectLocalesLanguage = createSelector(selectLocalesDomain, prop('language'));

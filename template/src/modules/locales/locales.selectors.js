import { prop } from 'ramda';
import { createSelector } from '@reduxjs/toolkit';

const selectLocalesDomain = prop('locales');

export const selectLocalesLanguage = createSelector(selectLocalesDomain, prop('language'));

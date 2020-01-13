import { prop } from 'ramda';
import { createSelector } from '@reduxjs/toolkit';
import { LocalesState } from './locales.redux';

const selectLocalesDomain = prop<string, any>('locales');

export const selectLocalesLanguage = createSelector<any, LocalesState, string>(selectLocalesDomain, prop('language'));

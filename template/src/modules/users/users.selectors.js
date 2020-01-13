import { createSelector } from '@reduxjs/toolkit';
import { prop } from 'ramda';

export const selectUsersDomain = prop('users');

export const selectUsers = createSelector(selectUsersDomain, prop('users'));

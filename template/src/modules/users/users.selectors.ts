import { createSelector } from '@reduxjs/toolkit';
import { prop } from 'ramda';

import { GlobalState } from '../../config/reducers';

export const selectUsersDomain = (state: GlobalState) => state.users;

export const selectUsers = createSelector(selectUsersDomain, prop('users'));

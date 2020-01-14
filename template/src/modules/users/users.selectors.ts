import { createSelector } from '@reduxjs/toolkit';
import { prop } from 'ramda';

import { User, UsersState } from './users.redux';

export const selectUsersDomain = prop<string, any>('users');

export const selectUsers = createSelector<any, UsersState, User[]>(selectUsersDomain, prop('users'));

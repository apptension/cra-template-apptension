import { createReducer } from '@reduxjs/toolkit';
import { actionHandler, ReduxAction } from '../helpers';
import { usersActions } from '.';

export interface User {
  id: string;
  login: string;
  name: string;
  email: string;
}

export interface UsersState {
  users: User[];
}

export const INITIAL_STATE: UsersState = {
  users: [],
};

const handleFetchUsers = (state: UsersState) => {
  state.users = [];
};

const handleFetchUsersSuccess = (state: UsersState, { payload: users }: ReduxAction<User[]>) => {
  state.users = users;
};

const HANDLERS = {
  ...actionHandler(usersActions.fetchUsers, handleFetchUsers),
  ...actionHandler(usersActions.fetchUsersSuccess, handleFetchUsersSuccess),
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);

import { createReducer, PayloadAction } from '@reduxjs/toolkit';

import * as usersActions from './users.actions';

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

const handleFetchUsersSuccess = (state: UsersState, { payload }: PayloadAction<User[]>) => {
  state.users = payload;
};

export const reducer = createReducer(INITIAL_STATE, (builder) => {
  builder.addCase(usersActions.fetchUsers, handleFetchUsers);
  builder.addCase(usersActions.fetchUsersSuccess, handleFetchUsersSuccess);
});

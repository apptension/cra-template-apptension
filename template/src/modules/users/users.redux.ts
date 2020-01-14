import { createImmutableReducer, ReduxAction } from '../helpers';
import { usersActions } from '.';

export interface User {
  id: string;
  name: string;
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
  [usersActions.fetchUsers.toString()]: handleFetchUsers,
  [usersActions.fetchUsersSuccess.toString()]: handleFetchUsersSuccess,
};

export const reducer = createImmutableReducer(INITIAL_STATE, HANDLERS);

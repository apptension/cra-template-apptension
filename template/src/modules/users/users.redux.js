import { createImmutableReducer } from '../helpers';
import { usersActions } from '.';

export const INITIAL_STATE = {
  users: [],
};

const fetchUsersHandler = state => {
  state.users = [];
};

const fetchUsersSuccessHandler = (state, { payload }) => {
  state.users = payload.users;
};

const HANDLERS = {
  [usersActions.fetchUsers]: fetchUsersHandler,
  [usersActions.fetchUsersSuccess]: fetchUsersSuccessHandler,
};

export const reducer = createImmutableReducer(INITIAL_STATE, HANDLERS);

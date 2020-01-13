import { actionCreator } from '../helpers';

const createAction = actionCreator('USERS');

export const fetchUsers = createAction('FETCH_USERS');
export const fetchUsersSuccess = createAction('FETCH_USERS_SUCCESS');

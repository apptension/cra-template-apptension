import { actionCreator } from '../helpers';
import { User } from './users.redux';

const createAction = actionCreator('USERS');

export const fetchUsers = createAction<string>('FETCH_USERS');
export const fetchUsersSuccess = createAction<User[]>('FETCH_USERS_SUCCESS');

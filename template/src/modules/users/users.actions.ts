import { actionPromiseCreator } from '../helpers';
import { User } from './users.redux';

const createAction = actionPromiseCreator('USERS');
export const fetchUsers = createAction<void, User[]>('FETCH_USERS');

import { rest } from 'msw';
import { UserApiGetData } from '../../shared/services/api/users/types';
import { USERS_URL } from '../../shared/services/api/users';

const baseUrl = process.env.REACT_APP_BASE_API_URL;

if (!baseUrl) {
  throw new Error('REACT_APP_BASE_API_URL env is missing');
}

export const mockGetUsers = (response: UserApiGetData[] = []) => rest.get<void, UserApiGetData[]>([baseUrl, USERS_URL].join(''), (req, res, ctx) => {
  return res(ctx.json(response));
});

import { rest } from 'msw';

const baseUrl = process.env.REACT_APP_BASE_API_URL;

if (!baseUrl) {
  throw new Error('REACT_APP_BASE_API_URL env is missing');
}

export const usersHandler = rest.get<unknown, any>(`${baseUrl}/users/me`, (req, res, ctx) => {
  return res(ctx.json({}));
});

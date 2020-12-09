import { setupServer } from 'msw/node';

import * as handlers from './handlers';

export const baseUrl = process.env.REACT_APP_BASE_API_URL;

export const server = setupServer(...Object.values(handlers));

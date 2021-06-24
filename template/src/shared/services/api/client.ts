import axios from 'axios';
import applyCaseMiddleware from 'axios-case-converter';
import { validateStatus } from './helpers';

export const baseUrl = process.env.REACT_APP_BASE_API_URL || '/api';

if (!baseUrl) {
  throw new Error('REACT_APP_BASE_API_URL env is missing');
}

export const client = applyCaseMiddleware(
  axios.create({
    baseURL: baseUrl,
    withCredentials: true,
    validateStatus,
  })
);

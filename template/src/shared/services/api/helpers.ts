import { BAD_REQUEST } from 'http-status-codes';
import { baseUrl } from './client';

export const validateStatus = (status: number) => (status >= 200 && status < 300) || status === BAD_REQUEST;

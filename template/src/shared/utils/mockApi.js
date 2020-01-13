import nock from 'nock';
import api from '../services/api';

export const mockApi = nock(api.defaults.baseURL);

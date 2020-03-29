import nock from 'nock';

const baseUrl = process.env.REACT_APP_BASE_API_URL;

if (!baseUrl) {
  throw new Error('REACT_APP_BASE_API_URL env is missing');
}

export const mockApi = nock(baseUrl);

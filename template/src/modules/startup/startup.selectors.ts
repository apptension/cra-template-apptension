import { prop } from 'ramda';

export const selectStartupDomain = prop<string, any>('startup');

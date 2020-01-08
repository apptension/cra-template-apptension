import { actionCreator, createImmutableReducer } from '../helpers';

const createAction = actionCreator('STARTUP');

export const startup = createAction('startup');

const INITIAL_STATE = {};

export const reducer = createImmutableReducer(INITIAL_STATE, {});

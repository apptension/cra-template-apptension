import { actionCreator, createImmutableReducer } from '../helpers';

const createAction = actionCreator('STARTUP');

export const startup = createAction<void>('startup');

export interface StartupState {}

const INITIAL_STATE: StartupState = {};

export const reducer = createImmutableReducer(INITIAL_STATE, {});

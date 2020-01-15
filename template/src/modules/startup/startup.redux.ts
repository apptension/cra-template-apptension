import { createImmutableReducer } from '../helpers';

export type StartupState = {};

export const INITIAL_STATE: StartupState = {};

export const reducer = createImmutableReducer(INITIAL_STATE, {});

import { combineReducers } from 'redux';

import { reducer as localesReducer, LocalesState } from './locales/locales.redux';
import { reducer as startupReducer, StartupState } from './startup/startup.redux';
import { reducer as usersReducer, UsersState } from './users/users.redux';
//<-- IMPORT MODULE REDUX -->

export type GlobalState = {
  locales: LocalesState;
  startup: StartupState;
  users: UsersState;
  //<-- INJECT MODULE STATE TYPE -->
};

export default function createReducer() {
  return combineReducers({
    locales: localesReducer,
    startup: startupReducer,
    users: usersReducer,
    //<-- INJECT MODULE REDUCER -->
  });
}

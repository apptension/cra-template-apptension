import { createAction } from '@reduxjs/toolkit';

export const actionCreator = prefix => actionName => createAction([prefix, actionName].join('/'));

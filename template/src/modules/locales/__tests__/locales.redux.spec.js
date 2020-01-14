import Immutable from 'seamless-immutable';

import { reducer as localesReducer, LocalesActions, LocalesTypes } from '../locales.redux';

describe('Locales: redux', () => {
  const defaultState = Immutable({
    language: null,
  });

  describe('reducer', () => {
    it('should return initial state', () => {
      expect(localesReducer(undefined, {})).toEqual(defaultState);
    });

    it('should return state on unknown action', () => {
      expect(localesReducer(defaultState, { type: 'unknown-action' })).toEqual(defaultState);
    });

    it('should set data on SET_LANGUAGE', () => {
      const language = 'en';
      const expectedState = defaultState.set('language', language);
      const action = { language, type: LocalesTypes.SET_LANGUAGE };
      expect(localesReducer(defaultState, action)).toEqual(expectedState);
    });
  });

  describe('setLanguage', () => {
    it('should return correct type', () => {
      expect(LocalesActions.setLanguage().type).toEqual(LocalesTypes.SET_LANGUAGE);
    });

    it('should return proper payload', () => {
      const language = 'en';
      expect(LocalesActions.setLanguage(language).language).toEqual(language);
    });
  });
});

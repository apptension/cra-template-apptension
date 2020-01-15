import { reducer as localesReducer, LocalesState } from '../locales.redux';
import { localesActions } from '..';

describe('Locales: redux', () => {
  const defaultState: LocalesState = {
    language: null,
  };

  describe('reducer', () => {
    it('should return initial state', () => {
      expect(localesReducer(undefined, { type: 'unknown-action' })).toEqual(defaultState);
    });

    it('should return state on unknown action', () => {
      expect(localesReducer(defaultState, { type: 'unknown-action' })).toEqual(defaultState);
    });

    it('should set data on SET_LANGUAGE', () => {
      const language = 'en';
      const expectedState = { ...defaultState, language };
      const action = localesActions.setLanguage(language);
      expect(localesReducer(defaultState, action)).toEqual(expectedState);
    });
  });

  describe('setLanguage', () => {
    it('should return correct type', () => {
      expect(localesActions.setLanguage().type).toEqual(localesActions.setLanguage.toString());
    });

    it('should return proper payload', () => {
      const language = 'en';
      expect(localesActions.setLanguage(language).payload).toEqual(language);
    });
  });
});

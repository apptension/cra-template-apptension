import { reducer as localesReducer, setLanguage } from '../locales.redux';

describe('Locales: redux', () => {
  const defaultState = {
    language: null,
  };

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
      const action = setLanguage(language);
      expect(localesReducer(defaultState, action)).toEqual(expectedState);
    });
  });

  describe('setLanguage', () => {
    it('should return correct type', () => {
      expect(setLanguage().type).toEqual(setLanguage.toString());
    });

    it('should return proper payload', () => {
      const language = 'en';
      expect(setLanguage(language).payload).toEqual(language);
    });
  });
});

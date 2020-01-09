import { selectLocalesLanguage } from '../locales.selectors';

describe('Locales: selectors', () => {
  const language = 'en';

  const defaultState = {
    locales: {
      language,
    },
  };

  describe('selectLocalesLanguage', () => {
    it('should select language', () => {
      expect(selectLocalesLanguage(defaultState)).toEqual(language);
    });
  });
});

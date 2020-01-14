import Immutable from 'seamless-immutable';

import { selectLocalesLanguage } from '../locales.selectors';

describe('Locales: selectors', () => {
  const language = 'en';

  const defaultState = Immutable({
    locales: {
      language,
    },
  });

  describe('selectLocalesLanguage', () => {
    it('should select language', () => {
      expect(selectLocalesLanguage(defaultState)).toEqual(language);
    });
  });
});

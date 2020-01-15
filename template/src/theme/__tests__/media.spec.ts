import { responsiveValue } from '../media';

describe('theme/media', () => {
  describe('responsiveValue', () => {
    const getValue = responsiveValue(100, { desktop: 200 });

    describe('when no breakpoint matches', () => {
      it('should return default value', () => {
        jest.spyOn(window, 'matchMedia').mockReturnValue({ matches: false } as MediaQueryList);
        const val = getValue();
        expect(val).toBe(100);
      });
    });

    describe('when specified breakpoint mathces', () => {
      it('should return provided breakpoint value', () => {
        jest.spyOn(window, 'matchMedia').mockImplementation(query => {
          const size = query.replace(/[^0-9]+/gi, '');
          return { matches: parseInt(size, 10) >= 1280 } as MediaQueryList;
        });
        const val = getValue();

        expect(val).toBe(200);
      });
    });

    describe('when lower than specified breakpoint matches', () => {
      it('should return provided breakpoint value', () => {
        jest.spyOn(window, 'matchMedia').mockImplementation(query => {
          const size = query.replace(/[^0-9]+/gi, '');
          return { matches: parseInt(size, 10) >= 768 } as MediaQueryList;
        });

        const val = getValue();
        expect(val).toBe(200);
      });
    });
  });
});

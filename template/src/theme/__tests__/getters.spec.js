import {
  fromTheme,
  styleWhenEquals,
  styleWhenTrue,
  themeColor,
  themeColorWithOpacity,
  themeFont,
  themeSize,
  themeZIndex,
} from '../getters';

describe('theme/getters', () => {
  const defaultProps = {
    theme: {
      foo: 'bar',
      color: {
        black: '#000000',
      },
      font: {
        primary: 'primaryFont',
      },
      size: {
        header: 'headerSize',
      },
      zIndex: {
        header: 5,
      },
    },
  };

  describe('fromTheme', () => {
    it('should return theme property', () => {
      expect(fromTheme('foo')(defaultProps)).toBe('bar');
    });

    it('should return deep property when path is provided', () => {
      expect(fromTheme(['color', 'black'])(defaultProps)).toBe('#000000');
    });
  });

  describe('themeColor', () => {
    it('should return theme color', () => {
      expect(themeColor('black')(defaultProps)).toBe('#000000');
    });
  });

  describe('themeZIndex', () => {
    it('should return theme zIndex', () => {
      expect(themeZIndex('header')(defaultProps)).toBe(5);
    });
  });

  describe('themeColorWithOpacity', () => {
    it('should return theme color converted into rgba format with opacity applied', () => {
      const selection = themeColorWithOpacity('black', 0.5)(defaultProps);
      expect(selection).toBe('rgba(0, 0, 0, 0.5)');
    });
  });

  describe('themeFont', () => {
    it('should return theme font', () => {
      expect(themeFont('primary')(defaultProps)).toBe('primaryFont');
    });
  });

  describe('themeSize', () => {
    it('should return theme size', () => {
      expect(themeSize('header')(defaultProps)).toBe('headerSize');
    });
  });

  describe('styleWhenTrue', () => {
    it('should return styles when prop equals true', () => {
      const expectedStyles = 'styles-content';
      const value = styleWhenTrue('test', expectedStyles)({ theme: { test: true } });

      expect(value).toEqual(expectedStyles);
    });

    it('should return styles when prop equals true', () => {
      const value = styleWhenTrue('test', 'styles-content')({ theme: { test: false } });
      expect(value).toBeNull;
    });
  });

  describe('styleWhenEquals', () => {
    it('should return styles when prop equals expected value', () => {
      const expectedStyles = 'styles-content';
      const expectedPropValue = 'prop-value';
      const value = styleWhenEquals('test', expectedPropValue, expectedStyles)({ theme: { test: expectedPropValue } });

      expect(value).toEqual(expectedStyles);
    });

    it('should return null when prop doesnt equal expected value', () => {
      const expectedPropValue = 'prop-value';
      const value = styleWhenEquals(
        'test',
        expectedPropValue,
        'styles-content'
      )({
        theme: { test: 'unexpected-value' },
      });
      expect(value).toBeNull;
    });
  });
});

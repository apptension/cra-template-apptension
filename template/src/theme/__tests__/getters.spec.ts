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
import { Color, Font, Size, ZIndex } from '../theme.constants';

describe('theme/getters', () => {
  const theme = {
    theme: {
      foo: 'bar',
      color: {
        [Color.BLACK]: '#000000',
      },
      font: {
        [Font.PRIMARY]: 'primaryFont',
      },
      size: {
        [Size.HEADER]: 'headerSize',
      },
      zIndex: {
        [ZIndex.HEADER]: 5,
      },
    },
  };

  describe('fromTheme', () => {
    it('should return theme property', () => {
      expect(fromTheme('foo')(theme)).toBe('bar');
    });

    it('should return deep property when path is provided', () => {
      expect(fromTheme(['color', Color.BLACK])(theme)).toBe('#000000');
    });
  });

  describe('themeColor', () => {
    it('should return theme color', () => {
      expect(themeColor(Color.BLACK)(theme)).toBe('#000000');
    });
  });

  describe('themeZIndex', () => {
    it('should return theme zIndex', () => {
      expect(themeZIndex(ZIndex.HEADER)(theme)).toBe(5);
    });
  });

  describe('themeColorWithOpacity', () => {
    it('should return theme color converted into rgba format with opacity applied', () => {
      const selection = themeColorWithOpacity(Color.BLACK, 0.5)(theme);
      expect(selection).toBe('rgba(0, 0, 0, 0.5)');
    });
  });

  describe('themeFont', () => {
    it('should return theme font', () => {
      expect(themeFont(Font.PRIMARY)(theme)).toBe('primaryFont');
    });
  });

  describe('themeSize', () => {
    it('should return theme size', () => {
      expect(themeSize(Size.HEADER)(theme)).toBe('headerSize');
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
      expect(value).toBeNull();
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
      expect(value).toBeNull();
    });
  });
});

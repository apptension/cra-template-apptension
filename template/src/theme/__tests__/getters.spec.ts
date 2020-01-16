import { DefaultTheme } from 'styled-components';
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
  interface MockTheme extends DefaultTheme {
    foo?: any;
    testBool?: boolean;
    testString?: string;
  }

  const theme = {
    theme: {
      foo: 'bar',
      colors: {
        [Color.BLACK]: '#000000',
      },
      fonts: {
        [Font.PRIMARY]: 'primaryFont',
      },
      sizes: {
        [Size.HEADER]: 'headerSize',
      },
      zIndexes: {
        [ZIndex.HEADER]: 5,
      },
    },
  } as { theme: MockTheme };

  describe('fromTheme', () => {
    it('should return theme property', () => {
      expect(fromTheme('foo')(theme)).toBe('bar');
    });

    it('should return deep property when path is provided', () => {
      expect(fromTheme(['colors', Color.BLACK])(theme)).toBe('#000000');
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
      const value = styleWhenTrue<MockTheme>(({ testBool }) => testBool, expectedStyles)({ theme: { testBool: true } });

      expect(value).toEqual(expectedStyles);
    });

    it('should return nothing when prop equals false', () => {
      const value = styleWhenTrue<MockTheme>(
        ({ testBool }) => testBool,
        'styles-content'
      )({ theme: { testBool: false } });
      expect(value).toBeNull();
    });
  });

  describe('styleWhenEquals', () => {
    it('should return styles when prop equals expected value', () => {
      const expectedStyles = 'styles-content';
      const expectedPropValue = 'prop-value';
      const value = styleWhenEquals<MockTheme>(
        ({ testString }) => testString,
        expectedPropValue,
        expectedStyles
      )({ theme: { testString: expectedPropValue } });

      expect(value).toEqual(expectedStyles);
    });

    it('should return null when prop doesnt equal expected value', () => {
      const expectedPropValue = 'prop-value';
      const value = styleWhenEquals<MockTheme>(
        ({ testString }) => testString,
        expectedPropValue,
        'styles-content'
      )({
        theme: { testString: 'unexpected-value' },
      });
      expect(value).toBeNull();
    });
  });
});

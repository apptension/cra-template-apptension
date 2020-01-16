import color from 'color';
import { DefaultTheme, ThemeProps } from 'styled-components';
import { append, compose, flip, identity, ifElse, concat, path, always } from 'ramda';
import { renderWhenTrue } from '../shared/utils/rendering';
import { Border, Color, Font, Shadow, Size, ZIndex } from './theme.constants';

type ThemeGetter<P = string, T extends DefaultTheme = DefaultTheme> = (propName: P) => (props: { theme: T }) => string;

const themeGetter = <T>(path: string[]) => compose(fromTheme, concat(path), ensureArray) as ThemeGetter<T>;
const ensureArray = ifElse(Array.isArray, identity, flip(append)([]));

export const fromTheme = compose(path, concat(['theme']), ensureArray);
export const themeColor = themeGetter<Color>(['colors']);
export const themeBorder = themeGetter<Border>(['borders']);
export const themeShadow = themeGetter<Shadow>(['shadows']);
export const themeZIndex = themeGetter<ZIndex>(['zIndexes']);
export const themeFont = themeGetter<Font>(['fonts']);
export const themeSize = themeGetter<Size>(['sizes']);
export const themeColorWithOpacity = (colorId: Color, alpha: number) =>
  compose(
    value =>
      color(value)
        .alpha(alpha)
        .string(),
    themeColor(colorId)
  );

type ThemeValueGetter<T extends DefaultTheme = DefaultTheme, V = any> = (theme: T) => V;

export const styleWhenTrue = <T extends DefaultTheme = DefaultTheme>(
  getThemeVal: ThemeValueGetter<T, boolean>,
  styles: any
) => compose(renderWhenTrue(always(styles)), ({ theme }: ThemeProps<T>) => getThemeVal(theme));

export const styleWhenEquals = <T extends DefaultTheme = DefaultTheme>(
  getThemeVal: ThemeValueGetter<T, any>,
  expectedValue: any,
  styles: any
) => compose(renderWhenTrue(always(styles)), ({ theme }: ThemeProps<T>) => getThemeVal(theme) === expectedValue);

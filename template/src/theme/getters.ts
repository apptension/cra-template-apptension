import color from 'color';
import { DefaultTheme } from 'styled-components';
import { append, compose, flip, identity, ifElse, concat, path, curry, pathEq, always } from 'ramda';
import { renderWhenTrue } from '../shared/utils/rendering';
import { Border, Color, Font, Shadow, Size, ZIndex } from './theme.constants';

type ThemeGetter<T = string> = (propName: T) => (props: { theme: DefaultTheme }) => string;

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

export const styleWhenTrue = curry((propName, string) =>
  compose(renderWhenTrue(always(string)), pathEq(['theme', propName], true))
);

export const styleWhenEquals = curry((propName, value, string) =>
  compose(renderWhenTrue(always(string)), pathEq(['theme', propName], value))
);

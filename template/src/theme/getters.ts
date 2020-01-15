import color from 'color';
import { append, compose, flip, identity, ifElse, concat, path, curry, pathEq, always } from 'ramda';
import { renderWhenTrue } from '../shared/utils/rendering';
import { Border, Color, Font, Shadow, Size, ZIndex } from './theme.constants';
import { Theme } from './theme';

type ThemeGetter<T = string> = (propName: T) => (theme: Theme) => string;

const themeGetter = <T>(path: string[]) => compose(fromTheme, concat(path), ensureArray) as ThemeGetter<T>;
const ensureArray = ifElse(Array.isArray, identity, flip(append)([]));

export const fromTheme = compose(path, concat(['theme']), ensureArray);
export const themeColor = themeGetter<Color>(['color']);
export const themeBorder = themeGetter<Border>(['border']);
export const themeShadow = themeGetter<Shadow>(['shadow']);
export const themeZIndex = themeGetter<ZIndex>(['zIndex']);
export const themeFont = themeGetter<Font>(['font']);
export const themeSize = themeGetter<Size>(['size']);
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

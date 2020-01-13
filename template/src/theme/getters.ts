import color from 'color';
import { append, compose, flip, identity, ifElse, concat, path, curry, pathEq, always } from 'ramda';
import { renderWhenTrue } from '../shared/utils/rendering';
import { Border, Color, Font, Shadow, Size, ZIndex } from './theme.constants';

type ThemeGetter<T = string> = (propName: T) => (theme: object) => string;

const ensureArray = ifElse(Array.isArray, identity, flip(append)([]));

export const fromTheme = compose(path, concat(['theme']), ensureArray);

export const themeColor = compose(fromTheme, concat(['color']), ensureArray) as ThemeGetter<Color>;

export const themeBorder = compose(fromTheme, concat(['border']), ensureArray) as ThemeGetter<Border>;

export const themeShadow = compose(fromTheme, concat(['shadow']), ensureArray) as ThemeGetter<Shadow>;

export const themeZIndex = compose(fromTheme, concat(['zIndex']), ensureArray) as ThemeGetter<ZIndex>;

export const themeColorWithOpacity = (colorId: Color, alpha: number) =>
  compose(
    value =>
      color(value)
        .alpha(alpha)
        .string(),
    themeColor(colorId)
  );

export const themeFont = compose(fromTheme, concat(['font']), ensureArray) as ThemeGetter<Font>;

export const themeSize = compose(fromTheme, concat(['size']), ensureArray) as ThemeGetter<Size>;

export const styleWhenTrue = curry((propName, string) =>
  compose(renderWhenTrue(always(string)), pathEq(['theme', propName], true))
);

export const styleWhenEquals = curry((propName, value, string) =>
  compose(renderWhenTrue(always(string)), pathEq(['theme', propName], value))
);

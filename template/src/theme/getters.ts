import color from 'color';
import { append, compose, flip, identity, ifElse, concat, path, curry, pathEq, always, Arity1Fn } from 'ramda';
import { renderWhenTrue } from '../shared/utils/rendering';

type ThemeGetter = (propName: string) => (theme: object) => string;

const ensureArray = ifElse(Array.isArray, identity, flip(append)([]));

export const fromTheme = compose(path, concat(['theme']), ensureArray);

export const themeColor = compose(fromTheme, concat(['color']), ensureArray) as ThemeGetter;

export const themeBorder = compose(fromTheme, concat(['border']), ensureArray) as ThemeGetter;

export const themeShadow = compose(fromTheme, concat(['shadow']), ensureArray) as ThemeGetter;

export const themeZIndex = compose(fromTheme, concat(['zIndex']), ensureArray) as ThemeGetter;

export const themeColorWithOpacity = (colorId: string, alpha: number) =>
  compose(
    value =>
      color(value)
        .alpha(alpha)
        .string(),
    themeColor(colorId)
  );

export const themeFont = compose(fromTheme, concat(['font']), ensureArray) as ThemeGetter;

export const themeSize = compose(fromTheme, concat(['size']), ensureArray) as ThemeGetter;

export const styleWhenTrue = curry((propName, string) =>
  compose(renderWhenTrue(always(string)), pathEq(['theme', propName], true))
);

export const styleWhenEquals = curry((propName, value, string) =>
  compose(renderWhenTrue(always(string)), pathEq(['theme', propName], value))
);

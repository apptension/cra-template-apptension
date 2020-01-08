import color from 'color';
import { append, compose, flip, identity, ifElse, concat, path, curry, pathEq, always } from 'ramda';
import { renderWhenTrue } from '../shared/utils/rendering';

const ensureArray = ifElse(Array.isArray, identity, flip(append)([]));

export const fromTheme = compose(path, concat(['theme']), ensureArray);

export const themeColor = compose(fromTheme, concat(['color']), ensureArray);

export const themeBorder = compose(fromTheme, concat(['border']), ensureArray);

export const themeShadow = compose(fromTheme, concat(['shadow']), ensureArray);

export const themeZIndex = compose(fromTheme, concat(['zIndex']), ensureArray);

export const themeColorWithOpacity = (colorId, alpha) =>
  compose(
    value =>
      color(value)
        .alpha(alpha)
        .string(),
    themeColor(colorId)
  );

export const themeFont = compose(fromTheme, concat(['font']), ensureArray);

export const themeSize = compose(fromTheme, concat(['size']), ensureArray);

export const styleWhenTrue = curry((propName, string) =>
  compose(renderWhenTrue(always(string)), pathEq(['theme', propName], true))
);

export const styleWhenEquals = curry((propName, value, string) =>
  compose(renderWhenTrue(always(string)), pathEq(['theme', propName], value))
);

import { map } from 'ramda';
import { DefaultTheme } from 'styled-components';

const deepMap = (obj: object, fn: Function): object =>
  // @ts-ignore
  map(val => (typeof val === 'object' ? deepMap(val, fn) : fn(val)), obj);
const parseThemeValue = (value: string | Function): object => (typeof value !== 'function' ? value : value());

export default (theme: object): DefaultTheme => deepMap(theme, parseThemeValue);

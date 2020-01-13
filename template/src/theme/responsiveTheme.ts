import { map } from 'ramda';

const deepMap = (obj: object, fn: Function): object =>
  // @ts-ignore
  map(val => (typeof val === 'object' ? deepMap(val, fn) : fn(val)), obj);
const parseThemeValue = (value: string | Function): object => (typeof value !== 'function' ? value : value());

export default (theme: object): object => deepMap(theme, parseThemeValue);

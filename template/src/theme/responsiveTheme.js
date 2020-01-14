import { map } from 'ramda';

const deepMap = (obj, fn) => map(val => (typeof val === 'object' ? deepMap(val, fn) : fn(val)), obj);
const parseThemeValue = value => (typeof value !== 'function' ? value : value());

export default theme => deepMap(theme, parseThemeValue);

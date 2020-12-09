import { DefaultTheme } from 'styled-components';

import * as border from './border';
import * as color from './color';
import { fontFamily, fontWeight } from './font';
import * as shadow from './shadow';
import * as size from './size';
import * as zIndex from './zIndex';
import { Breakpoint, responsiveValue } from './media';

export const activeBreakpoint: (props: { theme: DefaultTheme }) => Breakpoint = responsiveValue(Breakpoint.MOBILE, {
  [Breakpoint.DESKTOP_FULL]: Breakpoint.DESKTOP_FULL,
  [Breakpoint.DESKTOP_WIDE]: Breakpoint.DESKTOP_WIDE,
  [Breakpoint.DESKTOP]: Breakpoint.DESKTOP,
  [Breakpoint.TABLET]: Breakpoint.TABLET,
});

export const theme = {
  activeBreakpoint,
};

export { border, color, fontFamily, fontWeight, shadow, size, zIndex };

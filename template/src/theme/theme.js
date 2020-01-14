import { css } from 'styled-components';
import { Breakpoints, responsiveValue } from './media';
import { Border, Color, Font, Shadow, Size, ZIndex } from './theme.constants';

export const color = {
  [Color.WHITE]: '#ffffff',
  [Color.BLACK]: '#000000',
  [Color.BORDER]: '#80809B',
  [Color.DISABLED]: '#DDDDE0',
  [Color.PRIMARY]: '#42f272',
  [Color.SECONDARY]: '#2249f9',
  [Color.ERROR]: '#fa7265',
};

export const font = {
  [Font.PRIMARY]: 'OpenSans',
};

export const border = {
  [Border.REGULAR]: `1px solid ${color.border}`,
};

export const shadow = {
  [Shadow.PRIMARY]: css`
    box-shadow: 10px 10px 0 rgba(0, 0, 55, 0.1);
  `,
};

export const size = {
  [Size.HEADER]: 80,
  [Size.CONTENT_HORIZONTAL_PADDING]: responsiveValue(16, { [Breakpoints.TABLET]: 24 }),
  [Size.CONTENT_VERTICAL_PADDING]: responsiveValue(8, { [Breakpoints.TABLET]: 16 }),
};

export const activeBreakpoint = responsiveValue(Breakpoints.MOBILE, {
  [Breakpoints.DESKTOP_FULL]: Breakpoints.DESKTOP_FULL,
  [Breakpoints.DESKTOP_WIDE]: Breakpoints.DESKTOP_WIDE,
  [Breakpoints.DESKTOP]: Breakpoints.DESKTOP,
  [Breakpoints.TABLET]: Breakpoints.TABLET,
});

export const zIndex = {
  [ZIndex.CONTENT]: 0,
  [ZIndex.HEADER]: 5,
  [ZIndex.OVERLAY]: 10,
};

export default {
  color,
  font,
  border,
  shadow,
  size,
  zIndex,
  activeBreakpoint,
};

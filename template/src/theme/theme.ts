import { css } from 'styled-components';
import { Breakpoint, responsiveValue } from './media';
import { Border, Color, Font, Shadow, Size, ZIndex } from './theme.constants';

export const colors = {
  [Color.WHITE]: '#ffffff',
  [Color.BLACK]: '#000000',
  [Color.BORDER]: '#80809B',
  [Color.DISABLED]: '#DDDDE0',
  [Color.PRIMARY]: '#42f272',
  [Color.SECONDARY]: '#2249f9',
  [Color.ERROR]: '#fa7265',
};

export const fonts = {
  [Font.PRIMARY]: 'OpenSans',
};

export const borders = {
  [Border.REGULAR]: `1px solid ${colors[Color.BORDER]}`,
};

export const shadows = {
  [Shadow.PRIMARY]: css`
    box-shadow: 10px 10px 0 rgba(0, 0, 55, 0.1);
  `,
};

export const sizes = {
  [Size.HEADER]: 80,
  [Size.CONTENT_HORIZONTAL_PADDING]: responsiveValue(16, { [Breakpoint.TABLET]: 24 }),
  [Size.CONTENT_VERTICAL_PADDING]: responsiveValue(8, { [Breakpoint.TABLET]: 16 }),
};

export const activeBreakpoint = responsiveValue(Breakpoint.MOBILE, {
  [Breakpoint.DESKTOP_FULL]: Breakpoint.DESKTOP_FULL,
  [Breakpoint.DESKTOP_WIDE]: Breakpoint.DESKTOP_WIDE,
  [Breakpoint.DESKTOP]: Breakpoint.DESKTOP,
  [Breakpoint.TABLET]: Breakpoint.TABLET,
});

export const zIndexes = {
  [ZIndex.CONTENT]: 0,
  [ZIndex.HEADER]: 5,
  [ZIndex.OVERLAY]: 10,
};

export type ThemeMap<T extends string | number> = Record<T, any>;

export interface Theme {
  colors?: ThemeMap<Color>;
  fonts?: ThemeMap<Font>;
  borders?: ThemeMap<Border>;
  shadows?: ThemeMap<Shadow>;
  sizes?: ThemeMap<Size>;
  zIndexes?: ThemeMap<ZIndex>;
  activeBreakpoint?: Breakpoint;
}

const theme = {
  colors,
  fonts,
  borders,
  shadows,
  sizes,
  zIndexes,
  activeBreakpoint,
};

export default theme;

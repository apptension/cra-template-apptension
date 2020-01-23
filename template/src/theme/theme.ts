import { css, DefaultTheme } from 'styled-components';
import { Breakpoint, responsiveValue } from './media';
import { Border, Color, Font, Shadow, Size, ZIndex } from './theme.constants';

type Producer<T> = (...args: any[]) => T;
export type ThemeMap<T extends string | number, V = any> = Record<T, V>;
export type ThemeMapDef<T extends string | number, V = any> = Record<T, V | Producer<V>>;

declare module 'styled-components' {
  export interface DefaultTheme {
    colors?: ThemeMap<Color, string>;
    fonts?: ThemeMap<Font, string>;
    borders?: ThemeMap<Border, string>;
    shadows?: ThemeMap<Shadow>;
    sizes?: ThemeMap<Size>;
    zIndexes?: ThemeMap<ZIndex>;
    activeBreakpoint?: Breakpoint;
  }
}

export const colors: ThemeMapDef<Color, string> = {
  [Color.WHITE]: '#ffffff',
  [Color.BLACK]: '#000000',
  [Color.BORDER]: '#80809B',
  [Color.DISABLED]: '#DDDDE0',
  [Color.PRIMARY]: '#42f272',
  [Color.SECONDARY]: '#2249f9',
  [Color.ERROR]: '#fa7265',
};

export const fonts: ThemeMapDef<Font, string> = {
  [Font.PRIMARY]: 'OpenSans',
};

export const borders: ThemeMapDef<Border, string> = {
  [Border.REGULAR]: `1px solid ${colors[Color.BORDER]}`,
};

export const shadows: ThemeMapDef<Shadow> = {
  [Shadow.PRIMARY]: css`
    box-shadow: 10px 10px 0 rgba(0, 0, 55, 0.1);
  `,
};

export const sizes: ThemeMapDef<Size, number> = {
  [Size.HEADER]: 80,
  [Size.CONTENT_HORIZONTAL_PADDING]: responsiveValue(16, { [Breakpoint.TABLET]: 24 }),
  [Size.CONTENT_VERTICAL_PADDING]: responsiveValue(8, { [Breakpoint.TABLET]: 16 }),
};

export const activeBreakpoint: (props: { theme: DefaultTheme }) => Breakpoint = responsiveValue(Breakpoint.MOBILE, {
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

export const theme = {
  colors,
  fonts,
  borders,
  shadows,
  sizes,
  zIndexes,
  activeBreakpoint,
};

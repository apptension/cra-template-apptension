import 'styled-components'
import { Border, Color, Font, Shadow, Size, ZIndex } from './theme.constants';
import { Breakpoint } from './media';
import { DefaultTheme } from 'styled-components';
import { ThemeMap } from './theme';

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

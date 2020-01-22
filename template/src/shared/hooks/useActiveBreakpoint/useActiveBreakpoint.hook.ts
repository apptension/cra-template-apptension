import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Breakpoint } from '../../../theme/media';

export const useActiveBreakpoint = (): Breakpoint => {
  const theme = useContext(ThemeContext);
  return theme.activeBreakpoint;
};

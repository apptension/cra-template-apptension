import { DefaultTheme, ThemeContext } from 'styled-components';
import { useContext } from 'react';

export const useTheme = (): DefaultTheme => {
  return useContext(ThemeContext);
};

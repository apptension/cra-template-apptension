import React, { useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import responsiveTheme from '../../../theme/responsiveTheme';
import { useWindowListener } from '../../hooks/useWindowListener';

const parseTheme = (theme: object): DefaultTheme => responsiveTheme(theme);

export interface ResponsiveThemeProviderProps {
  theme: object;
  children: React.ReactNode;
}

export const ResponsiveThemeProvider = ({ theme: themeDefinition, children }: ResponsiveThemeProviderProps) => {
  const [theme, setTheme] = useState(parseTheme(themeDefinition));
  const handleResize = () => setTheme(parseTheme(themeDefinition));
  useWindowListener('resize', handleResize, { throttle: 200 });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

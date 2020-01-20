import React, { FC, useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import responsiveTheme from '../../../theme/responsiveTheme';
import { useWindowListener } from '../../hooks/useWindowListener';

const parseTheme = (theme: object): DefaultTheme => responsiveTheme(theme);

export interface ResponsiveThemeProviderProps {
  theme: object;
  children: React.ReactNode;
}

export const ResponsiveThemeProvider: FC<ResponsiveThemeProviderProps> = ({ theme: themeDefinition, children }) => {
  const [theme, setTheme] = useState(parseTheme(themeDefinition));
  const handleResize = () => setTheme(parseTheme(themeDefinition));
  useWindowListener('resize', handleResize, { throttle: 200 });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

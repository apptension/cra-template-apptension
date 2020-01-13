import { createGlobalStyle } from 'styled-components';
import { Font } from './theme.constants';
import { themeFont } from './getters';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: ${themeFont(Font.PRIMARY)};
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

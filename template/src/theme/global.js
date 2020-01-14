import { createGlobalStyle } from 'styled-components';
import { Font } from './theme.constants';
import { font } from './theme';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: ${font[Font.PRIMARY]};
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

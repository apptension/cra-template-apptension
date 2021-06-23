import { createGlobalStyle } from 'styled-components';

import { fontFamily } from './font';
import { outline } from "./border";

export const NO_SCROLL_CLASSNAME = 'noScroll';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: ${fontFamily.primary};
  }

  body.${NO_SCROLL_CLASSNAME} {
    overflow: hidden;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  *:focus {
    outline: ${outline};
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  p {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

import styled from 'styled-components';

import { Color, Font } from './theme.constants';
import { themeColor, themeFont } from './getters';

export const H1 = styled.h1`
  font-family: ${themeFont(Font.PRIMARY)};
  font-weight: bold;
  color: ${themeColor(Color.BLACK)};
`;

export const H2 = styled.h2`
  font-family: ${themeFont(Font.PRIMARY)};
  font-weight: bold;
  color: ${themeColor(Color.BLACK)};
`;

export const Link = styled.a`
  text-decoration: underline;
`;

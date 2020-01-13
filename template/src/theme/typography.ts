import styled from 'styled-components';

import { font, color } from './theme';
import { Color, Font } from './theme.constants';

export const H1 = styled.h1`
  font-family: ${font[Font.PRIMARY]};
  font-weight: bold;
  color: ${color[Color.BLACK]};
`;

export const H2 = styled.h2`
  font-family: ${font[Font.PRIMARY]};
  font-weight: bold;
  color: ${color[Color.BLACK]};
`;

export const Link = styled.a`
  text-decoration: underline;
`;

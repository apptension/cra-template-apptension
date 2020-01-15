import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { empty } from 'ramda';

import { Container } from './button.styles';
import { ButtonType } from './button.constants';

export interface ButtonComponentProps extends React.HTMLAttributes<HTMLElement> {
  mode?: ButtonType;
}

export const ButtonComponent: FC<ButtonComponentProps> = ({
  children,
  className,
  mode = ButtonType.PRIMARY,
  onClick = empty,
  disabled,
  ...other
}) => (
  <ThemeProvider theme={{ mode, disabled }}>
    <Container onClick={onClick} className={className} disabled={disabled} {...other}>
      {children}
    </Container>
  </ThemeProvider>
);

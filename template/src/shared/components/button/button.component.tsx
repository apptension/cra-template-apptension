import React, { ButtonHTMLAttributes, FC } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { empty } from 'ramda';

import { Container } from './button.styles';
import { ButtonType } from './button.constants';

export interface ButtonComponentProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  mode?: ButtonType;
}

export interface ButtonTheme extends DefaultTheme {
  mode: ButtonType;
  disabled: boolean;
}

export const ButtonComponent: FC<ButtonComponentProps> = ({
  children,
  className,
  mode = ButtonType.PRIMARY,
  onClick = empty,
  disabled,
  ...other
}) => (
  <ThemeProvider theme={{ mode, disabled } as ButtonTheme}>
    <Container onClick={onClick} className={className} disabled={disabled} {...other}>
      {children}
    </Container>
  </ThemeProvider>
);

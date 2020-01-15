import React, { FC, MouseEventHandler, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { empty } from 'ramda';

import { Container } from './button.styles';
import { ButtonType } from './button.constants';

interface ButtonComponentProps {
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  mode?: ButtonType;
  onClick?: MouseEventHandler;
}

export const ButtonComponent: FC<ButtonComponentProps> = ({
  children,
  className,
  disabled,
  mode = ButtonType.PRIMARY,
  onClick = empty,
  ...other
}) => (
  <ThemeProvider theme={{ mode, disabled }}>
    <Container onClick={onClick} className={className} disabled={disabled} {...other}>
      {children}
    </Container>
  </ThemeProvider>
);

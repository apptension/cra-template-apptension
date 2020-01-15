import React, { ReactNode, MouseEventHandler, FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { empty } from 'ramda';

import { Container } from './button.styles';
import { BUTTON_TYPES, BUTTON_TYPE_PRIMARY } from './button.constants';

interface ButtonComponentProps {
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  mode?: string;
  onClick?: MouseEventHandler;
}

export const ButtonComponent: FC<ButtonComponentProps> = ({
  children,
  className,
  disabled,
  mode,
  onClick,
  ...other
}) => (
  <ThemeProvider theme={{ mode, disabled }}>
    <Container onClick={onClick} className={className} disabled={disabled} {...other}>
      {children}
    </Container>
  </ThemeProvider>
);

ButtonComponent.defaultProps = {
  mode: BUTTON_TYPE_PRIMARY,
  onClick: empty,
};

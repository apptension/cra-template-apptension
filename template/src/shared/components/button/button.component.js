import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { empty } from 'ramda';

import { Container } from './button.styles';
import { BUTTON_TYPES, BUTTON_TYPE_PRIMARY } from './button.constants';

export const Button = ({ children, className, disabled, mode, onClick, ...other }) => (
  <ThemeProvider theme={{ mode, disabled }}>
    <Container onClick={onClick} className={className} disabled={disabled} {...other}>
      {children}
    </Container>
  </ThemeProvider>
);

Button.propTypes = {
  children: PropTypes.any,
  className: PropTypes.any,
  disabled: PropTypes.bool,
  mode: PropTypes.oneOf(BUTTON_TYPES),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  mode: BUTTON_TYPE_PRIMARY,
  onClick: empty,
};

import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { BUTTON_TYPE_PRIMARY, BUTTON_TYPE_SECONDARY } from './button.constants';
import { styleWhenTrue, themeBorder, themeColor, themeSize } from '../../../theme/getters';
import { Color, Size } from '../../../theme/theme.constants';

const primaryButtonStyle = css`
  background: ${themeColor(Color.PRIMARY)};
`;

const secondaryButtonStyle = css`
  background: ${themeColor(Color.SECONDARY)};
`;

const disabledButtonStyle = css`
  background: ${themeColor(Color.DISABLED)};
  color: ${theme('mode', {
    [BUTTON_TYPE_PRIMARY]: themeColor(Color.BLACK),
    [BUTTON_TYPE_SECONDARY]: themeColor(Color.SECONDARY),
  })};
`;

export const Container = styled.button`
  padding: ${themeSize(Size.CONTENT_VERTICAL_PADDING)}px ${themeSize(Size.CONTENT_HORIZONTAL_PADDING)}px;
  border: ${themeBorder('regular')};
  ${theme('mode', {
    [BUTTON_TYPE_PRIMARY]: primaryButtonStyle,
    [BUTTON_TYPE_SECONDARY]: secondaryButtonStyle,
  })};
  ${styleWhenTrue('disabled', disabledButtonStyle)};
`;

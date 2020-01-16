import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { ButtonType } from './button.constants';
import { styleWhenTrue, themeBorder, themeColor, themeSize } from '../../../theme/getters';
import { Border, Color, Size } from '../../../theme/theme.constants';
import { ButtonTheme } from './button.component';

const primaryButtonStyle = css`
  background: ${themeColor(Color.PRIMARY)};
`;

const secondaryButtonStyle = css`
  background: ${themeColor(Color.SECONDARY)};
`;

const disabledButtonStyle = css`
  background: ${themeColor(Color.DISABLED)};
  color: ${theme('mode', {
    [ButtonType.PRIMARY]: themeColor(Color.BLACK),
    [ButtonType.SECONDARY]: themeColor(Color.SECONDARY),
  })};
`;

export const Container = styled.button`
  padding: ${themeSize(Size.CONTENT_VERTICAL_PADDING)}px ${themeSize(Size.CONTENT_HORIZONTAL_PADDING)}px;
  border: ${themeBorder(Border.REGULAR)};
  ${theme('mode', {
    [ButtonType.PRIMARY]: primaryButtonStyle,
    [ButtonType.SECONDARY]: secondaryButtonStyle,
  })};
  ${styleWhenTrue<ButtonTheme>(({ disabled }) => disabled, disabledButtonStyle)};
`;

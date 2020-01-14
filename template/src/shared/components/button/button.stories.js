import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from './button.component';
import { BUTTON_TYPE_SECONDARY } from './button.constants';

const defaultProps = {
  children: 'Press me',
  onClick: action('Clicked me'),
};

storiesOf('Button', module).add('Primary', () => <Button {...defaultProps} />);
storiesOf('Button', module).add('Primary - Disabled', () => <Button {...defaultProps} disabled />);
storiesOf('Button', module).add('Secondary', () => <Button {...defaultProps} mode={BUTTON_TYPE_SECONDARY} />);
storiesOf('Button', module).add('Secondary - Disabled', () => (
  <Button {...defaultProps} disabled mode={BUTTON_TYPE_SECONDARY} />
));

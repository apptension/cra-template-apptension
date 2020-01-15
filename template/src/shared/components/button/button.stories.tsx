import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';

import { ButtonComponent } from './button.component';
import { ButtonType } from './button.constants';

const knobs = {
  disabled: (defaultValue: boolean) => boolean('disabled', defaultValue),
  mode: (defaultValue: ButtonType) => select('mode', [ButtonType.PRIMARY, ButtonType.SECONDARY], defaultValue),
};

const renderComponent = (props = {}) => {
  const defaultProps = {
    children: 'Press me',
    onClick: action('Clicked me'),
    disabled: knobs.disabled(false),
    mode: knobs.mode(ButtonType.PRIMARY),
  };

  return <ButtonComponent {...defaultProps} {...props} />;
};

export default {
  title: 'Shared|Button',
  decorators: [withKnobs],
};

export const Primary = () => renderComponent();
export const PrimaryDisabled = () =>
  renderComponent({
    disabled: knobs.disabled(true),
  });

export const Secondary = () =>
  renderComponent({
    mode: knobs.mode(ButtonType.SECONDARY),
  });

export const SecondaryDisabled = () =>
  renderComponent({
    mode: knobs.mode(ButtonType.SECONDARY),
    disabled: knobs.disabled(true),
  });

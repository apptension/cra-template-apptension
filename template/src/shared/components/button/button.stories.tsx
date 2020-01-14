import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';

import { ButtonComponent } from './button.component';
import { BUTTON_TYPE_SECONDARY, BUTTON_TYPES, BUTTON_TYPE_PRIMARY } from './button.constants';

const knobs = {
  disabled: (defaultValue: boolean) => boolean('disabled', defaultValue),
  mode: (defaultValue: string) => select('mode', BUTTON_TYPES, defaultValue),
};

const renderComponent = (props = {}) => {
  const defaultProps = {
    children: 'Press me',
    onClick: action('Clicked me'),
    disabled: knobs.disabled(false),
    mode: knobs.mode(BUTTON_TYPE_PRIMARY),
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
    mode: knobs.mode(BUTTON_TYPE_SECONDARY),
  });

export const SecondaryDisabled = () =>
  renderComponent({
    mode: knobs.mode(BUTTON_TYPE_SECONDARY),
    disabled: knobs.disabled(true),
  });

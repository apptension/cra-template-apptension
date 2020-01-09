import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';

import { ButtonComponent } from './button.component';
import { BUTTON_TYPE_SECONDARY, BUTTON_TYPES, BUTTON_TYPE_PRIMARY } from './button.constants';

const knobs = {
  disabled: defaultValue => boolean('disabled', defaultValue),
  mode: defaultValue => select('mode', BUTTON_TYPES, defaultValue),
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

const stories = storiesOf('Shared|Button', module).addDecorator(withKnobs);

stories.add('Primary', () => renderComponent());
stories.add('Primary - Disabled', () =>
  renderComponent({
    disabled: knobs.disabled(true),
  })
);
stories.add('Secondary', () =>
  renderComponent({
    mode: knobs.mode(BUTTON_TYPE_SECONDARY),
  })
);
stories.add('Secondary - Disabled', () =>
  renderComponent({
    mode: knobs.mode(BUTTON_TYPE_SECONDARY),
    disabled: knobs.disabled(true),
  })
);

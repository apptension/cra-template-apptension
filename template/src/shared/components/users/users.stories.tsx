import React from 'react';
import { storiesOf } from '@storybook/react';

import { withRedux, withRouter } from '../../../../.storybook/decorators';
import { store } from '../../../../fixtures/store';
import { Users } from '.';

const renderComponent = (props = {}) => {
  const defaultProps = {};

  return <Users {...defaultProps} {...props} />;
};

const stories = storiesOf('Shared|Users', module)
  .addDecorator(withRedux(store))
  .addDecorator(withRouter());

stories.add('Default', () => renderComponent());

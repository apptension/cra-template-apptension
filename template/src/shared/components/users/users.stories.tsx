import React from 'react';

import { withRedux, withRouter } from '../../../../.storybook/decorators';
import { store } from '../../../../fixtures/store';
import { Users } from '.';

const renderComponent = (props = {}) => {
  const defaultProps = {};

  return <Users {...defaultProps} {...props} />;
};

export default {
  title: 'Shared|Users',
  component: Users,
  decorators: [withRedux(store), withRouter()],
};

export const Default = () => renderComponent();

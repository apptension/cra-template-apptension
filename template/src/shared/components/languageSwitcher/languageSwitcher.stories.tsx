import React from 'react';
import { withRouter, withRedux } from '../../../../.storybook/decorators';

import { store } from '../../../../fixtures/store';
import { LanguageSwitcher } from '.';

const renderComponent = (props = {}) => {
  const defaultProps = {};

  return <LanguageSwitcher {...defaultProps} {...props} />;
};

export default {
  title: 'Shared|LanguageSwitcher',
  decorators: [withRedux(store), withRouter()],
};

export const Default = () => renderComponent();

import React from 'react';
import { storiesOf } from '@storybook/react';

import { withRedux, withRouter } from '../../../.storybook/decorators';
import { store } from '../../../../fixtures/store';
import { LanguageSwitcher } from '.';

const renderComponent = (props = {}) => {
  const defaultProps = {
    match: {},
    history: {},
  };

  return <LanguageSwitcher {...defaultProps} {...props} />;
};

const stories = storiesOf('Shared|LanguageSwitcher', module)
  .addDecorator(withRedux(store))
  .addDecorator(withRouter());

stories.add('Default', () => renderComponent());

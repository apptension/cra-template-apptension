import React from 'react';
import { storiesOf } from '@storybook/react';

import { withRedux, withRouter } from '../../../.storybook/decorators';
import { store } from '../../../../fixtures/store';
import { LanguageSwitcher } from './languageSwitcher.component';

const defaultProps = {
  match: {},
  history: {},
};

storiesOf('LanguageSwitcher', module)
  .addDecorator(withRedux(store))
  .addDecorator(withRouter())
  .add('Default', () => <LanguageSwitcher {...defaultProps} />);

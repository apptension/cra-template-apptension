import React from 'react';
import { storiesOf } from '@storybook/react';

import { UsersComponent } from './users.component';

const defaultProps = {};

storiesOf('Users', module).add('Default', () => <UsersComponent {...defaultProps} />);

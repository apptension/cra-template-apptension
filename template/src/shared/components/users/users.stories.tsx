import React from 'react';
import { Story } from '@storybook/react';

import { withRouter } from '../../../../.storybook/decorators';
import { withRedux } from '../../utils/storybook';
import { store } from '../../../fixtures/store';
import { Users } from './users.component';

const Template: Story = (args) => <Users {...args} />;

export default {
  title: 'Shared/Users',
  component: Users,
  decorators: [withRedux(store), withRouter()],
};

export const Default = Template.bind({});
Default.args = {};

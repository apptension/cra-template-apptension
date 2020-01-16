import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';

import { Container } from './users.styles';
import messages from './users.messages';
import { User } from '../../../modules/users/users.redux';
import { Button } from '../button';

interface UsersComponentProps {
  users: User[];
  fetchUsers: () => {};
}

export const UsersComponent: FC<UsersComponentProps> = ({ users, fetchUsers }) => {
  return (
    <Container>
      <Button onClick={fetchUsers}>
        <FormattedMessage {...messages.fetchUsers} />
      </Button>

      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </Container>
  );
};

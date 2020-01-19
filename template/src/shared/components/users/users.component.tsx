import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';

import { Container } from './users.styles';
import messages from './users.messages';
import { Button } from '../button';
import { useUsers } from './useUsers.hook';

export const UsersComponent: FC = () => {
  const [users, fetchUsers] = useUsers();

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

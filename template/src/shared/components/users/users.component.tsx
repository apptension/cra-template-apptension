import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';

import { Container } from './users.styles';
import messages from './users.messages';
import { User } from '../../../modules/users/users.redux';

interface UsersComponentProps {
  users: User[];
  fetchUsers: () => {};
}

export const UsersComponent: FC<UsersComponentProps> = ({ users, fetchUsers }) => {
  return (
    <Container>
      <button type="button" onClick={fetchUsers}>
        <FormattedMessage {...messages.fetchUsers} />
      </button>

      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </Container>
  );
};

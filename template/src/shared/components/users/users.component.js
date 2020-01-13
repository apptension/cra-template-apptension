import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { Container } from './users.styles.ts';
import messages from './users.messages';

export const UsersComponent = ({ users, fetchUsers }) => {
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

UsersComponent.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchUsers: PropTypes.func.isRequired,
};

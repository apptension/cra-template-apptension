import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { UsersComponent } from './users.component';
import { usersActions, usersSelectors } from '../../../modules/users';

export const UsersContainer = ({ ...props }) => {
  const dispatch = useDispatch();

  const users = useSelector(usersSelectors.selectUsers);
  const fetchUsers = () => dispatch(usersActions.fetchUsers());

  const componentProps = {
    users,
    fetchUsers,
  };

  return <UsersComponent {...props} {...componentProps} />;
};

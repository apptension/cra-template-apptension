import { useState } from 'react';
import { useSelector } from 'react-redux';
import { usersActions, usersSelectors } from '../../../modules/users';
import { User } from '../../../modules/users/users.redux';
import { usePromiseDispatch } from '../../hooks/usePromiseDispatch';

export const useUsers = (): [{ users: User[]; isFetching: boolean }, { fetchUsers: () => Promise<void> }] => {
  const [isFetching, setFetching] = useState(false);

  const users = useSelector(usersSelectors.selectUsers);
  const fetchUsers = usePromiseDispatch(usersActions.fetchUsers);

  return [
    { users, isFetching },
    {
      fetchUsers: async () => {
        setFetching(true);
        try {
          await fetchUsers();
        } finally {
          setFetching(false);
        }
      },
    },
  ];
};

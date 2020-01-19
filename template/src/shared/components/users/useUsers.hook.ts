import { useDispatch, useSelector } from 'react-redux';
import { usersActions, usersSelectors } from '../../../modules/users';
import { User } from '../../../modules/users/users.redux';

export const useUsers = (): [User[], () => void] => {
  const dispatch = useDispatch();

  const users = useSelector(usersSelectors.selectUsers);
  const fetchUsers = () => dispatch(usersActions.fetchUsers());

  return [users, fetchUsers];
};

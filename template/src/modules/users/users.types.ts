export interface User {
  id: string;
  login: string;
  name: string;
  email: string;
}

export interface UsersState {
  users: User[];
}

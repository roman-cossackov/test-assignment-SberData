import { userData } from '../types/interfaces';

export const validateEmail = (email: string) => {
  const data: { users: userData[] } = JSON.parse(localStorage.usersData);
  const users = data.users;

  users.forEach((user) => {
    if (user.email === email) {
      return false;
    }
  });

  return true;
};

import { userData } from '../types/interfaces';

export const validateEmail = (users: userData[], email: string) => {
  users.forEach((user) => {
    if (user.email === email) {
      return false;
    }
  });

  return true;
};

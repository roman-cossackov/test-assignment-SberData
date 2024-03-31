import { userData } from '../types/interfaces';

export const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return false;
  }

  const data: { users: userData[] } = JSON.parse(localStorage.usersData);
  const users = data.users;

  for (const user of users) {
    if (user.email === email) {
      return false;
    }
  }

  return true;
};

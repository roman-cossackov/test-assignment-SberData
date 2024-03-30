import { formData, userData } from '../types/interfaces';

export const addNewUserToLocalStorage = (newData: formData) => {
  const data: { users: userData[] } = JSON.parse(localStorage.usersData);
  const users = data.users;

  let id: number;
  if (!users.length) {
    id = 1;
  } else {
    id = users[users.length - 1].id + 1;
  }

  const newUser: userData = {
    id,
    name: newData.name,
    surname: newData.surname,
    email: newData.email,
    phoneNumber: newData.phoneNumber,
    rating: [],
    ratedUsers: [],
    comments: [],
  };

  users.push(newUser);

  localStorage.usersData = JSON.stringify({ users });
};

export const saearchUsersInLocalStorage = (searchTerm: string) => {
  const data: { users: userData[] } = JSON.parse(localStorage.usersData);
  const users = data.users;
  const variants: userData[] = [];

  users.forEach((user) => {
    if (user.email.length < searchTerm.length) {
      return;
    }
    if (user.email.slice(0, searchTerm.length) === searchTerm) {
      variants.push(user);
    }
  });

  return variants;
};

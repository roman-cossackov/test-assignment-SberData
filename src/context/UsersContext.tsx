import React, { ReactNode, useState } from 'react';

import { formData, IComment, userData } from '../types/interfaces';

interface IUsersContext {
  curUser: userData | null;
  handleUserSelect: (newUser: userData) => void;
  addNewUserToLocalStorage: (newData: formData) => void;
  searchUsersInLocalStorage: (searchTerm: string) => userData[];
  editUserInLocalStorage: (id: number, newUser: userData) => void;
  rateUser: (rating: number) => void;
  commentUser: (comment: IComment) => void;
}

interface UsersContextProvider {
  children: ReactNode;
}

export const UsersContext = React.createContext({} as IUsersContext);

export const UsersContextProvider = ({ children }: UsersContextProvider) => {
  const [curUser, setCurUser] = useState<userData | null>(null);

  const handleUserSelect = (newUser: userData) => {
    setCurUser(newUser);
  };

  const addNewUserToLocalStorage = (newData: formData) => {
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
      comments: [],
    };

    users.push(newUser);

    localStorage.usersData = JSON.stringify({ users });
  };

  const searchUsersInLocalStorage = (searchTerm: string): userData[] => {
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

  const editUserInLocalStorage = (id: number, newUser: userData) => {
    const data: { users: userData[] } = JSON.parse(localStorage.usersData);
    let users = data.users;

    users = users.map((user) => {
      if (user.id === id) {
        return newUser;
      }
      return user;
    });

    localStorage.usersData = JSON.stringify({ users });
    setCurUser(newUser);
  };

  const rateUser = (rating: number) => {
    if (!curUser || !rating) return;
    const newRating = [...curUser.rating, rating];
    const newUser = { ...curUser, rating: newRating };
    editUserInLocalStorage(curUser?.id, newUser);
  };

  const commentUser = (comment: IComment) => {
    if (!curUser || !comment) return;
    const newComments = [...curUser.comments, comment];
    const newUser = { ...curUser, comments: newComments };
    console.log(newUser);
    editUserInLocalStorage(curUser?.id, newUser);
  };

  const contextValue: IUsersContext = {
    curUser,
    handleUserSelect,
    addNewUserToLocalStorage,
    searchUsersInLocalStorage,
    editUserInLocalStorage,
    rateUser,
    commentUser,
  };

  return <UsersContext.Provider value={contextValue}>{children}</UsersContext.Provider>;
};

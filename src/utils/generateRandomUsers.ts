import { faker } from '@faker-js/faker';

import { IComment, userData } from '../types/interfaces';

function generateRussianPhoneNumber(): string {
  const codes = [
    '901',
    '902',
    '903',
    '904',
    '905',
    '906',
    '908',
    '909',
    '911',
    '912',
    '913',
    '914',
    '915',
    '916',
    '917',
    '918',
    '919',
    '921',
    '922',
    '923',
    '924',
    '925',
    '926',
    '927',
    '928',
    '929',
    '931',
    '932',
    '933',
    '934',
    '935',
    '936',
    '937',
    '938',
    '939',
    '950',
    '951',
    '953',
    '960',
    '961',
    '962',
    '963',
    '964',
    '965',
    '966',
    '967',
    '968',
    '969',
    '980',
    '981',
    '982',
    '983',
    '984',
    '985',
    '986',
    '987',
    '988',
    '989',
    '991',
    '992',
    '994',
    '995',
    '996',
    '997',
    '999',
  ];
  const randomCode = codes[Math.floor(Math.random() * codes.length)];
  const randomNumber = Math.floor(1000000 + Math.random() * 9000000);
  return `+7${randomCode}${randomNumber}`;
}

export function generateRandomUsers(count: number): userData[] {
  const users: userData[] = [];
  for (let i = 0; i < count; i++) {
    const comments: IComment[] = [];
    const numComments = Math.floor(Math.random() * 5) + 1;
    for (let j = 0; j < numComments; j++) {
      const comment: IComment = {
        author: faker.internet.userName(),
        text: faker.lorem.sentence(),
        date: faker.date.past(),
      };
      comments.push(comment);
    }

    const user: userData = {
      id: i + 1,
      name: faker.person.firstName(),
      surname: faker.person.lastName(),
      email: faker.internet.email(),
      phoneNumber: generateRussianPhoneNumber(),
      rating: [
        Math.floor(Math.random() * 5) + 1,
        Math.floor(Math.random() * 5) + 1,
        Math.floor(Math.random() * 5) + 1,
      ],
      comments: comments,
    };
    users.push(user);
  }
  return users;
}

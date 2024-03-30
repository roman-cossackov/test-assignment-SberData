export interface formData {
  name: string;
  surname: string;
  email: string;
  phoneNumber: string;
}

export interface IComment {
  authorId: number;
  text: string;
  date: Date;
}

export interface IRating {
  authorId: number;
  score: 1 | 2 | 3 | 4 | 5;
}

export interface userData extends formData {
  id: number;
  rating: IRating[];
  ratedUsers: number[];
  comments: IComment[];
}

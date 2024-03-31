export interface formData {
  name: string;
  surname: string;
  email: string;
  phoneNumber: string;
}

export interface IComment {
  author: string;
  text: string;
  date: Date;
}

export interface userData extends formData {
  id: number;
  rating: number[];
  comments: IComment[];
}

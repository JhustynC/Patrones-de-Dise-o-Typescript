export interface IHobby {
  name: string;
  description: string;
}

export interface IUser {
  name: string;
  lastname: string;
  birthdate: string;
  hobbies: IHobby[];
  id: string;
}

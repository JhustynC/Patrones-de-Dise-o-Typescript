import { IUser } from "../Entities/IUser";

export interface IDataManagerRepository {
  getUserById(userId: string): IUser;
  getAllUsers: () => Promise<IUser[]>;
  addUser(user: IUser): void;
  updateUser(user: IUser): void;
  deleteUser(userId: string): void;
}

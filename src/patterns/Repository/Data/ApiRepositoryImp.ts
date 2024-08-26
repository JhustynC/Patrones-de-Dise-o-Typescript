import { IDataManagerRepository } from "../Domain/IDataManager";
import { IUser } from "../Entities/IUser";

export class ApiRepositoryImp implements IDataManagerRepository {
  getUserById(userId: string): IUser {
    throw new Error("Method not implemented.");
  }

  async getAllUsers(): Promise<IUser[]> {
    const response = await fetch("http://localhost:3000/user");
    if (!response.ok) {
      throw new Error("Error al realizar el fetch de usuarios");
    }
    const data: IUser[] = await response.json();
    return data;
  }
  addUser(user: IUser): void {
    throw new Error("Method not implemented.");
  }
  updateUser(user: IUser): void {
    throw new Error("Method not implemented.");
  }
  deleteUser(userId: string): void {
    throw new Error("Method not implemented.");
  }
}

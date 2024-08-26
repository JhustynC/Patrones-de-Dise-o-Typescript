import { ApiRepositoryImp } from "./Data/ApiRepositoryImp";
import { IDataManagerRepository } from "./Domain/IDataManager";
import { IUser } from "./Entities/IUser";

export class DataService {
  private repository: IDataManagerRepository;

  constructor(repository: IDataManagerRepository) {
    this.repository = repository;
  }

  public getUserById(userId: string): IUser {
    return this.repository.getUserById(userId);
  }

  public async getAllUsers(): Promise<IUser[]> {
    return this.repository.getAllUsers();
  }

  public updateUser(user: IUser): void {
    this.repository.updateUser(user);
  }

  public addUser(user: IUser): void {
    this.repository.addUser(user);
  }
}




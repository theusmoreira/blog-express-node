import { ICreateUserDTO } from '@/dtos';
import { User } from '@/entities';

import { IUsersRepositories } from '../IUsersRepositories';

export class UsersRepositoryInMemory implements IUsersRepositories {
  private users: User[] = [];

  async findByEmail(email: string): Promise<User | undefined> {
    const user = this.users.find(user => user.email === email);

    return user;
  }
  async create({ name, email }: ICreateUserDTO): Promise<User> {
    const user = new User();

    user.name = name;
    user.email = email;

    this.users.push(user);

    return user;
  }

  async findById(id: string): Promise<User | undefined> {
    const user = this.users.find(user => user.id === id);

    return user;
  }
}

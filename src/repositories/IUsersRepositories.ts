import { ICreateUserDTO } from '@/dtos';
import { User } from '@/entities';

export interface IUsersRepositories {
  findByEmail(email: string): Promise<User | undefined>;
  create(data: ICreateUserDTO): Promise<User>;
  findById(id: string): Promise<User | undefined>;
}

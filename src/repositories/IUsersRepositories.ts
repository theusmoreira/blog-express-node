import { ICreateUserDTO } from '@/dtos';
import { User } from '@/entities';

export interface IUsersRepositories {
  findByEmail(email: string): Promise<User | undefined>;
  create(data: ICreateUserDTO): Promise<void>;
}

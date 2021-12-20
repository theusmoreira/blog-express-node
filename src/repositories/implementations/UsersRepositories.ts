import { getRepository, Repository } from 'typeorm';

import { ICreateUserDTO } from '@/dtos';
import { User } from '@/entities';

import { IUsersRepositories } from '../IUsersRepositories';

export class UsersRepositories implements IUsersRepositories {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: { email },
    });

    return user;
  }

  async create({ name, email }: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create({ name, email });

    await this.ormRepository.save(user);

    return user;
  }

  async findById(id: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne(id);

    return user;
  }
}

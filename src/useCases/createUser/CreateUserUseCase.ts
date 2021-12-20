import { inject, injectable } from 'tsyringe';

import { IUsersRepositories } from '@/repositories/IUsersRepositories';

interface IRequest {
  name: string;
  email: string;
}

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject('UsersRepositories')
    private readonly usersRepositories: IUsersRepositories,
  ) {}

  async execute({ name, email }: IRequest) {
    const userAlreadyExists = await this.usersRepositories.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    const user = await this.usersRepositories.create({ name, email });

    return user;
  }
}

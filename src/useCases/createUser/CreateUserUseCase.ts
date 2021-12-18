import { IUsersRepositories } from '@/repositories/IUsersRepositories';

interface IRequest {
  name: string;
  email: string;
}

export class CreateUserUseCase {
  constructor(private readonly usersRepositories: IUsersRepositories) {}

  async execute({ name, email }: IRequest) {
    const userAlreadyExists = await this.usersRepositories.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    await this.usersRepositories.create({ name, email });
  }
}

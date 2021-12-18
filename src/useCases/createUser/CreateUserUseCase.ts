import { IUsersRepositories } from '@/repositories/IUsersRepositories';

interface IRequest {
  name: string;
  email: string;
}

export class CreateUserUseCase {
  constructor(private readonly usersRepositories: IUsersRepositories) {}

  async execute({ name, email }: IRequest) {
    await this.usersRepositories.create({ name, email });
  }
}

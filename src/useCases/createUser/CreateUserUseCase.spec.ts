import { UsersRepositoryInMemory } from '@/repositories/implementations/UsersRepositoryInMemory';

import { CreateUserUseCase } from './CreateUserUseCase';

let createUserUseCase: CreateUserUseCase;
let usersRepository: UsersRepositoryInMemory;

describe('CreateUserUseCase', () => {
  beforeEach(() => {
    usersRepository = new UsersRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(usersRepository);
  });

  it('should be able to create a new user', async () => {
    await createUserUseCase.execute({
      name: 'any_name',
      email: 'any_email',
    });

    const user = await usersRepository.findByEmail('any_email');

    expect(user).toHaveProperty('id');
  });
});

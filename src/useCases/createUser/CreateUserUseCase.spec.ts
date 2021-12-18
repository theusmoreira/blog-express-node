import { UsersRepositoryInMemory } from '@/repositories/implementations/UsersRepositoryInMemory';

import { CreateUserUseCase } from './CreateUserUseCase';

let sut: CreateUserUseCase;
let usersRepository: UsersRepositoryInMemory;

describe('CreateUserUseCase', () => {
  beforeEach(() => {
    usersRepository = new UsersRepositoryInMemory();
    sut = new CreateUserUseCase(usersRepository);
  });

  it('should be able to create a new user', async () => {
    await sut.execute({
      name: 'any_name',
      email: 'any_email',
    });

    const user = await usersRepository.findByEmail('any_email');

    expect(user).toHaveProperty('id');
  });

  it('should not be able to create a new user with email already exits', async () => {
    await sut.execute({
      name: 'any_name',
      email: 'any_email',
    });

    await expect(
      sut.execute({
        name: 'any_name',
        email: 'any_email',
      }),
    ).rejects.toThrowError('User already exists');
  });
});

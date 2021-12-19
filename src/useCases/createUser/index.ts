import { UsersRepositoryInMemory } from '@/repositories/implementations/UsersRepositoryInMemory';

import { CreateUserController } from './CreateUserController';
import { CreateUserUseCase } from './CreateUserUseCase';

const usersRepositories = new UsersRepositoryInMemory();
const createUserUseCase = new CreateUserUseCase(usersRepositories);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };

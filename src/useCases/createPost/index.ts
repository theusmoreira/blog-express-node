import { CategoriesRepositoriesInMemory } from '@/repositories/implementations/CategoriesRepositoriesInMemory';
import { PostsRepositoryInMemory } from '@/repositories/implementations/PostsRepositoryInMemory';
import { UsersRepositoryInMemory } from '@/repositories/implementations/UsersRepositoryInMemory';

import { CreatePostController } from './CreatePostController';
import { CreatePostUseCase } from './CreatePostUseCase';

const postsRepository = new PostsRepositoryInMemory();
const usersRepositories = new UsersRepositoryInMemory();
const categoriesRepository = new CategoriesRepositoriesInMemory();
const createPostUseCase = new CreatePostUseCase(
  postsRepository,
  usersRepositories,
  categoriesRepository,
);
const createPostController = new CreatePostController(createPostUseCase);

export { createPostController };

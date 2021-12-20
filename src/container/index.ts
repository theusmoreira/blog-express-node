import { container } from 'tsyringe';

import { ICategoriesRepository } from '@/repositories/ICategoriesRepository';
import { CategoriesRepository } from '@/repositories/implementations/CategoriesRepository';
import { PostsRepository } from '@/repositories/implementations/PostsRepositories';
import { UsersRepositories } from '@/repositories/implementations/UsersRepositories';
import { IPostsRepository } from '@/repositories/IPostsRepository';
import { IUsersRepositories } from '@/repositories/IUsersRepositories';

container.registerSingleton<IUsersRepositories>(
  'UsersRepositories',
  UsersRepositories,
);

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);

container.registerSingleton<IPostsRepository>(
  'PostsRepository',
  PostsRepository,
);

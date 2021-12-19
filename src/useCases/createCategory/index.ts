import { CategoriesRepositoriesInMemory } from '@/repositories/implementations/CategoriesRepositoriesInMemory';

import { CreateCategoryController } from './CreateCategoryController';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

const categoriesRepositories = new CategoriesRepositoriesInMemory();
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepositories);
const createCategoryController = new CreateCategoryController(
  createCategoryUseCase,
);

export { createCategoryController };

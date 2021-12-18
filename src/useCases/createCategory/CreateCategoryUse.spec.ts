import { CategoriesRepositoriesInMemory } from '@/repositories/implementations/CategoriesRepositoriesInMemory';

import { CreateCategoryUseCase } from './CreateCategoryUseCase';

let categoriesRepositories: CategoriesRepositoriesInMemory;
let stu: CreateCategoryUseCase;

describe('CreateCategoryUseCase', () => {
  beforeEach(() => {
    categoriesRepositories = new CategoriesRepositoriesInMemory();
    stu = new CreateCategoryUseCase(categoriesRepositories);
  });

  it('should be create a new category', async () => {
    await stu.execute({ name: 'any_name' });

    const category = await categoriesRepositories.findByName('any_name');

    expect(category).toHaveProperty('id');
  });
});

import { CategoriesRepositoriesInMemory } from '@/repositories/implementations/CategoriesRepositoriesInMemory';

import { CreateCategoryUseCase } from './CreateCategoryUseCase';

let categoriesRepositories: CategoriesRepositoriesInMemory;
let sut: CreateCategoryUseCase;

describe('CreateCategoryUseCase', () => {
  beforeEach(() => {
    categoriesRepositories = new CategoriesRepositoriesInMemory();
    sut = new CreateCategoryUseCase(categoriesRepositories);
  });

  it('should be able to create a new category', async () => {
    await sut.execute({ name: 'any_name' });

    const category = await categoriesRepositories.findByName('any_name');

    expect(category).toHaveProperty('id');
  });

  it('should not be able to create a new category with name exists', async () => {
    await sut.execute({ name: 'any_name' });

    await expect(sut.execute({ name: 'any_name' })).rejects.toThrowError(
      'Category already exists',
    );
  });
});

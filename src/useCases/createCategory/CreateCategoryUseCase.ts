import { ICategoriesRepository } from '@/repositories/ICategoriesRepository';

interface IRequest {
  name: string;
}
export class CreateCategoryUseCase {
  constructor(private readonly categoriesRepositories: ICategoriesRepository) {}
  async execute({ name }: IRequest) {
    const categoryAlreadyExists = await this.categoriesRepositories.findByName(
      name,
    );

    if (categoryAlreadyExists) {
      throw new Error('Category already exists');
    }

    const category = await this.categoriesRepositories.create({ name });

    return category;
  }
}

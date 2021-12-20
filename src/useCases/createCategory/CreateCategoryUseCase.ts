import { inject, injectable } from 'tsyringe';

import { AppError } from '@/errors/AppError';
import { ICategoriesRepository } from '@/repositories/ICategoriesRepository';

interface IRequest {
  name: string;
}

@injectable()
export class CreateCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private readonly categoriesRepositories: ICategoriesRepository,
  ) {}
  async execute({ name }: IRequest) {
    const categoryAlreadyExists = await this.categoriesRepositories.findByName(
      name,
    );

    if (categoryAlreadyExists) {
      throw new AppError('Category already exists');
    }

    const category = await this.categoriesRepositories.create({ name });

    return category;
  }
}

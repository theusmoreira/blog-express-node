import { ICategoriesRepository } from '@/repositories/ICategoriesRepository';

interface IRequest {
  name: string;
}
export class CreateCategoryUseCase {
  constructor(private readonly categoriesRepositories: ICategoriesRepository) {}
  async execute({ name }: IRequest) {
    await this.categoriesRepositories.create({ name });
  }
}

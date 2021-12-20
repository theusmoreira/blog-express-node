import { getRepository, Repository } from 'typeorm';

import { ICreateCategoryDTO } from '@/dtos';
import { Category } from '@/entities';

import { ICategoriesRepository } from '../ICategoriesRepository';

export class CategoriesRepository implements ICategoriesRepository {
  private ormRepository: Repository<Category>;

  constructor() {
    this.ormRepository = getRepository(Category);
  }

  async findByName(name: string): Promise<Category | undefined> {
    const category = await this.ormRepository.findOne({
      where: { name },
    });

    return category;
  }

  async list(): Promise<Category[]> {
    const categories = await this.ormRepository.find();

    return categories;
  }

  async create({ name }: ICreateCategoryDTO): Promise<Category> {
    const category = this.ormRepository.create({ name });

    await this.ormRepository.save(category);

    return category;
  }

  findByIds(ids: string[]): Promise<Category[]> {
    const categories = this.ormRepository.findByIds(ids);

    return categories;
  }
}

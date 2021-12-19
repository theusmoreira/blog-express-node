import { ICreateCategoryDTO } from '@/dtos';
import { Category } from '@/entities';

export interface ICategoriesRepository {
  findByName(name: string): Promise<Category> | undefined;
  list(): Promise<Category[]>;
  create(data: ICreateCategoryDTO): Promise<Category>;
  findByIds(ids: string[]): Promise<Category[]>;
}

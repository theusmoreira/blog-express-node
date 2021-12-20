import { ICreatePostDTO } from '@/dtos/ICreatePostDTO';
import { Post } from '@/entities';

export interface IPostsRepository {
  findAll(): Promise<Post[]>;
  findById(id: string): Promise<Post | undefined>;
  create(data: ICreatePostDTO): Promise<Post>;
  delete(id: string): Promise<void>;
}

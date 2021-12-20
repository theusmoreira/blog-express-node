import { getRepository, Repository } from 'typeorm';

import { ICreatePostDTO } from '@/dtos';
import { Post } from '@/entities';

import { IPostsRepository } from '../IPostsRepository';

export class PostsRepository implements IPostsRepository {
  private ormRepository: Repository<Post>;

  constructor() {
    this.ormRepository = getRepository(Post);
  }

  async findById(id: string): Promise<Post | undefined> {
    const post = await this.ormRepository.findOne(id);

    return post;
  }

  async findAll(): Promise<Post[]> {
    const posts = await this.ormRepository.find();

    return posts;
  }

  async create({
    id,
    title,
    description,
    authorId,
    categories,
  }: ICreatePostDTO): Promise<Post> {
    const post = this.ormRepository.create({
      id,
      title,
      description,
      authorId,
      categories,
    });

    await this.ormRepository.save(post);

    return post;
  }
}

import { ICreatePostDTO } from '@/dtos';
import { Post } from '@/entities';

import { IPostsRepository } from '../IPostsRepository';

export class PostsRepositoryInMemory implements IPostsRepository {
  private posts: Post[] = [];

  async findAll(): Promise<Post[]> {
    return this.posts;
  }

  async findById(id: string): Promise<Post | undefined> {
    return this.posts.find(post => post.id === id);
  }

  async create({
    title,
    authorId,
    description,
    categories,
  }: ICreatePostDTO): Promise<Post> {
    const post = new Post();

    Object.assign(post, {
      title,
      description,
      authorId,
      categories,
    });

    this.posts.push(post);

    return post;
  }
}

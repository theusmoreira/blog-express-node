import { ICreatePostDTO } from '@/dtos';
import { Post } from '@/entities';

import { IPostsRepository } from '../../IPostsRepository';

export class PostsRepositoryInMemory implements IPostsRepository {
  private posts: Post[] = [];

  async findAll(): Promise<Post[]> {
    return this.posts;
  }

  async findById(id: string): Promise<Post | undefined> {
    return this.posts.find(post => post.id === id);
  }

  async create({
    id,
    title,
    authorId,
    description,
    categories,
  }: ICreatePostDTO): Promise<Post> {
    const post = new Post();

    Object.assign(post, {
      id: id || post.id,
      title,
      description,
      authorId,
      categories,
    });

    this.posts.push(post);

    return post;
  }

  async delete(id: string): Promise<void> {
    const postIndex = this.posts.findIndex(post => post.id === id);

    if (postIndex === -1) {
      throw new Error('Post not found');
    }

    this.posts.splice(postIndex, 1);
  }
}

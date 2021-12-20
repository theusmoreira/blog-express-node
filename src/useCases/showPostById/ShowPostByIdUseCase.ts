import { inject, injectable } from 'tsyringe';

import { Post } from '@/entities';
import { AppError } from '@/errors/AppError';
import { IPostsRepository } from '@/repositories/IPostsRepository';

@injectable()
export class ShowPostByIdUseCase {
  constructor(
    @inject('PostsRepository')
    private readonly postRepository: IPostsRepository,
  ) {}

  public async execute(id: string): Promise<Post> {
    const post = await this.postRepository.findById(id);

    if (!post) {
      throw new AppError('Post not found.', 404);
    }

    return post;
  }
}

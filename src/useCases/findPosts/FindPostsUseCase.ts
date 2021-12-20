import { inject, injectable } from 'tsyringe';

import { Post } from '@/entities';
import { IPostsRepository } from '@/repositories/IPostsRepository';

@injectable()
export class FindPostsUseCase {
  constructor(
    @inject('PostsRepository')
    private readonly postRepository: IPostsRepository,
  ) {}

  public async execute(): Promise<Post[]> {
    const posts = await this.postRepository.findAll();

    return posts;
  }
}

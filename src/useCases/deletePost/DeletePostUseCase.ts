import { inject, injectable } from 'tsyringe';

import { AppError } from '@/errors/AppError';
import { IPostsRepository } from '@/repositories/IPostsRepository';

@injectable()
export class DeletePostUseCase {
  constructor(
    @inject('PostsRepository')
    private readonly postsRepository: IPostsRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    const postAlreadyExits = await this.postsRepository.findById(id);

    if (!postAlreadyExits) {
      throw new AppError('Post not exists');
    }

    await this.postsRepository.delete(id);
  }
}

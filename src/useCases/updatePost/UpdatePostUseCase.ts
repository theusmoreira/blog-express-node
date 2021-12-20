import { inject, injectable } from 'tsyringe';

import { Post } from '@/entities';
import { AppError } from '@/errors/AppError';
import { IPostsRepository } from '@/repositories/IPostsRepository';

interface IRequest {
  id: string;
  title: string;
  description: string;
}

@injectable()
export class UpdatePostUseCase {
  constructor(
    @inject('PostsRepository')
    private readonly postsRepository: IPostsRepository,
  ) {}

  public async execute({ id, title, description }: IRequest): Promise<Post> {
    const postAlreadyExits = await this.postsRepository.findById(id);

    if (!postAlreadyExits) {
      throw new AppError('Post not exists');
    }

    const post = await this.postsRepository.create({
      id: postAlreadyExits.id,
      title,
      description,
      authorId: postAlreadyExits.authorId,
    });

    return post;
  }
}

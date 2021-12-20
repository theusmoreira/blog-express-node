import { inject, injectable } from 'tsyringe';

import { IPostsRepository } from '@/repositories/IPostsRepository';
import { IUsersRepositories } from '@/repositories/IUsersRepositories';

interface IRequest {
  title: string;
  description: string;
  authorId: string;
}

@injectable()
export class CreatePostUseCase {
  constructor(
    @inject('PostsRepository')
    private postsRepository: IPostsRepository,
    @inject('UsersRepositories')
    private usersRepositories: IUsersRepositories,
  ) {}

  async execute({ title, description, authorId }: IRequest) {
    const author = await this.usersRepositories.findById(authorId);

    if (!author) {
      throw new Error('User not found');
    }

    const post = await this.postsRepository.create({
      title,
      description,
      authorId,
    });

    return post;
  }
}

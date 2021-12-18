import { IPostsRepository } from '@/repositories/IPostsRepository';

interface IRequest {
  title: string;
  description: string;
  authorId: string;
  categories: string[];
}

export class CreatePostUseCase {
  constructor(private readonly postsRepository: IPostsRepository) {}
  async execute({ title, description, authorId, categories }: IRequest) {
    const post = await this.postsRepository.create({
      title,
      description,
      authorId,
      categories,
    });

    return post;
  }
}

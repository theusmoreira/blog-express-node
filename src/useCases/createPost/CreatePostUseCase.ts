import { ICategoriesRepository } from '@/repositories/ICategoriesRepository';
import { IPostsRepository } from '@/repositories/IPostsRepository';
import { IUsersRepositories } from '@/repositories/IUsersRepositories';

interface IRequest {
  title: string;
  description: string;
  authorId: string;
  categories: string[];
}

export class CreatePostUseCase {
  constructor(
    private readonly postsRepository: IPostsRepository,
    private readonly usersRepositories: IUsersRepositories,
    private readonly categoriesRepository: ICategoriesRepository,
  ) {}
  async execute({ title, description, authorId, categories }: IRequest) {
    const author = await this.usersRepositories.findById(authorId);

    if (!author) {
      throw new Error('User not found');
    }

    const categoriesExists = await this.categoriesRepository.findByIds(
      categories,
    );

    if (categoriesExists.length !== categories.length) {
      throw new Error('Categories not found');
    }

    const post = await this.postsRepository.create({
      title,
      description,
      authorId,
    });

    return post;
  }
}

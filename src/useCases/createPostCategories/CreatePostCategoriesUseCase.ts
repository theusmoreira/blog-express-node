import { Post } from '@/entities';
import { ICategoriesRepository } from '@/repositories/ICategoriesRepository';
import { IPostsRepository } from '@/repositories/IPostsRepository';

interface IRequest {
  postId: string;
  categoryIds: string[];
}

export class CreatePostCategoriesUseCase {
  constructor(
    private readonly postsRepository: IPostsRepository,
    private readonly categoriesRepository: ICategoriesRepository,
  ) {}
  async execute({ postId, categoryIds }: IRequest): Promise<Post> {
    const postExists = await this.postsRepository.findById(postId);

    if (!postExists) {
      throw new Error('Post not found');
    }

    const categories = await this.categoriesRepository.findByIds(categoryIds);

    if (categories.length !== categoryIds.length) {
      throw new Error('Category not found');
    }

    postExists.categories = categories;

    const post = await this.postsRepository.create(postExists);

    return post;
  }
}

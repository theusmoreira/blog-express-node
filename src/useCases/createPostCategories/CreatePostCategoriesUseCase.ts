import { inject, injectable } from 'tsyringe';

import { Post } from '@/entities';
import { AppError } from '@/errors/AppError';
import { ICategoriesRepository } from '@/repositories/ICategoriesRepository';
import { IPostsRepository } from '@/repositories/IPostsRepository';

interface IRequest {
  postId: string;
  categoryIds: string[];
}

@injectable()
export class CreatePostCategoriesUseCase {
  constructor(
    @inject('PostsRepository')
    private readonly postsRepository: IPostsRepository,
    @inject('CategoriesRepository')
    private readonly categoriesRepository: ICategoriesRepository,
  ) {}
  async execute({ postId, categoryIds }: IRequest): Promise<Post> {
    const postExists = await this.postsRepository.findById(postId);

    if (!postExists) {
      throw new AppError('Post not found');
    }

    const categories = await this.categoriesRepository.findByIds(categoryIds);

    if (categories.length !== categoryIds.length) {
      throw new AppError('Category not found');
    }

    postExists.categories = categories;

    const post = await this.postsRepository.create(postExists);

    return post;
  }
}

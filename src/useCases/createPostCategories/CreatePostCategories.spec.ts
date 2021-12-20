import { AppError } from '@/errors/AppError';
import { CategoriesRepositoriesInMemory } from '@/repositories/implementations/in-memory/CategoriesRepositoriesInMemory';
import { PostsRepositoryInMemory } from '@/repositories/implementations/in-memory/PostsRepositoryInMemory';

import { CreatePostCategoriesUseCase } from './CreatePostCategoriesUseCase';

let sut: CreatePostCategoriesUseCase;
let postsRepository: PostsRepositoryInMemory;
let categoriesRepository: CategoriesRepositoriesInMemory;

describe('CreatePostCategoriesUseCase', () => {
  beforeEach(() => {
    postsRepository = new PostsRepositoryInMemory();
    categoriesRepository = new CategoriesRepositoriesInMemory();
    sut = new CreatePostCategoriesUseCase(
      postsRepository,
      categoriesRepository,
    );
  });

  it('should be able to add a new category to a post', async () => {
    const post = await postsRepository.create({
      title: 'any_title',
      description: 'any_description',
      authorId: 'any_author_id',
    });

    const category = await categoriesRepository.create({
      name: 'any_name',
    });

    const postCategories = await sut.execute({
      postId: post.id,
      categoryIds: [category.id],
    });

    expect(postCategories.categories).toEqual([category]);
  });

  it('should not be able to add a new category to inexistent post', async () => {
    await expect(
      sut.execute({
        postId: 'postId',
        categoryIds: ['categoryId'],
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to add a inexistent category to post', async () => {
    const post = await postsRepository.create({
      title: 'any_title',
      description: 'any_description',
      authorId: 'any_author_id',
    });

    await expect(
      sut.execute({
        postId: post.id,
        categoryIds: ['categoryId'],
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});

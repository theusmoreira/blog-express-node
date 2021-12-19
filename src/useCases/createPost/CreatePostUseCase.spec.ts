import { PostsRepositoryInMemory } from '@/repositories/implementations/PostsRepositoryInMemory';
import { UsersRepositoryInMemory } from '@/repositories/implementations/UsersRepositoryInMemory';

import { CreatePostUseCase } from './CreatePostUseCase';

let sut: CreatePostUseCase;
let postsRepository: PostsRepositoryInMemory;
let usersRepositories: UsersRepositoryInMemory;

describe('CreatePostUseCase', () => {
  beforeEach(() => {
    postsRepository = new PostsRepositoryInMemory();
    usersRepositories = new UsersRepositoryInMemory();
    sut = new CreatePostUseCase(postsRepository, usersRepositories);
  });

  it('should be able to create a new post', async () => {
    const author = await usersRepositories.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
    });

    const response = await sut.execute({
      title: 'any_title',
      description: 'any_description',
      authorId: author.id,
      categories: ['any_category'],
    });

    const post = await postsRepository.findById(response.id);

    expect(post).toBeTruthy();
    expect(post).toEqual(response);
  });

  it('should not be able to create a new post if user not exits', async () => {
    await expect(
      sut.execute({
        title: 'any_title',
        description: 'any_description',
        authorId: 'any_author_id',
        categories: ['any_category'],
      }),
    ).rejects.toThrowError('User not found');
  });
});

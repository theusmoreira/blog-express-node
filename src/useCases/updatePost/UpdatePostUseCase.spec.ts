import { AppError } from '@/errors/AppError';
import { PostsRepositoryInMemory } from '@/repositories/implementations/in-memory/PostsRepositoryInMemory';

import { UpdatePostUseCase } from './UpdatePostUseCase';

let sut: UpdatePostUseCase;
let postsRepository: PostsRepositoryInMemory;

describe('UpdatePostUseCase', () => {
  beforeEach(() => {
    postsRepository = new PostsRepositoryInMemory();
    sut = new UpdatePostUseCase(postsRepository);
  });

  it('should be able to update a post', async () => {
    const post = await postsRepository.create({
      title: 'title',
      description: 'description',
      authorId: '1',
    });

    const updatedPost = await sut.execute({
      id: post.id,
      title: 'new title',
      description: 'new description',
    });

    expect(updatedPost.id).toEqual(post.id);
    expect(updatedPost.title).toEqual('new title');
    expect(updatedPost.description).toEqual('new description');
  });

  it('should not be able to update a post with a non-existing id', async () => {
    await expect(
      sut.execute({
        id: 'non-existing-id',
        title: 'new title',
        description: 'new description',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});

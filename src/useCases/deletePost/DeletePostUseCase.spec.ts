import { AppError } from '@/errors/AppError';
import { PostsRepositoryInMemory } from '@/repositories/implementations/in-memory/PostsRepositoryInMemory';

import { DeletePostUseCase } from './DeletePostUseCase';

let sut: DeletePostUseCase;
let postsRepository: PostsRepositoryInMemory;

describe('UpdatePostUseCase', () => {
  beforeEach(() => {
    postsRepository = new PostsRepositoryInMemory();
    sut = new DeletePostUseCase(postsRepository);
  });

  it('should be able to delete a post', async () => {
    const post = await postsRepository.create({
      title: 'title',
      description: 'description',
      authorId: '1',
    });

    await sut.execute(post.id);

    const postAlreadyExits = await postsRepository.findById(post.id);

    expect(postAlreadyExits).toBeUndefined();
  });

  it('should not be able to delete a post with a non-existing id', async () => {
    await expect(sut.execute('non-existing-id')).rejects.toBeInstanceOf(
      AppError,
    );
  });
});

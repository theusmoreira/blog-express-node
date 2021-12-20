import { PostsRepositoryInMemory } from '@/repositories/implementations/in-memory/PostsRepositoryInMemory';

import { FindPostsUseCase } from './FindPostsUseCase';

let sut: FindPostsUseCase;
let postRepository: PostsRepositoryInMemory;

describe('FindPostsUseCase', () => {
  beforeEach(() => {
    postRepository = new PostsRepositoryInMemory();
    sut = new FindPostsUseCase(postRepository);
  });

  it('should be able to find all posts', async () => {
    await postRepository.create({
      title: 'any_title',
      description: 'any_description',
      authorId: 'any_author_id',
    });

    const posts = await sut.execute();

    expect(posts).toBeTruthy();
    expect(posts).toHaveLength(1);
  });
});

import { PostsRepositoryInMemory } from '@/repositories/implementations/PostsRepositoryInMemory';

import { CreatePostUseCase } from './CreatePostUseCase';

let sut: CreatePostUseCase;
let postsRepository: PostsRepositoryInMemory;

describe('CreatePostUseCase', () => {
  beforeEach(() => {
    postsRepository = new PostsRepositoryInMemory();
    sut = new CreatePostUseCase(postsRepository);
  });

  it('should be able to create a new post', async () => {
    const response = await sut.execute({
      title: 'any_title',
      description: 'any_description',
      authorId: 'any_author_id',
      categories: ['any_category'],
    });

    const post = await postsRepository.findById(response.id);

    expect(post).toBeTruthy();
    expect(post).toEqual(response);
  });
});

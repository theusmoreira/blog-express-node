import { AppError } from '@/errors/AppError';
import { PostsRepositoryInMemory } from '@/repositories/implementations/in-memory/PostsRepositoryInMemory';

import { ShowPostByIdUseCase } from './ShowPostByIdUseCase';

let stu: ShowPostByIdUseCase;
let postRepository: PostsRepositoryInMemory;

describe('ShowPostByIdUseCase', () => {
  beforeEach(() => {
    postRepository = new PostsRepositoryInMemory();
    stu = new ShowPostByIdUseCase(postRepository);
  });

  it('should be able to find a post by id', async () => {
    const postMock = await postRepository.create({
      title: 'any_title',
      description: 'any_description',
      authorId: 'any_author_id',
    });

    const post = await stu.execute(postMock.id);

    expect(post).toBeTruthy();
    expect(post).toHaveProperty('id');
    expect(post).toHaveProperty('title');
    expect(post).toHaveProperty('description');
  });

  it('should not be able show info of post id invalid', async () => {
    await expect(stu.execute('any_id')).rejects.toBeInstanceOf(AppError);
  });
});

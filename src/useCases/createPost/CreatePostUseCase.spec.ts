import { CreatePostUseCase } from './CreatePostUseCase';

let createPostUseCase: CreatePostUseCase;
describe('CreatePostUseCase', () => {
  beforeEach(() => {
    createPostUseCase = new CreatePostUseCase();
  });

  it('should be able to create a new post', async () => {
    await createPostUseCase.execute({
      title: 'any_title',
      description: 'any_description',
    });
  });
});

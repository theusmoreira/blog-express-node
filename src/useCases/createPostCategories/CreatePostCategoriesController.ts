import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreatePostCategoriesUseCase } from './CreatePostCategoriesUseCase';

export class CreatePostCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { postId, categoryIds } = request.body;
    const createPostCategoriesUseCase = container.resolve(
      CreatePostCategoriesUseCase,
    );

    const post = await createPostCategoriesUseCase.execute({
      postId,
      categoryIds,
    });

    return response.status(201).json(post);
  }
}

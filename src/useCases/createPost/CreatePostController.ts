import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreatePostUseCase } from './CreatePostUseCase';

export class CreatePostController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title, authorId, description } = request.body;

    const createPostUseCase = container.resolve(CreatePostUseCase);
    const post = await createPostUseCase.execute({
      title,
      authorId,
      description,
    });
    return response.status(201).json(post);
  }
}

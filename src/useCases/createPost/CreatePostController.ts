import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreatePostUseCase } from './CreatePostUseCase';

export class CreatePostController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title, authorId, categories, description } = request.body;

    try {
      const createPostUseCase = container.resolve(CreatePostUseCase);
      const post = await createPostUseCase.execute({
        title,
        authorId,
        description,
      });
      return response.status(201).json(post);
    } catch (error) {
      console.log(error);
      return response.status(400).json(error);
    }
  }
}

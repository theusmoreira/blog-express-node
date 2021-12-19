import { Request, Response } from 'express';

import { CreatePostUseCase } from './CreatePostUseCase';

export class CreatePostController {
  constructor(private createPostUseCase: CreatePostUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { title, authorId, categories, description } = request.body;

    try {
      const post = await this.createPostUseCase.execute({
        title,
        authorId,
        categories,
        description,
      });
      return response.status(201).json(post);
    } catch (error) {
      console.log(error);
      return response.status(400).json(error);
    }
  }
}

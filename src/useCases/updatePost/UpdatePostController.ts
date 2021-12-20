import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdatePostUseCase } from './UpdatePostUseCase';

export class UpdatePostController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title, description } = request.body;
    const { id } = request.params;

    const updatePostUseCase = container.resolve(UpdatePostUseCase);

    const post = await updatePostUseCase.execute({
      id,
      title,
      description,
    });

    return response.json(post);
  }
}

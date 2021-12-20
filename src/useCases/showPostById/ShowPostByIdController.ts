import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ShowPostByIdUseCase } from './ShowPostByIdUseCase';

export class ShowPostByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const showPostByIdUseCase = container.resolve(ShowPostByIdUseCase);

    const post = await showPostByIdUseCase.execute(request.params.id);

    delete post.authorId;

    return response.json(post);
  }
}

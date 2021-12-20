import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindPostsUseCase } from './FindPostsUseCase';

export class FindPostsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findPostsUseCase = container.resolve(FindPostsUseCase);

    const posts = await findPostsUseCase.execute();

    return response.json(posts);
  }
}

import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateCategoryUseCase } from './CreateCategoryUseCase';

export class CreateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    try {
      const createCategoryUseCase = container.resolve(CreateCategoryUseCase);
      const category = await createCategoryUseCase.execute({
        name,
      });
      return response.status(201).json(category);
    } catch (error) {
      return response.status(400).json(error);
    }
  }
}

import { Router } from 'express';

import { CreateCategoryController } from '@/useCases/createCategory/CreateCategoryController';

const categoriesRoutes = Router();
const createCategoryController = new CreateCategoryController();

categoriesRoutes.post('/', (request, response) =>
  createCategoryController.handle(request, response),
);

export { categoriesRoutes };

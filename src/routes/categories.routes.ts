import { Router } from 'express';

import { createCategoryController } from '@/useCases/createCategory';

const categoriesRoutes = Router();

categoriesRoutes.post('/', (request, response) =>
  createCategoryController.handle(request, response),
);

export { categoriesRoutes };

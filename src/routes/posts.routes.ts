import { Router } from 'express';

import { CreatePostController } from '@/useCases/createPost/CreatePostController';
import { CreatePostCategoriesController } from '@/useCases/createPostCategories/CreatePostCategoriesController';

const postsRoutes = Router();
const createPostController = new CreatePostController();
const createPostCategoriesController = new CreatePostCategoriesController();

postsRoutes.post('/', (request, response) =>
  createPostController.handle(request, response),
);

postsRoutes.post('/categories', (request, response) =>
  createPostCategoriesController.handle(request, response),
);

export { postsRoutes };

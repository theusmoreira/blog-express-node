import { Router } from 'express';

import { CreatePostController } from '@/useCases/createPost/CreatePostController';

const postsRoutes = Router();
const createPostController = new CreatePostController();

postsRoutes.post('/', (request, response) =>
  createPostController.handle(request, response),
);

export { postsRoutes };

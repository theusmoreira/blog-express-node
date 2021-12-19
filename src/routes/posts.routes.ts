import { Router } from 'express';

import { createPostController } from '@/useCases/createPost';

const postsRoutes = Router();

postsRoutes.post('/', (request, response) =>
  createPostController.handle(request, response),
);

export { postsRoutes };

import { Router } from 'express';

import { CreatePostController } from '@/useCases/createPost/CreatePostController';
import { CreatePostCategoriesController } from '@/useCases/createPostCategories/CreatePostCategoriesController';
import { FindPostsController } from '@/useCases/findPosts/FindPostsController';
import { ShowPostByIdController } from '@/useCases/showPostById/ShowPostByIdController';

const postsRoutes = Router();
const createPostController = new CreatePostController();
const createPostCategoriesController = new CreatePostCategoriesController();
const findPostsController = new FindPostsController();
const showPostByIdController = new ShowPostByIdController();

postsRoutes.post('/', (request, response) =>
  createPostController.handle(request, response),
);

postsRoutes.post('/categories', (request, response) =>
  createPostCategoriesController.handle(request, response),
);

postsRoutes.get('/', (request, response) =>
  findPostsController.handle(request, response),
);

postsRoutes.get('/:id', (request, response) =>
  showPostByIdController.handle(request, response),
);

export { postsRoutes };

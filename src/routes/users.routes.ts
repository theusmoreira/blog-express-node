import { Router } from 'express';

import { createUserController } from '../useCases/createUser';

const usersRoutes = Router();

usersRoutes.post('/', (request, response) =>
  createUserController.handle(request, response),
);

export { usersRoutes };

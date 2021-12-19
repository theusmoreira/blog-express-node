import { Router } from 'express';

import { categoriesRoutes } from './categories.routes';
import { usersRoutes } from './users.routes';

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/categories', categoriesRoutes);

export { routes };

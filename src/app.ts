import 'express-async-errors';
import 'reflect-metadata';
import './container';
import express from 'express';

import connectDatabase from './database';
import { handleError } from './middleware/handleError';
import { routes } from './routes';

connectDatabase();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', routes);
app.use(handleError);

export { app };

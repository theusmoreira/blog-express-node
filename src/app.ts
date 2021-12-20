import 'reflect-metadata';
import express from 'express';

import connectDatabase from './database';
import { routes } from './routes';

connectDatabase();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', routes);

export { app };

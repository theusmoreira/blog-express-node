import { config } from 'dotenv';

config({ path: `.env.${process.env.NODE_ENV || 'dev'}` });

export const PRODUCTION_ENV = process.env.NODE_ENV === 'prod';
export const DEV_ENV = process.env.NODE_ENV === 'dev';
export const TESTING_ENV = process.env.NODE_ENV === 'test';

export const {
  PORT,
  TYPEORM_PORT,
  TYPEORM_HOST,
  TYPEORM_TYPE,
  TYPEORM_USERNAME,
  TYPEORM_PASSWORD,
  TYPEORM_DATABASE,
  TYPEORM_SYNCHRONIZE,
  TYPEORM_LOGGING,
  TYPEORM_MIGRATIONS_RUN,
} = process.env;

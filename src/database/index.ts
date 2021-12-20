import { Connection, createConnection, getConnectionOptions } from 'typeorm';

export default async (): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  const connection = await createConnection({
    ...defaultOptions,
  });

  return connection;
};

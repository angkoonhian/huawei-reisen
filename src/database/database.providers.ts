import { user } from 'src/user/user.entity';
import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'mysql',
      port: 3306,
      host: '122.9.100.94',
        username: 'root',
      name: 'reisen',
        password: 'Fatfatbee01@261114',
        database: 'reisen',
      entities: [user],
      synchronize: true,
    }),
  },
];
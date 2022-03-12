import { Connection } from 'typeorm';
import { user } from './user.entity';

export const userProviders = [
    {
        provide: 'USER_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(user),
        inject: ['DATABASE_CONNECTION'],
    }
]
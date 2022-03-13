import { Connection } from 'typeorm';
import { day } from './day.entity';

export const dayProviders = [
    {
        provide: 'DAY_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(day),
        inject: ['DATABASE_CONNECTION'],
    }
]
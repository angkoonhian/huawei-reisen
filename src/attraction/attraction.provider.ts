import { Connection } from 'typeorm';
import { attraction } from './attraction.entity';

export const attractionProviders = [
    {
        provide: 'ATTRACTION_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(attraction),
        inject: ['DATABASE_CONNECTION'],
    }
]
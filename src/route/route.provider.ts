import { Connection } from 'typeorm';
import { route } from './route.entity';

export const routeProviders = [
    {
        provide: 'ROUTE_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(route),
        inject: ['DATABASE_CONNECTION'],
    }
]

import { Connection } from 'typeorm';
import { itinerary } from './itinerary.entity';

export const itineraryProviders = [
    {
        provide: 'ITENARY_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(itinerary),
        inject: ['DATABASE_CONNECTION'],
    }
]
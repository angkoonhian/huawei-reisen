import { Connection } from 'typeorm';
import { tourGuideAvailability } from './tourGuideAvailability.entity';

export const tourGuideAvailabilityProviders = [
    {
        provide: 'TOURGUIDEAVAILABILITY_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(tourGuideAvailability),
        inject: ['DATABASE_CONNECTION'],
    }
]